import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const aboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});

  tl.to(".h1-text", {
    opacity: 1,
    translateX: 0,
    duration: 0.5,
  });
  tl.to(".h2-text", {
    opacity: 1,
    translateY: 0,
    duration: 0.5,
  });

  gsap.to(".s-content", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .5,
    scrollTrigger: {
      trigger: ".image",
      start: "top center+=300",
    },
  });
};
