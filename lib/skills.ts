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
    title: "Data Science & AI",
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
      { /// FIXX
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
      { /// FIXX
        id: "ds-nlp-rag-pdp",
        title: "Retrieval-Augmented Generation (RAG) Hukum Pelindungan Data Pribadi",
        shortDesc: "Sistem tanya jawab berbasis RAG untuk regulasi Pelindungan Data Pribadi (UU No. 27 Tahun 2022 & PP No. 71 Tahun 2019) dengan sitasi inline.",
        fullDesc: "Mengembangkan sistem tanya jawab berbasis Retrieval-Augmented Generation (RAG) pada domain hukum Pelindungan Data Pribadi (PDP) di Indonesia dengan korpus UU Nomor 27 Tahun 2022 dan PP Nomor 71 Tahun 2019. Dokumen regulasi diparsing menggunakan LlamaParse dan diindeks ke dalam LanceDB menggunakan gemini-embedding-001, lalu dijawab oleh gemini-3.1-flash-lite dengan sitasi inline ke dasar hukum terkait untuk meminimalkan halusinasi. Sistem dibangun dengan arsitektur web Node.js, Express, Vite, dan Swagger, serta dikemas dalam kontainer Docker untuk deployment di Azure Container Apps melalui GHCR.",
        tools: ["Python", "Google Gemini API", "LlamaParse", "LanceDB", "Node.js", "Express", "Vite", "Docker", "Azure"],
        highlights: [
          "Korpus & Parsing: UU No. 27 Tahun 2022 & PP No. 71 Tahun 2019 via LlamaParse & LanceDB",
          "Model AI: Google Gemini API (gemini-3.1-flash-lite & gemini-embedding-001) dengan sitasi inline",
          "Full-Stack & DevOps: Node.js, Express, Vite, Swagger, Docker, GHCR & Azure Container Apps"
        ],
        problem: "Menelusuri pasal spesifik dalam regulasi Pelindungan Data Pribadi secara manual memakan waktu, sementara penggunaan LLM generik tanpa grounding rentan mengalami halusinasi dan tidak menyertakan dasar hukum yang valid.",
        solution: "Membangun pipeline RAG yang menggabungkan pencarian semantik pada LanceDB dengan Google Gemini API untuk menghasilkan jawaban hukum yang akurat lengkap dengan sitasi inline pasal terkait, lalu menyajikannya dalam aplikasi web terkontainerisasi (Docker) di cloud.",
        image: "/assets/project/DataScience/Project2_Lois/NLP_RAG_2.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_1.png",
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_2.png",
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_3.png",
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_5.png",
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_6.png",
          "/assets/project/DataScience/Project2_Lois/NLP_RAG_7.png",
        ],
        link: "https://github.com/prayudahlah/rag-kelompok1",
      },
      { /// FIXX
        id: "ds-market-basket-fpgrowth",
        title: "Identifikasi & Visualisasi Pola Asosiasi Produk E-Commerce (FP-Growth & Network Graph)",
        shortDesc: "Analisis Market Basket pada data transaksi e-commerce UK menggunakan algoritma FP-Growth dan visualisasi interaktif Network Graph untuk mengidentifikasi peluang bundling produk.",
        fullDesc: "Mengidentifikasi pola pembelian bersamaan (co-occurrence) pada dataset transaksi e-commerce retailer UK (UCI ML Repository) menggunakan Market Basket Analysis dengan algoritma Frequent Pattern Growth (FP-Growth). Aturan asosiasi dievaluasi berdasarkan metrik support, confidence, dan lift, kemudian direpresentasikan ke dalam visualisasi network graph interaktif menggunakan NetworkX dan Vis.js untuk memetakan kelompok produk tematik, item kunci (key items), serta peluang strategi bundling dan cross-selling.",
        tools: ["Python", "Google Colab", "Pandas", "NetworkX", "Vis.js", "FP-Growth"],
        highlights: [
          "Data: E-Commerce Transaction Data (UCI Machine Learning Repository)",
          "Algoritma & Metrik: FP-Growth & Association Rules (Support, Confidence, Lift)",
          "Visualisasi: Interactive Network Graph (NetworkX & Vis.js) untuk Kelompok Tematik & Bundling"
        ],
        problem: "Pola pembelian produk secara bersamaan dalam transaksi e-commerce semakin kompleks, sementara penyajian aturan asosiasi dalam bentuk tabel atau matriks mentah sulit dipahami secara intuitif untuk melihat keterkaitan antar-item.",
        solution: "Menerapkan algoritma FP-Growth untuk mengekstrak pola asosiasi frekuensi tinggi secara efisien dan memvisualisasikannya sebagai network graph interaktif agar klaster produk tematik, item kunci, dan peluang bundling terlihat jelas.",
        image: "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-4.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-1.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-2.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-3.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-4.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-5.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-6.png",
          "/assets/project/DataScience/Project3_Anin/PPT Matematika Diskrit-7.png",
        ],
        link: "https://drive.google.com/drive/folders/1VYYmPvtNRJECX0M-YZL-sak1VVrVPHf6?usp=drive_link",
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
    title: "Data Analytics & Business Intelligence",
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
      { // FIXX
        id: "bi-agriflow-dashboard",
        title: "Analisis Distribusi Pupuk Bersubsidi Nasional",
        shortDesc: "Penyusunan dashboard interaktif Power BI dengan kapabilitas drill-through multi-level (nasional hingga kecamatan) untuk memantau serapan dan ketidaksesuaian distribusi pupuk.",
        fullDesc: "Mengembangkan solusi Business Intelligence menggunakan Power BI yang terhubung dengan model tabular SSAS (DAX measures) untuk memvisualisasikan performa distribusi dan penebusan pupuk bersubsidi di seluruh Indonesia. Dashboard mencakup hierarki wilayah terpadu (34 provinsi, 474 kab/kota, 4.724 kecamatan, hingga 8.266 kelurahan) yang memungkinkan analisis granular terhadap capaian target, persentase penerimaan, disparitas serapan antar-provinsi, identifikasi pengecer penghambat, serta komposisi jenis pupuk.",
        tools: ["Power BI", "DAX", "SSAS Tabular", "SQL Server"],
        highlights: [
            "Granularitas Spasial: Drill-down Nasional hingga Kecamatan/Kelurahan",
            "Analytics: DAX Measures untuk Rasio Kirim-Terima & Pertumbuhan",
            "Actionable Insight: Deteksi Disparitas Wilayah & Pengecer Penghambat"
        ],
        problem: "Ketidaksesuaian antara volume pengiriman dan penerimaan/penebusan pupuk bersubsidi di lapangan sulit dideteksi secara cepat karena pelaporan operasional belum memiliki metrik analitik lintas proses dan rincian geografis yang terstruktur.",
        solution: "Merancang dashboard analitik interaktif di Power BI dengan berbagai measure DAX, filter slicer dinamis, dan fitur drill-through multi-level dari tingkat nasional hingga kecamatan untuk memantau realisasi target dan mengidentifikasi hambatan distribusi secara langsung.",
        image: "/assets/project/DataAnalyst/Project1_PowerBi/1.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
            "/assets/project/DataAnalyst/Project1_PowerBi/1.png",
            "/assets/project/DataAnalyst/Project1_PowerBi/2.png",
            "/assets/project/DataAnalyst/Project1_PowerBi/3.png",
            "/assets/project/DataAnalyst/Project1_PowerBi/4.png",
        ],
    },
      { // FIXX
        id: "bi-eda",
        title: "Data Pendidikan Makro di Indonesia Periode 2022 - 2024",
        shortDesc: "Penyusunan dashboard interaktif dan geo-mapping menggunakan teknik Advanced Excel Pivoting untuk mengorelasikan kuantitas infrastruktur sekolah dengan mutu pendidikan nasional.",
        fullDesc: "Analisis dan visualisasi data pendidikan makro Indonesia (2022–2024) menggunakan Microsoft Excel untuk mengintegrasikan data infrastruktur sekolah (SD, SMP, SMA/SMK) dan indikator mutu (HLS & RLS) di 38 provinsi ke dalam sebuah Interactive Dashboard.",
        tools: ["Excel", "PivotTable, PivotChart, Power Query"],
        highlights: ["Visualisasi spasial 38 provinsi", "Analisis ketimpangan pendidikan", "Interactive Excel dashboard"],        problem: "Data pendidikan dari BPS bersifat mentah, statis, dan terpisah di berbagai dokumen. Data kuantitas fasilitas (guru, murid, sekolah) belum terintegrasi dengan indikator mutu makro (HLS & RLS), sehingga ketimpangan pendidikan antar-wilayah sulit dianalisis secara cepat oleh stakeholders.",
        solution: "Mengonsolidasikan serta menstandarisasi data multi-file BPS menjadi basis data terstruktur (Excel Table & Pivot Table), lalu membangun Interactive Dashboard berbasis Excel dengan fitur komparasi grafik (Pie & Bar Chart), Heatmap performa provinsi, dan Geographic Map spasial untuk memetakan korelasi antara kecukupan rasio guru-murid dengan capaian kualitas pendidikan di seluruh Indonesia.",
        image: "/assets/project/DataAnalyst/Project2_Excel/dashboard-mvd-excel.png", // <-- Muncul di card depan
        gallery: [                                // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/DataAnalyst/Project2_Excel/dashboard-mvd-excel.png",
          "/assets/project/DataAnalyst/Project2_Excel/heatmap-geo.png",
        ],
        link: "https://drive.google.com/file/d/1bahSuU0-lqipmuPeXv64sCHMVpzr7YwT/view",
      },
      { // FIXX
        id: "bi-india-flight-prices",
        title: "Indicator of Rising Flight Prices in India",
        shortDesc: "Dashboard analitik berbasis Microsoft Excel untuk menganalisis faktor dan indikator kenaikan harga tiket penerbangan di India dengan sistem filter interaktif.",
        fullDesc: "Merancang dan membangun dashboard analitik interaktif menggunakan Microsoft Excel untuk mengeksplorasi pola serta indikator utama di balik kenaikan harga tiket penerbangan di India. Dashboard ini memvisualisasikan perbandingan tarif berdasarkan berbagai variabel penerbangan—seperti maskapai, waktu keberangkatan, kelas kabin, jumlah transit, dan jeda waktu pemesanan—yang dilengkapi dengan berbagai slicer dan filter chart dinamis untuk memudahkan eksplorasi data oleh pengguna.",
        tools: ["Excel", "PivotTable", "PivotChart", "Slicers"],
        highlights: [
            "Analisis indikator dan faktor pemicu kenaikan harga tiket penerbangan",
            "Eksplorasi multi-dimensi (maskapai, rute, kelas, waktu terbang & hari pemesanan)",
            "Interactive Excel Dashboard dengan kontrol filter dan slicer dinamis"
        ],
        problem: "Fluktuasi harga tiket penerbangan di India dipengaruhi oleh banyak variabel secara bersamaan (seperti waktu pemesanan, maskapai, durasi, dan transit), sehingga sulit untuk mengidentifikasi faktor pemicu utama kenaikan harga hanya dari tabel data mentah.",
        solution: "Mengolah dataset penerbangan menjadi model analisis terstruktur menggunakan Excel PivotTable, lalu menyusun dashboard visual interaktif dengan berbagai jenis grafik dan filter dinamis agar pengguna dapat membedah tren harga berdasarkan kriteria penerbangan tertentu secara cepat.",
        image: "/assets/project/DataAnalyst/Project2_Excel/penerbangan_2.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
            "/assets/project/DataAnalyst/Project2_Excel/penerbangan_1.png",
            "/assets/project/DataAnalyst/Project2_Excel/penerbangan_2.png",
        ],
    },
    { /// fixxx
        id: "bi-ecommerce-sales-channels",
        title: "E-Commerce Sales Channels & Customer Behavior Analytics",
        shortDesc: "Preprocessing data e-commerce berskala besar (13.2B revenue) menggunakan Python dan penyusunan dashboard interaktif di Looker Studio untuk mengevaluasi performa kanal penjualan serta perilaku pelanggan.",
        fullDesc: "Melakukan data preprocessing dan penggabungan (table join) dataset e-commerce menggunakan Python di Google Colab untuk mengatasi keterbatasan fitur filter/slicer pada data blend di Google Looker Studio. Selanjutnya merancang dashboard analitik komprehensif untuk memantau performa multi-kanal (Online, Offline, Event, Partnership) dari total 181.4K transaksi dan 106.4K pelanggan. Analisis mencakup demografi pelanggan, tren penjualan musiman, sensitivitas harga terhadap volume terjual, pemetaan sebaran geografis (choropleth map), hingga identifikasi pelanggan top-tier untuk perumusan strategi retensi dan pemasaran.",
        tools: ["Looker Studio", "Python", "Google Colab", "Pandas"],
        highlights: [
            "Data Prep: Python Table Join untuk Optimalisasi Filter Looker Studio",
            "Business Scale: Analisis 13.2B Revenue, 181.4K Transaksi & 106.4K Customer",
            "Strategic Insight: Dominasi Online Channel, Sensitivitas Harga & Peta Spasial"
        ],
        problem: "Perusahaan membutuhkan evaluasi menyeluruh terhadap performa berbagai kanal penjualan dan perilaku pelanggan dari dataset e-commerce yang terpisah, sementara penggunaan fitur data blend bawaan di Looker Studio membatasi fungsionalitas filter dan kontrol interaktif pengguna.",
        solution: "Menyatukan dan membersihkan data terlebih dahulu menggunakan Python di Google Colab agar terstruktur dalam satu skema utuh, lalu membangun dashboard interaktif di Looker Studio dengan visualisasi tren, demografi, scatter plot elastisitas harga, dan peta spasial untuk menghasilkan rekomendasi bisnis yang terukur.",
        image: "/assets/project/DataAnalyst/Project3_Looker/commercial.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
            "/assets/project/DataAnalyst/Project3_Looker/commercial.png",
        ],
    },
    { //FIXX
        id: "bi-indonesia-employment-indicators",
        title: "Analisis Indikator Ketenagakerjaan di Indonesia (2022–2024)",
        shortDesc: "Dashboard interaktif berbasis Microsoft Excel untuk memetakan persebaran pencari kerja, lowongan tersedia, dan penempatan tenaga kerja di 34 provinsi Indonesia.",
        fullDesc: "Merancang dan mengembangkan dashboard interaktif berbasis Microsoft Excel untuk menganalisis indikator ketenagakerjaan di 34 provinsi di Indonesia selama periode 2022–2024[cite: 1]. Dashboard dilengkapi dengan KPI cards dinamis, peta spasial sebaran wilayah (Filled Map), pemeringkatan Top 10 Provinsi Tertinggi dan Terendah, analisis tren tahunan, komposisi rasio indikator (Donut Chart), serta perbandingan kesenjangan gender (Gender Gap) yang terintegrasi dengan slicer provinsi, tahun, jenis kelamin, dan kategori indikator serta halaman statistik deskriptif[cite: 1].",
        tools: ["Excel", "PivotTable", "PivotChart", "Slicers", "Bing Maps"],
        highlights: [
            "Cakupan Data: 34 Provinsi di Indonesia (Periode 2022–2024) & Statistik Deskriptif[cite: 1]",
            "Visualisasi Multi-Dimensi: Peta Spasial, Top/Bottom 10 Provinsi, Tren & Gender Gap[cite: 1]",
            "Interaktivitas: Multi-Slicer (Provinsi, Tahun, Jenis Kelamin & Indikator Tenaga Kerja)[cite: 1]"
        ],
        problem: "Data indikator ketenagakerjaan antar-provinsi selama beberapa tahun bersifat tersebar dalam tabel angka statis, sehingga kesenjangan antara jumlah pencari kerja, ketersediaan lowongan, serta disparitas penempatan berdasarkan wilayah dan gender sulit dievaluasi secara cepat.",
        solution: "Mengonsolidasikan data ketenagakerjaan menjadi model analisis terstruktur di Microsoft Excel dan menyusun dashboard interaktif dengan peta sebaran wilayah, grafik pemeringkatan provinsi, analisis tren serta gender gap, dan panel filter dinamis untuk eksplorasi data secara mandiri[cite: 1].",
        image: "/assets/project/DataAnalyst/Project2_Excel/ketenagakerjaan.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
            "/assets/project/DataAnalyst/Project2_Excel/ketenagakerjaan.png",
        ],
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
    title: "Big Data & Data Engineering",
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
      { // FIX
        id: "de-agriflow-dwh",
        title: "AgriFlow: Arsitektur Data Warehouse & ETL Pipeline Distribusi Pupuk Bersubsidi",
        shortDesc: "Perancangan Data Warehouse berbasis SQL Server dengan arsitektur Medallion, Constellation Schema, dan otomatisasi ETL SSIS tanpa downtime.",
        fullDesc: "Merancang dan membangun arsitektur Data Warehouse end-to-end menggunakan SQL Server dengan pendekatan 4-layer Medallion (Source, Bronze, Silver, Gold) dan Constellation Schema (2 tabel fakta: pengiriman & penebusan, serta snowflake dimensi lokasi hingga tingkat kelurahan). Mengembangkan 3 package ETL incremental di SSIS menggunakan metode MERGE, pengecekan Foreign Key, dan logging yang dijadwalkan secara otomatis melalui SQL Server Agent Job (durasi eksekusi 7m 30s tanpa downtime), serta menyediakan model tabular OLAP di SSAS.",
        tools: ["SQL Server", "SSIS", "SSAS", "SQL Server Agent", "T-SQL"],
        highlights: [
            "Architecture: 4-Layer Medallion & Constellation Schema",
            "ETL: 3 Incremental SSIS Packages (Zero-Downtime MERGE)",
            "Automation & OLAP: SQL Server Agent Job (7m 30s) & SSAS Tabular"
        ],
        problem: "Data distribusi pupuk bersubsidi tersebar di sistem operasional yang belum terintegrasi, sementara metode muat ulang penuh (Truncate) berisiko menyebabkan downtime pada lapisan analitik saat proses pembaruan data berlangsung.",
        solution: "Membangun Data Warehouse berlapis (Medallion) dengan skema konstelasi di SQL Server, mengimplementasikan incremental load berbasis MERGE di SSIS untuk menjamin ketersediaan data tanpa henti (zero-downtime), serta mengotomatiskan penjadwalan melalui SQL Server Agent dan pemodelan SSAS.",
        image: "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-2.png", // <-- Muncul di card depan
        gallery: [                                 // <-- Muncul di dalam modal (bisa digeser)
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-1.png",
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-2.png",
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-3.png",
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-4.png",
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-5.png",
            "/assets/project/BigData/Project1_Vio/PPT Manajemen Data-6.png",
        ],
        link: "https://drive.google.com/drive/folders/1u9a8rLFC3bH04HcS7vqsp-TPyRodjeu7?usp=drive_link",
      },
      { // FXX
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
{ // FXX
        id: "ds-realtime-affective-analysis",
        title: "Realtime Affective Analysis: Pipeline Streaming & Klasifikasi Sentimen-Emosi Ulasan E-Commerce",
        shortDesc: "Implementasi Pipeline Big Data untuk Monitoring Sentimen dan Emosi Ulasan Produk Toko ASUS Official Shop di Shopee Secara Real-Time.",
        fullDesc: "Membangun alur pemrosesan data streaming otomatis yang mengambil ulasan baru secara real-time menggunakan arsitektur CDC (MongoDB, Debezium, Apache Kafka) dan Spark Structured Streaming untuk mengklasifikasikan sentimen serta emosi menggunakan model Logistic Regression (TF-IDF, SMOTE). Hasil klasifikasi disimpan ke PostgreSQL, divisualisasikan melalui dashboard interaktif Streamlit & Plotly, serta memicu peringatan otomatis via Telegram Bot API saat terdeteksi ulasan negatif. Sistem juga mencatat versi model aktif agar metrik evaluasi (macro F1 sentimen 0,92 dan emosi 0,58) tetap selaras dengan artefak yang berjalan.",
        tools: ["Python", "Apache Kafka", "Spark Structured Streaming", "MongoDB", "Debezium", "PostgreSQL", "scikit-learn", "Streamlit", "Plotly", "Telegram Bot API", "Docker Compose"],
        highlights: [
          "Data & Streaming: MongoDB CDC (Debezium), Apache Kafka, & Spark Structured Streaming",
          "Model: Logistic Regression (TF-IDF 1500 fitur, SMOTE) — Macro F1 Sentimen 0,92 & Emosi 0,58",
          "Output & Deployment: PostgreSQL, Dashboard Streamlit & Plotly, Notifikasi Telegram Bot API, & Docker Compose"
        ],
        problem: "Ulasan produk toko di marketplace datang terus-menerus dalam volume tinggi sehingga terlalu banyak dan lambat jika dipantau secara manual, serta rawan ketidaksesuaian antara versi model yang dievaluasi dengan artefak yang berjalan di produksi.",
        solution: "Membangun pipeline Big Data end-to-end berbasis CDC dan Spark Structured Streaming untuk klasifikasi sentimen-emosi real-time, dilengkapi pencatatan versi model aktif, visualisasi dashboard Streamlit, dan notifikasi peringatan instan melalui Telegram Bot API.",
        image: "/assets/project/BigData/Project3_Yuda/lampiran4.png", // <-- Muncul di card depan
        gallery: [                                                 // <-- Muncul di dalam modal (bisa digeser)
          "/assets/project/BigData/Project3_Yuda/lampiran1.png",
          "/assets/project/BigData/Project3_Yuda/lampiran2.png",
          "/assets/project/BigData/Project3_Yuda/lampiran3.png",
          "/assets/project/BigData/Project3_Yuda/lampiran4.png",
          "/assets/project/BigData/Project3_Yuda/lampiran5.png",
          "/assets/project/BigData/Project3_Yuda/lampiran6.png",
        ],
        link: "https://drive.google.com/drive/folders/1FnB4jxkW6x4Ii1gUPOSJkXQKsJW6JTal?usp=drive_link",
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
    title: "Web & App Development",
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
      { // FIXX
        id: "sipanda-learning-platform",
        title: "SIPANDA – Integrated Learning Management Platform",
        shortDesc:
          "Platform manajemen pembelajaran yang menghubungkan siswa, guru, dan orang tua dalam satu ekosistem, dengan dasbor pembelajaran yang dipersonalisasi untuk memantau perkembangan siswa.",
        fullDesc:
          "SIPANDA adalah platform Learning Management System terintegrasi yang mempertemukan siswa, guru, dan orang tua dalam satu ekosistem digital. Guru dan orang tua dapat memantau perkembangan siswa melalui dasbor pembelajaran yang dipersonalisasi. Sistem dibangun menggunakan Node.js 20.x LTS, PostgreSQL 16, Redis 7 sebagai cache, dan Tailwind CSS v4, lalu dideploy menggunakan Nginx 1.24 dan Vercel, dengan pipeline CI/CD otomatis dari GitHub. Pengujian dilakukan melalui Postman dan unit test lokal, serta dilengkapi dokumentasi environment resources untuk tahap development, staging, dan production.",
        tools: [
          "Node.js 20.x LTS",
          "PostgreSQL 16",
          "Redis 7",
          "Nginx 1.24",
          "Tailwind CSS v4",
          "Vercel",
          "Neon",
          "Git & GitHub",
          "Postman",
        ],
        highlights: [
          "Architecture: Node.js 20.x LTS, PostgreSQL 16, Redis 7, Nginx 1.24, Tailwind CSS v4",
          "Deployment: Vercel auto-deploy dari GitHub + environment terpisah (Development, Staging, Production)",
          "Tooling: Postman (API testing), Neon (serverless PostgreSQL), Git branching strategy (main, develop, feature/*)",
        ],
        problem:
          "Proses pemantauan pembelajaran siswa masih tersebar dan tidak terintegrasi antar pemangku kepentingan, sehingga guru dan orang tua kesulitan memantau perkembangan siswa secara real-time dan terpusat.",
        solution:
          "Membangun platform Learning Management System terintegrasi (SIPANDA) berbasis Node.js 20.x LTS dan PostgreSQL 16 dengan Redis 7 sebagai cache, dilengkapi dasbor pembelajaran yang dipersonalisasi, serta pipeline deployment otomatis via Vercel dan environment terpisah (Development, Staging, Production) dengan Nginx 1.24 sebagai web server.",
        image: "/assets/project/WebDev/overview1.png", // <-- Muncul di card depan
        gallery: [
          "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781984340/Screen_Recording_2026-06-21_023144_auix2e.mp4",
          "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781984338/Screen_Recording_2026-06-21_023327_gnq4ht.mp4",
          "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781984338/Screen_Recording_2026-06-21_023556_ks9z2w.mp4",
          "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781984323/Screen_Recording_2026-06-21_023717_b1syq7.mp4",
        ],
        link: "https://drive.google.com/file/d/1zzuZuAlbGd42ozWmQjB-MlHGWyUmCFcf/view?usp=drive_link",
      },
      { // FIXX
  id: "agrotwin-tomato-expert-system",
  title: "AgroTwin – Smart Assistant for Tomato Plant Care",
  shortDesc:
    "Sistem Digital Twin berbasis AI Reasoning (Sistem Pakar) untuk diagnosis dan rekomendasi budidaya tomat yang cerdas, holistik, dan transparan.",
  fullDesc:
    "AgroTwin adalah platform Digital Twin pertanian berbasis AI Reasoning (Sistem Pakar) yang membantu pengguna memantau kesehatan tanaman tomat serta mengidentifikasi potensi penyakit. Sistem mengintegrasikan data simulasi lingkungan (pH tanah, suhu, kelembapan) dengan gejala visual tanaman menggunakan algoritma Forward Chaining untuk penalaran logis dan metode Certainty Factor (CF) untuk mengelola ketidakpastian data gejala di lapangan. Hasilnya adalah antarmuka Digital Twin yang menampilkan diagnosis hama & penyakit dengan tingkat keyakinan terukur, serta rekomendasi perawatan yang explainable (dapat dijelaskan alasan logisnya) berdasarkan penelitian pertanian dan pengetahuan ahli. Dikembangkan dengan metode Design Science Research, AgroTwin berpotensi menjadi asisten cerdas yang efektif untuk mencegah kegagalan panen dan mengoptimalkan sumber daya melalui pendekatan pertanian presisi.",
  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Forward Chaining",
    "Certainty Factor (CF)",
    "AI Reasoning",
    "Digital Twin",
  ],
  highlights: [
    "Method: Design Science Research + AI Reasoning (Sistem Pakar)",
    "Reasoning: Forward Chaining & Certainty Factor (CF) untuk kelola ketidakpastian gejala",
    "Feature: Diagnosis penyakit dengan confidence score + rekomendasi explainable (Digital Twin)",
  ],
  problem:
    "Produktivitas tomat nasional masih jauh di bawah potensi idealnya akibat kompleksitas manajemen lingkungan mikro dan serangan Organisme Pengganggu Tanaman (OPT). Teknologi pertanian yang ada memiliki keterbatasan: sistem IoT umumnya hanya berfungsi sebagai alat pemantauan (monitoring), sedangkan AI berbasis Deep Learning seringkali bersifat black box sehingga sulit dipahami alasannya oleh petani.",
  solution:
    "Merancang AgroTwin, sebuah sistem Digital Twin pertanian berbasis AI Reasoning (Sistem Pakar) yang mengintegrasikan data simulasi lingkungan (pH tanah, suhu, kelembapan) dengan gejala visual tanaman. Menggunakan algoritma Forward Chaining untuk penalaran logis dan Certainty Factor (CF) untuk mengelola ketidakpastian data gejala, sehingga menghasilkan diagnosis dengan tingkat keyakinan terukur dan rekomendasi perawatan yang explainable.",
  image: "/assets/project/WebDev/overview2.png", // <-- Muncul di card depan
  gallery: [
    "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781942459/Screen_Recording_2026-06-20_145105_ep4afi.mp4",
    "https://res.cloudinary.com/dikbaiqql/video/upload/f_auto,q_auto/v1781942506/Screen_Recording_2026-06-20_145930_vqwoch.mp4",
  ],
  link: "https://drive.google.com/file/d/1Fdpb-KRso9ZkPT6BCoYN_-vPsgmTRyM_/view?usp=sharing",
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