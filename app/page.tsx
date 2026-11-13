"use client";

import { useState } from "react";
import SkillModal from "./components/SkillModal";
import { skillCategories, type Skill } from "@/lib/skills";

const teamMembers = [
  {
    category: "DATA ENGINEERING",
    name: "Prayuda Afifan Handoyo",
    desc: "Deskripsi anggota. Jelaskan latar belakang, minat, keahlian, dan kontribusi dalam tim.",
    image: "/assets/team/member_01.jpg",
  },
  {
    category: "BIG DATA ANALYTICS",
    name: "Anindya Artanti Pambudi",
    desc: "Deskripsi anggota. Jelaskan latar belakang, minat, keahlian, dan kontribusi dalam tim.",
    image: "/assets/team/member_02.jpg",
  },
  {
    category: "DATA SCIENCE",
    name: "Lois Ryannareta",
    desc: "Deskripsi anggota. Jelaskan latar belakang, minat, keahlian, dan kontribusi dalam tim.",
    image: "/assets/team/member_03.jpg",
  },
  {
    category: "MACHINE LEARNING",
    name: "Viola Herfina Putri",
    desc: "Deskripsi anggota. Jelaskan latar belakang, minat, keahlian, dan kontribusi dalam tim.",
    image: "/assets/team/member_04.jpg",
  },
  {
    category: "AI & WEB",
    name: "Dhea Meidiyana Windawati",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    image: "/assets/team/member_05.jpg",
  },
  {
    category: "AI & WEB",
    name: "Talitha Sukma Mahardika",
    desc: "Deskripsi anggota. Jelaskan latar belakang, minat, keahlian, dan kontribusi dalam tim.",
    image: "/assets/team/member_06.jpg",
  },
];

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [activeCategoryLabel, setActiveCategoryLabel] = useState("");

  const openSkill = (skill: Skill, categoryLabel: string) => {
    setActiveSkill(skill);
    setActiveCategoryLabel(categoryLabel);
  };

  return (
    <>
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="logo">
            DS<span>.</span>PORTFOLIO
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#team">Our Team</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav-button">
              Work With Us ↗
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-aurora" aria-hidden="true">
          <span className="aurora a1" />
          <span className="aurora a2" />
          <span className="aurora a3" />
          <span className="aurora a4" />
        </div>

        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">MAGANG BERDAMPAK · UNS 2027</p>

            <div className="hero-title-wrap">
              {/* Lingkaran Orbit untuk Judul */}
              <div className="hero-orbit" aria-hidden="true">
                <div className="orbit-ring ring-1"></div>
                <div className="orbit-ring ring-2"></div>
                <div className="orbit-dot dot-1"></div>
                <div className="orbit-dot dot-2"></div>
              </div>

              <h1>
                Data
                <br />
                Science
              </h1>
              <p className="hero-script">Portfolio</p>
            </div>

            <p className="hero-description">
              Exploring data, engineering solutions, and transforming ideas into
              meaningful impact.
            </p>

            <a href="#about" className="primary-button">
              EXPLORE OUR WORK ↓
            </a>
          </div>

          <div className="hero-right">
            {/* Ring di sini dihapus, cuma ada orb glow */}
            <div className="hero-orb" aria-hidden="true" />
            
            <p className="hero-label">OUR VISION</p>
            <h2>
              Transforming
              <br />
              complex data
              <br />
              into actionable
              <br />
              <em>insights.</em>
            </h2>
            <div className="hero-caption">
              MAGANG BERDAMPAK
              <br />
              SAINS DATA UNS 2027
              <span>KELOMPOK 05</span>
            </div>
          </div>
        </div>

        {/* hero-bottom sekarang pakai container yang sama → sejajar dengan konten */}
        <div className="container hero-bottom">
          <span>DATA · TECHNOLOGY · INNOVATION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="container">
          <div className="section-label">01 / INTRODUCTION</div>
          <div className="about-layout">
            <div>
              <h2>
                Data with
                <br />
              <em>purpose.</em>
            </h2>
          </div>
          <div className="about-description">
            <span className="small-label">ABOUT THE PROGRAM</span>
            <h3>Apa itu Magang Berdampak?</h3>
            <p>
              Magang Berdampak merupakan kesempatan bagi mahasiswa untuk
              memperoleh pengalaman profesional, mengembangkan kompetensi, dan
              menghasilkan karya yang memberikan dampak nyata bagi masyarakat
              maupun industri.
            </p>
            <p>
              Melalui pendekatan sains data, kami mengeksplorasi berbagai
              teknologi untuk mengolah data, membangun model analisis,
              mengembangkan infrastruktur, dan menciptakan solusi berbasis
              teknologi.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section team-section" id="team">
        <div className="container">
        <div className="section-label">02 / THE PEOPLE</div>
        <div className="section-heading">
          <h2>
            Meet our <em>team.</em>
          </h2>
          <p>
            Six curious minds, different perspectives, one shared passion for
            creating impact.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((m) => (
            <article className="member-card" key={m.name}>
              <div className="member-photo">
                <img src={m.image} alt={m.name} />
              </div>
              <div className="member-info">
                <span>{m.category}</span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <div className="member-links">
                  <a href="#">LinkedIn ↗</a>
                  <a href="#">View CV ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* EXPERTISE / SKILLS */}
      <section className="section projects-section" id="projects">
        <div className="container">
        <div className="section-label">03 / OUR EXPERTISE</div>
        <h2 className="main-project-title">
          What we <em>build.</em>
        </h2>

        {skillCategories.map((cat) => (
          <div className="project-category" key={cat.id}>
            <div className="category-heading">
              <div>
                <span>
                  {cat.index} — {cat.label}
                </span>
                <h2>
                  {cat.title} <em>{cat.titleEm}</em>
                </h2>
                <p>{cat.description}</p>
              </div>
            </div>

            {/* Core Capability chips */}
            <div className="capability-chips">
              {cat.coreCapabilities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>

            {/* Tools chips */}
          <div className="tech-stack">
            {cat.tools.map((tool) => (
              <span key={tool.name} className="tool-chip" title={tool.name}>
                <img 
                  src={tool.iconUrl} 
                  alt={tool.name} 
                  style={{ 
                    height: '22px', 
                    width: 'auto', 
                    maxWidth: '80px', 
                    objectFit: 'contain' 
                  }} 
                />
              </span>
            ))}
          </div>

            {/* Kartu skill (klik → pop up) */}
            <div className="project-list">
              {cat.skills.map((skill, i) => (
                <article
                  className="project-card"
                  key={skill.id}
                  onClick={() => openSkill(skill, cat.label)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openSkill(skill, cat.label);
                  }}
                >
                  {/* Bagian Gambar */}
                  <div className="project-image">
                    {skill.image ? (
                      <img src={skill.image} alt={skill.title} />
                    ) : (
                      <div className="visual-placeholder">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    )}
                  </div>

                  {/* Bagian Teks */}
                  <div className="project-content">
                    <span>PROJECT {String(i + 1).padStart(2, "0")}</span>
                    <h3>{skill.title}</h3>
                    <p>{skill.shortDesc}</p>
                    <a href="#">View Details ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing" id="contact">
        <div className="container">
          <span className="section-label">LET'S COLLABORATE</span>
          <h2>
            Let's make
            <br />
            data <em>matter.</em>
          </h2>
          <p>We are ready to learn, collaborate, and create something impactful together.</p>
          <a href="mailto:emailkelompok@example.com" className="primary-button">
            WORK WITH US ↗
          </a>
          <div className="closing-footer">
            MAGANG BERDAMPAK · SAINS DATA UNS 2027
            <span>KELOMPOK XXX</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <a href="#" className="logo">DS<span>.</span>PORTFOLIO</a>
          <span>Built with curiosity &amp; purpose.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      <SkillModal
        skill={activeSkill}
        categoryLabel={activeCategoryLabel}
        onClose={() => setActiveSkill(null)}
      />
    </>
  );
}