import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const servicePageAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});

  tl.to(".page-h1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .8,
    ease: "power1.in",
  })
    .to(".cont-1", {
      opacity: 1,
      ease: "power1.in",
      duration: 2,
    })
    .to(
      ".page-img-1",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power2.in",
      },
      1
    );
  gsap.to(".cont-2", {
    opacity: 1,
    duration: 2,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".cont-2",
      start: "top center",
    },
  });
  gsap.to(".page-img-2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".cont-2",
      start: "top center",
    },
  });
};
