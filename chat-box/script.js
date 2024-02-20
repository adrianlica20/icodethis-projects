const disclaimer = document.querySelector(".disclaimer");
const chatContainer = document.querySelector(".chat-container");
const chatBox = document.querySelector(".chat-box");
const agreeBtn = document.querySelector(".agree-btn");
const openChatBtn = document.querySelector(".open-chat-btn");
const closeChatBtn = document.querySelector(".close-chat-btn");

// Change chat box height to full for mobile
if (window.matchMedia("(max-width: 640px)").matches) {
  document
    .querySelector(".fullMobile")
    .classList.add("h-full", "justify-between");
} else {
  document
    .querySelector(".fullMobile")
    .classList.remove("h-full", "justify-between");
}

// Start chatting
openChatBtn.addEventListener("click", () => {
  if (chatContainer.classList.contains("hidden")) {
    chatContainer.classList.remove("hidden");
    openChatBtn.classList.add("hidden");
  } else {
    chatContainer.classList.add("hidden");
  }
});

// Accepting privacy policy
agreeBtn.addEventListener("click", () => {
  if (disclaimer.classList.contains("hidden")) {
    disclaimer.classList.remove("hidden");
    chatBox.classList.add("hidden");
  } else {
    disclaimer.classList.add("hidden");
    chatBox.classList.remove("hidden");
  }
});

// Close chatting
closeChatBtn.addEventListener("click", () => {
  if (!chatContainer.classList.contains("hidden")) {
    chatContainer.classList.add("hidden");
    openChatBtn.classList.remove("hidden");
    userContainer.forEach(
      userTemplates.forEach(userTemplate => userTemplate.remove())
    );
  } else {
    chatContainer.classList.remove("hidden");
  }
});

// Working chat
const userContainer = document.querySelector(".chatting-section");
const userTemplates = document.getElementsByClassName("user-template");
const userTemplate = userTemplates.length ? userTemplates[0] : null;

// Send messages
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-input");

function sendMessage(messageText) {
  const messageElement = userTemplate.cloneNode(true);
  messageElement.classList.remove("hidden"); // remove hidden class from cloned element
  const userMessage = messageElement.querySelector(".user-message");
  userMessage.textContent = messageText;
  userContainer.appendChild(messageElement);
  userContainer.scrollTop = userContainer.scrollHeight;
}

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  sendMessage(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage(userInput.value);
    userInput.value = "";
  }
});
