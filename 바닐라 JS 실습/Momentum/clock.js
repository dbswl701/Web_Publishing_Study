// querySelector는 element의 자식을 탐색
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"); 

// 현재 시간에서 시계를 불러온다.
function getTime(){
  const date = new Date(); // Date는 class
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // <h1>에 clockTitle을 이용해서 시간정보를 준다.
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes  <10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;//객체안에 text를 넣기 위함.
}
function init(){
  getTime();
  setInterval(getTime, 1000); // 1초마다 getTime 함수 실행
}

init();