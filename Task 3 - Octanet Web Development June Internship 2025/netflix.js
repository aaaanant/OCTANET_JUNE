// Scroll bar for Movies Selection

let scrollbar = document.getElementById("images");
let leftarrow = document.getElementById("leftButton");
let rightarrow = document.getElementById("rightButton");

 function leftMove() {
    leftarrow.addEventListener("click", () => {
    scrollbar.scrollBy(
        {left: -300, behavior: "smooth" });
    scrollbar.scroll
    })
}

 function rightMove() {
    rightarrow.addEventListener("click", () => {
    scrollbar.scrollBy(
        {left: 300, behavior: "smooth"});  
    })
}


// FAQ Section - (Div)Button 

let faqs = document.querySelectorAll(".faq");

for(let i = 0; i<faqs.length; i++)
{
    faqs[i].addEventListener("click", () =>{

        let answer = faqs[i].querySelector(".answer");

        if(answer.classList.contains("active"))
        {   
            answer.classList.remove("active")
        }
        else {
            answer.classList.add("active")
            for(let j= 0; j<faqs.length; j++)
            {
                let otheranswer = faqs[j].querySelector(".answer");
                if(j!==i)
                {
                    otheranswer.classList.remove("active")
                }
            }
        }
    })
}


