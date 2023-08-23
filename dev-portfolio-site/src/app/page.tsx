'use client'

import Image from 'next/image'
import styles from './styles/page.module.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react'
import React from 'react';
import Project from './components/projects';

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

      gsap.from("#hero-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#hero"
        }
      });

      const skillItems = gsap.utils.toArray<HTMLElement>("#skills-container div");

      skillItems.forEach((item, i)=>{
        gsap.from(item, {
          opacity:0,
          duration:1.5,
          delay:(i*2)/50,
          ease:"SlowMo.easeInOut",
          scrollTrigger:{
            trigger: item,
        }
        });
      });

      gsap.to("#skills-h2 span", {
        y: "0%" ,
        duration:1,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger: "#skills",
      }
      });

      gsap.from("#skills-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#skills"
        }
      });

      gsap.to("#projects-h2 span", {
        y: "0%" ,
        duration:1.5,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger: "#projects-p",
      }
      });

      gsap.from("#projects-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#projects-container"
        }
      });

      const projItems = gsap.utils.toArray<HTMLElement>("#projects-container div");

      projItems.forEach((item, i)=>{
        gsap.from(item, {
          opacity:0,
          duration:1.5,
          delay:(i*4)/50,
          ease:"SlowMo.easeInOut",
          scrollTrigger:{
            trigger: item,
        }
        });
      });

      gsap.to("#about-h2 span", {
        y: "0%" ,
        duration:1.5,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger: "#about-p",
      }
      });

      gsap.from("#about-p", { 
        opacity:0,
        delay:1,
        yPercent:3,
        scrollTrigger:{
          trigger:"#about-p"
        }
      });

      gsap.set("#about-image",{
        rotation:-5,
        yPercent:7
      })

      gsap.from("#about-image",{
        scrollTrigger:{
          trigger:"#about-image",
          scrub:1
        },
          duration:0.5,
          rotation:5,
          yPercent:-2,
          ease: "SlowMo.easeInOut"
      })


    }, app);
    
    return () => ctx.revert();
  }, []);

  return (
    <>
    <header className={styles.header}>
        <div className={styles.logo}>
            <Image src="/icons/logo.svg" layout='fill' alt="meisprout logo"/>
        </div>
        <nav className={styles.nav}>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
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
            <span>What I can do</span>
          </div>
        </h2>

        <div id="skills-container" className={styles["skills-divcontainer"]}>

          <div className={styles["skills-div"]}>
            <div className={styles["skills-icons"]}>
                <Image src="/icons/webdev.svg" layout='fill' alt="web development icon"/>
            </div>
            <h3>Web Development</h3>
            <p>From building elements with JavaScript frameworks and animating with GSAP, I can develop fully-functional and flexible interfaces in the web.</p>
          </div>

          <div className={styles["skills-div"]}>
            <div className={styles["skills-icons"]}>
                <Image src="/icons/webdes.svg" layout='fill' alt="web design icon"/>
            </div>
            <h3>Web Design</h3>
            <p>I can design visually appealing web interfaces with the help of my extensive experience in the creative field.</p>
          </div>

        </div>

      </section>
        
      <section id="projects" className={styles.projects}>

        <h2 id="projects-h2">
          <div>
            <span>Projects</span>
          </div>
        </h2>
        <p id="projects-p">Some projects are not included for confidentiality purposes.</p>

        <div id="projects-container" className={styles["projects-divcontainer"]}>

            <Project 
              src="/images/wheeinday.png" 
              name="Wheein Day 2023" 
              description="A tribute for Jung Wheein&#39;s birthday."
              tools={["NextJS","CSS","GSAP"]}
              link="https://wheeinday2023.vercel.app"/>

            <Project 
              src="/images/mmmplus.png" 
              name="Mamamoo+ fansite" 
              description="A hypothetical theater site inspired by Act 1 Scene 1 album."
              tools={["NextJS","CSS","GSAP"]}
              link="https://mmmplus.vercel.app"/>

            <Project 
              src="/images/artportfolio.png" 
              name="Loafsprout Art Portfolio" 
              description="A collection of art and commission information with Notion API integration."
              tools={["NextJS","CSS","GSAP"]}
              link="https://loafsprout.vercel.app"/>

            <Project 
            src="/images/pawbuddy.png" 
            name="Pawbuddy" 
            description="A laboratory activity remake for a hypothetical animal shelter."
            tools={["JavaScript","SASS","GSAP"]}
            link="https://meisprout.github.io/pawbuddy/"/>

        </div>

      </section>

      <section id="about" className={styles.about}>
        <div id="about-image" className={styles["about-image"]}>
          <Image src="/images/me.png" layout='fill' alt="web design icon"/>
        </div>

        <div className={styles["about-text"]}>
          <h2 id="about-h2">
            <div>
              <span>about me</span>
            </div>
          </h2>
          <div id="about-p">
            <p>
              Hello ! I am Drey &#40;she/her&#41;, a current Computer Science major from the Philippines. I also serve as a Creative Associate for my university's supreme student council for 3 years.
            </p>
            
            <p>
              Being an artist for a long time, I am fascinated with the creative and artistic capabilities of the web and tech overall. I strongly believe that web and software interfaces should be given importance to create an impactful image, similar to a person dressing up to make a good impression. With that, I aspire to be involved on how to make interfaces enjoyable to use and look at by everyone. 
            </p>

            <p>
              I am looking forward to work with you all !
            </p>
          </div>
        </div>

      </section>

    </main>

    </>
    
  )
}
