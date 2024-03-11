// Get the button element for installing the PWA
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Handle the installation prompt
  // You can show a custom install button or UI here
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Trigger the installation process
  // This could include showing the installation prompt
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Handle actions after the app is successfully installed
  // This could include tracking the installation or showing a success message
});
