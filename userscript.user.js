// ==UserScript==
// @name        Hide and remove non-JP in NovelUpdates
// @namespace   https://github.com/volcbs/Non-JP-Novelupdates
// @include     https://www.novelupdates.com/*
// @exclude     https://www.novelupdates.com/series/*
// @version     2.0
// @grant       none
// ==/UserScript==

// Get all rows in the table
const rows = document.querySelectorAll("tr");

// Process each row
rows.forEach(row => {
  const firstCol = row.querySelector("td:nth-child(1)");
  if (!firstCol) return;

  const hasJP = firstCol.textContent.includes("[JP]");

  // Remove non-JP rows entirely
  if (!hasJP) {
    row.remove();
    return;
  }

  // Remove ALL [JP] tags from the first column's content
  firstCol.innerHTML = firstCol.innerHTML
    .replace(/\[JP\]/gi, "")  // Case-insensitive removal of all [JP] instances
    .trim();
});
