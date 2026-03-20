function brokenText() {

    const h1 = document.querySelector("h1")
    const h1Text = h1.textContent

    let splittedText = h1Text.split("")

    let halfValue = Math.floor(splittedText.length/2)
    let clutter = ""
    
    splittedText.forEach( (e,index) => {
        if (index<halfValue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
        
    })
    h1.innerHTML = clutter

}

brokenText()

gsap.from("h1 .a", {
    y: 50,
    duration: .6,
    opacity: 0,
    stagger: .15,
})
gsap.from("h1 .b", {
    y: 50,
    duration: .6,
    opacity: 0,
    stagger: -0.15,
})