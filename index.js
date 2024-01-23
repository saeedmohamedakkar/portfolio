let darkMode = document.querySelector(".dark")






darkMode.addEventListener("click", () => {

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "#eaedf0";
        document.body.style.color = "#2a2d2f";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#bebebe";
    }

})




