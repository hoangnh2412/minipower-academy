/**
 * Slide deck controller — điều hướng bằng nút, phím mũi tên, Space, Home/End.
 */
(function () {
  const deck = document.getElementById("deck");
  if (!deck) return;

  const slides = [...deck.querySelectorAll(".slide")];
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const counter = document.getElementById("counter");
  const progressBar = document.getElementById("progress-bar");

  let current = 0;

  function show(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
    if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
    if (progressBar) {
      progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
    }
  }

  function next() {
    show(current + 1);
  }

  function prev() {
    show(current - 1);
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
      case "PageDown":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        show(0);
        break;
      case "End":
        e.preventDefault();
        show(slides.length - 1);
        break;
    }
  });

  show(0);
})();
