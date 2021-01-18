function printResults() {
  let goods = localStorage.getItem("good");
  let bads = localStorage.getItem("bad");

  document.querySelector("#answersGood").textContent = goods;
  document.querySelector("#answersBad").textContent = bads;
}

function returnOneWeb() {
  window.location.replace("../index.html");
  localStorage.removeItem("good")
  localStorage.removeItem("bad")
}

printResults();