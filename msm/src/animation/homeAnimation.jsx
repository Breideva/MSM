import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const homeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  let tl = gsap.timeline({});
  // Header
  tl.to(".home-header", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.8,
    ease: "power1.out",
  })
    .to(".header-h1", {
      opacity: 1,
      translateX: 0,
      duration: 1,
      ease: "power1.out",
    })
    .to(".header-h3", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
    });
  //First Body
  gsap.to(".sunset-1", {
    // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".first-content",
      start: "top center",
    },
  });
  gsap.to(".sunset-2", {
    duration: 1,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".first-content",
      start: "top center",
    },
  });
  gsap.to(".home-first-body", {
    y: -250,
    opacity: 0,
    duration: 1,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".home-first-body",
      start: "top center",
      end: "bottom top",
      scrub: 2,
    },
  });
  gsap.to(".first-content", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.8,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".first-content",
      start: "top bottom-=100px",
    },
  });
  // Second Body

  mm.add("(min-width: 1400px)", () => {
    const animation = gsap.to(".layer-1", {
      translateX: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".layer-1",
        scrub: 3,
        start: "top bottom",
      },
    });
    return () => {
      animation.kill();
      ScrollTrigger.kill();
    };
  });
  gsap.to(".second-body-header", {
    translateY: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".second-body-header",
      start: "top bottom",
      end: "top top",
    },
  });
  gsap.to(".second-body-button", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".second-body-header",
      start: "top bottom",
      end: "top top",
    },
  });
  // Third Body
  gsap.to(".normal-img", {
    opacity: 1,
    translateY: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".text-box",
      start: "top center",
    },
  });
  gsap.to(".text-box", {
    opacity: 1,
    translateY: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".text-box",
      start: "top center",
    },
  });
  gsap.to(".home-third-content", {
    y: -500,
    opacity: 0,
    duration: 1,
    ease: "power2.in",

    scrollTrigger: {
      trigger: ".home-third-content",
      start: "top center",
      end: "bottom top",
      scrub: 2,
    },
  });
  // Fourth Body

  mm.add("(min-width: 1400px)", () => {
    const animation = gsap.to(".layer-2", {
      translateX: 0,
      duration: 3,
      scrollTrigger: {
        trigger: ".layer-2",
        scrub: 3,
        start: "top bottom",
      },
    });
    return () => {
      animation.kill();
      ScrollTrigger.kill();
    };
  });

  gsap.to(".fourth-header", {
    opacity: 1,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".fourth-header",
      start: "top center",
    },
  });
  gsap.to(".body-main", {
    translateX: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".body-text",
      start: "top bottom",
    },
  });
  gsap.to(".home-fourth-body", {
    y: -250,
    opacity: 0,
    duration: 1,
    ease: "power2.in",

    scrollTrigger: {
      trigger: ".home-fourth-body",
      start: "top center",
      end: "bottom top",
      scrub: 2,
    },
  });
  // Fifth Body
  gsap.to(".home-heading", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
      trigger: ".pfl-pic",
      start: "top bottom",
    },
  });
  gsap.to(".review-box", {
    duration: 1,
    translateY: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".pfl-pic",
      start: "top bottom",
    },
  })
};
