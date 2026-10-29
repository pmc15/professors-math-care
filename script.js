(function(){
 const toggle=document.getElementById('menu-toggle');
 const menu=document.getElementById('menu-links');
 toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'মেনু বন্ধ করুন':'মেনু খুলুন')});
 menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}));
 document.getElementById('year').textContent=String(new Date().getFullYear());
 document.getElementById('inquiry-form')?.addEventListener('submit',function(e){
  e.preventDefault();
  const b=document.getElementById('batch-choice').value;
  const m=document.getElementById('query-message').value.trim();
  const t=`আসসালামু আলাইকুম। আমি Professor's Math Care-এর ${b} সম্পর্কে বিস্তারিত জানতে চাই।${m?'\nআমার প্রশ্ন: '+m:''}`;
  const url='https://wa.me/8801908037601?text='+encodeURIComponent(t);
  const win=window.open(url,'_blank','noopener,noreferrer');
  if(!win){window.location.href=url}
 });
})();
