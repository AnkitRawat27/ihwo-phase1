(() => {
  "use strict";
  const items=[["Home","index.html"],["About","about.html"],["Mission","mission.html"],["Victim Rights","victim-rights.html"],["Find Help","find-help.html"],["Partner Network","partner-network.html"],["Transparency","transparency.html"],["Contact","contact.html"]];
  const current=location.pathname.split("/").pop()||"index.html";
  const header=document.querySelector("[data-header]");
  if(header){
    header.innerHTML=`<a class="skip-link" href="#main-content">Skip to content</a><header class="site-header"><a class="brand" href="index.html" aria-label="IHWO home"><span class="brand-mark" aria-hidden="true">⚖</span><span>IHWO</span></a><button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">☰</button><nav class="nav" id="primary-navigation" aria-label="Main navigation">${items.map(([label,url])=>`<a href="${url}"${current===url?' class="active" aria-current="page"':''}>${label}</a>`).join("")}<a class="nav-cta" href="find-help.html">Find support</a></nav></header>`;
    const btn=header.querySelector(".menu-btn"),nav=header.querySelector(".nav");
    btn.addEventListener("click",()=>{const open=nav.classList.toggle("menu-open");btn.setAttribute("aria-expanded",String(open));btn.setAttribute("aria-label",open?"Close navigation":"Open navigation");btn.textContent=open?"✕":"☰";});
    nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("menu-open");btn.setAttribute("aria-expanded","false");btn.setAttribute("aria-label","Open navigation");btn.textContent="☰";}});
  }
  const main=document.querySelector("main");if(main&&!main.id)main.id="main-content";
  const footer=document.querySelector("[data-footer]");
  if(footer)footer.innerHTML=`<footer class="site-footer"><div class="footer-top"><div><a class="brand" href="index.html" style="color:white"><span class="brand-mark" aria-hidden="true">⚖</span> IHWO</a><p>Justice for Every Victim.<br>Humanity Has No Borders.</p></div><nav class="footer-links" aria-label="Footer navigation">${items.slice(1).map(([n,u])=>`<a href="${u}">${n}</a>`).join("")}</nav></div><div class="footer-bottom"><strong>Development-stage initiative.</strong><p>IHWO is not an emergency service, police authority, court, law firm or UN body. Website information is general and is not legal advice. External resources are not IHWO partners or endorsements. Do not send confidential case evidence through this website.</p>© ${new Date().getFullYear()} IHWO. Victims pay nothing for IHWO information and referral support.</div></footer>`;
})();