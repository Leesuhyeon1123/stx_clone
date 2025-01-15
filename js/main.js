window.onload = function () {
  // 모달창 닫기
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // 비주얼 버튼 -> 비지니스 영역으로 부드럽게 이동
  const visualButton = document.querySelector(".visual-bt");
  visualButton.addEventListener("click", function () {
    scrollToSection("#business");
  });
  // 함수명 : scrollToSection() 함수를 따로 만들어놓고 쓸수있음?,
  // 가상으로 이름지어줌
  function scrollToSection(sectionId) {
    console.log(sectionId);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  // go top 버튼-> 맨 위 영역으로 부드럽게 이동
const topBtn = document.querySelector(".top-btn")
topBtn.addEventListener("click", function(event){
    event.preventDefault()
    window.scrollTo({
        top:0 ,
        behavior: "smooth",
    })
})
};
