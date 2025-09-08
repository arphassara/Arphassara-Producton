// ปีใน footer
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Intro: ปิดม่าน + ซ่อนทั้งบล็อก (กันค้าง)
(function(){
  const intro = document.getElementById('intro');
  if(!intro) return;
  const DURATION = 1300, FALLBACK = 2800;
  let done = false;
  const finish = ()=>{
    if(done) return; done = true;
    intro.classList.add('hidden');
    setTimeout(()=> intro.remove(), 600);
    document.documentElement.style.overflow = '';
  };
  // ล็อกสกรอลล์ช่วง intro
  document.documentElement.style.overflow = 'hidden';
  window.addEventListener('load', ()=> setTimeout(finish, DURATION));
  setTimeout(finish, FALLBACK);
})();
