let menu = document.querySelector("#nav i")
let close = document.querySelector("#full i")

let tl = gsap.timeline()
let tll = gsap.timeline({ paused:true })

//nav animation
tl.from("#nav h2" ,{
    y:-20,
    opacity:0,
    duration:.5,
    delay:.5
})
tl.from("#nav i", {
    y:-20,
    opacity:0,
    stagger:.33
})


// menu animation
tll.to("#full",{
        right:0,
        duration:.3,
    })

tll.from("#full h4",{
        x:100,
        stagger:.3,
        opacity:0,
    })

tll.from("#full i",{
        opacity:0,
    })


menu.addEventListener("click", function() {
    tll.play(0)
})

close.addEventListener("click", function() {
    tll.reverse()
})