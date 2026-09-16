const message = document.querySelector("#message");
const cheerButton = document.querySelector("#cheer-button");

const cheerMessages = [
  "좋아요! 작은 코드부터 직접 바꾸어 봅시다. 🚀",
  "오늘 배운 것을 내일 또 연습해 봐요! 💪",
];
let isFirstMessage = true;

cheerButton.addEventListener("click", function () {
  if (isFirstMessage) {
    message.textContent = cheerMessages[1];
  } else {
    message.textContent = cheerMessages[0];
  }
  isFirstMessage = !isFirstMessage;
});