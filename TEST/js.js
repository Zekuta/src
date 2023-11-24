document.addEventListener('DOMContentLoaded', function () {
    let lastClickedButtonId = null;
  
    // Add click event listeners to the buttons
    document.getElementById('btnUSER').addEventListener('click', toggleSubMenu);
    document.getElementById('btnMENU').addEventListener('click', toggleSubMenu);
  
    function toggleSubMenu(event) {
      const currentButtonId = event.currentTarget.id;
      const submenuId = 'submenu' + currentButtonId.slice(3);
      const submenu = document.getElementById(submenuId);
  
      if (lastClickedButtonId === currentButtonId) {
        // If clicking on the same button, toggle the visibility
        submenu.classList.toggle('visible');
      } else {
        // If clicking on a different button, hide the previous submenu and show the current one
        if (lastClickedButtonId) {
          const lastSubmenuId = 'submenu' + lastClickedButtonId.slice(3);
          const lastSubmenu = document.getElementById(lastSubmenuId);
          lastSubmenu.classList.remove('visible');
        }
        submenu.classList.add('visible');
      }
  
      lastClickedButtonId = currentButtonId;
    }
  });


  //codigo old

  document.addEventListener('DOMContentLoaded', function () {
    let lastClickedButtonId = null;
  
    // Add click event listeners to the buttons
    document.getElementById('btnUSER-OLD').addEventListener('click', toggleSubMenu);
    document.getElementById('btnMENU-OLD').addEventListener('click', toggleSubMenu);
  
    function toggleSubMenu(event) {
      const currentButtonId = event.currentTarget.id;
      const submenuId = 'submenu' + currentButtonId.slice(3);
      const submenu = document.getElementById(submenuId);
  
      if (lastClickedButtonId === currentButtonId) {
        // If clicking on the same button, toggle the visibility
        submenu.classList.toggle('visible');
      } else {
        // If clicking on a different button, hide the previous submenu and show the current one
        if (lastClickedButtonId) {
          const lastSubmenuId = 'submenu' + lastClickedButtonId.slice(3);
          const lastSubmenu = document.getElementById(lastSubmenuId);
          lastSubmenu.classList.remove('visible');
        }
        submenu.classList.add('visible');
      }
  
      lastClickedButtonId = currentButtonId;
    }
  });