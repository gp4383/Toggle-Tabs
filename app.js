const buttons = document.querySelectorAll(".btn-tab");
const contents = document.querySelectorAll(".content");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (e) => {
  let btnId = e.target.dataset.id;
  let targetbtn = e.target;
  console.log(e.target);
  buttons.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active"); // remove active from active btn in html
      targetbtn.classList.add("active"); // give active to btn on which clicked
    }

    contents.forEach((content) => {
      content.classList.remove("active"); // remove active from content (if not removed there will be 2 active)
      let element = document.getElementById(btnId);
      element.classList.add("active"); // give active to content which has id same as of button on which clicked
    });
  });
});
