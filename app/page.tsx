"use client";

import { useState } from "react";
import SkillModal from "./components/SkillModal";
import { skillCategories, type Skill } from "@/lib/skills";

const teamMembers = [
  {
    name: "Prayuda Afifan Handoyo",
    desc: "Berfokus pada data engineering dan machine learning dengan perolehan IPK 3,95. Berpengalaman membangun sistem data secara end-to-end, mulai dari perancangan pipeline dan pemodelan data hingga tahap deployment.",
    image: "/assets/team/member_01.jpg",
    linkedin: "https://www.linkedin.com/in/prayudahandoyo/",
    cv: "/assets/cv/CVATSPrayuda.pdf",
  },
  {
    name: "Anindya Artanti Pambudi",
    desc: "Berpengalaman dua kali sebagai Data Analyst Intern dengan perolehan IPK 3,96. Menguasai statistika, analisis data, machine learning, database management, serta data engineering untuk mengolah data menjadi solusi yang akurat.",
    image: "/assets/team/member_02.jpg",
    linkedin: "https://www.linkedin.com/in/anindyaartanti/",
    cv: "/assets/cv/CVATSAnin.pdf",
  },
  {
    name: "Lois Ryannareta",
    desc: "Aktif mengembangkan diri secara akademis maupun nonakademis dengan fokus pada analisis, pengolahan, dan visualisasi data. Menguasai statistika, machine learning, business intelligence, dan database management.",
    image: "/assets/team/member_03.jpg",
    linkedin: "https://www.linkedin.com/in/loisryannareta",
    cv: "/assets/cv/CVATSLois.pdf",
  },
  {
    name: "Viola Herfina Putri",
    desc: "Berfokus pada analisis dan visualisasi data yang dipadukan dengan eksplorasi UI design. Mampu mengubah data mentah menjadi sajian visual yang fungsional, logis, sekaligus memiliki nilai estetika tinggi.",
    image: "/assets/team/member_04.jpg",
    linkedin: "https://www.linkedin.com/in/violaherfina",
    cv: "/assets/cv/CVATSVio.pdf",
  },
  {
    name: "Dhea Meidiyana Windawati",
    desc: "Berfokus pada bidang data analytics, khususnya dalam pengolahan dan visualisasi data. Aktif berorganisasi serta memiliki pemahaman kuat di bidang statistika, machine learning, dan database management.",
    image: "/assets/team/member_05.jpg",
    linkedin: "https://www.linkedin.com/in/dheameidiyana/",
    cv: "/assets/cv/CVATSDhea.pdf",
  },
  {
    name: "Talitha Sukma Mahardika",
    desc: "Berfokus pada Data Analysis, Data Science, dan Web Development. Mampu mengolah data menjadi informasi bernilai serta mengembangkannya ke bentuk dashboard analitik maupun aplikasi web fungsional.",
    image: "/assets/team/member_06.jpg",
    linkedin: "https://www.linkedin.com/in/talithasm",
    cv: "/assets/cv/CVATSTalitha.pdf",
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
          <a href="#home" className="logo">
            DATA SCIENCE
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
              Bridging data, technology, and innovation through real-world projects.
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
              into meaningful
              <br />
              decisions.
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
            Magang Berdampak merupakan wadah bagi mahasiswa untuk terjun langsung ke
            dunia industri, merasakan dinamika kerja profesional secara nyata, dan
            mengembangkan kapasitas diri di luar ruang perkuliahan. Melalui program
            ini, mahasiswa didorong untuk berkolaborasi, menghadapi tantangan nyata, serta
            melahirkan karya inovatif yang memberi dampak positif bagi masyarakat dan
            industri.
          </p>
          <p>
            Sebagai mahasiswa sains data, kami ingin membawa pengetahuan dan
            pengalaman yang kami peroleh di perkuliahan ke dunia industri — mulai
            dari pengolahan dan eksplorasi data, pembangunan model analitik, hingga
            perancangan sistem yang fungsional. Kami percaya bahwa ilmu yang kami
            pelajari akan lebih bermakna ketika mampu diimplementasikan menjadi solusi
            nyata yang tepat guna.
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
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <div className="member-links">
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                  </a>
                  <a href={m.cv} target="_blank" rel="noopener noreferrer">
                    View CV ↗
                  </a>
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
                  {cat.title} 
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
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      View Details ↗
                    </a>
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
          <span className="section-label">LET&apos;S COLLABORATE</span>
          <h2>
            Let&apos;s make
            <br />
            data <em>matter.</em>
          </h2>
          <p>We are ready to learn, collaborate, and create something impactful together.</p>
          <a href="mailto:yudafihan@student.uns.ac.id" className="primary-button">
            WORK WITH US ↗
          </a>
          <div className="closing-footer">
            MAGANG BERDAMPAK · SAINS DATA UNS 2027
            <span>KELOMPOK 05</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <a href="#home" className="logo">DATA SCIENCE</a>
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