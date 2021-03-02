// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal");
function hideModal() {
  errorModal.classList.add("hidden");
}
hideModal();

const likeBtns = document.querySelectorAll(".like-glyph");
likeBtns.forEach(() => addEventListener("click", toggleLike));

function toggleLike(event) {
  let heart = event.target;
  mimicServerCall()
    .then(function (message) {
      if (
        heart.className !== "activated-heart" &&
        heart.className === "like-glyph"
      ) {
        heart.textContent = FULL_HEART;
        heart.classList.toggle("activated-heart");
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.toggle("activated-heart");
      }
    })
    .catch(function (error) {
      alert("Oh no!");
      console.log(error);
      errorModal.classList.toggle("hidden");
      setTimeout(hideModal, 5000);
    });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
