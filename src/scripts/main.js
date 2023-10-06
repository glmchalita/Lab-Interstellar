document.addEventListener("DOMContentLoaded", function () {
  const logoSection = document.querySelector(".logo");
  const logoHeight = logoSection.clientHeight;
  let oldScroll = window.scrollY;

  window.addEventListener("scroll", function () {
    const rocket = document.querySelector(".rocket");
    if (window.scrollY < logoHeight) {
      hideRocket();
    } else {
      showRocket();
    }

    if (oldScroll < window.scrollY) {
      rocket.style.transform = "rotate(180deg)";
    } else {
      rocket.style.transform = "rotate(0deg)";
    }
    oldScroll = window.scrollY;
  });
});

function hideRocket() {
  const rocket = document.querySelector(".rocket");
  rocket.classList.add("hidden");
}

function showRocket() {
  const rocket = document.querySelector(".rocket");
  rocket.classList.remove("hidden");
}
