




var tl = gsap.timeline()




tl.from(".nav", {
    y:-100,
    duration:2,
    ease:Expo.easeInOut,

})

tl.to(".effect", {
    opacity:1,
    duration:2,
    ease:Expo.easeInOut,
    onStart: function(){
        $('.effect').textillate({ in: { effect: 'fadeInUp' } });
    }
}, "-=1.4")

tl.from(".effect2", {
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    y:40,
}, "-=2")

// tl.from(".effect3" , {
//     opacity:0,
//     y:40,
//     stagger:.2,
//     duration:2,
//     ease:Expo.easeInOut,

// }, "-=2")


tl.from("#mainflower" , {
    // width:0,
    scale:0,
    y:-100,
    opacity:0,
    // rotate:360,
    duration:2,
    ease:Expo.easeInOut,
}, "-=1.5")

