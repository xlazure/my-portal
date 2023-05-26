import React, { useEffect, useRef } from "react";
import styles from "./top-section.module.scss";
// import  Mountains  from '@/assets/mountains.svg'
import mountains1 from "@/assets/mountains-1.svg";
import mountains2 from "@/assets/mountains-2.svg";
import mountains3 from "@/assets/mountains-3.svg";
import stars from "@/assets/stars.jpg";
import RotatingStars from "../../../components/public/canvas/stars";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styled } from "styled-components";

gsap.registerPlugin(ScrollTrigger);
export default function TopSection() {
  const containerRef = useRef(null);
  const imgRef1 = useRef(null);
const imgRef2 = useRef(null);
const imgRef3 = useRef(null);
  useEffect(() => {


    gsap.to(".parallax-bg", {
      scrollTrigger: {
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });
  }, []);

  return (
    <div className={`${styles.full} ${styles.center} ${styles.container}`}>
      <h1>Front end/Web Developer</h1>

      <Test
        className="parallax-container"
        style={{ color: "white" }}
        ref={containerRef}
      >
        <img
          src={mountains3}
          alt="ss"
          style={{ width: "100%" }}
          data-speed="1.5"
          className={`parallax-bg `}
          ref={imgRef1}

        />
        <img
          src={mountains2}
          alt="ss"
          style={{ width: "100%" }}
          data-speed="1.2"
          className={`parallax-bg `}
          ref={imgRef2}
        />
        <img
          src={mountains1}
          alt="ss"
          style={{ width: "100%" }}
          data-speed="1.1"
          className={`parallax-bg `}
          ref={imgRef3}
        />
      </Test>

      <RotatingStars />
    </div>
  );
}

const Test = styled.div`
  bottom: 0;
  img {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;
