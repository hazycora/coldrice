const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

var captchaElement = document.getElementById("captcha-div");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");

  if(captchaElement){
    captchaElement.setAttribute("data-theme", "dark");
  }
} else {
  document.body.classList.remove("dark-theme");

  if(captchaElement){
    captchaElement.setAttribute("data-theme", "light");
  }
}
