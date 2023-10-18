const drawerToggle = document.getElementById("drawer-toggle");
const drawer = document.getElementById("drawer");

drawerToggle?.addEventListener("click", () => {
  drawer?.classList.toggle("translate-x-full");
});