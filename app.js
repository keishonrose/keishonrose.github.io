import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js';

const projects = [
  {
    id: 'krphotoapp',
    title: 'KRPhotoApp',
    kicker: 'A cloud photography platform from booking to delivery',
    categories: ['software', 'strategy'],
    tags: ['React', '.NET', 'AWS', 'PostgreSQL'],
    summary: 'A full-stack platform designed to manage clients, projects, proofing galleries, approvals, albums, invoices, and photographer workflows in one connected experience.',
    problem: 'Independent photographers often stitch together disconnected tools for booking, client communication, galleries, file delivery, and project tracking. The result is duplicated work and a fragmented client experience.',
    approach: 'I designed a role-based application with separate public, client, and administrator experiences. I built the product around a project-centered source of truth and connected authentication, storage, workflow state, and client-facing delivery.',
    result: 'A deployed architecture with AWS Cognito authentication, S3 asset handling, CloudFront delivery, an ASP.NET Core API, PostgreSQL persistence, responsive React interfaces, and a growing booking-to-delivery workflow.',
    tools: ['React', 'React Router', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'AWS Cognito', 'S3', 'CloudFront', 'Elastic Beanstalk', 'Adobe Lightroom APIs', 'Git'],
    learned: 'The hardest product problems were not isolated coding problems. They were questions of information architecture: deciding where a workflow truly belongs, what should be the source of truth, and how users move through the system without losing context.',
    model: 'software'
  },
  {
    id: 'cohortflow',
    title: 'CohortFlow',
    kicker: 'A governed admissions-to-registration operating system',
    categories: ['strategy', 'data', 'software'],
    tags: ['Systems design', 'Data governance', 'Google Sheets'],
    summary: 'A structured operating model that transforms scattered admissions and program-planning files into a governed source of truth with curriculum logic, exceptions, tests, and registration-ready outputs.',
    problem: 'A complex academic admissions workflow depended on separate files, inconsistent terms, manual interpretation, and repeated re-entry of student and program information.',
    approach: 'I mapped the real workflow, created controlled vocabularies, defined master records, encoded official programs and curriculum rules, separated raw inputs from governed outputs, and added change requests, exception queues, test cases, audit logs, and feeder files.',
    result: 'A 19-sheet MVP that behaves like a lightweight information system: incoming import, master students, official catalogs, curriculum rules, offerings, versioned plans, controlled lookups, field definitions, QA tests, and downstream registration outputs.',
    tools: ['Google Sheets', 'Excel', 'Data dictionaries', 'Controlled vocabularies', 'Rule mapping', 'Exception management', 'Workflow design', 'Data validation'],
    learned: 'A spreadsheet becomes a system when it has explicit rules, ownership, controlled inputs, test cases, and a traceable path from source data to operational output.',
    model: 'strategy'
  },
  {
    id: 'economic-evaluation',
    title: 'Economic Evaluation of an Education Program',
    kicker: 'Turning program evidence into a resource decision',
    categories: ['policy', 'data'],
    tags: ['Cost-effectiveness', 'Excel model', 'Program evaluation'],
    summary: 'An ingredients-based economic evaluation that values program resources, calculates per-student costs, analyzes cost distribution, and connects implementation cost to measured educational effects.',
    problem: 'Decision-makers need more than evidence that a program works. They need to understand what it requires, what it costs, and whether its effects justify those resources relative to alternatives.',
    approach: 'I inventoried personnel, materials, school resources, and caregiver contributions; sourced market prices; incorporated benefits and inflation assumptions; calculated classroom and student costs; and linked the estimate to an effect-size-based cost-effectiveness measure.',
    result: 'A nine-sheet decision model covering study information, price assumptions, classroom implementation, aggregate cost estimates, cost distribution, cost-effectiveness, and comparison programs.',
    tools: ['Excel', 'Ingredients method', 'Cost analysis', 'Effect sizes', 'Sensitivity analysis', 'Evidence review', 'Public price sources'],
    learned: 'Program cost is not the same as a budget line. A full economic evaluation reveals hidden resources and opportunity costs, making comparisons more honest and decisions more transparent.',
    model: 'policy'
  },
  {
    id: 'education-data',
    title: 'Education Outcomes & Teacher Salary Analysis',
    kicker: 'Testing a simple relationship without overstating the evidence',
    categories: ['data', 'policy'],
    tags: ['R', 'Visualization', 'Regression'],
    summary: 'An exploratory analysis of educational outcome distributions and the relationship between teacher salary and high school graduation rates.',
    problem: 'Public debates often assume that a single input directly explains an educational outcome. The analytical task was to visualize the data, inspect distributions, and evaluate whether the observed relationship supported that claim.',
    approach: 'I produced a graduation-rate histogram and a salary-versus-graduation scatterplot with a fitted trend line, then interpreted the shape, spread, outliers, and limits of the bivariate relationship.',
    result: 'The sample showed broad variation and only a weak visible relationship, reinforcing the need to consider confounding variables, data context, and the difference between correlation and causation.',
    tools: ['R', 'Descriptive statistics', 'Histograms', 'Scatterplots', 'Linear trend analysis', 'Data interpretation'],
    learned: 'A responsible analyst does not force the chart to tell a dramatic story. Sometimes the most useful finding is that the proposed explanation is incomplete.',
    images: ['assets/histogram_HSGRADRT.png', 'assets/scatterplot_HSGRADRT_TCHRSAL.png'],
    model: 'data'
  },
  {
    id: 'hamilton',
    title: 'Hamilton Elementary Applied Research',
    kicker: 'Student voice as evidence for a community decision',
    categories: ['policy', 'data'],
    tags: ['Applied research', 'Stakeholders', 'Student voice'],
    summary: 'A school-based civic research project that supported sixth-grade students in gathering evidence, examining community options, and presenting a recommendation.',
    problem: 'Students are often treated as recipients of school decisions rather than participants capable of defining priorities and producing evidence.',
    approach: 'Our team structured a participatory process around student-generated options, including activity concepts such as flag football and a cooking club. We supported question design, preference gathering, interpretation, and presentation.',
    result: 'A practical research experience connecting civic participation, stakeholder engagement, data collection, and public communication.',
    tools: ['Survey design', 'Qualitative research', 'Stakeholder engagement', 'Presentation design', 'Applied education research'],
    learned: 'Evidence becomes more meaningful when the people affected by a decision help define the question, not just answer it.',
    model: 'policy'
  },
  {
    id: 'faa',
    title: 'FAA Energy Data Visualization',
    kicker: 'Making infrastructure consumption visible',
    categories: ['data', 'strategy'],
    tags: ['Dashboard', 'Energy data', 'MIS capstone'],
    summary: 'A senior capstone project that transformed FAA campus power-use data into a visual decision-support experience for identifying consumption patterns.',
    problem: 'Operational energy data is difficult to act on when it remains scattered or buried in raw records.',
    approach: 'Working through an MIS capstone team, I helped organize and visualize power-consumption data across facilities so users could see patterns and compare usage over time.',
    result: 'A dashboard-oriented analytical concept for supporting infrastructure monitoring and more informed energy management.',
    tools: ['Data visualization', 'Dashboard design', 'Requirements analysis', 'Team delivery', 'Operational analytics'],
    learned: 'Visualization is a form of translation: it turns infrastructure behavior into something decision-makers can see, question, and act on.',
    model: 'data'
  },
  {
    id: 'somatic',
    title: 'Distribution Analysis: Somatic & Withdrawn Measures',
    kicker: 'Reading shape, skew, and variation before modeling',
    categories: ['data'],
    tags: ['R', 'Distribution analysis', 'Behavioral data'],
    summary: 'A comparative visualization exercise examining how two measures differ in central tendency, spread, and distribution shape.',
    problem: 'Before choosing statistical tests or drawing conclusions, analysts must understand how variables are distributed and whether assumptions such as normality are plausible.',
    approach: 'I produced separate histograms for somatic and withdrawn measures and compared their range, concentration, tails, and apparent skew.',
    result: 'A clear visual basis for discussing distributional assumptions and deciding what additional descriptive or inferential analysis would be appropriate.',
    tools: ['R', 'Histograms', 'Exploratory data analysis', 'Distribution interpretation'],
    learned: 'The shape of a distribution is not decoration around the analysis. It often determines what analysis is defensible.',
    images: ['assets/Somatic Histogram.png', 'assets/Withdrawn Histogram.png'],
    model: 'data'
  }
];

