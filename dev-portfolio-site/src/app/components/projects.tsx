import styles from "../styles/projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from 'react';


const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    border: '3px solid #5D3D87',
    objectFit: 'cover' as CSSProperties['objectFit'] // Explicitly define the type for objectFit
  }

interface ProjectContentProps {
  name: string;
  description: string;
  skills: string[];
  img: any;
  hasLink:boolean;
  linkLabel: string;
  linkHref: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ name, description, skills, img, hasLink, linkLabel, linkHref}) => {
  const skillListItem = skills.map((skill, index) => (
    <li key={index} className={`${styles.skill} p-2`}>{skill}</li>
  ));

  return (
    <div className={`${styles["project-content"]} p-4 mb-4 d-flex flex-lg-row flex-column align-items-center justify-content-between`}>
      <div className={`${styles["project-text"]} w-lg-75 pe-lg-4`}>
        <p className={`fs-3 fw-semibold ${styles["project-name"]}`}>{name}</p>
        <ul className={`d-flex gap-3 list-unstyled`}>
          {skillListItem}
        </ul>
        <p>{description}</p>
        {
          hasLink&&
          <Link href={linkHref} target="blank">
            <button className={`btn mb-lg-0 mb-4`}>{linkLabel}</button>
          </Link>
        }
        
      </div>
      <div>
       {
          hasLink?(
            <Link href={linkHref} target="blank">
            <div className={`${styles["project-img"]}`}>
              <img
                src={img}
                width={0}
                height={0}
                placeholder="empty"
                style={imageStyle}
                alt="image"
              />
            </div>
          </Link>):
          <div className={`${styles["project-img"]}`}>
            <img
              src={img}
              width={0}
              height={0}
              placeholder="empty"
              style={imageStyle}
              alt="image"
            />
          </div>
        }
        
        
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className={`${styles.projects} d-flex flex-column align-items-center`}>
      <h1>Projects</h1>
      <div>
        <ProjectContent
          name="Product Image Labels"
          description="A new feature in the Prosperna merchant platform. Utilized ReactJS and NextJS for the interface and Postman API for data retrieval."
          skills={["Front-end Development"]}
          img="/images/project_preview/product-image-labels.webp"
          hasLink={false}
          linkLabel=""
          linkHref=""
        />
        <ProjectContent
          name="e-ganapp Web Application"
          description="Thesis project for the Mapúa MCL Computer Science program. A seamless event management system for Mapúa MCL event organizers and attendees. Designed the interface for the web application based on organizer requirements. 
          Utilized jQuery and Bootstrap for the user interface and PHP and MySQL queries for retrieving relevant data."
          skills={["Front-end Development", "UI Design"]}
          img="/images/project_preview/e-ganapp.webp"
          hasLink={true}
          linkLabel="Visit Site"
          linkHref="https://e-ganapp.mcl-ccis.net/"
        />
        <ProjectContent
          name="Art Portfolio"
          description="A web portfolio showcasing my illustrations, along with my commission procedures. Integrated Notion API to retrieve data from my Notion teamspace for a more convenient content management. In the process of design revamp."
          skills={["Front-end Development", "UI Design"]}
          img="/images/project_preview/loafsproutartportfolio.webp"
          hasLink={true}
          linkLabel="Visit Site"
          linkHref="https://loafsprout.vercel.app/"
        />
        <ProjectContent
          name="Wheein Day 2023"
          description="(unfinished) A tribute for Jung Wheein’s birthday. Used this personal mini-project to practice GSAP animations by implementing scroll animations for dynamic web experiences. Only available in desktop/wide view."
          skills={["Front-end Development", "UI Design"]}
          img="/images/project_preview/wheeinday.webp"
          hasLink={true}
          linkLabel="Visit Site"
          linkHref="https://wheeinday2023.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Projects;