function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation()

function navbarAnimation() {
    gsap.to('#nav-logo svg', {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#tab-1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })

    gsap.to('#nav #nav-menu #menu-links', {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#tab-1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })

}
navbarAnimation()


function videoplay() {
    let videocon = document.querySelector('#video-container')
    let playbtn = document.getElementById('play')
    videocon.addEventListener('mouseenter', function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener('mouseout', function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener('mousemove', function (cords) {
        gsap.to(playbtn, {
            left: cords.x - 80,
            top: cords.y - 70
        })
    })
}
videoplay()

function animation_loading() {
    gsap.from("#tab-1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.9,
        stagger: 0.2
    })

    gsap.from("#tab-1 #video-container", {
        scale: 0.8,
        opacity: 0,
        delay: 0.6,
        duration: 0.5,
    })
}
animation_loading()

function mouseEnterImg() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
          left: dets.x,
          top: dets.y,
        });
      });
    let tab3Children = document.querySelectorAll('.tab-3-child')
    tab3Children.forEach((child) => {
        child.addEventListener('mouseenter', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%,-50%) scale(1)'
            })
        })
        child.addEventListener('mouseout', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })
    })
}

mouseEnterImg()

const tab5Inp=document.getElementById('tab-5-input')
const tab5Btn=document.getElementById('tab-5-button');
let value=tab5Inp.value;

tab5Btn.addEventListener('click',function(){
    if(!value){
        document.getElementById('tab-5-error').style.display='block'
    }
    else{
        document.getElementById('tab-5-error').style.display='none'
    }
})

function tabBtnFns()
{
    tab5Inp.addEventListener('focus', function() {
        tab5Btn.innerHTML = `<i class="ri-corner-down-left-fill"></i>`; // Change 
    });
    
    tab5Inp.addEventListener('blur', function() {
            tab5Btn.innerHTML = `<i class="ri-arrow-right-line"></i>`;
    });
}
tabBtnFns()
