var tl = gsap.timeline()

tl.from("h2" ,{
    y:-20,
    opacity:0,
    duration:.5,
    delay:.5
})
tl.from("h4", {
    y:-20,
    opacity:0,
    stagger:.33
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:1.2
})