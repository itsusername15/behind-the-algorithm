const slides = Array.from(document.querySelectorAll(".slide"));
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const pageNumber = document.querySelector("#page-number");
let current = 0;

if (location.protocol === "http:" || location.protocol === "https:") {
  for (const link of document.querySelectorAll(".sources a")) {
    const original = new URL(link.href);
    const reference = new URL("reference.html", location.href);
    reference.searchParams.set("doc", "wiki/" + original.pathname.split("/").pop());
    reference.hash = original.hash;
    link.href = reference;
  }
}

function showSlide(index) {
  if (index < 0 || index >= slides.length || index === current) return;
  slides[current].hidden = true;
  current = index;
  slides[current].hidden = false;
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
  pageNumber.value = `${current + 1} / ${slides.length}`;
  slides[current].querySelector("h1, h2").focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

previous.addEventListener("click", () => showSlide(current - 1));
next.addEventListener("click", () => showSlide(current + 1));
document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const direction = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
  if (!direction) return;
  event.preventDefault();
  showSlide(current + direction);
});

const demoResult = document.querySelector("#demo-result");
const tagButtons = document.querySelectorAll("[data-tag]");
for (const button of tagButtons) {
  button.addEventListener("click", () => {
    for (const choice of tagButtons) choice.setAttribute("aria-pressed", String(choice === button));
    const tag = button.dataset.tag;
    demoResult.textContent = tag === "雨聲"
      ? "推薦《屋簷》：兩首歌都有雨聲標籤。"
      : "本輪沒有推薦：《窗邊》的鋼琴標籤與《屋簷》的雨聲標籤不同。";
  });
}

const quizResult = document.querySelector("#quiz-result");
const answerButtons = document.querySelectorAll("[data-answer]");
for (const button of answerButtons) {
  button.addEventListener("click", () => {
    for (const choice of answerButtons) choice.setAttribute("aria-pressed", String(choice === button));
    quizResult.textContent = button.dataset.answer === "ranking"
      ? "答對了。排序會決定候選的呈現順序。"
      : "候選生成是先挑出 10 首。選好候選後，再想想哪一步決定它們的順序。";
  });
}
