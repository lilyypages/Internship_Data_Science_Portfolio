"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/lib/skills";

type Props = {
  skill: Skill | null;
  categoryLabel: string;
  onClose: () => void;
};

export default function SkillModal({ skill, categoryLabel, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  // Logika: Pakai gallery kalau ada, kalau nggak pakai image utama
  const images = skill?.gallery && skill.gallery.length > 0 
    ? skill.gallery 
    : (skill?.image ? [skill.image] : []);

  useEffect(() => {
    if (!skill) return;
    
    setCurrentImg(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [skill, onClose]);

  if (!skill) return null;

  const nextImg = () => {
    if (images.length > 1) setCurrentImg((prev) => (prev + 1) % images.length);
  };
  const prevImg = () => {
    if (images.length > 1) setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-scroll-area" ref={scrollRef}>
          
          {/* --- BAGIAN CAROUSEL GAMBAR --- */}
          {images.length > 0 && (
            <div className="modal-carousel">
              <img 
                src={images[currentImg]} 
                alt={`${skill.title} - ${currentImg + 1}`} 
                className="carousel-image"
              />
              
              {/* Tombol Navigasi (Cuma muncul kalau gambar lebih dari 1) */}
              {images.length > 1 && (
                <>
                  <button className="carousel-btn prev" onClick={prevImg}>❮</button>
                  <button className="carousel-btn next" onClick={nextImg}>❯</button>
                  <div className="carousel-counter">
                    {currentImg + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="modal-body">
            <span className="modal-category">{categoryLabel}</span>
            
            {/* --- BAGIAN JUDUL & LINK --- */}
            <div className="modal-title-row">
              <h2>{skill.title}</h2>
              {skill.link && (
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                  Kunjungi Website ↗
                </a>
              )}
            </div>

            <p className="modal-desc">{skill.fullDesc}</p>

            {/* --- PROBLEM & SOLUTION --- */}
            {(skill.problem || skill.solution) && (
              <div className="modal-case-study">
                {skill.problem && (
                  <div className="case-item">
                    <h4>The Problem</h4>
                    <p>{skill.problem}</p>
                  </div>
                )}
                {skill.solution && (
                  <div className="case-item">
                    <h4>The Solution</h4>
                    <p>{skill.solution}</p>
                  </div>
                )}
              </div>
            )}

            {/* --- TOOLS --- */}
            <div className="modal-section">
              <h4>Tools &amp; Platform</h4>
              <div className="tech-stack modal-tech">
                {skill.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* --- HIGHLIGHTS --- */}
            <div className="modal-section">
              <h4>Highlights</h4>
              <ul className="modal-highlights">
                {skill.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}