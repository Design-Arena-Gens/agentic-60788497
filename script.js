const greetingEl = document.querySelector("#greeting");
const timeEl = document.querySelector("#time");
const formEl = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name");

const greetings = [
  "Hi there",
  "Hello",
  "Welcome",
  "How's it going",
  "Great to see you",
  "Hey friend",
];

const randomGreeting = () =>
  greetings[Math.floor(Math.random() * greetings.length)];

const updateTime = () => {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  timeEl.textContent = `Local time: ${formatted}`;
};

const personalize = (name) => {
  const base = randomGreeting();
  if (!name) {
    greetingEl.textContent = `${base} 👋`;
    return;
  }
  greetingEl.textContent = `${base}, ${name}! 👋`;
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = nameInput.value.trim();
  personalize(value);
  nameInput.value = "";
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    personalize("");
  }
});

personalize("");
updateTime();
setInterval(updateTime, 1000);
