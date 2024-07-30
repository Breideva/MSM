import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const faqAnimation = () => {

  gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({});

    tl.to(".faq-header", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .4,
      ease: "power1.in",
    })
    .to(".faq-box", {
        opacity: 1,
        duration: .5,
      ease: "power1.in",
    })
}