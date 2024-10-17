import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const servicesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({});
  
  tl.to(".services-header", {
    opacity: 1,
    translateX: 0,
    duration: .5,
})
.to(".services-title", {
  opacity: 1,
  translateY: 0,
    duration: .5,
    ease: "power1.out",
})
.to(".serv-para", {
    opacity: 1,
    translateY: 0,
      duration: .5,
}, .8)
.to(".sidebar-link", {
    opacity:1,
    duration: .5,
    ease: "power1.out",
  }, 1)
  
}