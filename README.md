# H5-Revolution - Official Website

## Deskripsi Proyek

**H5-Revolution** adalah website resmi untuk grup idola J-Pop yang dibangun menggunakan React dan Vite. Proyek ini dikembangkan sebagai tugas kuliah untuk mata kuliah **Web Software Tools** dengan fokus pada implementasi Single Page Application (SPA) modern menggunakan React Router, Tailwind CSS, dan komponen interaktif.

## Tujuan Pembelajaran

Proyek ini dirancang untuk mempelajari:
- **Single Page Application (SPA)** dengan React Router
- **Component-Based Architecture** untuk maintainability
- **Responsive Design** menggunakan Tailwind CSS
- **Interactive UI Components** dengan animasi dan efek 3D
- **Data Visualization** dengan charts dan statistik
- **Modern JavaScript** (ES6+) dan React Hooks

## Struktur Proyek

```
h5-revolution/
├── src/
│   ├── components/          # Komponen yang dapat digunakan kembali
│   │   ├── Header.jsx      # Header dengan navigasi responsif
│   │   ├── Footer.jsx      # Footer dengan informasi kontak
│   │   ├── MemberCard.jsx  # Card profil anggota dengan animasi 3D
│   │   └── EventCard.jsx   # Card untuk menampilkan event
│   ├── pages/              # Komponen halaman
│   │   ├── home.jsx        # Halaman utama dengan banner dan fitur
│   │   ├── members.jsx     # Halaman profil anggota
│   │   ├── events.jsx      # Halaman daftar event
│   │   ├── fans.jsx        # Halaman komunitas fans dengan charts
│   │   └── showcase.jsx    # Halaman galeri dan showcase
│   ├── assets/             # Static assets (gambar, icon)
│   ├── App.jsx            # Komponen utama aplikasi
│   ├── main.jsx           # Entry point aplikasi
│   └── index.css          # Global styles
├── public/                # Public assets
├── package.json          # Dependencies dan scripts
└── README.md             # Dokumentasi proyek
```

## Teknologi yang Digunakan

### Frontend Framework
- **React 18.2.0** - Library untuk membangun user interface
- **Vite 4.3.2** - Build tool yang cepat untuk development
- **React Router DOM 6.8.1** - Client-side routing untuk SPA

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Icons 4.12.0** - Library icon yang komprehensif
- **Lucide React 0.544.0** - Icon library yang modern
- **Recharts 3.2.1** - Library untuk data visualization

### Development Tools
- **ESLint 8.38.0** - Code linting untuk kualitas kode
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Fitur Utama

### 🏠 Halaman Utama (Home)
- **Hero Banner** dengan gradient background yang menarik
- **Latest News** - Informasi terbaru tentang grup
- **Live Photos** - Galeri foto dari pertunjukan
- **Schedule Calendar** - Kalender event dan jadwal
- **Featured Members** - Profil singkat anggota
- **Discography** - Koleksi musik dan album
- **Latest Videos** - Video terbaru dan behind-the-scenes
- **Fan Club** - Informasi keanggotaan

### 👥 Halaman Anggota (Members)
- **Interactive Member Cards** dengan animasi 3D transform
- **Detailed Profiles** - Informasi lengkap setiap anggota
- **Color-coded System** - Setiap anggota memiliki warna tema unik
- **Skills & Favorites** - Keahlian dan favorit pribadi
- **Modal Popup** - Detail informasi dengan popup

### 🎪 Halaman Event (Events)
- **Upcoming Events** - Daftar event yang akan datang
- **Event Details** - Informasi lengkap setiap event
- **Ticket Information** - Detail tiket dan lokasi
- **Event Categories** - Kategorisasi berdasarkan jenis event
- **Responsive Grid Layout** - Layout yang adaptif

### 💝 Halaman Fans (Fans)
- **Community Stats** - Statistik komunitas fans
- **Fan Growth Charts** - Grafik pertumbuhan menggunakan Recharts
- **Country Distribution** - Distribusi fans berdasarkan negara
- **Fan Club Benefits** - Keuntungan keanggotaan
- **Membership Plans** - Paket keanggotaan yang tersedia

