import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const contactAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({});

    tl.to(".contact-header", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power1.in",
    })
    .to(".box-contact", {
        opacity: 1,
        duration: 1.5,
      ease: "power1.in",
    })
    .to(".btn-box", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
    }, 1.5);
    
    
}