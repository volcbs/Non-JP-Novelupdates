// ==UserScript==
// @name        https://github.com/volcbs/Non-JP-Novelupdates
// @namespace   https://gist.github.com/volcbs
// @include     https://www.novelupdates.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

// Get all rows in the table
let rows = document.querySelectorAll("tr");

// Loop through all rows
for (let i = 0; i < rows.length; i++) {
  let row = rows[i];

  // Get the first column in the row
  let firstCol = row.querySelector("td:nth-child(1)");
  if (!firstCol) continue;

  // Get the text of the first column
  let text = firstCol.textContent;

  // If the text doesn't contain [JP], hide the row
  if (!text.includes("[JP]")) {
    row.style.display = "none";
  } else {
    // If it does contain [JP], remove it from the text
    text = text.replace("[JP]", "");

    // Keep the URL in the first column
    let link = firstCol.querySelector("a");
    if (link) {
      firstCol.innerHTML = `<a href="${link.href}">${text}</a>`;
    } else {
      firstCol.textContent = text;
    }
  }
}
