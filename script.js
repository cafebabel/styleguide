/* open menu */
var menuButton = document.querySelector('button.menu_button');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
});

/* external link in new tab https://stackoverflow.com/questions/12987963/open-external-links-in-a-new-tab-without-jquery */
function externalLinks() {
    for(var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
}
externalLinks();
