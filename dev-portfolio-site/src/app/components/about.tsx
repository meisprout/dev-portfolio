import styles from "../styles/about.module.css";
import Image from "next/image";
import { CSSProperties } from 'react';

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: '3px solid #5D3D87',
  objectFit: 'cover' as CSSProperties['objectFit'] // Explicitly define the type for objectFit
}

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.about} d-flex flex-lg-row flex-column align-items-center`}>
      <div className={`${styles["img-container"]}`}>
        <img
          src="/images/me.webp"
          alt="Me"
          width={0}
          height={0}
          style={imageStyle}
          placeholder="empty"
        />
      </div>
      <div className={`${styles.text}`}>
        <div>
          <h1>Hello! I’m Eah!</h1>
          <p>Nice to meet you! I am Andrea Mei T. Maala, a BS Computer Science student from Mapúa Malayan Colleges Laguna specializing in Front-end Development and Web and UX/UI Design. 
            I aim to create functional and visually pleasing web interfaces that satisfy the needs of every user
            and make the internet an interesting place to explore with.</p>
          <p>Outside of being a developer, I am also a creative who has done related volunteer work for the Mapúa MCL Supreme Student Council, Mapúa MCL College of Computer Science Student Council, and Mapúa MCL Cup 2024. 
            This shaped my ability to apply design rules and principles in my deliverables, work with different kinds of people, and adapt in a fast-paced environment.</p>
          <p>After hours, I draw, paint, listen to K-Pop and RnB, and watch everything that interests me on Youtube.</p>
        </div>
        <div className={`w-lg-50`}>
          <h2>Skills</h2>
          <ul className={`${styles["skills-list"]} list-unstyled mt-4 gap-3`}>
            <li className={`${styles.skills} p-2 text-center`}>
              HTML/CSS/SCSS
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              Javascript/jQuery
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              Typescript
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              PHP
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              ReactJS
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              NextJS
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              Bootstrap
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              GSAP
            </li>
            <li className={`${styles.skills} p-2 text-center`}>
              Figma
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;
