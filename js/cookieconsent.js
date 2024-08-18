(function() {
  // <stdin>
  window.addEventListener("load", function() {
    var cookieID = "NineKafeCookieConsent";
    var storedCookies = document.cookie;
    if (storedCookies) {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        if (cookie.indexOf(cookieID) > -1) {
          return;
        }
      }
    }
    var cookieConsentPopup = document.querySelector("#".concat(cookieID));
    cookieConsentPopup.setAttribute("open", "open");
    cookieConsentPopup.querySelector("button").addEventListener("click", function() {
      cookieConsentPopup.removeAttribute("open");
      var expires = new Date();
      expires.setFullYear(expires.getFullYear() + 2);
      var cookieParams = [
        "".concat(cookieID, "=1"),
        "expires=".concat(expires.toUTCString()),
        "path=/"
      ];
      document.cookie = cookieParams.join(";");
    });
  });
})();
