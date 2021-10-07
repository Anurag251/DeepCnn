const customersQuestion = document.querySelectorAll(".customers-que .item");

customersQuestion.forEach((que, idx) => {
  que.addEventListener("click", () => {
    que.classList.toggle("active");
  });
});
