export default class UI {

  static indice = 0;
  static idAnsewr = 0;
  static arrayTotalAnswer = [];
  static arrayAnsewrsCorrects = [];
  static arrayAnsewrsChecked = [];

  static printCategories(categories) {
    const container = document.querySelector("#categories");

    categories.forEach(element => {
      container.innerHTML += `<option value="${element.id}" >${element.name}</option>`
    });
  }

  static arrayAnsewrs(correct, incorret) {
    let array = [correct, ...incorret];
    array.sort(function () {
      return Math.random() - 0.5;
    });

    return array;
  }

  static printQuestions(questions){
    const container = document.querySelector("#questions-container");
    container.innerHTML = "";

    questions.forEach((element,i) => {

      let aux = this.arrayAnsewrs(element.correct_answer , element.incorrect_answers);
      this.arrayAnsewrsCorrects.push(element.correct_answer)

      container.innerHTML += `<div class="col-md-12 mt-4">
                                  <div class="card h-100 shadow-sm p-3 mb-5 bg-white rounded">
                                    <div class="card-body">
                                      ${(i+1)+". "+element.question}
                                    </div>
                                    <div class="card-body">
                                      ${this.returnAnswersHtml(aux)}
                                    </div>
                                  </div>
                                </div>`               
    })

    container.innerHTML += `
                          <button  type="submit" class="btn btn-primary col-md-12 mt-4">
                            send questions
                          </button>`;
  }

  static returnAnswersHtml(aux) {

    let html="";
    aux.forEach((i)=>{

      html +=`<input type="radio" id="answer${this.idAnsewr}" name="answer${this.indice}" value="${i}" required>      
              <label for="answer${this.idAnsewr}">${i}</label><br>`

              this.arrayTotalAnswer.push(i);

              this.idAnsewr++;
    })
    
    this.indice++;

    return html
  }

  static checkedAnswers() {

    for(let i=0; i<this.arrayTotalAnswer.length; i++){
      if(document.getElementById("answer" + [i]).checked == true){
        this.arrayAnsewrsChecked.push(document.getElementById("answer" + [i]).value)
      }
    }

    this.checkingBadAndGood();

  }

  static checkingBadAndGood() {
    let AnswerCorrect = 0;
    let AnswerIncorrect = 0;

    this.arrayAnsewrsCorrects.forEach((i,b)=>{
      if(this.arrayAnsewrsCorrects[b]==this.arrayAnsewrsChecked[b]){
        AnswerCorrect++;
      }else{
        AnswerIncorrect++;
      }
      })

      localStorage.setItem("good", AnswerCorrect);
      localStorage.setItem("bad", AnswerIncorrect);

      window.location.replace("/Results/results.html");
    
  }

}