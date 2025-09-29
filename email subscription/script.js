const scriptURL = 'https://script.google.com/macros/s/AKfycbx3qsY7ULkPVWEskSjePPBAEvKtBKAfv-vVT2hOv9SWjaqPWhSqJ1HPI5nlLeGwX353/exec';
const form = document.forms['submit-to-google-sheet'];
const greet = document.querySelector(".greet");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      greet.innerHTML = "✅ Thanks for subscription!!!";
      setTimeout(() => { greet.innerHTML = ""; }, 5000);
      form.reset();
    })
    .catch(error => {
      greet.innerHTML = "❌ An error has occurred, please try again later!";
    });
});