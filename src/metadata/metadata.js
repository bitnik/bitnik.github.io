module.exports = {
  name: "Kenan Erdoğan",
  title: "DevOps Engineer",
  baseUrl: "https://bitnik.xyz/cv.html",
  photo: "KenanErdogan.jpg",
  picture: "john-emms-a-donkey.jpg",
  info: {
    GitHub:
      '<a class="link-purple" href="https://github.com/bitnik"><i class="fab fa-github fa-2x"></i></a>',
    Email:
      '<a class="link-purple" href="mailto:kenanerdogan@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>',
    LinkedIn:
      '<a class="link-purple" href="https://www.linkedin.com/in/kenanerdogan"><i class="fab fa-linkedin fa-2x"></i></a>',
    // 'Xing': '<a class="link-purple" href="https://www.xing.com/profile/Kenan_Erdogan12"><i class="fab fa-xing-square fa-2x"></i></a>',
    //'CV': '<!--a class="link-purple" href="cv.html"><i class="far fa-file fa-2x" title="CV"></i></a-->',
    //'CV DE': '<!--a class="link-purple" href="cv.html"><i class="far fa-file fa-2x" title="CV (in German)"></i></a-->',
  },
  facts: {
    Residence:
      '<a class="link-soft-purple" href="https://goo.gl/maps/eUu9rBUPwRS9A9Wb6"><i class="fas fa-home fa-custom"></i>Cologne, DE</a>',
    Email:
      '<a class="link-soft-purple" href="mailto:kenanerdogan@gmail.com"><i class="fas fa-envelope fa-custom"></i>kenanerdogan@gmail.com</a>',
    Phone:
      '<a class="link-soft-purple"  href="tel:+4917647102212"><i class="fas fa-phone fa-custom"></i>+49 176 471 02212</a>',
    GitHub:
      '<a class="link-soft-purple" href="https://github.com/bitnik"><i class="fab fa-github fa-custom"></i>bitnik</a>',
    LinkedIn:
      '<a class="link-soft-purple" href="https://www.linkedin.com/in/kenanerdogan"><i class="fab fa-linkedin fa-custom"></i>kenanerdogan</a>',
    // Xing: '<a class="link-soft-purple" href="https://www.xing.com/profile/Kenan_Erdogan12"><i class="fab fa-xing-square fa-custom"></i>Kenan_Erdogan12</a>',
    // Homepage: `<a class="link-soft-purple" href="https://www.bitnik.xyz">
    //               <span class="print"><i class="fas fa-globe fa-custom"></i>https://bitnik.xyz</span>
    //               <span class="screen"><i class="fas fa-globe fa-custom"></i>bitnik.xyz</span>
    //             </a>`,
  },
  skills: [
    // "DevOps Engineering",
    "Containerization",
    "Container Orchestration",
    "Container Security",
    "CI/CD Engineering",
    // 'Site Reliability Engr.',
    "Infrastructure as Code",
    "Software Development",
    // "Full Stack Development",
    "Linux Ecosystem",
    // "IaC",
    "Relational Databases",
    // "Web Servers",
  ],
  summary: `
DevOps Engineer with over 9 years of experience in software development, streamlining CI/CD pipelines, automation,
containerization, Kubernetes cluster management, and implementing Infrastructure as Code (IaC) solutions.
Proven ability to work effectively within secure, air-gapped on-premise environments as well as public cloud platforms.
  `,
  experiences: [
    {
      title: '<a href="https://utimaco.com/de">Utimaco GmbH</a>',
      date: "11.2023 - 06.2024",
      position: "DevOps Engineer (Freelancer)",
      badges: [
        // "Infrastructure-as-a-code",
        "Microsoft Azure",
        "Kubernetes",
        "Terraform",
        "Helm",
        "GitLab CI",
        "Argo CD",
        "Kyverno",
        "Sensu",
        "Postgresql",
        "cert-manager",
        "mTLS",
        "Keycloak",
        "HashiCorp Vault",
      ],
      content: `
* Designed, developed, and maintained Helm Charts for application deployment and management.
* Established and configured the monitoring using Sensu.
* Implemented and maintained CI/CD pipelines, ensuring efficient and reliable deployments.
* Enhanced and maintained the IaC implementation, improving infrastructure reliability and scalability.
* Implemented policy enforcement and network policies, ensuring robust security.
`,
    },
    {
      title:
        '<a href="https://personal-business-machine.com/">PBM Personal Business Machine AG</a>',
      date: "01.2023 - current",
      position: "DevOps Engineer (Freelancer)",
      badges: [
        "gridscale",
        "Kubernetes",
        "Ansible",
        "Terraform",
        "Helm",
        "GitLab CI",
        "Prometheus Stack",
        "Loki Stack",
        "Grafana",
        // "Grafana Alerting",
        "MariaDB",
        "Harbor",
        "Keycloak",
        "Renovate",
      ],
      content: `
* Developed and maintained IaC solutions, ensuring consistent and automated environment provisioning.
* Oversaw the maintenance and upgrade of Kubernetes clusters.
* Designed, developed, and maintained Helm Charts for application deployment and management.
* Sustained and enhanced CI/CD pipelines, optimizing workflow automation and reducing deployment times.
* Established and maintained monitoring, alerting, and logging systems, improving operational visibility and responsiveness.
* Automated dependency management, reducing manual intervention and enhancing system reliability.
`,
    },
    {
      title:
        '<a href="https://www.next-kraftwerke.de/">Next Kraftwerke GmbH</a>, Cologne, Germany',
      date: "05.2021 - 12.2023",
      position: "Kubernetes Engineer",
      badges: [
        "Air-gapped",
        "On-premises private cloud",
        "Kubernetes",
        "kubespray",
        "RKE",
        "rancher",
        "MetalLB",
        "Terraform",
        "Ansible",
        "GitLab CI",
        "Argo CD",
        "Nexus",
        "HashiCorp Vault",
        "Prometheus Stack",
        "Loki Stack",
        "Grafana",
        // "Prometheus Alerting",
        "Kyverno",
        "Helm",
        "Renovate",
        "python",
        "bash",
        "Kanban",
        // "Infrastructure-as-a-code",
      ],
      content: `
**Project:** Implementing secure and reliable multi-tenant kubernetes clusters on-premises in highly regulated and secure environments.

**Responsibilities:**

* Architected and implemented IaC solutions, ensuring consistent and automated environment provisioning.
* Developed and maintained CI pipelines with GitLab and Jenkins, alongside CD workflows using Argo CD.
* Established and maintained monitoring, alerting, and logging systems.
* Implemented policy enforcement and network policies to meet regulatory and security requirements.
* Developed automated testing frameworks using Ansible (Molecule) and Bash (Bats) to improve code quality and reliability.
* Integrated Renovate for automated dependency updates, streamlining software maintenance and reducing manual intervention.
* Wrote and maintained Python and Bash scripts for automation tasks, improving efficiency and reducing operational overhead.
* Organized learning sessions to foster a culture of continuous improvement and knowledge sharing.
* Collaborating with developers to gain a deeper understanding of their requirements and objectives.

`,
    },
    {
      title:
        '<a href="https://www.gesis.org/en/home">GESIS – Leibniz Institute for the Social Sciences</a>, Cologne, Germany',
      date: "10.2017 - 12.2020",
      position: "Software Engineer",
      badges: [
        "python",
        "On-premises private cloud",
        // "JupyterHub",
        // "BinderHub",
        "Kubernetes",
        "Docker",
        "Helm",
        // "NFS Provisioner",
        "GitLab CI/CD",
        "Prometheus",
        "Grafana",
        "Elastic Stack",
        "Node.js",
        "npm",
        "Webpack",
        // "repo2docker",
        "nginx",
      ],
      content: `
**Project:** [GESIS Notebooks](https://notebooks.gesis.org/about/) is a free and hosted service for running Jupyter Notebooks requiring no installation,
which enables users to get started quickly with their research ideas, prototyping their data science projects,
or learning to program languages such as R, Python or Julia.

**Responsibilities:**

* Planned and oversaw the entire software development process for [GESIS Notebooks](https://notebooks.gesis.org/about.html).
* Set up and maintained on-premises linux servers and Kubernetes clusters, ensuring robust infrastructure.
* Deployed, maintained and operated a [Persistent BinderHub](https://github.com/gesiscss/persistent_binderhub) and a public BinderHub ([deployment repo](https://github.com/gesiscss/orc)).
* Automation of all aspects including image building, chart and configuration updates and deployments, improving operational efficiency.
* Collaborated with and contributed to open-source projects within the Jupyter ecosystem.
* Delivered a [talk](https://www.youtube.com/watch?v=dwidVhPtQT4) at JupyterCon 2020 and tutored in ["Introduction to Python"](https://hf-graduiertenschule.uni-koeln.de/index.php?id=32102&L=1) workshop.
* Published ["iLCM - A Virtual Research Infrastructure for Large-Scale Qualitative Data"](https://arxiv.org/abs/1805.11404) and ["Online Reproducible Computational Analysis for the Social Sciences"](https://zenodo.org/records/7362188#.Y4Phki8w2Ld)
* Led the initial implementation of the "GESIS Login" system using Keycloak.

`,
    },
    {
      title:
        '<a href="https://www.gesis.org/en/home">GESIS – Leibniz Institute for the Social Sciences</a>, Cologne, Germany',
      date: "07.2016 - 09.2017",
      position: "Software Engineer",
      badges: [
        "python",
        "Django",
        "Gunicorn",
        "nginx",
        "REST API",
        // "OpenAPI Specification",
        "Swagger",
        "PostgreSQL",
        "Celery",
        "RabbitMQ",
        "WikiPedia",
        "Keycloak",
      ],
      content: `
**Project:** [WikiWho](https://github.com/wikiwho/WikiWho) is an algorithm to parse
the complete set of all historical revisions of a revisioned Wiki document
in order to find out who wrote and/or removed and/or reinserted which exact text at token (~word) level at what revision.

**Responsibilities:**

* Enhanced the speed and accuracy of the core [WikiWho](https://github.com/wikiwho/WikiWho) algorithm, improving overall performance and reliability.
* Developed and implemented a website, REST API, and web-based API interface ([WikiWho API](https://github.com/gesiscss/wikiwho_api_public)).
* Parsed Wikipedia archives across multiple languages to generate foundational data for APIs.
* Implemented an event listener for Wikipedia events, connected to a task queue to process real-time updates.
* Updated, improved and maintained the [WhoColor](https://github.com/wikiwho/WhoColor) server and user tools, enhancing functionality and user experience.
* Conducted data analyses on authorship, persistence, conflict, and editor interactions, providing valuable insights into Wikipedia's collaborative dynamics,
generated a [data set](https://doi.org/10.5281/zenodo.834557), and
published ["TokTrack: A Complete Token Provenance and Change Tracking Dataset for the English Wikipedia"](https://arxiv.org/abs/1703.08244).

`,
    },
    {
      title: '<a href="https://www.mir.de/">MIR MEDIA</a>, Cologne, Germany',
      date: "07.2015 - 06.2016",
      position: "Software Developer",
      // badges: [],
      badges: ["python", "Django"],
      content: "Backend development with Python and Django",
    },
    // comment below to have PDF version 2 pages
    // {
    //   title: "Induux GmbH, Stuttgart, Germany",
    //   date: "11.2014 - 03.2015",
    //   position: "Software Developer",
    //   badges: [],
    //   // badges: ["python", "Django"],
    //   content: "Backend development with Python and Django",
    // },
    {
      title: "Elektrobit Automotive GmbH, Böblingen, Germany",
      date: "11.2013 - 05.2014",
      position: "Student Employee",
      badges: ["python", "Django", "Selenium", "REST API"],
      content: "",
    },
    {
      title: "Elektrobit Automotive GmbH, Böblingen, Germany",
      date: "04.2013 - 09.2013",
      position: "Intern",
      badges: [
        "python",
        "software versioning",
        "Unit testing",
        "GUI development",
        // "CAN Bus",
        // "CANoe",
      ],
      content: "",
    },
    {
      title: "PTV AG, Stuttgart, Germany",
      date: "11.2012 - 03.2013",
      position: "Student Employee",
      badges: ["C++", "Visualization", "The Visualization ToolKit"],
      content: "",
    },
  ],
  projects: [
    //     {
    //       title: "Binder Launches",
    //       badges: [
    //         "React",
    //         "Material-UI",
    //         "Express.js",
    //         "Node.js",
    //         "npm",
    //         "python",
    //         "TimescaleDB",
    //         "Docker",
    //         "Helm chart",
    //         "GitHub Actions",
    //       ],
    //       content: `
    // [Binder launches repo](https://github.com/bitnik/binder_launches) contains
    // - a script to parse binder launch events and save into TimescaleDB
    // - a frontend to visualize launches using React with Material-UI which is backed by Express.js
    // `,
    //     },
    //     {
    //       title: 'Curriculum Vitae',
    //       badges: ['Node.js', 'npm', 'GitHub Actions', 'GitHub Pages'],
    //       content: `
    // [https://github.com/bitnik/bitnik.xyz](https://github.com/bitnik/bitnik.xyz)
    // `
    //     },
  ],
  education: [
    {
      title: "University of Stuttgart, Germany",
      date: "10.2011 - 05.2014",
      content: `
M.Sc. in Information Technology

Master Thesis:
Developed an incremental machine learning model for automated product recognition.
Support Vector Machines (SVM) is used for classification and implemented with Python and scikit-learn ML library.

`,
    },
    {
      title: "Istanbul Technical University, Turkey",
      date: "09.2006 - 06.2011",
      content: `
B.Sc. in Electronics Engineering

Bachelor Thesis:
Designed and implementated a server on a graphic processor for secure RFID systems using parallel programming with CUDA.

Exchange Semester in ESIGELEC, Rouen, France.

`,
    },
    //     {
    //       title: "ESIGELEC, Rouen, France",
    //       date: "09.2009 - 02.2010",
    //       content: `
    // Exchange Semester
    // `,
    //     },
    // {
    //   title: 'Adnan Menderes Anatolian High School, Istanbul, Turkey',
    //   date: '09.2002 - 06.2006',
    //   content: ''
    // }
  ],
  languages: [
    ["Turkish", "native"],
    ["English", "fluent"],
    ["German", "B2"],
    ["Persian", "Beginner"],
  ],
  interests: [
    "Hiking",
    "Swimming",
    "Jogging",
    "Pilates",
    "Reading & Learning",
    "Meditation",
    // 'Sewing',
    "Wood work",
    "Bicycling",
  ],
};
