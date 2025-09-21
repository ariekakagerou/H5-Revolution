# H5-Revolution Official Website

![H5-Revolution Banner](public/images/h5-revolution-banner.jpg)

## 🎵 About H5-Revolution

H5-Revolution adalah grup idola J-Pop yang terdiri dari 5 anggota berbakat yang membawa revolusi dalam industri musik idola. Website resmi ini menampilkan informasi lengkap tentang grup, anggota, event, dan komunitas fans.

## ✨ Features

### 🏠 Home Page
- **Banner Section**: Tampilan utama dengan foto grup yang menawan
- **Latest News**: Informasi terbaru tentang grup dan aktivitas
- **Live Photos**: Galeri foto dari pertunjukan live
- **Schedule Calendar**: Kalender event dan jadwal pertunjukan
- **Featured Members**: Profil singkat anggota grup
- **Discography**: Koleksi musik dan album
- **Latest Videos**: Video terbaru dan behind-the-scenes
- **Fan Club**: Informasi keanggotaan dan merchandise

### 👥 Members Page
- **Interactive Member Cards**: Kartu anggota dengan animasi 3D
- **Detailed Profiles**: Informasi lengkap setiap anggota
- **Member Modal**: Popup detail dengan informasi mendalam
- **Color-coded System**: Setiap anggota memiliki warna tema unik
- **Skills & Favorites**: Keahlian dan favorit pribadi anggota

### 🎪 Events Page
- **Upcoming Events**: Daftar event yang akan datang
- **Event Details**: Informasi lengkap setiap event
- **Ticket Information**: Detail tiket dan lokasi
- **Event Categories**: Kategorisasi event berdasarkan jenis

### 💝 Fans Page
- **Community Stats**: Statistik komunitas fans
- **Fan Growth Charts**: Grafik pertumbuhan fans
- **Country Distribution**: Distribusi fans berdasarkan negara
- **Fan Club Benefits**: Keuntungan keanggotaan fan club
- **Membership Plans**: Paket keanggotaan yang tersedia
- **Latest Updates**: Update terbaru untuk fans

### 🎨 Showcase Page
- **Photo Gallery**: Galeri foto profesional
- **Video Showcase**: Koleksi video pertunjukan
- **Behind the Scenes**: Konten eksklusif
- **Fan Art Gallery**: Karya seni dari fans

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 6.8.1
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons 4.12.0 & Lucide React 0.544.0
- **Build Tool**: Vite 4.3.2
- **Linting**: ESLint 8.38.0

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── MemberCard.jsx  # Member profile cards
│   └── EventCard.jsx   # Event display cards
├── pages/              # Page components
│   ├── home.jsx        # Homepage
│   ├── members.jsx     # Members page
│   ├── events.jsx      # Events page
│   ├── fans.jsx        # Fans page
│   └── showcase.jsx    # Showcase page
├── assets/             # Static assets
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd h5-revolution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary**: Golden Yellow (#F59E0B)
- **Secondary**: Cherry Blossom Pink (#EC4899)
- **Accent**: Sky Blue (#3B82F6)
- **Supporting**: Electric Purple (#8B5CF6), Mint Green (#10B981)

### Typography
- Clean, modern font stack
- Responsive typography scaling
- Bold headings with gradient effects

### Animations
- Smooth hover transitions
- 3D card transformations
- Gradient animations
- Pulse effects for interactive elements

## 📱 Responsive Design

Website ini dirancang dengan pendekatan mobile-first dan fully responsive:
- **Mobile**: Optimized untuk smartphone
- **Tablet**: Layout yang disesuaikan untuk tablet
- **Desktop**: Experience penuh untuk desktop

## 🌟 Key Components

### Header Component
- Responsive navigation
- Active page highlighting
- Mobile hamburger menu
- Animated background elements

### Member Cards
- 3D transform effects
- Color-coded themes
- Interactive hover states
- Detailed member information

### Event Cards
- Event information display
- Date and location details
- Ticket availability status
- Responsive grid layout

## 🎯 Performance Features

- **Lazy Loading**: Images dan komponen dimuat sesuai kebutuhan
- **Optimized Assets**: Gambar dan file dioptimalkan untuk web
- **Efficient Routing**: Client-side routing yang cepat
- **Minimal Dependencies**: Menggunakan library yang ringan

## 🔧 Customization

### Adding New Members
1. Edit `src/pages/members.jsx`
2. Tambahkan data member baru di array `members`
3. Sesuaikan warna tema jika diperlukan

### Adding New Events
1. Edit `src/pages/events.jsx`
2. Tambahkan event baru di array events
3. Update kategori jika diperlukan

### Styling Customization
- Edit `tailwind.config.js` untuk custom colors
- Modify `src/index.css` untuk global styles
- Update component-specific styles di masing-masing file

## 📞 Support

Untuk pertanyaan atau dukungan teknis, silakan hubungi:
- **Email**: support@h5-revolution.com
- **Website**: [h5-revolution.com](https://h5-revolution.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspiration from modern J-Pop idol websites
- React community for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- All the amazing fans of H5-Revolution!

---

**H5-Revolution** - Bringing the Revolution to Idol Entertainment! 🎵✨