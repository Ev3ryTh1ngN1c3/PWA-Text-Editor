(() => {
    var __webpack_modules__ = ({
        "./src/js/install.js": (() => {
            const butInstall = document.getElementById('buttonInstall');

            window.addEventListener('beforeinstallprompt', (event) => {
                // Handle the beforeinstallprompt event
            });

            butInstall.addEventListener('click', async () => {
                // Handle the click event for installing the PWA
            });

            window.addEventListener('appinstalled', (event) => {
                // Handle the appinstalled event
            });

            //# sourceURL=webpack://JATE/./src/js/install.js?
        }) 
    });

    var __webpack_exports__ = {};
    __webpack_modules__["./src/js/install.js"]();
})();