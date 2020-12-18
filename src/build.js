const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const templateDataDe = require('./metadata/metadata_de');
const Puppeteer = require('puppeteer');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Build HTML
// index.html
handlebars.registerHelper('markdown', markdownHelper);
const sourceIndex = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const templateIndex = handlebars.compile(sourceIndex);
const htmlIndex = templateIndex({
  ...templateData
});
fs.writeFileSync(outputDir + '/index.html', htmlIndex);
const lastUpdated = dayjs().format('D.M.YYYY');
// cv.html
const sourceCv = fs.readFileSync(srcDir + '/templates/cv.html', 'utf-8');
const templateCv = handlebars.compile(sourceCv);
const pdfFileName = `${getSlug(templateData.name)}-${getSlug(templateData.title)}.pdf`;
const htmlCv = templateCv({
  ...templateData,
  pdfFileName: pdfFileName,
  updated: lastUpdated,
});
fs.writeFileSync(outputDir + '/cv.html', htmlCv);
// cv_de.html
const sourceCvDe = fs.readFileSync(srcDir + '/templates/cv_de.html', 'utf-8');
const templateCvDe = handlebars.compile(sourceCvDe);
const pdfFileNameDe = `${getSlug(templateDataDe.name)}-${getSlug(templateDataDe.title)}-de.pdf`;
const htmlCvDe = templateCvDe({
  ...templateDataDe,
  pdfFileName: pdfFileNameDe,
  updated: lastUpdated,
});
fs.writeFileSync(outputDir + '/cv_de.html', htmlCvDe);

buildPdf = async function (inputFile, outputFile) {
  // const browser = await Puppeteer.launch();
  // add path of chromium (which chromium)
  // TODO find a solution without --no-sandbox
  const browser = await Puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '2cm',
      right: '2cm',
      bottom: '2cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};

//console.log(`${outputDir}/${pdfFileName}`);
// Build PDF
buildPdf(`${outputDir}/cv.html`, `${outputDir}/${pdfFileName}`);
buildPdf(`${outputDir}/cv_de.html`, `${outputDir}/${pdfFileNameDe}`);
