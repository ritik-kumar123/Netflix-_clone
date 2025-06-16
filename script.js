gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".navbar-logo img", {
  y: -30,
  opacity: 0,
  duration: 0.3,
  delay: 0.1,
});

tl.from(".navbar-actions .btn", {
  y: -30,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
});

tl.from(".hero .form", {
  y: -30,
  scale: 2,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});

tl.from(".hero .heading", {
  y:-30,
  repeat:-1,
  yoyo: true,
  duration: 0.5,
});


// Page 2 Features
document.querySelectorAll(".feature").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      end: "top 30%",
      scrub: true,
    },
  });

  tl.from(
    section.querySelector(".feature-text"),
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    0
  );

  tl.from(
    section.querySelector(".feature-media"),
    {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    0
  );
});

// FAQ
gsap.from("summary", {
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top 80%",
    end: "top 30%",
    scrub: 0,
  },
  opacity: 0,
  scale: 0.5,
  color: "gray",
  duration:0.5,
  ease: "power2.out",
  stagger:0.2
});

// Footer
gsap.from(".footer-column", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 70%",
    end: "top 60%",
    scrub: true,
  },
  opacity: 0,
  x: (index) => (index % 2 === 0 ? 100 : -100),
  duration: 0.5,
  stagger: 0.2,
  ease: "power2.out",
},0);

