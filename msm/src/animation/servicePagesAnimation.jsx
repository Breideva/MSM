import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const servicePageAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});

  tl.to(".page-h1", {
    translateX: 0,
    opacity: 1,
    duration: .5,
  })
    .to(".cont-1", {
      opacity: 1,
      translateY: 0,
      duration: .5,
    })
    .to(".page-img-1",{
        opacity: 1,
      duration: 1,
      });
  gsap.to(".cont-2", {
    opacity: 1,
      translateY: 0,
      duration: .5,
    scrollTrigger: {
      trigger: ".cont-2",
      start: "top center",
    },
  });
  gsap.to(".page-img-2", {
    opacity: 1,
      translateY: 0,
      duration: 1,
    scrollTrigger: {
      trigger: ".cont-2",
      start: "top center",
    },
  });
};
