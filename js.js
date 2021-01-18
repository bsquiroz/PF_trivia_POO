import Request from "/clases/Request.js";
import UI from "/clases/UI.js";

const form = document.querySelector("#form-questions");
const form1 = document.querySelector("#form-answers");


form.addEventListener("submit",(event) => {
  event.preventDefault();

  Request.getQuestions()
    .then(response => response.json())
    .then(data => {
      if(data.response_code!=0){
        const container = document.querySelector("#questions-container");
        container.innerHTML = "";
        document.querySelector("#error").classList.remove("d-none")
      }else{
        UI.printQuestions(data.results)
        document.querySelector("#error").classList.add("d-none")
      }
    })
})

form1.addEventListener("submit",(event) => {
  event.preventDefault(), UI.checkedAnswers();
})

Request.getCategories()
  .then(response => response.json())
  .then(data => UI.printCategories(data.trivia_categories))
