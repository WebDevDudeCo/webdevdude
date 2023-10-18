const drawerToggle = document.getElementById("drawer-toggle");
const drawer = document.getElementById("drawer");


drawerToggle?.addEventListener("click", () => {
    console.log('opening drawer');
  drawer?.classList.toggle("translate-x-full");
});