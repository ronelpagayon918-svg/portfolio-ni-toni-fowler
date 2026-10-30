(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  function set(t){root.setAttribute('data-theme',t);btn.textContent=t==='dark'?'Light':'Dark';try{localStorage.setItem('theme',t)}catch(e){}}
  var saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
  set(saved|| (window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
  btn.onclick=function(){set(root.getAttribute('data-theme')==='dark'?'light':'dark')};
  document.getElementById('yr').textContent=new Date().getFullYear();
  var fb=document.querySelectorAll('#filters button'), rows=document.querySelectorAll('#skillRows tr');
  fb.forEach(function(b){b.onclick=function(){
    fb.forEach(function(x){x.classList.remove('on')});b.classList.add('on');
    rows.forEach(function(r){r.style.display=(b.dataset.f==='all'||r.dataset.c===b.dataset.f)?'':'none'});
  }});
  document.getElementById('dlResume').onclick=function(){
    var bin=atob(window.RESUME_PDF),a=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);
    var url=URL.createObjectURL(new Blob([a],{type:'application/pdf'})),l=document.createElement('a');
    l.href=url;l.download='Ronel_Aspiras_Resume.pdf';document.body.appendChild(l);l.click();l.remove();
    setTimeout(function(){URL.revokeObjectURL(url)},1000);
  };
  var lb=document.getElementById('lb'),lbi=lb.querySelector('img');
  document.querySelectorAll('.cert').forEach(function(c){c.onclick=function(){lbi.src=c.querySelector('img').src;lb.classList.add('open')}});
  lb.onclick=function(){lb.classList.remove('open')};
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});
  document.getElementById('contactForm').onsubmit=function(e){
    e.preventDefault();
    var n=document.getElementById('n').value, m=document.getElementById('m').value;
    location.href='mailto:ronelpagayon918@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m);
  };
})();
