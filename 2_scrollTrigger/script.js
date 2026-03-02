// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })


// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:1.5,
//     x:500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 35%",
//         scrub:1
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:1.5,
//     x:-500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 100%",
//         end:"top 35%",
//         scrub:1

//     }
// })

// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })



gsap.to("#page1 h1", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end: "top -200%",
        scrub:5,
        pin:true
    }
})
gsap.to("#page2 h1", {
    // transform: "translateX(-130%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller:"body",
        markers:true,
        // start:"top 0%",
        end: "top 0%",
        scrub:5,
        pin:true
    }
})
gsap.to("#page3 h1", {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end: "top -200%",
        scrub:5,
        pin:true
    }
})