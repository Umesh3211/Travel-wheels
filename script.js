 gsap.from('#nav h3',{
    y: -50,
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
    stagger:0.25,
 })

 gsap.from('#main h1',{
    x: -100,
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
 })

gsap.from('img',{
    x:50,
    duration:0.8,
    delay:0.3,
    opacity:0,
    rotate:100,
    stagger:0.5,
})
