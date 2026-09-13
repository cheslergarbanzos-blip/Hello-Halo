// Toggles the off-canvas sidebar shared by every page
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("visible");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("visible");
}

menuToggle.addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// Close the sidebar automatically when a link inside it is clicked
sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
