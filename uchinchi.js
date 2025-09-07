const buttonsDiv = document.getElementById("buttons");
let typed = new Typed("#title", {
  strings: ["Endi oilam bilan tanishib chiqasiz"], typeSpeed: 60, backSpeed: 30, backDelay: 1000, loop: false,
  onComplete: () => {
    const members = [{ name: "Otam", file: "otam.html" }, { name: "Onam", file: "onam.html" }, { name: "Opam", file: "opam.html" }, { name: "Men", file: "men.html" }, { name: "Ukam", file: "ukam.html" }, { name: "Kichkina Ukam", file: "kichkina-ukam.html" }];
    members.forEach((m, i) => {
      let btn = document.createElement("button");
      btn.className = 'member';
      btn.textContent = m.name;
      btn.setAttribute('aria-label', m.name);
      btn.addEventListener("click", () => { window.location.href = m.file; });
      buttonsDiv.appendChild(btn);
      gsap.to(btn, { opacity: 1, y: 0, duration: 0.9, delay: 0.2 + i * 0.18, ease: "back.out(1.7)" });
    });

    // "Keyingi" tugmasi uchun alohida div
    let nextDiv = document.createElement("div");
    nextDiv.style.marginTop = "32px";
    nextDiv.style.textAlign = "center";

    let nextBtn = document.createElement("button");
    nextBtn.className = 'member next-btn';
    nextBtn.textContent = "Keyingi";
    nextBtn.setAttribute('aria-label', "Keyingi");
    nextBtn.addEventListener("click", () => {
      window.location.href = "family.html";
    });
    nextDiv.appendChild(nextBtn);
    buttonsDiv.parentNode.appendChild(nextDiv);

    gsap.fromTo(nextBtn, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.2 + members.length * 0.18, ease: "back.out(1.7)" });

    gsap.to('.buttons', { opacity: 1, duration: 0.5, delay: 0.15 });
  }
});
