import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Droplets, 
  Scissors, 
  LayoutGrid, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang', href: '#about' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className={`h-8 w-8 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} />
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Hijau Lestari
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Garden Landscaping"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 backdrop-blur-sm rounded-full border border-emerald-400/20">
            Landscaping & Pertamanan Profesional
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Wujudkan Taman <br />
            <span className="text-emerald-400 italic">Impian Anda</span> Menjadi Nyata
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            Kami menghadirkan keindahan alam ke halaman Anda dengan desain minimalis, 
            perawatan ahli, dan sentuhan estetika yang tak lekang oleh waktu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/30"
            >
              Mulai Proyek Anda <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Lihat Layanan
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            {[
              { label: 'Proyek Selesai', value: '500+' },
              { label: 'Klien Puas', value: '100%' },
              { label: 'Tahun Pengalaman', value: '12+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Desain Taman Minimalis',
      description: 'Transformasi halaman terbatas menjadi oase yang fungsional dan estetik dengan konsep modern minimalis.',
      icon: <LayoutGrid className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Perawatan Rumput Rutin',
      description: 'Layanan pemotongan, pemupukan, dan pengendalian hama untuk menjaga rumput Anda tetap hijau dan sehat.',
      icon: <Scissors className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Rumput Sintetis',
      description: 'Pemasangan rumput sintetis kualitas premium yang tahan lama, bebas perawatan, dan selalu terlihat segar.',
      icon: <Leaf className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Pembuatan Kolam Ikan',
      description: 'Desain dan konstruksi kolam koi atau kolam hias dengan sistem filtrasi canggih untuk kejernihan air maksimal.',
      icon: <Droplets className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1590424753858-3b4d1ec62aa2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Layanan Unggulan</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Solusi Lengkap Untuk <br />Ruang Terbuka Anda</h3>
          <p className="text-lg text-slate-600">
            Dari perencanaan hingga pemeliharaan, kami menyediakan layanan profesional 
            untuk memastikan taman Anda selalu dalam kondisi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Info Detail <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1000&auto=format&fit=crop"
                alt="Our Team Working"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full -z-0 opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-full -z-0 opacity-50"></div>
            
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-900">Kualitas Terjamin</span>
              </div>
              <p className="text-xs text-slate-500">Kami hanya menggunakan material terbaik untuk taman Anda.</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Tentang Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Dedikasi Untuk <br />Keasrian Lingkungan</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hijau Lestari Landscaping lahir dari kecintaan kami terhadap alam dan desain. 
              Selama lebih dari satu dekade, kami telah membantu ratusan pemilik rumah 
              dan bisnis menciptakan ruang terbuka yang menenangkan dan inspiratif.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Tim kami terdiri dari desainer lanskap kreatif dan tenaga ahli lapangan 
              yang berpengalaman, siap memberikan solusi terbaik yang disesuaikan 
              dengan anggaran dan kebutuhan spesifik Anda.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Konsultasi Desain Gratis',
                'Tenaga Ahli Berpengalaman',
                'Material Kualitas Premium',
                'Garansi Perawatan',
                'Pengerjaan Tepat Waktu',
                'Harga Kompetitif'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop', title: 'Modern Backyard' },
    { url: 'https://images.unsplash.com/photo-1591115765373-520b7a52d844?q=80&w=800&auto=format&fit=crop', title: 'Japanese Garden' },
    { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', title: 'Luxury Villa Garden' },
    { url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop', title: 'Minimalist Patio' },
    { url: 'https://images.unsplash.com/photo-1599110906885-b024c90c2773?q=80&w=800&auto=format&fit=crop', title: 'Zen Pond' },
    { url: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop', title: 'Rooftop Garden' },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Portofolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Inspirasi Dari <br />Proyek Terbaru Kami</h3>
          </div>
          <a href="#" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/20">
            Lihat Semua Proyek
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">Residential</p>
                <h4 className="text-2xl font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 lg:p-16 text-white bg-emerald-800/50">
            <h3 className="text-3xl font-serif font-bold mb-8">Mari Mulai <br />Membangun Taman Anda</h3>
            <p className="text-emerald-100/80 mb-12 leading-relaxed">
              Punya pertanyaan atau ingin menjadwalkan survei lokasi? 
              Hubungi kami melalui saluran di bawah ini atau isi formulir.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-bold uppercase tracking-wider mb-1">Telepon / WA</p>
                  <p className="text-xl font-medium">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-medium">halo@hijaulestari.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-300 font-bold uppercase tracking-wider mb-1">Kantor</p>
                  <p className="text-xl font-medium">Jl. Taman Hijau No. 123, Jakarta Selatan</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-emerald-700/50">
              <p className="text-sm text-emerald-300 font-bold uppercase tracking-wider mb-6">Ikuti Kami</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="Contoh: 0812..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Layanan Yang Diminati</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none">
                  <option>Desain Taman Minimalis</option>
                  <option>Perawatan Rumput Rutin</option>
                  <option>Pemasangan Rumput Sintetis</option>
                  <option>Pembuatan Kolam Ikan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Pesan / Detail Proyek</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan sedikit tentang rencana taman Anda..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                Kirim Permintaan Konsultasi <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-sm text-slate-400">
                Kami akan menghubungi Anda dalam waktu maksimal 24 jam kerja.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Hijau Lestari
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Solusi profesional untuk keindahan taman dan lanskap Anda. 
              Membangun oase di tengah kesibukan kota sejak 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Instagram /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Facebook /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Layanan', 'Tentang Kami', 'Galeri Proyek', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Layanan</h4>
            <ul className="space-y-4">
              {['Taman Minimalis', 'Perawatan Rumput', 'Rumput Sintetis', 'Kolam Ikan', 'Irigasi Otomatis'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Jam Operasional</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span className="font-medium text-slate-700">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu:</span>
                <span className="font-medium text-slate-700">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu:</span>
                <span className="font-medium text-emerald-600">Tutup</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Hijau Lestari Landscaping. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-600">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
