
const showAllButton = document.getElementsByClassName("button all")[0];
const febButton = document.getElementsByClassName("button feb")[0];

const jan = document.getElementsByClassName("logEntry jan");
const feb = document.getElementsByClassName("logEntry feb");
const mar = document.getElementsByClassName("logEntry mar");
const apr = document.getElementsByClassName("logEntry apr");
const may = document.getElementsByClassName("logEntry may");
const jun = document.getElementsByClassName("logEntry jun");
const jul = document.getElementsByClassName("logEntry jul");
const aug = document.getElementsByClassName("logEntry aug");
const sep = document.getElementsByClassName("logEntry sep");
const oct = document.getElementsByClassName("logEntry oct");
const nov = document.getElementsByClassName("logEntry nov");
const dec = document.getElementsByClassName("logEntry dec");

const months = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

showAllButton.onclick = function() {
  months.forEach(month => {
    Array.from(month).forEach(logEntry => {
      logEntry.style.display = "flex";
    });
  });
};

febButton.onclick = function() {
    for (let i = 0; i < feb.length; i++) {
        feb[i].style.display = "flex";
    }
};

