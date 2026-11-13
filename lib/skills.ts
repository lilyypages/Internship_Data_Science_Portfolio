export type Tool = {
  name: string;
  iconUrl: string;
};

export type Skill = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  highlights: string[];
  image?: string;       // <-- Untuk gambar cover di card depan
  gallery?: string[];   // <-- Untuk gambar yang digeser di dalam modal
  problem?: string;
  solution?: string;
  link?: string;
};

export type SkillCategory = {
  id: string;
  index: string;
  label: string;
  title: string;
  titleEm: string;
  description: string;
  coreCapabilities: string[];
  tools: Tool[];
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-science-ai",
    index: "01",
    label: "DATA SCIENCE & AI",
    title: "Data Science",
    titleEm: "& AI",
    description: "Membangun model prediktif, eksperimen statistik, dan prototipe AI untuk menyelesaikan masalah nyata.",
    coreCapabilities: [
      "Machine Learning & Deep Learning",
      "Predictive Modeling & Forecasting",
      "Feature Engineering & Hyperparameter Tuning",
      "Statistical Modeling & Hypothesis Testing",
      "AI Prototyping",
    ],
    tools: [
      { name: "Python", iconUrl: "/assets/logo/Python-logo.png" },
      { name: "R / RStudio", iconUrl: "/assets/logo/RStudio-logo.png" },
      { name: "Java", iconUrl: "/assets/logo/Java-logo.png" },
      { name: "Streamlit", iconUrl: "/assets/logo/Streamlit-logo.png" },
      { name: "Azure", iconUrl: "/assets/logo/Microsoft-Azure-logo.jpg" },
      { name: "Git", iconUrl: "/assets/logo/Git-logo.png" },
    ],
    skills: [
      {
        id: "ds-ml",
        title: "Machine Learning & Deep Learning",
        shortDesc: "Membangun model ML/DL untuk klasifikasi, regresi, dan deteksi pola dari data.",
        fullDesc: "Merancang dan melatih model machine learning & deep learning menggunakan Scikit-Learn, TensorFlow, dan PyTorch. Meliputi pemilihan arsitektur, training, evaluasi dengan cross-validation, dan tuning performa model.",
        tools: ["Python", "Scikit-Learn", "TensorFlow", "PyTorch"],
        highlights: ["Klasifikasi & regresi end-to-end", "Training + evaluasi cross-validation", "Deep learning dengan TensorFlow/PyTorch"],
        problem: "Proses klasifikasi manual memakan waktu lama dan rawan human error.",
        solution: "Dibuatkan model otomatisasi klasifikasi menggunakan XGBoost dengan akurasi 92%.",
        image: "/assets/project/example.png", // <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/example.png", 
          "/assets/project/example.png",
          "/assets/project/example.png"
        ],
        link: "https://website-project-kamu.com",
      },
    {
        id: "ds-predictive",
        title: "Predictive Modeling & Forecasting",
        shortDesc: "Membangun model prediktif dan peramalan berbasis data historis.",
        fullDesc: "Mengembangkan model prediksi dan forecasting untuk mendukung pengambilan keputusan, termasuk time-series forecasting dan model prediktif berbasis fitur.",
        tools: ["Python", "Scikit-Learn", "Statsmodels", "R"],
        highlights: ["Time-series forecasting", "Model prediktif berbasis fitur", "Evaluasi performa model"],
      },
      {
        id: "ds-feature",
        title: "Feature Engineering & Hyperparameter Tuning",
        shortDesc: "Optimasi fitur dan hyperparameter untuk performa model yang lebih baik.",
        fullDesc: "Melakukan feature engineering (encoding, scaling, selection) dan hyperparameter tuning (grid/random search, Optuna) untuk meningkatkan performa model secara terukur.",
        tools: ["Python", "Scikit-Learn", "Optuna"],
        highlights: ["Feature selection & encoding", "Hyperparameter tuning", "Peningkatan performa model"],
      },
      {
        id: "ds-stat",
        title: "Statistical Modeling & Hypothesis Testing",
        shortDesc: "Analisis statistik untuk validasi insight dan pengujian hipotesis.",
        fullDesc: "Menerapkan uji statistik (t-test, chi-square, ANOVA) dan pemodelan statistik untuk memvalidasi insight sebelum dijadikan dasar keputusan.",
        tools: ["Python", "R", "Statsmodels", "SciPy"],
        highlights: ["Uji hipotesis (t-test, ANOVA)", "Pemodelan statistik", "Validasi insight berbasis data"],
      },
      {
        id: "ds-prototyping",
        title: "AI Prototyping",
        shortDesc: "Prototipe AI cepat untuk validasi ide dan demo solusi.",
        fullDesc: "Membangun prototipe AI menggunakan Streamlit dan notebook eksperimen untuk validasi ide, demo ke stakeholder, dan iterasi cepat.",
        tools: ["Streamlit", "Python", "Jupyter"],
        highlights: ["Prototipe interaktif dengan Streamlit", "Eksperimen cepat di notebook", "Demo solusi ke stakeholder"],
      },
    ],
  },
  {
    id: "data-analytics-bi",
    index: "02",
    label: "DATA ANALYTICS & BI",
    title: "Data Analytics",
    titleEm: "& BI",
    description: "Mengubah data menjadi insight bisnis dan dashboard interaktif untuk mendukung keputusan.",
    coreCapabilities: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Business & Statistical Analysis",
      "Interactive Dashboarding & Reporting",
      "KPI Monitoring",
    ],
    tools: [
      { name: "Power BI", iconUrl: "/assets/logo/PowerBI-logo.png" },
      { name: "Tableau", iconUrl: "/assets/logo/Tableau-logo.png" },
      { name: "Looker", iconUrl: "/assets/logo/Looker-logo.png" },
      { name: "Metabase", iconUrl: "/assets/logo/Metabase-logo.png" },
      { name: "Excel", iconUrl: "/assets/logo/Excel-logo.png" },
      { name: "SQL Server", iconUrl: "/assets/logo/SqlServer-logo.jpg" },
      { name: "SAS", iconUrl: "/assets/logo/Sas-logo.png" },
      { name: "Pentaho", iconUrl: "/assets/logo/Pentaho-logo.jpg" },
    ],
    skills: [
      {
        id: "bi-clean",
        title: "Data Cleaning & Preprocessing",
        shortDesc: "Membersihkan & menyiapkan data agar siap dianalisis secara akurat.",
        fullDesc: "Melakukan data cleaning, handling missing values, duplikasi, outlier, dan transformasi data menggunakan SQL, Python (Pandas), dan Excel agar data siap dianalisis.",
        tools: ["SQL", "Python (Pandas)", "Excel"],
        highlights: ["Handling missing values & outlier", "Transformasi data", "Data siap analisis"],
      },
      {
        id: "bi-eda",
        title: "Exploratory Data Analysis (EDA)",
        shortDesc: "Eksplorasi data untuk menemukan pola, tren, dan anomali.",
        fullDesc: "Melakukan EDA menggunakan Pandas, Matplotlib/Seaborn, dan R untuk menemukan pola, tren, korelasi, dan anomali sebelum membangun model atau dashboard.",
        tools: ["Python (Pandas, Matplotlib/Seaborn)", "R"],
        highlights: ["Identifikasi pola & tren", "Deteksi anomali", "Visualisasi eksploratif"],
      },
      {
        id: "bi-business",
        title: "Business & Statistical Analysis",
        shortDesc: "Analisis bisnis + statistik untuk insight yang actionable.",
        fullDesc: "Menggabungkan analisis bisnis dengan metode statistik untuk menghasilkan insight yang actionable, termasuk segmentasi, cohort analysis, dan analisis performa.",
        tools: ["SQL", "Python", "Excel", "R"],
        highlights: ["Segmentasi & cohort analysis", "Insight actionable", "Analisis performa bisnis"],
      },
      {
        id: "bi-dashboard",
        title: "Interactive Dashboarding & Reporting",
        shortDesc: "Dashboard interaktif & report untuk stakeholder.",
        fullDesc: "Membangun dashboard interaktif menggunakan Power BI, Tableau, Looker, dan Metabase, lengkap dengan filter, drill-down, dan laporan berkala.",
        tools: ["Power BI", "Tableau", "Google Looker", "Metabase"],
        highlights: ["Dashboard interaktif", "Filter & drill-down", "Reporting berkala"],
      },
      {
        id: "bi-kpi",
        title: "KPI Monitoring",
        shortDesc: "Pemantauan KPI untuk mendukung keputusan berbasis data.",
        fullDesc: "Mendefinisikan, memantau, dan mengevaluasi KPI bisnis lewat dashboard dan report rutin agar stakeholder bisa mengambil keputusan berbasis data.",
        tools: ["Power BI", "Tableau", "Excel", "SQL"],
        highlights: ["Definisi & tracking KPI", "Report rutin", "Keputusan berbasis data"],
      },
    ],
  },
  {
    id: "big-data-engineering",
    index: "03",
    label: "BIG DATA & DATA ENGINEERING",
    title: "Big Data",
    titleEm: "& Data Engineering",
    description: "Membangun pipeline data, integrasi, dan infrastruktur big data yang andal.",
    coreCapabilities: [
      "ETL / ELT Pipeline Development",
      "Data Integration & Warehousing",
      "Data Validation & Quality Assurance",
      "Big Data Processing & Real-Time Streaming",
      "Database Administration",
    ],
    tools: [
      { name: "Airflow", iconUrl: "/assets/logo/Apache-Airflow-logo.webp" },
      { name: "Spark", iconUrl: "/assets/logo/Apache-Spark-logo.png" },
      { name: "Hadoop", iconUrl: "/assets/logo/hadoop-logo.png" },
      { name: "Cassandra", iconUrl: "/assets/logo/Cassandra-logo.jpeg" },
      { name: "PostgreSQL", iconUrl: "/assets/logo/PostgreSQL-logo.png" },
      { name: "MySQL", iconUrl: "/assets/logo/MySQL-logo.png" },
      { name: "Docker", iconUrl: "/assets/logo/Docker-logo.png" },
      { name: "Azure", iconUrl: "/assets/logo/Microsoft-Azure-logo.jpg" },
    ],
    skills: [
      {
        id: "de-etl",
        title: "ETL / ELT Pipeline Development",
        shortDesc: "Pipeline ETL/ELT otomatis dari sumber ke data warehouse.",
        fullDesc: "Membangun pipeline ETL/ELT terjadwal dengan Airflow, Spark, dan Kafka untuk memindahkan & mentransformasi data dari sumber ke data warehouse secara otomatis.",
        tools: ["Apache Airflow", "Apache Spark", "Apache Kafka", "Python", "SQL"],
        highlights: ["Pipeline terjadwal & otomatis", "Transformasi data terukur", "Data siap analisis"],
      },
      {
        id: "de-integration",
        title: "Data Integration & Warehousing",
        shortDesc: "Integrasi multi-source ke data warehouse terpusat.",
        fullDesc: "Mengintegrasikan data dari berbagai sumber ke data warehouse terpusat (PostgreSQL, SQL Server, Cassandra) untuk konsistensi & kemudahan akses.",
        tools: ["PostgreSQL", "MySQL", "SQL Server", "Cassandra", "Python"],
        highlights: ["Integrasi multi-source", "Warehouse terpusat", "Konsistensi data"],
      },
      {
        id: "de-quality",
        title: "Data Validation & Quality Assurance",
        shortDesc: "Validasi & QA data untuk menjaga kualitas.",
        fullDesc: "Menerapkan validasi skema, pengecekan duplikasi, null, dan anomali, serta monitoring kualitas data agar hasil analisis tetap terpercaya.",
        tools: ["Python", "SQL", "Airflow"],
        highlights: ["Validasi skema & tipe data", "Deteksi anomali & duplikasi", "Monitoring kualitas data"],
      },
      {
        id: "de-stream",
        title: "Big Data Processing & Real-Time Streaming",
        shortDesc: "Pemrosesan big data & streaming real-time.",
        fullDesc: "Memproses data skala besar menggunakan Spark & Hadoop, serta streaming real-time dengan Kafka untuk insight yang cepat.",
        tools: ["Apache Spark", "Hadoop", "Apache Kafka"],
        highlights: ["Pemrosesan skala besar", "Streaming real-time", "Insight cepat"],
      },
      {
        id: "de-dba",
        title: "Database Administration",
        shortDesc: "Administrasi database: performance, backup, & reliability.",
        fullDesc: "Mengelola database (PostgreSQL, MySQL, SQL Server, Cassandra), termasuk tuning performa, backup, dan reliability.",
        tools: ["PostgreSQL", "MySQL", "SQL Server", "Cassandra", "Docker"],
        highlights: ["Tuning performa", "Backup & restore", "Reliability database"],
      },
    ],
  },
  {
    id: "web-app-dev",
    index: "04",
    label: "WEB & APPLICATION DEVELOPMENT",
    title: "Web & App",
    titleEm: "Development",
    description: "Membangun aplikasi web full-stack, API, dan deployment model/sistem.",
    coreCapabilities: [
      "Backend & REST API Development",
      "Full-Stack Web Application",
      "System & Model Deployment (CI/CD)",
      "Database Integration & Auth",
    ],
    tools: [
      { name: "FastAPI", iconUrl: "/assets/logo/FastAPI-logo.png" },
      { name: "React", iconUrl: "/assets/logo/React-logo.jpg" },
      { name: "HTML/CSS/JS", iconUrl: "/assets/logo/HTML-CSS-JS-logo.jpg" },
      { name: "Docker", iconUrl: "/assets/logo/Docker-logo.png" },
      { name: "Git", iconUrl: "/assets/logo/Git-logo.png" },
    ],
    skills: [
      {
        id: "web-backend",
        title: "Backend & REST API Development",
        shortDesc: "API backend yang scalable dengan FastAPI/Flask/Django.",
        fullDesc: "Membangun REST API menggunakan FastAPI, Flask, atau Django lengkap dengan autentikasi, validasi, dan dokumentasi endpoint.",
        tools: ["FastAPI", "Flask", "Django", "Python", "Java"],
        highlights: ["REST API scalable", "Autentikasi & validasi", "Dokumentasi endpoint"],
      },
      {
        id: "web-fullstack",
        title: "Full-Stack Web Application",
        shortDesc: "Aplikasi web full-stack dari frontend hingga backend.",
        fullDesc: "Membangun aplikasi web full-stack dengan frontend HTML/CSS/JS, backend Python/Java, serta integrasi database dan autentikasi.",
        tools: ["HTML/CSS/JS", "Python", "FastAPI", "Django"],
        highlights: ["Frontend & backend terintegrasi", "Integrasi database", "Auth pengguna"],
      },
      {
        id: "web-deploy",
        title: "System & Model Deployment (CI/CD)",
        shortDesc: "Deploy model & sistem dengan CI/CD.",
        fullDesc: "Mendeploy model & sistem ke cloud (Azure App Service) dengan pipeline CI/CD di Azure DevOps dan container Docker.",
        tools: ["Docker", "Git", "Azure App Service", "Azure DevOps"],
        highlights: ["Deploy ke Azure", "Pipeline CI/CD", "Containerization"],
      },
      {
        id: "web-db-auth",
        title: "Database Integration & Auth",
        shortDesc: "Integrasi database & autentikasi aplikasi.",
        fullDesc: "Mengintegrasikan database ke aplikasi web beserta sistem autentikasi & otorisasi pengguna.",
        tools: ["SQL", "FastAPI", "Django", "Docker"],
        highlights: ["Integrasi database", "Autentikasi & otorisasi", "Sesi pengguna aman"],
      },
    ],
  },
];