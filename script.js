//All Elements
const start_btn =document.querySelector(".start_btn button");
const info_box =document.querySelector(".info_box");
const exit_btn =info_box.querySelector(".buttons .quit");
const continue_btn =document.querySelector(".buttons .restart");
const quiz_box =document.querySelector(".quiz_box");


// start quiz button clicked
start_btn.onclick= ()=>{
    info_box.classList.add("activeInfo");
}

// Exit button clicked
exit_btn.onclick= ()=>{
    info_box.classList.remove("activeInfo");
}

// Continue button clicked
continue_btn.onclick= ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
}