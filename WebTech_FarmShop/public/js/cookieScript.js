let functionalCookie = false;
let expandedCookie = false;

function checkCookie() {

    const cookieAccepted = document.cookie.indexOf('cookie_accepted=true') !== -1;
    const cookieDenied = document.cookie.indexOf('cookie_denied=true') !== -1;

    // Checks if cookies have been accepted
    if (!cookieAccepted && !cookieDenied) {
        showBanner();
    } else {
        unshowBanner();
    }

}

function showBanner() {
    document.querySelector('#cookie-banner').style.display = 'block';
}

function unshowBanner() {
    document.querySelector('#cookie-banner').style.display = 'none';
}

// Initial check to load
checkCookie();


//Accept
document.getElementById('accept-button').addEventListener('click', function () {
    // Setting a cookie to remember users setting
    document.cookie = 'cookie_accepted=true; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/';

    expandedCookie = true;
    expandedCookieManager();

    checkCookie();
});


//Deny
document.getElementById('deny-button').addEventListener('click', function () {
    document.cookie = 'cookie_denied=true; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/';

    functionalCookie = true;

    checkCookie();
});


function expandedCookieManager() {
    /*Out of scope for my individual extension
    Implement tracking, monitoring, etc. to enable statistics about user
    Could be listeners to see where people go, what they click on, what sort of products are popular
     */

}
