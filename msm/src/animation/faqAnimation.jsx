import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const faqAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({});

    tl.to(".faq-header", {
      opacity: 1,
    translateX: 0,
    duration: 0.5,
    })
    .to(".faq-box", {
        opacity: 1,
        duration: .5,
      ease: "power1.in",
    })
}