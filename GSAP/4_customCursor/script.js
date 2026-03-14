let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y, 
        duration: .3
    })
})

image.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale:2, 
        backgroundColor: "#ffffff8a",
    })
})
image.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale:1,
        backgroundColor: "#ffffff",

    })
})