const projectGrid = document.querySelector('#projectGrid');
const dialog = document.querySelector('#projectDialog');
const dialogContent = document.querySelector('#dialogContent');

function projectCard(project) {
  const image = project.images?.[0];
  return `<article class="project-card reveal" data-id="${project.id}" data-categories="${project.categories.join(' ')}">
    <div class="project-visual">${image ? `<img src="${image}" alt="Preview from ${project.title}">` : '<div class="project-placeholder"><div class="placeholder-glyph"></div></div>'}</div>
    <div class="project-body">
      <div class="project-meta">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      <h3>${project.title}</h3><p>${project.summary}</p>
      <div class="project-footer"><span>${project.kicker}</span><span>Open case study ↗</span></div>
    </div>
  </article>`;
}

function renderProjects(filter='all') {
  projectGrid.innerHTML = projects.filter(p => filter === 'all' || p.categories.includes(filter)).map(projectCard).join('');
  projectGrid.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openProject(card.dataset.id)));
  observeReveals();
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  setModelState(p.model);
  dialogContent.innerHTML = `<div class="dialog-hero"><p class="eyebrow">${p.tags.join(' · ')}</p><h2>${p.title}</h2><p>${p.kicker}</p></div>
    <div class="dialog-body"><p class="hero-lede">${p.summary}</p>
      <div class="dialog-grid">
        <div class="dialog-block"><h3>The problem</h3><p>${p.problem}</p></div>
        <div class="dialog-block"><h3>My approach</h3><p>${p.approach}</p></div>
        <div class="dialog-block"><h3>Result</h3><p>${p.result}</p></div>
        <div class="dialog-block"><h3>What I learned</h3><p>${p.learned}</p></div>
      </div>
      <div class="dialog-block"><h3>Tools & methods</h3><div class="tool-cloud">${p.tools.map(t => `<span>${t}</span>`).join('')}</div></div>
      ${p.images ? `<div class="dialog-gallery">${p.images.map(src => `<img src="${src}" alt="Project visualization for ${p.title}">`).join('')}</div>` : ''}
    </div>`;
  dialog.showModal();
}

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
  btn.classList.add('active'); renderProjects(btn.dataset.filter); setModelState(btn.dataset.filter === 'all' ? 'home' : btn.dataset.filter);
}));