### 🎨 Halaman Showcase
- **Photo Gallery** - Galeri foto profesional
- **Video Showcase** - Koleksi video pertunjukan
- **Behind the Scenes** - Konten eksklusif
- **Fan Art Gallery** - Karya seni dari fans

## Cara Menjalankan Proyek

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Installation & Setup
```bash
# Clone atau download proyek
cd h5-revolution

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser dan akses
# http://localhost:5173
```

### Available Scripts
```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Konsep Pembelajaran

### 1. Single Page Application (SPA)
- **Client-side Routing** dengan React Router
- **Dynamic Navigation** tanpa page reload
- **State Management** untuk data sharing antar komponen
- **URL-based Navigation** dengan browser history

### 2. Component Architecture
- **Reusable Components** untuk maintainability
- **Props & State Management** dengan React Hooks
- **Component Composition** untuk complex UI
- **Event Handling** dan user interactions

### 3. Advanced Styling
- **Tailwind CSS** utility classes
- **Custom CSS** untuk animasi khusus
- **Responsive Design** dengan breakpoints
- **CSS Transforms** untuk efek 3D

### 4. Data Visualization
- **Chart Integration** dengan Recharts
- **Interactive Charts** dengan hover effects
- **Data Processing** untuk statistik
- **Real-time Updates** simulation

### 5. Performance Optimization
- **Lazy Loading** untuk komponen
- **Code Splitting** dengan dynamic imports
- **Asset Optimization** untuk loading speed
- **Bundle Size** optimization

## Fitur UI/UX

### Color Scheme
- **Primary**: Golden Yellow (#F59E0B)
- **Secondary**: Cherry Blossom Pink (#EC4899)
- **Accent**: Sky Blue (#3B82F6)
- **Supporting**: Electric Purple (#8B5CF6), Mint Green (#10B981)

### Animations & Effects
- **3D Card Transformations** pada member cards
- **Smooth Hover Transitions** untuk interaktivitas
- **Gradient Animations** untuk visual appeal
- **Pulse Effects** untuk interactive elements
- **Responsive Typography** scaling

### Responsive Design
- **Mobile-First Approach** dengan Tailwind CSS
- **Breakpoint System** (sm, md, lg, xl)
- **Flexible Grid Layouts** untuk semua device
- **Touch-Friendly** interface untuk mobile

## Struktur Komponen

### Header Component
- **Responsive Navigation** dengan hamburger menu
- **Active Page Highlighting** untuk UX yang baik
- **Mobile Optimization** dengan collapsible menu
- **Animated Background Elements** untuk visual appeal

### Member Cards
- **3D Transform Effects** dengan CSS transforms
- **Color-coded Themes** untuk setiap anggota
- **Interactive Hover States** dengan smooth transitions
- **Modal Integration** untuk detail informasi

### Event Cards
- **Event Information Display** yang informatif
- **Date & Location Details** dengan icon
- **Ticket Availability Status** dengan visual indicators
- **Responsive Grid Layout** yang adaptif

## Target Pembelajaran

Setelah menyelesaikan proyek ini, mahasiswa diharapkan dapat:

1. **Memahami** konsep Single Page Application (SPA)
2. **Mengimplementasikan** client-side routing dengan React Router
3. **Membangun** komponen interaktif dengan animasi 3D
4. **Menggunakan** data visualization dengan charts
5. **Mendesain** responsive layout yang optimal di semua device
6. **Mengoptimalkan** performa aplikasi web modern

## Catatan Pengembangan

- Proyek ini menggunakan **simulasi data** untuk demo purposes
- **Backend integration** dapat ditambahkan untuk data real-time
- **Authentication system** dapat diimplementasikan untuk user management
- **CMS integration** dapat ditambahkan untuk content management
- **PWA features** dapat diimplementasikan untuk mobile experience

## Kontribusi

Proyek ini dikembangkan sebagai tugas kuliah. Untuk pengembangan lebih lanjut:
1. Fork repository
2. Buat feature branch
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

---

**Dibuat untuk:** Mata Kuliah Web Software Tools  
**Framework:** React 18.2.0 + Vite 4.3.2  
**Routing:** React Router DOM 6.8.1  
**Styling:** Tailwind CSS 3.4.17  
**Charts:** Recharts 3.2.1
