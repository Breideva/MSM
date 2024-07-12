import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const homeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});
  // Header
  tl.to(".home-header", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "power1.in",
  })
    .to(".header-h1", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.8,
      ease: "power3.in",
    })
    .to(".header-h3", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .8,
    });
  //First Body
  gsap.to(".sunset-1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    scrollTrigger: {
      trigger: ".first-content",
      start: "top center",    },
  });
  gsap.to(".sunset-2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    delay: 1,
    scrollTrigger: {
      trigger: ".first-content",
      start: "top center",
    },
  });
  gsap.to(".first-content", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".first-content",
      start: "top bottom-=100px",
    },
  });
  // Second Body
  gsap.to(".second-body-content", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 3,
    scrollTrigger: {
      trigger: ".second-body-content",
      scrub: 2,
      start: "top bottom",
    },
  });
  // Third Body
  gsap.to(".normal-img", {
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: ".text-box",
      start: "top center",
    },
  });
  gsap.to(".text-box", {
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: ".text-box",
      start: "top center",
    },
  });
  // Fourth Body
  gsap.to(".fourth-header", {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".fourth-header",
      start: "top center",
    },
  });
  gsap.to(".body-main", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 4,
    scrollTrigger: {
      trigger: ".body-text",
      start: "top bottom",
    },
  });
  // Fifth Body

  gsap.to(".fifth-h1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: .5,
    delay: 1,
    scrollTrigger: {
      trigger: ".pfl-pic",
      start: "top bottom",
    },
  });
  gsap.to(".review-box", {
    duration: 2,
    ease: "steps(12)",
    opacity: 1,
    scrollTrigger: {
      trigger: ".pfl-pic",
      start: "top bottom",
    },
  });
};
