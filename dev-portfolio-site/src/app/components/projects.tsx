import Link from 'next/link';
import styles from '../styles/projects.module.css'
import Image from 'next/image'

interface ProjectProps {
    src: string,
    name: string,
    description: string,
    tools: Array<string>,
    link: string;
  }

export default function Project(props: ProjectProps) {
    
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={props.src} layout='fill' alt="meisprout logo"/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <ul>
                {props.tools.map((tools) => (
                    <li>{tools}</li>
                ))}
            </ul>
            <Link href={props.link} target="_blank">Visit website</Link>
        </div>
    )
  }