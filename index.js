let darkMode = document.querySelector(".dark")

let darkM = false



darkMode.addEventListener("click", () => {

    if (darkM == false) {
        darkM = true
        text = true
    }


    else if (darkM == true) {
        darkM = false
        text = false
    }

})


darkMode.addEventListener("click", () => {
    if (darkM == false) {
        document.body.style.backgroundColor = "#eaedf0"
        document.body.style.color = "#2a2d2f"
        darkMode.innerHTML = `<div><i class="fa-regular fa-sun text-warning"></i> </div>`
    }
    else if (darkM == true) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "#bebebe"
        darkMode.innerHTML = `<div><i class="fa-regular fa-moon text-secondary"></i> </div>`
    }
})



