//Q&A

const questions = document.querySelectorAll(".question-container-wrapper");
const answers = document.querySelectorAll(".answer");
const plusIcon = document.querySelectorAll("#plusIcon");

questions.forEach((quest, i) =>{
    let active = 0;
    quest.addEventListener("click", ()=>{
        if(active==0){
            plusIcon[i].src = "https://img.icons8.com/ios-glyphs/15/FF0000/minus-math.png";
            questions[i].style.fontWeight = "800";
            questions[i].style.color = "var(--black)";
            answers[i].style.display = "block";
            active = 1;
        } else{
            plusIcon[i].src = "https://img.icons8.com/ios-glyphs/15/FF0000/plus-math.png";
            questions[i].style.fontWeight = "400";
            questions[i].style.color = "var(--black50)";
            answers[i].style.display = "none";
            active = 0;
        }
    })
})

//answer display none
//question font-color var black50 and font weight 400
//change icon back to plus