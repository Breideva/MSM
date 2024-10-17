import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const contactAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({});

    tl.to(".contact-header", {
      opacity: 1,
    translateX: 0,
    duration: 0.5,
    })
    .to(".box-contact", {
      opacity: 1,
      translateY: 0,
      duration: 0.5,
    })
    .to(".btn-box", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
    }, .5);
    
    
}