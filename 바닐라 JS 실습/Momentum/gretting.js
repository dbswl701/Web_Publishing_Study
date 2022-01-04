const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "shwoing";

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){  // localStorage에서 정보를 가져옴
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    // user is not
  }
  else {
    // user is, call function
    paintGreeting(currentUser);

  }
}



function init(){
  loadName();
}

init();