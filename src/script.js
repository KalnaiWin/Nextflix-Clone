// Trending
const container = document.getElementById("container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function updateButtons() {
  const paddingLeft = 16; // `pl-4` = 1rem = 16px
  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  // Show "prev" button when scrolled right, hide if at the start
  prev.style.display = container.scrollLeft > paddingLeft ? "block" : "none";
  // Hide "next" button when at the end
  next.style.display =
    container.scrollLeft >= maxScrollLeft - paddingLeft ? "none" : "block";
}
next.addEventListener("click", () => {
  container.scrollBy({ left: 910, behavior: "smooth" });
});
prev.addEventListener("click", () => {
  container.scrollBy({ left: -910, behavior: "smooth" });
});
// Listen for scroll events
container.addEventListener("scroll", updateButtons);
// Run function once to set the initial state
updateButtons();

// Questions
const dtElements = document.querySelectorAll("dt");

dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddID = element.getAttribute("aria-controls"); // Get the target <dd> ID
    const ddElement = document.getElementById(ddID); // Find the corresponding <dd>
    const arrowIcon = element.querySelector("i"); // Select the <i> icon inside <dt>
    // Close all other <dd> elements and reset icons
    document.querySelectorAll("dd").forEach((dd) => {
      if (dd !== ddElement) {
        dd.classList.add("hidden"); // Hide other <dd> elements
      }
    });
    document.querySelectorAll("dt i").forEach((icon) => {
      if (icon !== arrowIcon) {
        icon.classList.remove("-rotate-45"); // Reset other icons
      }
    });
    // Toggle the selected <dd> and its icon
    ddElement.classList.toggle("hidden");
    arrowIcon.classList.toggle("-rotate-45");
  });
});

// Show info of movie

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".pic");
    const closeButtons = document.querySelectorAll(".close-btn"); // Select all close buttons

    // Show the correct info box when an image is clicked
    images.forEach(pic => {
        pic.addEventListener("click", function () {
            const id = this.getAttribute("data-id"); 
            document.querySelector(`#info-${id}`).classList.remove("hidden"); // Show the correct one
        });
    });

    // Close the info box when clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.classList.add("hidden"); // Hide the parent info box
        });
    });
});

