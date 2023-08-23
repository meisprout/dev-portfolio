'use client'

import Image from 'next/image'
import styles from './styles/page.module.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react'
import React from 'react';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const app = React.useRef<HTMLInputElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("#hero-h1 span");

      heroItems.forEach((item, i)=>{
        gsap.to(item, {
          y: "0%" ,
          duration:1,
          delay:(i*2)/50,
          ease:"SlowMo.easeInOut",
          scrollTrigger:{
            trigger: item,
        }
        });
      });

      gsap.from(".hero-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#hero"
        }
      });

      gsap.set("#skills",{
        background:"radial-gradient(50% 50% at 50% 50%, #e2cbff 0%, #F5F4EB 100%);",
        color:"#5D3D87"
      });
      gsap.to("#skills", {
        scrollTrigger: {
          trigger: ".skills-h2",
          start: "5%",
          end: "center",
          scrub: 0.25
        },
        background:"#5D3D87",
        color:"#F5F4EB",
      });

      gsap.to(".skills-h2 .line", {
        y: "0%" ,
        duration:1,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger: "#skills",
      }
      });

      gsap.from(".skills-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#skills"
        }
      });


    }, app);
    
    return () => ctx.revert();
  }, []);

  return (
    <>
    <header className={styles.header}>
        <div className={styles.logo}>
            <Image src="/images/logo.svg" layout='fill' alt="meisprout logo"/>
        </div>
        <nav className={styles.nav}>
          <a href="#skills">skills</a>
          <a href="#works">works</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
    </header>
    <main id="main" ref={app} className={styles.main}>
      <section id="hero" className={styles.hero}>

        <h1 id="hero-h1">
          <div>
            <span>hello ! i seek to</span>
          </div>
          <div>
            <span>develop <i>creative visuals</i></span>
          </div>
          <div>
            <span>through code !</span>
          </div>
        </h1>

        <p id="hero-p">
          I am a front-end developer based in the Philippines, interested in exploring and contributing artistic approaches in the web.
        </p>

      </section>

      <section id="skills" className={styles.skills}>

        <h2 id="skills-h2">
          <div>
            <span>what i can do</span>
          </div>
        </h2>

        <div className={styles["skills-divcontainer"]}>

          <div className={styles["skills-div"]}>
            <div className={styles["skills-icons"]}>
                <Image src="/images/webdev.svg" layout='fill' alt="web development icon"/>
            </div>
            <h3>Web Development</h3>
            <p>From building elements with JavaScript frameworks and animating with GSAP, I can develop fully-functional and flexible interfaces in the web.</p>
          </div>

          <div className={styles["skills-div"]}>
            <div className={styles["skills-icons"]}>
                <Image src="/images/webdes.svg" layout='fill' alt="web design icon"/>
            </div>
            <h3>Web Design</h3>
            <p>I can design visually appealing web interfaces with the help of my extensive experience in the creative field.</p>
          </div>

        </div>
      </section>
    </main>
    </>
    
  )
}
