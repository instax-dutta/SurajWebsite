"use client"

import { useState, useRef } from "react"
import { X, ExternalLink } from "lucide-react"
import styles from "./racer-modal.module.css"

export default function RacerModal() {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 300) // Small delay to prevent accidental closing
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className={styles.container}>
      {/* Bookmark tab */}
      <div className={styles.bookmark} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>Made By RS</span>
      </div>

      {/* Modal */}
      <div
        className={`${styles.modalContainer} ${isVisible ? styles.visible : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Racer Solutions</h3>
            <p className={styles.modalSubtitle}>Empowering Freshers</p>
          </div>

          <div className={styles.modalContent}>
            <h4 className={styles.contentTitle}>Launch Your Career with a Professional Portfolio</h4>

            <p className={styles.contentText}>
              We transform your resume into a stunning portfolio website that helps you stand out in the job market.
              Perfect for students and fresh graduates.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Portfolios Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>

            <a href="https://racer.news" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Visit Racer News <ExternalLink size={16} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

