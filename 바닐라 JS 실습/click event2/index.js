const title = document.querySelector("#title");

// JS body 자체를 바꿀 수 있지만 보기에도 좋지 않고 JS가 추구하는 바가 아니기에
// 이런식으로 사용!

// 근데 이런식으로 사용하면 기존에 class설정되어 있던 값들은 사라지는 문제 발생

// clasList의 method를 사용하여 위와 같은 문제 해결!

const CLICKED_CLASS = "clicked";

/*
function handleClick(){
  // contains는 value가 존재하는지 check한다.
  const hasClass = title.classList.contains(CLICKED_CLASS); // ture/false 반환
  // const currentClass = title.className;

  if(!hasClass){
    // title.className = CLICKED_CLASS; 이러한 방법은 replace가 되기에 기존의 class의 기능을 상실
    title.classList.add(CLICKED_CLASS); 
  }
  else{
    // title.className = "";
    title.classList.remove(CLICKED_CLASS);
  }
}
*/

// 위의 내용은 toggle이라는 것으로 대체가 가능하다.
function handleClick(){
  // class가 거기 있는지 check해서 있으면 add, 아니면 remove를 해준다.
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}
init();
