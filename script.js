// Theme toggle with localStorage
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); }
  document.getElementById('themeToggle').addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Season tabs active state
const tabs = document.querySelectorAll('.season-tabs a');
const sections = Array.from(document.querySelectorAll('main section.panel')).map(s=>({id:s.id,el:s}));
function onScroll(){
  let best = null, bestTop = Infinity;
  sections.forEach(s=>{
    const rect = s.el.getBoundingClientRect();
    if(rect.top >= -80 && rect.top < bestTop){ bestTop = rect.top; best = s.id; }
  });
  tabs.forEach(t=> t.classList.toggle('active', t.getAttribute('href')==='#'+best));
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Footer year
const yEl = document.getElementById('year'); if(yEl) yEl.textContent = new Date().getFullYear();
