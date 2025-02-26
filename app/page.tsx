"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"
import RacerModal from "@/components/racer-modal"

export default function Home() {
  const objectiveRef = useRef(null)
  const academicRef = useRef(null)
  const internshipsRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    // Observe all section refs
    if (objectiveRef.current) observer.observe(objectiveRef.current)
    if (academicRef.current) observer.observe(academicRef.current)
    if (internshipsRef.current) observer.observe(internshipsRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)

    return () => {
      if (objectiveRef.current) observer.unobserve(objectiveRef.current)
      if (academicRef.current) observer.unobserve(academicRef.current)
      if (internshipsRef.current) observer.unobserve(internshipsRef.current)
      if (projectsRef.current) observer.unobserve(projectsRef.current)
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  return (
    <main className={styles.text}>
      <div className={styles.header}>
        <h1 className={styles.animateIn} style={{ animationDelay: "0.1s" }}>
          SURAJ KHUNTIA
        </h1>

        <p
          className={styles.animateIn}
          style={{ animationDelay: "0.3s", fontSize: "clamp(1rem, 4vw, 1.5rem)", marginTop: "1rem" }}
        >
          Computer Science and Engineering | GIET University, Gunupur
          <br />
          <a href="mailto:surajkhuntia31@gmail.com" className={styles.link}>
            surajkhuntia31@gmail.com
          </a>{" "}
          | +91 784 896 3843
        </p>
      </div>

      <section ref={objectiveRef} className={`${styles.currentSection} ${styles.fadeInSection}`}>
        <h2>Objective</h2>
        <p style={{ fontSize: "clamp(0.9rem, 3vw, 1.2rem)", lineHeight: 1.6 }}>
          Seeking a dynamic role where I can leverage my technical proficiencies in Python, C, Java, and expertise in
          Azure, Adobe Suite, and Microsoft Office Suite to drive innovative solutions and contribute effectively to
          organizational success.
        </p>
      </section>

      <section ref={skillsRef} className={`${styles.currentSection} ${styles.fadeInSection}`}>
        <h2>Technical Proficiencies</h2>
        <ul className={styles.skillsList}>
          <li className={styles.skillItem}>Python</li>
          <li className={styles.skillItem}>C</li>
          <li className={styles.skillItem}>Java</li>
          <li className={styles.skillItem}>Azure</li>
          <li className={styles.skillItem}>Adobe Suite</li>
          <li className={styles.skillItem}>Microsoft Office Suite</li>
        </ul>
      </section>

      <section ref={academicRef} className={`${styles.currentSection} ${styles.fadeInSection}`}>
        <h2>Academic Profile</h2>
        <ul className={styles.currentList}>
          <li className={styles.listItem}>
            Computer Science Engineer, GIET University, AICTE
            <br />
            <span className={styles.subDetail}>6.5 CGPA | (2021-2025)</span>
          </li>
          <li className={styles.listItem}>
            Higher Secondary Education, Talent College of Science and Technology, CHSE
            <br />
            <span className={styles.subDetail}>70% | (2021)</span>
          </li>
        </ul>
      </section>

      <section ref={internshipsRef} className={`${styles.currentSection} ${styles.fadeInSection}`}>
        <h2>Internships</h2>
        <ul className={styles.currentList}>
          <li className={styles.listItem}>
            <strong>Interned at "YHills Edutech" on Cloud Computing</strong>
            <br />
            <span className={styles.subDetail}>Project name: Different Tasks on Microsoft Azure</span>
            <br />
            <span className={styles.subDetail}>Duration: 2 Months</span>
            <br />
            <span className={styles.subDetail}>
              Project Outcome: Deployed Linux VMs and implemented Azure SQL to host web/databases, also built a
              predictive ML model in Azure ML studio.
            </span>
          </li>
        </ul>
      </section>

      <section ref={projectsRef} className={`${styles.currentSection} ${styles.fadeInSection}`}>
        <h2>Project Works</h2>
        <ul className={styles.currentList}>
          <li className={styles.listItem}>
            <strong>Project Title: GScraper</strong>
            <br />
            <span className={styles.subDetail}>Role: Frontend developer</span>
            <br />
            <span className={styles.subDetail}>
              Implementation: Developed a scraping tool (GScraper) for terminal using sed, jq, awk, recode, mpv, yt-dlp
              to efficiently retrieve and display Google results along with music/video playback.
            </span>
          </li>
          <li className={styles.listItem}>
            <strong>Project Title: Expenses Tracker</strong>
            <br />
            <span className={styles.subDetail}>Role: Frontend developer</span>
            <br />
            <span className={styles.subDetail}>
              Implementation: Built an Android expenses tracker app with Kotlin frontend storing data in SQLite and
              enabling adding, viewing and tracking of expenditures.
            </span>
          </li>
          <li className={styles.listItem}>
            <strong>Project Title: Age Calculator</strong>
            <br />
            <span className={styles.subDetail}>Role: Frontend developer</span>
            <br />
            <span className={styles.subDetail}>Implementation: Developed a script with C language.</span>
          </li>
        </ul>
      </section>

      <RacerModal />
    </main>
  )
}

