document.addEventListener("DOMContentLoaded", function () {
  var toggler = document.querySelector(".navbar-toggler");
  if (!toggler) {
    return;
  }

  var targetSelector =
    toggler.getAttribute("data-target") || toggler.getAttribute("data-bs-target");
  if (!targetSelector) {
    return;
  }

  var collapse = document.querySelector(targetSelector);
  if (!collapse) {
    return;
  }

  function setExpanded(expanded) {
    toggler.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggler.classList.toggle("collapsed", !expanded);
    collapse.classList.toggle("show", expanded);
  }

  toggler.addEventListener("click", function (event) {
    event.preventDefault();
    var isExpanded = collapse.classList.contains("show");
    setExpanded(!isExpanded);
  });

  var navLinks = collapse.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var togglerVisible = window.getComputedStyle(toggler).display !== "none";
      if (togglerVisible) {
        setExpanded(false);
      }
    });
  });
});
