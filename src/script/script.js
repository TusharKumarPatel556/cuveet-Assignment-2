const aside = document.querySelector(".aside-area")
const section = document.querySelector(".content-area")
console.log(section)

aside.addEventListener("onmouseover", () => {
    section.style.display = "none";
})