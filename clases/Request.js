export default class Request {
  static getCategories() {
    return fetch("https://opentdb.com/api_category.php")
  }

  static getQuestions() {
    const [amount, category, difficulty, type] = this.getFilters();
    return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
  }

  static getFilters() {
    const totalQuestions = document.querySelector("#total-questions").value;
    const category = document.querySelector("#categories").value;
    const difficulty = document.querySelector("#questions-difficulty").value;
    const type = document.querySelector("#type-questions").value;
    return [totalQuestions, category, difficulty, type];
  }
}