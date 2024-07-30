import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const aboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});

  tl.to(".h1-text", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .8,
    ease: "power1.in",
  });
  tl.to(".h2-text", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .5,
    ease: "power1.in",
  });

  gsap.to(".s-content", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".image",
      start: "top center+=300",
    },
  });
};
