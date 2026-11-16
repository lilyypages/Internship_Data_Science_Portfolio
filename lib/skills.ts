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
        id: "ds-ai",
        title: "Augmented Intelligence: Klasifikasi Penyakit Tanaman Tomat", 
        shortDesc: "Perbandingan Kinerja Klasifikasi Penyakit Tanaman Tomat dengan Arsitektur CNN Unimodal dan Multimodal.",
        fullDesc: "Membandingkan CNN unimodal (citra daun) dan multimodal (citra daun, suhu, kelembapan) untuk klasifikasi empat penyakit tomat. Memakai ResNet-18 dan MobileNetV2, fusi fitur, serta artificial coupling data BMKG. F1-score naik dari 0.8711 ke 0.9646, signifikan secara statistik (p di bawah 0.001).",
        tools: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy"],
        highlights: ["Data: PlantVillage (Kaggle) dan data cuaca BMKG", "Model: CNN (ResNet-18, MobileNetV2), MLP, dan fusi fitur", "Evaluasi: F1-score, uji Shapiro-Wilk, dan paired one-tailed t-test "],        
        problem: "Penyakit daun tomat sulit dibedakan secara visual jika hanya mengandalkan citra daun saja, sehingga sering berisiko salah diagnosis dan menurunkan hasil panen.",
        solution: "Mengembangkan arsitektur multimodal yang memadukan CNN dengan variabel lingkungan (suhu dan kelembapan) untuk meningkatkan akurasi diagnosis, terbukti menaikkan F1-score secara signifikan dari 0.8711 ke 0.9646.",
        image: "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-2.png", // <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-1.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-2.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-3.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-4.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-5.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-6.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-7.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-8.png",
        ],
        link: "https://drive.google.com/drive/folders/1fB3Yb174XLgoHtjKfryG_MYOhqw8iqBI?usp=drive_link",
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
    titleEm: "& Business Intelligence",
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
        id: "ds-ai",
        title: "CONTOH", 
        shortDesc: "Perbandingan Kinerja Klasifikasi Penyakit Tanaman Tomat dengan Arsitektur CNN Unimodal dan Multimodal.",
        fullDesc: "Membandingkan CNN unimodal (citra daun) dan multimodal (citra daun, suhu, kelembapan) untuk klasifikasi empat penyakit tomat. Memakai ResNet-18 dan MobileNetV2, fusi fitur, serta artificial coupling data BMKG. F1-score naik dari 0.8711 ke 0.9646, signifikan secara statistik (p di bawah 0.001).",
        tools: ["Python", "Scikit-Learn", "TensorFlow", "PyTorch"],
        highlights: ["Data: PlantVillage (Kaggle) dan data cuaca BMKG", "Model: CNN (ResNet-18, MobileNetV2), MLP, dan fusi fitur", "Evaluasi: F1-score, uji Shapiro-Wilk, dan paired one-tailed t-test "],        
        problem: "Proses klasifikasi manual memakan waktu lama dan rawan human error.",
        solution: "Dibuatkan model otomatisasi klasifikasi menggunakan XGBoost dengan akurasi 92%.",
        image: "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-2.png", // <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-1.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-2.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-3.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-4.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-5.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-6.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-7.png",
          "/assets/project/DataScience/Project1_Anin/PPT Kecerdasan Buatan-8.png",
        ],
        link: "https://drive.google.com/drive/folders/1fB3Yb174XLgoHtjKfryG_MYOhqw8iqBI?usp=drive_link",
      },
      {
        id: "bi-eda",
        title: "Analisis & Visualisasi Data Pendidikan Makro di Indonesia Periode 2022 - 2024",
        shortDesc: "Penyusunan dashboard interaktif dan geo-mapping menggunakan teknik Advanced Excel Pivoting untuk mengorelasikan kuantitas infrastruktur sekolah dengan mutu pendidikan nasional.",
        fullDesc: "Analisis dan visualisasi data pendidikan makro Indonesia (2022–2024) menggunakan Microsoft Excel untuk mengintegrasikan data infrastruktur sekolah (SD, SMP, SMA/SMK) dan indikator mutu (HLS & RLS) di 38 provinsi ke dalam sebuah Interactive Dashboard.",
        tools: ["Excel", "PivotTable, PivotChart, Power Query"],
        highlights: ["Visualisasi spasial 38 provinsi", "Analisis ketimpangan pendidikan", "Interactive Excel dashboard"],        problem: "Data pendidikan dari BPS bersifat mentah, statis, dan terpisah di berbagai dokumen. Data kuantitas fasilitas (guru, murid, sekolah) belum terintegrasi dengan indikator mutu makro (HLS & RLS), sehingga ketimpangan pendidikan antar-wilayah sulit dianalisis secara cepat oleh stakeholders.",
        solution: "Mengonsolidasikan serta menstandarisasi data multi-file BPS menjadi basis data terstruktur (Excel Table & Pivot Table), lalu membangun Interactive Dashboard berbasis Excel dengan fitur komparasi grafik (Pie & Bar Chart), Heatmap performa provinsi, dan Geographic Map spasial untuk memetakan korelasi antara kecukupan rasio guru-murid dengan capaian kualitas pendidikan di seluruh Indonesia.",
        image: "/assets/project/DataAnalyst/Project2_Talitha/dashboard-mvd-excel.png", // <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataAnalyst/Project2_Talitha/dashboard-mvd-excel.png",
          "/assets/project/DataAnalyst/Project2_Talitha/heatmap-geo.png",
        ],
        link: "https://drive.google.com/file/d/1bahSuU0-lqipmuPeXv64sCHMVpzr7YwT/view",
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
        id: "ds-basis-data-integration",
        title: "Sistem Manajemen Basis Data Film & TV Show", 
        shortDesc: "Dream Entertainment: Sistem Manajemen Basis Data Film & TV Show Multi-Role Berbasis SQL Server.",
        fullDesc: "Merancang dan mengimplementasikan basis data relasional untuk katalog film & TV show dari TMDB dan IMDb dengan tiga skema per role: userNative, UserExecutive, dan marketing. Menerapkan view, stored procedure, table-valued function, pagination, serta kontrol akses berbasis role (JWT) untuk melayani kebutuhan katalog, dashboard eksekutif, dan dashboard marketing. Backend Flask REST API dan frontend Vue 3 digunakan sebagai antarmuka operasional dan visualisasi data.",
        tools: ["SQL Server", "Python", "Flask", "Vue.js", "JWT"],
        highlights: ["Data: TMDB & IMDb Catalog", "Database: SQL Server (View, Stored Procedure, TVF)", "Architecture: Flask REST API, Vue 3, & Role-Based Access Control (JWT)"],        
        problem: "Data film & TV show dari TMDB dan IMDb tersebar dan belum terpusat, kebutuhan akses antar-role (Native, Executive, Marketing) belum terisolasi, serta query analitik yang kompleks berisiko mengalami duplikasi logika jika ditangani di tingkat aplikasi.",
        solution: "Membangun basis data relasional terpusat di SQL Server yang dilengkapi view, stored procedure, dan table-valued function, serta diintegrasikan dengan Flask REST API dan frontend Vue 3 dengan kontrol akses berbasis role (JWT).",
        image: "/assets/project/BigData/Project2_Dhea/project2_dhea_2.png",// <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/BigData/Project2_Dhea/project2_dhea_1.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_2.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_3.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_4.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_5.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_6.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_7.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_8.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_9.png",
          "/assets/project/BigData/Project2_Dhea/project2_dhea_10.png",

        ],
        link: "https://drive.google.com/drive/folders/1Og4WpXHjw-7cJWgLW8QMUIaaqAWphXst?usp=drive_link",
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