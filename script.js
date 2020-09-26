gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

    "(min-width: 1200px)": () => {

        const leftJut = (projNum) => {
            gsap.to(`.title-proj${projNum}`, {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:`.slide-proj${projNum}`,
                    // markers: true,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        
        }
        
        leftJut(1)
        leftJut(2)
        leftJut(3)
        leftJut(4)
        leftJut(5)
        leftJut(6)
        
        const bodyTimeline = gsap.timeline({
            scrollTrigger:{
            trigger: ".slides",
            start: "0%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
            // markers: true,
            scrub: 1
            }
        }
        ).to(".title", {y: "-20rem"})
        
        

    },

    "(min-width: 801px, max-width: 1199px)": () => {

        const leftJut = (projNum) => {
            gsap.to(`.title-proj${projNum}`, {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:`.slide-proj${projNum}`,
                    // markers: true,
                    start: "top 30%",
                    end: "10%",
                    // end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        
        }
        leftJut(1)
        leftJut(2)
        leftJut(3)
        leftJut(4)
        // leftJut(5)
        // leftJut(6)

        const bodyTimeline = gsap.timeline({
            scrollTrigger:{
            trigger: ".slides",
            start: "0%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
            // markers: true,
            scrub: 1
            }
        }
        ).to(".title", {y: "-10rem"})


        let leftJutFive = () => {
            gsap.to(".title-proj5", {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:".slide-proj5",
                    markers: true,
                    start: "top 30%",
                    end: "bottom 55%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        }
        leftJutFive()

        let leftJutSix = () => {
            gsap.to(".title-proj6", {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:".slide-proj6",
                    // markers: true,
                    start: "top 60%",
                    end: "25%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        }

        leftJutSix()

    },

    "(max-width: 800px)": () => {
        const leftJut = (projNum) => {
            gsap.to(`.title-proj${projNum}`, {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                // x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:`.slide-proj${projNum}`,
                    // markers: true,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        
        }
        
        leftJut(1)
        leftJut(2)
        leftJut(3)
        leftJut(4)
        leftJut(5)
        leftJut(6)
    }

})


////////////////////////

// const bodyTimeline = gsap.timeline({
//     scrollTrigger:{
//     trigger: ".slides",
//     start: "0%",
//     end: "bottom 50%",
//     toggleActions: "play reverse play reverse",
//     // markers: true,
//     scrub: 1
//     }
// }
// ).to(".title", {y: "-20rem"})


// const leftJut = (projNum) => {
//     gsap.to(`.title-proj${projNum}`, {
//         ease: "power4.inOut",
//         clipPath: "inset(0% 0% 0% 0%)",
//         x: "-9rem",
//         // right: "2rem",
//         backgroundColor: "rgba( 0, 0, 0, 0)",
//         scrollTrigger: {
//             trigger:`.slide-proj${projNum}`,
//             // markers: true,
//             start: "top 50%",
//             end: "bottom 50%",
//             toggleActions: "play reverse play reverse",
//         }
//     }
//     )

// }

// leftJut(1)
// leftJut(2)
// leftJut(3)
// leftJut(4)
// leftJut(5)
// leftJut(6)


