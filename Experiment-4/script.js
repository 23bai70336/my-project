// Insert image dynamically
const imgContainer = document.getElementById("image-container");
const img = document.createElement("img");
img.src = "4exx.png";   // keep this image in the same folder as index.html
img.alt = "Character Counter Example";
imgContainer.appendChild(img);

// Function to update character count
function updateCount(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const count = document.getElementById(countId);

  textarea.addEventListener("input", () => {
    count.textContent = textarea.value.length;
  });
}

// Initialize counters
updateCount("textarea1", "count1");
updateCount("textarea2", "count2");