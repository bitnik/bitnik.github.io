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
    // 'Xing': '<a class="link-soft-purple" href="https://www.xing.com/profile/Kenan_Erdogan12"><i class="fab fa-xing-square fa-custom"></i>Kenan_Erdogan12</a>',
    Homepage: `<a class="link-soft-purple" href="https://www.bitnik.xyz">
                  <span class="print"><i class="fas fa-globe fa-custom"></i>https://bitnik.xyz</span>
                  <span class="screen"><i class="fas fa-globe fa-custom"></i>bitnik.xyz</span>
                </a>`,
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
  experiences: [
    {
      title: '<a href="https://utimaco.com/de">Utimaco GmbH</a>',
      date: "11.2024 - 06.2024",
      position: "DevOps Engineer (Freelancer)",
      badges: [
        // "Infrastructure-as-a-code",
        "Microsoft Azure",
        "Kubernetes",
        "Ansible",
        "Terraform",
        "Helm Charts",
        "GitLab CI",
        "Argo CD",
        "Kyverno",
        "Sensu",
      ],
      content: `
* Creating and maintaining Helm Charts
* Setting up monitoring with Sensu
* Setting up and maintaining CI pipelines within Gitlab
* Maintain and improve the terraform code which is used to setup the platform
* Policy enforcement with Kyverno
* Implementing K8s network policies
`,
    },
    {
      title:
        '<a href="https://personal-business-machine.com/">PBM Personal Business Machine AG</a>',
      date: "01.2023 - current",
      position: "DevOps Engineer (Freelancer)",
      badges: [
        // "Infrastructure-as-a-code",
        // "Container security",
        "Kubernetes",
        "Ansible",
        "Terraform",
        "Helm Charts",
        "GitLab CI",
        // "Argo CD",
        "Prometheus Stack",
        // "Loki Stack",
        // "Grafana Alerts",
        // "Kyverno",
        "Renovate",
        // "Sensu",
      ],
      content: `
* Automatisation of creating Kubernetes clusters
* Maintenance and upgrade of Kubernetes clusters
* Containerization with Helm charts and maintenance
* Creating and maintaining Helm Charts library
* Dependency automation with Renovate
`,
    },
    {
      title:
        '<a href="https://www.next-kraftwerke.de/">Next Kraftwerke GmbH</a>, Cologne, Germany',
      date: "05.2021 - 12.2023",
      position: "Kubernetes Engineer",
      badges: [
        // "Kubernetes",
        "kubespray",
        "rancher",
        "MetalLB",
        "RKE",
        "Terraform",
        "Ansible",
        "GitLab CI",
        "Argo CD",
        "Nexus",
        // "Prometheus & Loki Stack",
        // "Kyverno",
        // "Renovate",
        // "Kanban",
        // "Infrastructure-as-a-code",
      ],
      content: `
**Project:** Setting up secure and reliable multi-tenant kubernetes clusters on-premises in highly regulated and secure environments.

**Responsibilities:**

* Development of the platform as IaC using terraform and ansible
* Setting up and maintaining CI pipelines within Gitlab and Jenkins
* Setting up and maintaining CD with Argo CD
* Setting up monitoring, alerting and logging with Prometheus and Loki stacks
* Policy enforcement with Kyverno
* Implementing K8s network policies for each application
* Implementing tests
* Setting up Renovate for automated dependency updates
* Collaborating with developers to better understand their needs
* Preparing learning sessions
* Hosting daily meetings regularly
`,
    },
    {
      title:
        '<a href="https://www.gesis.org/en/home">GESIS – Leibniz Institute for the Social Sciences</a>, Cologne, Germany',
      date: "10.2017 - 12.2020",
      position: "Software Engineer",
      badges: [
        "python",
        // "JupyterHub",
        // "BinderHub",
        "Docker",
        "Kubernetes",
        "Helm",
        // "NFS Provisioner",
        "GitLab CI/CD",
        "Prometheus",
        "Grafana",
        "Elastic Stack",
        "Node.js",
        "npm",
        // "Webpack",
        // "repo2docker",
        "nginx",
      ],
      content: `
**Project:** [GESIS Notebooks](https://notebooks.gesis.org/about/) is a free and hosted service for running Jupyter Notebooks requiring no installation,
which enables users to get started quickly with their research ideas, prototyping their data science projects,
or learning to program languages such as R, Python or Julia.

**Responsibilities:**

* Planning of the complete software development process
* Setup and maintenance of the servers and the kubernetes cluster on-premises
* Deployment and maintenance of [a Persistent BinderHub](https://github.com/gesiscss/persistent_binderhub) and [a public BinderHub](https://github.com/jupyterhub/binderhub)
(deployment repo: [gesiscss/orc](https://github.com/gesiscss/orc))
* Automation of all aspects including image building, chart and configuration updates and deployments
* Initial implementation of the "GESIS Login" system (based on Keycloak)
* Cooperation with open source projects (Jupyter projects) and contributing
* Jupytercon 2020 Talk: ["A Persistent BinderHub: Democratizing Access to Computational Resources in the Social Sciences"](https://www.youtube.com/watch?v=dwidVhPtQT4)
* Tutoring in ["Introduction to Python"](https://hf-graduiertenschule.uni-koeln.de/index.php?id=32102&L=1) workshop
* Publication of ["iLCM - A Virtual Research Infrastructure for Large-Scale Qualitative Data."](https://arxiv.org/abs/1805.11404)

Reference: [Dr. Arnim Bleier](https://www.gesis.org/en/institute/staff/person/arnim.bleier)
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
      ],
      content: `
**Project:** [WikiWho](https://github.com/wikiwho/WikiWho) is an algorithm to parse
the complete set of all historical revisions of a revisioned Wiki document
in order to find out who wrote and/or removed and/or reinserted which exact text at token (~word) level at what revision.
This means that for every token, its individual add/removal/reintroduction history becomes available.

**Responsibilities:**

* Speed and accuracy improvement of the existing core WikiWho algorithm
* Realisation of [the website, the REST API and a web-based API interface](https://github.com/gesiscss/wikiwho_api_public)
* Parsing Wikipedia archives for various languages and applying WikiWho on them to generate base data for APIs
* Realisation of an event listener for Wikipedia events, connected to a task queue
* Update and improvement of [the WhoColor server and user tools](https://github.com/wikiwho/WhoColor)
* Data analyses of authorship, persistence, conflict and editor interactions
* Generation of a [data set](https://doi.org/10.5281/zenodo.834557) for the entire English Wikipedia:
["TokTrack: A Complete Token Provenance and Change Tracking Dataset for the English Wikipedia"](https://arxiv.org/abs/1703.08244)

Reference: [Dr. Fabian Flöck](https://www.linkedin.com/in/fabian-fl%C3%B6ck-7689658/)
`,
    },
    {
      title: '<a href="https://www.mir.de/">MIR MEDIA</a>, Cologne, Germany',
      date: "07.2015 - 06.2016",
      position: "Software Developer",
      badges: ["python", "Django"],
      content:
        "Backend development of websites for customers such as Elbphilarmonie and Lucerne Festival",
    },
    // comment below to have PDF version 2 pages
    {
      title: "Induux GmbH, Stuttgart, Germany",
      date: "11.2014 - 03.2015",
      position: "Software Developer",
      badges: ["python", "Django"],
      content: "Backend development",
    },
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
        "CAN Bus",
        "CANoe",
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

##### Master Thesis at Industrial Automation Systems Institute
Topic: Realization of incremental learning for automated identification using the example of products recognition

- Incremental Learning, Machine Learning
- Classification with Support Vector Machines (SVM)
- Learn++ and Learn++.NC based on SVM
- Python, scikit-learn ML library
`,
    },
    {
      title: "Istanbul Technical University, Turkey",
      date: "09.2006 - 06.2011",
      content: `
B.Sc. in Electronics Engineering (graduation in honor list)

##### Bachelor Thesis at Embedded System Design Laboratory
Topic: Design and implementation of a server on a graphic processor for secure RFID systems

- Parallel programming with CUDA
- RFID protocol servers

##### Extracurricular Activities
- 09.2007 - 06.2011 : Member of the ITU Control and Automation Student Society
- 09.2008 - 06.2009 : Committee Member of the ITU Robotic Olympics
- 09.2008 - 01.2009 : Member of the ITU Mountaineering Club
`,
    },
    {
      title: "ESIGELEC, Rouen, France",
      date: "09.2009 - 02.2010",
      content: `
Exchange Semester
`,
    },
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
    "Reading",
    "Meditation",
    // 'Sewing',
    "Wood work",
    "Bicycling",
  ],
};
