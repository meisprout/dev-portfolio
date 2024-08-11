'use client';

import { useState } from "react";
import styles from "../styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <div className={`${styles.nav} position-fixed w-100 z-2 p-3 d-flex align-items-center justify-content-between`}>
      <Link href="./">
        <Image
          src="/header_logo.svg"
          width={50}
          height={50}
          className={`mb-0`}
          alt="Header Logo"
        />
      </Link>

      <div onClick={openNav} className={`${styles["sidenav-button"]} d-lg-none d-block`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
      <ul className={`list-unstyled ${styles.sidenav} ${isOpen ? `${styles.open}` : `${styles.closed}`}`}>
        
        <li>
          <Link href="#" onClick={closeNav}>&times;</Link>
        </li>
        <li>
          <Link className={"text-decoration-none"} href="./#about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link className={"text-decoration-none"} href="./#experience" onClick={closeNav}>
            Experience
          </Link>
        </li>
        <li>
          <Link className={"text-decoration-none"} href="./#projects" onClick={closeNav}>
            Projects
          </Link>
        </li>
        <li>
          <Link className={"text-decoration-none"} href="./#contact" onClick={closeNav}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/files/ANDREA_MEI_MAALA_CV.pdf" target="_blank" onClick={closeNav}>
            <button className={`btn button-alt`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </svg> View CV
            </button>
          </Link>
        </li>
      </ul>
      
      <ul className={`${styles.desktop} list-unstyled d-lg-flex align-items-center justify-content-center mb-0 d-none gap-3`}>
        <li>
          <Link className={"text-reset text-decoration-none"} href="./#about">
            About
          </Link>
        </li>
        <li>
          <Link className={"text-reset text-decoration-none"} href="./#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className={"text-reset text-decoration-none"} href="./#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={"text-reset text-decoration-none"} href="./#contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/files/ANDREA_MEI_MAALA_CV.pdf" target="_blank">
            <button className={`btn`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </svg> View CV
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
