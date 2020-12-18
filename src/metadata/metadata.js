 module.exports = {
  name: 'Kenan Erdoğan',
  title: 'Software Engineer',
  baseUrl: 'http://bitnik.xyz/cv.html',
  photo: 'KenanErdogan.jpg',
  // http://www.artnet.com/artists/john-emms/a-donkey-In3L5WFlQCW2dG5NJXSrHw2
  picture: 'john-emms-a-donkey.jpg',
  info: {
    'GitHub': '<a class="link-purple" href="https://github.com/bitnik"><i class="fab fa-github fa-2x"></i></a>',
    'Email': '<a class="link-purple" href="mailto:kenanerdogan@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>',
    'LinkedIn': '<a class="link-purple" href="https://www.linkedin.com/in/kenanerdogan"><i class="fab fa-linkedin fa-2x"></i></a>',
    'Xing': '<a class="link-purple" href="https://www.xing.com/profile/Kenan_Erdogan12"><i class="fab fa-xing-square fa-2x"></i></a>',
    //'CV': '<!--a class="link-purple" href="cv.html"><i class="far fa-file fa-2x" title="CV"></i></a-->',
    //'CV DE': '<!--a class="link-purple" href="cv.html"><i class="far fa-file fa-2x" title="CV (in German)"></i></a-->',
    },
  facts: {
    'Residence': '<a class="link-soft-purple" href="https://goo.gl/maps/eUu9rBUPwRS9A9Wb6"><i class="fas fa-home fa-custom"></i>Cologne, DE</a>',
    'Email': '<a class="link-soft-purple" href="mailto:kenanerdogan@gmail.com"><i class="fas fa-envelope fa-custom"></i>kenanerdogan@gmail.com</a>',
    'Phone': '<a class="link-soft-purple"  href="tel:+4917647102212"><i class="fas fa-phone fa-custom"></i>+49 176 471 02212</a>',
    'Homepage': `<a class="link-soft-purple" href="http://bitnik.xyz">
                  <span class="print"><i class="fas fa-globe fa-custom"></i>http://bitnik.xyz</span>
                  <span class="screen"><i class="fas fa-globe fa-custom"></i>bitnik.xyz</span>
                </a>`,
    'GitHub': '<a class="link-soft-purple" href="https://github.com/bitnik"><i class="fab fa-github fa-custom"></i>bitnik</a>',
    'LinkedIn': '<a class="link-soft-purple" href="https://www.linkedin.com/in/kenanerdogan"><i class="fab fa-linkedin fa-custom"></i>kenanerdogan</a>',
    'Xing': '<a class="link-soft-purple" href="https://www.xing.com/profile/Kenan_Erdogan12"><i class="fab fa-xing-square fa-custom"></i>Kenan_Erdogan12</a>',
    'Birth': '<span class="color-soft-purple"><i class="fas fa-birthday-cake fa-custom"></i>24.05.1988 in Istanbul</span>',
  },
  experiences: [
    {
      title: '<a href="https://www.gesis.org/en/home">GESIS – Leibniz Institute for the Social Sciences</a>, Cologne, Germany',
      date: '10.2017 - 12.2020',
      badges: ['python', 'JupyterHub', 'BinderHub', 'repo2docker', 'Docker', 'Kubernetes', 'Helm', 'NFS Provisioner', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Elastic Stack'],
      content: `
Lead Software Developer

[GESIS Notebooks](https://notebooks.gesis.org/about/) is a free and hosted service for running Jupyter Notebooks requiring no installation, 
which enable you to get started quickly with your research ideas, prototyping your data science projects, 
or learning to program languages such as R, Python or Julia .

**Responsibilities:**

- Planning of the complete software development process
- Setup and maintenance of the servers and the kubernetes cluster
- Deployment and maintenance of [a Persistent BinderHub](https://notebooks.gesis.org/), [a public BinderHub](https://notebooks.gesis.org/binder/) 
(GitHub repo: [gesiscss/orc](https://github.com/gesiscss/orc))
- Automation of all aspects including image building, chart and configuration updates, and deployments
- Initial implementation of the [GESIS Login](https://login.gesis.org/) system
- Cooperation with open source projects (Jupyter projects) and contributing
- Jupytercon 2020 Talk: ["A Persistent BinderHub: Democratizing Access to Computational Resources in the Social Sciences"](https://www.youtube.com/watch?v=dwidVhPtQT4)
- Workshop: ["Introduction to Python"](https://hf-graduiertenschule.uni-koeln.de/index.php?id=32102&L=1)
- Publication: ["iLCM - A Virtual Research Infrastructure for Large-Scale Qualitative Data."](https://arxiv.org/abs/1805.11404)

Reference: [Dr. Arnim Bleier](https://www.gesis.org/en/institute/staff/person/arnim.bleier)
`
    },
    {
      title: '<a href="https://www.gesis.org/en/home">GESIS – Leibniz Institute for the Social Sciences</a>, Cologne, Germany',
      date: '07.2016 - 09.2017',
      badges: ['python', 'Django', 'Gunicorn', 'REST API', 'Swagger', 'Celery', 'RabbitMQ', 'WikiPedia'],
      content: `
Lead Software Developer

[WikiWho](https://github.com/wikiwho/WikiWho) is an algorithm to parse 
the complete set of all historical revisions of a revisioned Wiki document 
in order to find out who wrote and/or removed and/or reinserted which exact text at token (~word) level at what revision. 
This means that for every token, its individual add/removal/reintroduction history becomes available. 

**Responsibilities:**

- Speed and accuracy improvement of the existing core WikiWho algorithm
- Realisation of [the website, the REST API, and a web-based API interface](https://www.wikiwho.net/)
- Realisation of a listener for Wikipedia events, connected to a task queue
- Update and improvement of [the WhoColor server and user tools](https://github.com/wikiwho/WhoColor)
- Data analysis: authorship, persistence, conflict, editor interactions
- Generation of a [data set](https://doi.org/10.5281/zenodo.834557) for the entire English Wikipedia: 
["TokTrack: A Complete Token Provenance and Change Tracking Dataset for the English Wikipedia"](https://arxiv.org/abs/1703.08244)

Reference: [Dr. Fabian Flöck](https://www.gesis.org/en/institute/staff/person/fabian.floeck)
`
    },
    {
      title: '<a href="https://www.mir.de/">MIR MEDIA</a>, Cologne, Germany',
      date: '07.2015 - 06.2016',
      badges: ['Backend Development', 'python', 'Django'],
      content: `
Software Developer
      `
    },
    {
      title: 'Induux GmbH, Stuttgart, Germany',
      date: '11.2014 - 03.2015',
      badges: ['Backend Development', 'python', 'Django'],
      content: `
Software Developer
`
    },
    {
      title: 'Elektrobit Automotive GmbH, Böblingen, Germany',
      date: '11.2013 - 05.2014',
      badges: ['python', 'Django', 'Selenium', 'REST API'],
      content: `
Student Employee
`
    },
    {
      title: 'Elektrobit Automotive GmbH, Böblingen, Germany',
      date: '04.2013 - 09.2013',
      badges: ['python', 'software versioning', 'Unit testing', 'GUI development', 'CAN Bus', 'CANoe'],
      content: `
Intern
`
    },
    {
      title: 'PTV AG, Stuttgart, Germany',
      date: '11.2012 - 03.2013',
      badges: ['C++', 'Visualization', 'The Visualization ToolKit'],
      content: `
Student Employee
`
    },
  ],
  education: [
    {
      title: 'University of Stuttgart, Germany',
      date: '10.2011 - 05.2014',
      content: `
M.Sc. in Information Technology  

##### Master Thesis, Industrial Automation Systems Institute, 12.2013 - 05.2014
Realization of incremental learning for automated identification using the example of products recognition

- Incremental Learning, Machine Learning
- Classification, Support Vector Machines (SVM)
- Learn++.NC based on SVM
- Learn++ based on SVM
- Python, scikit-learn ML library
- Eclipse, LabVIEW
`
    },
    {
      title: 'Istanbul Technical University, Turkey',
      date: '09.2006 - 06.2011',
      content: `
B.Sc. in Electronics Engineering (graduation in honor list)  

##### Bachelor Thesis, Embedded System Design Laboratory, 02.2011 - 05.2011
Design and implementation of a server on graphic processor for secure RFID systems

- Parallel programming
- CUDA, GPU programming
- RFID protocol servers

##### Activities

- 09.2007 - 06.2011 : Member of the ITU Control and Automation Student Society
- 09.2008 - 06.2009 : Administrative Committee Member of the ITU Robotic Olympics
- 09.2008 - 01.2009 : Member of the ITU Mountaineering Club
`
    },
    {
      title: 'ESIGELEC, Rouen, France',
      date: '09.2009 - 02.2010',
      content: `
Exchange Semester
`
    },
    {
      title: 'Adnan Menderes Anatolian High School, Istanbul, Turkey',
      date: '09.2002 - 06.2006',
      content: ''
    }
  ],
  skills: [
    ['Python', '8/10'],
    //['git', '++++'],
    ['Django', '++++'],
    //['Flask', '++++'],
    ['Docker', '++++'],
    ['Kubernetes', '+++'],
    //['Helm', '+++'],
    ['Linux (Debian)', '++++'],
    ['PostgreSQL', '++++'],
    //['JavaScript', '++++'],
    //['Node.js', '++++'],
    ['nginx', '+++'],
    //['Gunicorn', '++++'],
    //['GitLab CI/CD', '++++'],
    //['Elastic Stack', '']
    //['Memcached', '++++'],
    //['Celery', '++++'],
    //['RabbitMQ', '++++'],
    //['vim', '++++'],
  ],
  languages: [
    ['Turkish', 'native'],
    ['English', ''],
    ['German', 'B2'],
  ],
  interests: [
    'Hiking',
    'Swimming',
    'Jogging',
    'Pilates',
    'Reading',
    'Meditation',
    //'Sewing'
  ]
};