document.querySelectorAll('.specialty-card').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.specialty-card').forEach(x => x.classList.remove('active'));
  btn.classList.add('active'); setModelState(btn.dataset.specialty);
}));

document.querySelector('.menu-button').addEventListener('click', e => {
  const nav = document.querySelector('.nav'); nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();

let revealObserver;
function observeReveals() {
  revealObserver ||= new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } }), {threshold:.11});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}
renderProjects(); observeReveals();

// 3D identity constellation
const canvas = document.querySelector('#scene');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0d100f, .045);
const camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, .1, 100);
camera.position.set(0, .5, 11);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.enablePan = false; controls.minDistance = 6; controls.maxDistance = 15; controls.autoRotate = true; controls.autoRotateSpeed = .32;

scene.add(new THREE.AmbientLight(0xffffff, .8));
const key = new THREE.PointLight(0xd9835f, 22, 24); key.position.set(5,5,6); scene.add(key);
const fill = new THREE.PointLight(0x5e91a8, 18, 24); fill.position.set(-5,-2,4); scene.add(fill);
const group = new THREE.Group(); scene.add(group);

const coreMat = new THREE.MeshStandardMaterial({color:0xd6d0c2, roughness:.4, metalness:.62, wireframe:false});
const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.42, 2), coreMat); group.add(core);
const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.65, 1), new THREE.MeshBasicMaterial({color:0xd9ab64, wireframe:true, transparent:true, opacity:.35})); group.add(wire);

