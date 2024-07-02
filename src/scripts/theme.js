/* Desenvolva sua lógica aqui ... */
 const darkMode = () => {
    const darkBtn = document.querySelector(".header__btn");
    const html = document.querySelector("html");

    darkBtn.addEventListener("click", () => {
        const dark = html.classList.toggle("dark-mode");
        darkBtn.classList.toggle("header__btn--dark-mode")

        localStorage.setItem("@OpenMusic: dark-mode" , dark)
    })
}

 const verifyMode = () => {
    const dark = JSON.parse(localStorage.getItem("@OpenMusic: dark-mode"));

    const html = document.querySelector("html");
    if(dark){
        html.classList.add("dark-mode");
    }
}
darkMode();
verifyMode();

export {darkMode, verifyMode};