import Link from 'next/link';
import styles from '../styles/contact.module.css'
import Image from 'next/image'

interface ContactProps {
    src: string,
    name: string,
    link: string;
  }

export default function Contact(props: ContactProps) {
    
    return (
        <div className={styles.container}>
            <Link href={props.link} target="_blank">
                <div className={styles.image}>
                    <Image src={props.src} layout='fill' alt="meisprout logo"/>
                </div>
            </Link>
            <h3>{props.name}</h3>
            
        </div>
    )
  }