const disciplineData = [
  {name:'software', color:0xd9835f, pos:[3.2,1.4,.2]}, {name:'data', color:0x5e91a8, pos:[-3.0,1.1,-.4]},
  {name:'policy', color:0xd9ab64, pos:[2.5,-2.3,.3]}, {name:'strategy', color:0x6f9277, pos:[-2.7,-2.0,.6]}
];
const nodes = {};
const linePoints = [];
disciplineData.forEach((d,i) => {
  const node = new THREE.Mesh(new THREE.OctahedronGeometry(.48,1), new THREE.MeshStandardMaterial({color:d.color, roughness:.38, metalness:.48, emissive:d.color, emissiveIntensity:.08}));
  node.position.set(...d.pos); node.userData.base = new THREE.Vector3(...d.pos); group.add(node); nodes[d.name]=node;
  linePoints.push(new THREE.Vector3(0,0,0), node.position.clone());
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2 + i*.24,.012,8,120), new THREE.MeshBasicMaterial({color:d.color,transparent:true,opacity:.28}));
  ring.rotation.set(i*.55, i*.72, i*.24); group.add(ring);
});
group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(linePoints), new THREE.LineBasicMaterial({color:0xb8c1b8, transparent:true, opacity:.25})));

const starsGeo = new THREE.BufferGeometry(); const starArray=[];
for(let i=0;i<650;i++){ const r=8+Math.random()*18, a=Math.random()*Math.PI*2, z=(Math.random()-.5)*18; starArray.push(Math.cos(a)*r,Math.sin(a)*r,z); }
starsGeo.setAttribute('position',new THREE.Float32BufferAttribute(starArray,3));
scene.add(new THREE.Points(starsGeo,new THREE.PointsMaterial({color:0x9ba89d,size:.025,transparent:true,opacity:.42})));

const targetRot = new THREE.Vector3(0,0,0); const targetScale = new THREE.Vector3(1,1,1); let activeState='home';
const states = {
  home:[0,0,0], software:[.22,-.85,.05], data:[-.18,.92,-.06], policy:[.48,-2.12,.1], strategy:[-.45,2.15,-.08]
};
function setModelState(state){ activeState=state; const s=states[state]||states.home; targetRot.set(...s); targetScale.setScalar(state==='home'?1:1.12); controls.autoRotate=state==='home'; }
window.setModelState=setModelState;

function resize(){ renderer.setSize(innerWidth,innerHeight,false); camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize',resize); resize();
const clock=new THREE.Clock();
function animate(){
  const t=clock.getElapsedTime();
  group.rotation.x += (targetRot.x-group.rotation.x)*.045; group.rotation.y += (targetRot.y-group.rotation.y)*.045; group.rotation.z += (targetRot.z-group.rotation.z)*.045;
  group.scale.lerp(targetScale,.04); core.rotation.x=t*.14; core.rotation.y=t*.2; wire.rotation.y=-t*.13; wire.rotation.z=t*.09;
  disciplineData.forEach((d,i)=>{ const n=nodes[d.name]; const pulse=1+Math.sin(t*1.7+i)*.08; n.scale.setScalar(activeState===d.name?1.55:pulse); });
  controls.update(); renderer.render(scene,camera); requestAnimationFrame(animate);
}
animate();
