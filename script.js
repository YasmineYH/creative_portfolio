 window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    const loaderimg = document.querySelector(".loader img")
    
    loader.classList.add("loaded")
    loaderimg.classList.add("loaded")

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })
 })


