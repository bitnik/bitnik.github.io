 module.exports = {
  name: 'Kenan Erdoğan',
  title: 'Software-Ingenieur',
  baseUrl: 'https://bitnik.xyz/cv_de.html',
  photo: 'KenanErdogan.jpg',
  facts: {
    'Residence': '<a class="link-soft-purple" href="https://goo.gl/maps/eUu9rBUPwRS9A9Wb6"><i class="fas fa-home fa-custom"></i>Köln, DE</a>',
    'Email': '<a class="link-soft-purple" href="mailto:kenanerdogan@gmail.com"><i class="fas fa-envelope fa-custom"></i>kenanerdogan@gmail.com</a>',
    'Phone': '<a class="link-soft-purple"  href="tel:+4917647102212"><i class="fas fa-phone fa-custom"></i>+49 176 471 02212</a>',
    'GitHub': '<a class="link-soft-purple" href="https://github.com/bitnik"><i class="fab fa-github fa-custom"></i>bitnik</a>',
    'LinkedIn': '<a class="link-soft-purple" href="https://www.linkedin.com/in/kenanerdogan"><i class="fab fa-linkedin fa-custom"></i>kenanerdogan</a>',
    'Homepage': `<a class="link-soft-purple" href="https://www.bitnik.xyz">
                  <span class="print"><i class="fas fa-globe fa-custom"></i>https://bitnik.xyz</span>
                  <span class="screen"><i class="fas fa-globe fa-custom"></i>bitnik.xyz</span>
                </a>`,
  },
  experiences: [
    {
      title: '<a href="https://www.gesis.org/en/home">GESIS – Leibniz-Institut für Sozialwissenschaften</a>, Köln, Deutschland',
      date: '10.2017 - 12.2020',
      position: 'Lead-Software-Entwickler',
      badges: ['python', 'JupyterHub', 'BinderHub', 'Node.js', 'npm', 'Webpack', 'repo2docker', 'nginx', 'Docker', 'Kubernetes', 'Helm', 'NFS Provisioner', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Elastic Stack'],
      content: `
**Projekt:** [GESIS Notebooks](https://notebooks.gesis.org/about/)

**Verantwortlichkeiten:**

- Planung des kompletten Softwareentwicklungsprozesses bis zum Go-live der Forschungsumgebung
- Einrichtung und Wartung der Server und des Kubernetes-Clusters
- Bereitstellung und Wartung [eines Persistent BinderHub](https://notebooks.gesis.org/) und [eines public BinderHub](https://notebooks.gesis.org/binder/) 
(GitHub-Repo: [gesiscss/orc](https://github.com/gesiscss/orc))
- Automatisierung aller Aspekte rund um Image-Build, Chart- und Konfiguration-Updatets und Deployments
- Erste Implementierung des [GESIS-Login-Systems](https://login.gesis.org/)
- Zusammenarbeit mit internationalen Open-Source-Projekten (Jupyter-Projekten)
- Beitrag zum Jupytercon 2020 Talk ["A Persistent BinderHub: Democratizing Access to Computational Resources in the Social Sciences"](https://www.youtube.com/watch?v=dwidVhPtQT4)
- Halten des Workshops ["Introduction to Python"](https://hf-graduiertenschule.uni-koeln.de/index.php?id=32102&L=1)
- Publikation des Artikels ["iLCM - A Virtual Research Infrastructure for Large-Scale Qualitative Data."](https://arxiv.org/abs/1805.11404)

Referenz: [Dr. Arnim Bleier](https://www.gesis.org/institut/mitarbeiterverzeichnis/person/arnim.bleier)
`
    },
    {
      title: '<a href="https://www.gesis.org/en/home">GESIS – Leibniz-Institut für Sozialwissenschaften</a>, Köln, Deutschland',
      date: '07.2016 - 09.2017',
      position: 'Lead-Software-Entwickler',
      badges: ['python', 'Django', 'Gunicorn', 'nginx', 'REST API', 'OpenAPI Specification', 'Swagger', 'PostgreSQL', 'Celery', 'RabbitMQ', 'WikiPedia'],
      content: `
**Projekt:** [WikiWho](https://github.com/wikiwho/WikiWho)

**Verantwortlichkeiten:**

- Geschwindigkeits- und Genauigkeitsverbesserung des bereits existierenden Kern-Algorithmus “WikiWho”
- Realisierung [der Website, der Rest-API, sowie eines web-basierten API-Interfaces](https://www.wikiwho.net/)
- Realisierung eines Listeners für Wikipedia-Events mit angebundener Task-Queue
- Update und Verbesserung des [WhoColor-Servers und der User Tools](https://github.com/wikiwho/WhoColor)
- Datenanalysen von Autorenschaft, Persistenz, Konflikt und Editor-Interaktionen
- Generierung eines [Datensatzes](https://doi.org/10.5281/zenodo.834557) für das gesamte Englische Wikipedia:
["TokTrack: A Complete Token Provenance and Change Tracking Dataset for the English Wikipedia"](https://arxiv.org/abs/1703.08244)

Referenz: [Dr. Fabian Flöck](https://www.gesis.org/institut/mitarbeiterverzeichnis/person/fabian.floeck)
`
    },
    {
      title: '<a href="https://www.mir.de/">MIR MEDIA</a>, Köln, Deutschland',
      date: '07.2015 - 06.2016',
      position: 'Softwareentwickler',
      badges: ['python', 'Django'],
      content: 'Backend-Entwicklung von Websites für verschiedene Kunden so wie z.B. Elbphilarmonie and Lucerne Festival'
    },
    // comment below to have PDF version 2 pages 
    {
      title: 'Induux GmbH, Stuttgart, Deutschland',
      date: '11.2014 - 03.2015',
      position: 'Softwareentwickler',
      badges: ['python', 'Django'],
      content: 'Backend-Entwicklung'
    },
    {
      title: 'Elektrobit Automotive GmbH, Böblingen, Deutschland',
      date: '11.2013 - 05.2014',
      position: 'Werkstudent',
      badges: ['python', 'Django', 'Selenium', 'REST API'],
      content: ''
    },
    {
      title: 'Elektrobit Automotive GmbH, Böblingen, Deutschland',
      date: '04.2013 - 09.2013',
      position: 'Praktikant',
      badges: ['python', 'software versioning', 'Unit testing', 'GUI development', 'CAN Bus', 'CANoe'],
      content: ''
    },
    {
      title: 'PTV AG, Stuttgart, Deutschland',
      date: '11.2012 - 03.2013',
      position: 'Werkstudent',
      badges: ['C++', 'Visualization', 'The Visualization ToolKit'],
      content: ''
    },
  ],
  projects: [
    {
      title: 'Binder Launches',
      badges: ['React', 'Material-UI', 'Express.js', 'Node.js', 'npm', 'python', 'TimescaleDB', 'Docker', 'Helm chart', 'GitHub Actions'],
      content: `
[Binder launches repo](https://github.com/bitnik/binder_launches) contains

- a script to parse binder launch events and save into TimescaleDB
- a frontend to visualize launches using React with Material-UI which is backed by Express.js
`
    },
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
      title: 'Universität Stuttgart, Deutschland',
      date: '10.2011 - 05.2014',
      content: `
M.Sc. in Informatik

##### Masterarbeit am Institut für Automatisierungstechnik und Softwaresysteme
Thema: Realisierung von "Incremental Learning" für automatisierte identifizierung am Beispiel von Produkterkennung

- Incremental Learning, Machine Learning
- Classification with Support Vector Machines (SVM)
- Learn++ and Learn++.NC based on SVM
- Python, scikit-learn ML library
`
    },
    {
      title: 'Technische Universität Istanbul, Türkei',
      date: '09.2006 - 06.2011',
      content: `
B.Sc. in Elektrotechnik (Abschluss in Ehrenliste)  

##### Bachelorarbeit am Designlabor für eingebettete Systeme
Thema: Entwurf und Implementierung eines Servers auf einem Grafikprozessor für sichere RFID-Systeme

- Parallel programming with CUDA
- RFID protocol servers

##### Extrakurrikulare Aktivitäten

- 09.2007 - 06.2011 : Mitglied der ITU Control and Automation Student Society
- 09.2008 - 06.2009 : Vorstandsmitglied der ITU Roboter Olympiade
- 09.2008 - 01.2009 : Mitglied im ITU Bergverein
`
    },
    {
      title: 'ESIGELEC, Rouen, Frankreich',
      date: '09.2009 - 02.2010',
      content: `
Austauschsemester
`
    },
    // {
    //   title: 'Adnan Menderes Anatolisches Gymnasium, Istanbul, Turkey',
    //   date: '09.2002 - 06.2006',
    //   content: ''
    // }
  ],
  skills: [
    // ['Python', '8/10'],
    ['Full Stack Development', ''],
    ['DevOps Engineering', ''],
    //['JupyterHub', '++++'],
    //['BinderHub', '++++'],
    //['git', '++++'],
    //['Flask', '++++'],
    ['Containerization', '++++'],
    ['Container Orchestration', '+++'],
    ['Site Reliability Engineering', ''],
    ['CI/CD Engineering', ''],
    //['Helm', '+++'],
    ['Linux Ecosystem', '++++'],
    ['Relational Databases', '++++'],
    //['JavaScript', '++++'],
    //['Node.js', '++++'],
    ['Web Servers', '+++'],
    // ['Django', '++++'],
    //['Gunicorn', '++++'],
    //['GitLab CI/CD', '++++'],
    //['Elastic Stack', '']
    //['Memcached', '++++'],
    //['Celery', '++++'],
    //['RabbitMQ', '++++'],
    //['vim', '++++'],
  ],
  languages: [
    ['Türkisch', 'Muttersprache'],
    ['Englisch:', 'fließend'],
    ['Deutsch:', 'B2'],
  ],
  interests: [
    'Wandern',
    'Schwimmen',
    'Joggen',
    'Pilates',
    'Lesen',
    'Meditation',
    'Nähen',
    'Holzarbeit',
    // 'Fahrradfahren'
  ]
};
