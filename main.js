gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const scrub = 2;
  const zoomEndBackground = 1.5;
  const zoomEndText = 4;
  const markers = false;
  const ease = "none";

  gsap.to(".first-content .text", {
    opacity: 0,
    scale: zoomEndText,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".first-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  // gsap.to(".first-content .text", {
  //   opacity: 0,
  //   ease: ease,
  //   scrollTrigger: {
  //     markers: markers,
  //     trigger: ".first-content",
  //     start: "center 100%",
  //     end: "center 0%",
  //     scrub: scrub,
  //   },
  // });

  gsap.to(".second-content .background", {
    scale: zoomEndBackground,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.fromTo(
    ".second-content",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: ease,
      scrollTrigger: {
        markers: markers,
        trigger: ".second-content",
        start: "top 100%",
        end: "top top",
        scrub: scrub,
      },
    }
  );

  gsap.to(".second-content .item.-item1", {
    scale: zoomEndBackground * 1.5,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item2", {
    scale: zoomEndBackground * 2,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item3", {
    scale: zoomEndBackground * 4,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item4", {
    scale: zoomEndBackground * 3,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item5", {
    scale: zoomEndBackground * 2,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item6", {
    scale: zoomEndBackground * 4,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item7", {
    scale: zoomEndBackground * 10,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .item.-item8", {
    scale: zoomEndBackground * 6,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".second-content .text", {
    scale: zoomEndText,
    opacity: 0,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".second-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  // gsap.to(".second-content .text", {
  //   opacity: 0,
  //   ease: ease,
  //   scrollTrigger: {
  //     markers: markers,
  //     trigger: ".second-content",
  //     start: "center 100%",
  //     end: "center 0%",
  //     scrub: scrub,
  //   },
  // });

  gsap.to(".third-content .background", {
    scale: zoomEndBackground,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".third-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.fromTo(
    ".third-content",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: ease,
      scrollTrigger: {
        markers: markers,
        trigger: ".third-content",
        start: "top 100%",
        end: "top top",
        scrub: scrub,
      },
    }
  );

  gsap.to(".third-content .item.-item1", {
    scale: zoomEndBackground * 1.5,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".third-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".third-content .item.-item2", {
    scale: zoomEndBackground * 2,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".third-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".third-content .item.-item3", {
    scale: zoomEndBackground * 4,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".third-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".third-content .text", {
    scale: zoomEndText,
    opacity: 0,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".third-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  // gsap.to(".third-content .text", {
  //   opacity: 0,
  //   ease: ease,
  //   scrollTrigger: {
  //     markers: markers,
  //     trigger: ".third-content",
  //     start: "center 100%",
  //     end: "center 0%",
  //     scrub: scrub,
  //   },
  // });

  gsap.to(".fourth-content .background", {
    scale: zoomEndBackground,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.fromTo(
    ".fourth-content",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: ease,
      scrollTrigger: {
        markers: markers,
        trigger: ".fourth-content",
        start: "top 100%",
        end: "top top",
        scrub: scrub,
      },
    }
  );

  gsap.to(".fourth-content .item.-item1", {
    scale: zoomEndBackground * 1.5,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".fourth-content .item.-item2", {
    scale: zoomEndBackground * 2,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".fourth-content .item.-item3", {
    scale: zoomEndBackground * 4,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".fourth-content .text", {
    scale: 2,
    opacity: 1,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });

  gsap.to(".fourth-content .icon_box", {
    scale: 2,
    opacity: 1,
    ease: ease,
    scrollTrigger: {
      markers: markers,
      trigger: ".fourth-content",
      start: "top 100%",
      end: "bottom 0%",
      scrub: scrub,
    },
  });
});
