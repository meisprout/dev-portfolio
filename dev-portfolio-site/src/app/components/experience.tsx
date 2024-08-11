import styles from "../styles/experience.module.css";

interface ExperienceListProps {
  affiliation: string;
  role: string;
  description: string;
}

function ExperienceList({ affiliation, role, description }: ExperienceListProps) {
  return (
    <li className={`d-flex gap-4`}>
      <img
        src="../sparkle.svg"
        className={`${styles["sparkle-bullet"]} mt-1`}
        width={25}
        height={25}
      />
      <div className={`d-flex flex-lg-row flex-column`}>
        <div className={`w-75 w-lg-100 gap-4`}>
          <p className={`mb-0 pb-0 fw-bold fs-5`}>{affiliation}</p>
          <p>{role}</p>
        </div>
        <div className={`w-lg-75 w-100 ps-lg-4`}>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} d-flex flex-lg-row flex-column`}>
      <div className={`${styles["experience-list"]} w-lg-50 p-4`}>
        <h2>Experiences</h2>
        <ul className={"list-unstyled mt-4"}>
          <ExperienceList
            affiliation="Prosperna"
            role="Front-end Development Intern"
            description="During my internship, I conducted User Interface enhancements
            and developed a new feature for the merchant web platform. I also built sample websites for potential clients
            using the platform's own website builder, utilizing Bootstrap and custom CSS to implement a more dynamic interface."
          />
          <ExperienceList
            affiliation="e-ganapp - A Seamless Event Management System for Mapúa MCL (Thesis Project)"
            role="Web Developer and User-interface Designer"
            description="I serve as the web developer and user-interface designer of e-ganapp. During the UI design process,
            I ensured that the needs of the Mapúa MCL student organization heads and the Center for Student Activities and Discipline head are met in the web application.
            I also developed the front-end interface for the organizer and attendee platform.
            I also aided event attendees in using the app during the “Technopreneurship: A Journey in Building Your Own Tech Startup” Seminar 2024 held in Mapúa MCL."
          />
          <ExperienceList
            affiliation="Mapúa Malayan Colleges Laguna Cup 2024 (Mapúa MCL Cup 2024)"
            role="Art/Merch Director"
            description="During the annual interschool event, I collaborated with the Office for Corporate Communications (OCC) and Creatives Director to 
            discuss design approaches, ensure branding consistency, and produce physical materials for the event, such as tarpaulins, awards, and uniforms.
            As the head of the Art/Merch team, I manage my associates to ensure that outputs are of quality and followed the event branding."
          />
          <ExperienceList
            affiliation="Mapúa Malayan Colleges Laguna Supreme Student Council (MMCL-SSC)"
            role="Creatives Director"
            description=" I produced publication materials, physical merchandise, awarding materials, and custom assets such as illustrations and logos, 
            appropriate to the requirements of each events and announcement. I also work closely with the Creatives Committee
            and the Office for Corporate Communications (OCC) to discuss design approaches and ensure branding consistency for school events.
           As the Creatives Director, I manage my associates to ensure quality outputs and branding consistency in every deliverables."
          />
          <ExperienceList
            affiliation="Mapúa Malayan Colleges Laguna College of Computer Science Student Council (MMCL-CCIS SC)"
            role="Creatives Volunteer"
            description="I delivered publication materials, awarding materials, and physical merchandise such as t-shirts during my time as a volunteer.
            I also work closely with the CCIS SC and the CCIS Dean to discuss design approaches and ensure branding consistency for CCIS events."
          />
        </ul>
      </div>
    </section>
  );
}
