// Node Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Amazing digital marketing strategies! Helped boost our online presence and significantly increased our organic traffic.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Outstanding results! Our social media engagement skyrocketed, and ad campaigns delivered exceptional ROI. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Excellent SEO services! Improved our rankings and drove more qualified leads to our website. Truly a game-changer.",
    name: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Creative and strategic! Developed a winning content strategy that resonated perfectly with our target audience.",
    name: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional and effective! Delivered a comprehensive marketing plan that boosted our brand visibility across multiple channels.",
    name: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Exceptional marketing expertise! Helped us optimize our campaigns, track performance, and achieve our business goals.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our clients say</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
