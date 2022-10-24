const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

// Creating FAQ
const createFaq = (faqQue, faqAns) => {
  let faqDiv = document.createElement("div");
  faqDiv.classList.add("faq");
  accordianBody.appendChild(faqDiv);

  let faqHeaderDiv = document.createElement("div");
  faqHeaderDiv.classList.add("faq_header");
  faqDiv.appendChild(faqHeaderDiv);

  let faqHeading = document.createElement("h3");
  faqHeading.textContent = faqQue;
  faqHeaderDiv.appendChild(faqHeading);

  let faqBtn = document.createElement("button");
  faqBtn.classList.add("show_btn");
  faqHeaderDiv.appendChild(faqBtn);

  let faqAnswer = document.createElement("p");
  faqAnswer.textContent = faqAns;
  faqAnswer.classList.add("hidden");
  faqDiv.appendChild(faqAnswer);
};

const showFaq = () => {
  faqData.forEach((faq) => {
    createFaq(faq.question, faq.answer);
  });
};

showFaq();

function btnStatusUpdate(btn) {
  btn.classList.toggle("activeBtn");
}

const faqBtns = document.querySelectorAll(".show_btn");

// Event Listner
faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    btnStatusUpdate(faqBtn);
    const ansElement = faqBtn.parentElement.parentElement.lastChild;
    ansElement.classList.toggle("hidden");
  });
});
