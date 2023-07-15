const handlebars = require("handlebars");
const fs = require("fs-extra");
const markdownHelper = require("./utils/helpers/markdown");
const templateData = require("./metadata/metadata");
const Puppeteer = require("puppeteer");
const getSlug = require("speakingurl");
const dayjs = require("dayjs");

const srcDir = __dirname;
const outputDir = __dirname + "/../dist";

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + "/assets", outputDir);

// Build HTML templates
handlebars.registerHelper("markdown", markdownHelper);
const lastUpdated = dayjs().format("D.M.YYYY");
const pdfFileName = `${getSlug(templateData.name)}-${getSlug(
  templateData.title,
)}.pdf`;
const templates = {
  "index.html": { ...templateData },
  "404.html": { ...templateData },
  "cv.html": {
    ...templateData,
    updated: lastUpdated,
    pdfFileName: pdfFileName,
  },
};
for (const [fileName, extTemplateData] of Object.entries(templates)) {
  const source = fs.readFileSync(srcDir + "/templates/" + fileName, "utf-8");
  const template = handlebars.compile(source);
  const html = template(extTemplateData);
  fs.writeFileSync(outputDir + "/" + fileName, html);
}

// Build PDFs
buildPdf = async function (inputFile, outputFile) {
  // const browser = await Puppeteer.launch();
  // add path of chromium (which chromium)
  // TODO find a solution without --no-sandbox
  const browser = await Puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: outputFile,
    format: "A4",
    border: 0,
    margin: {
      top: "2cm",
      right: "2cm",
      bottom: "2cm",
      left: "2.54cm",
    },
  });
  await browser.close();
};

//console.log(`${outputDir}/${pdfFileName}`);
// Build PDF
buildPdf(`${outputDir}/cv.html`, `${outputDir}/${pdfFileName}`);
