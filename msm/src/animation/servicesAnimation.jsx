import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const servicesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});
  
  tl.to(".serv-title", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
      ease: "power3.in",
})
.to(".services-title", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    ease: "power1.out",
})
.to(".serv-para", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
}, 1)
.to(".sidebar-link", {
    opacity:1,
    duration: 1,
    ease: "power1.out",
  }, 1.5)
  
}