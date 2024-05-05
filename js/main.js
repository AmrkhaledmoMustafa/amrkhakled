window.addEventListener("scroll",() => {
    if (window.scrollY > 100) {
        headerElement.classlist.add ("scroll-down")
     } else {
        headerElement.classlist.remove ("scroll-down")

    }   
})