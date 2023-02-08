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
let faqs = [];

// Creating new FAQ and adding it to FAQS array
faqData.forEach((faq) => {
  let newFaq = createFaq(faq.question, faq.answer);
  faqs.push(newFaq);
});

// showBtn
faqs.forEach((faq) => {
  const faqBtn = faq.faqBtn;
  faqBtn.addEventListener("click", () => {
    faq.faqBody.classList.toggle("hidden");
    btnStatusUpdate(faq.faqBtn);
  });
});

// createFaq
function createFaq(faqHeaderText, faqBodyText) {
  const faqEl = document.createElement("div");
  faqEl.classList.add("faq");
  accordianBody.appendChild(faqEl);
  const faqHeader = document.createElement("div");
  faqHeader.classList.add("faq_header");
  faqEl.appendChild(faqHeader);

  const faqTitle = document.createElement("h3");
  faqTitle.innerText = faqHeaderText;
  faqHeader.appendChild(faqTitle);
  const faqBtn = document.createElement("button");
  faqBtn.classList.add("show_btn");
  faqBtn.innerText = "+";
  faqHeader.appendChild(faqBtn);

  const faqBody = document.createElement("p");
  faqBody.innerText = faqBodyText;
  faqBody.classList.add("hidden");
  faqEl.appendChild(faqBody);

  return {
    faqBody,
    faqBtn,
  };
}

// btnStatusUpdate
function btnStatusUpdate(faqBtn) {
  faqBtn.innerText == "+" ? (faqBtn.innerText = "-") : (faqBtn.innerText = "+");
}
