import { useState, useEffect } from "react";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Calendar, Code, Lightbulb, Rocket, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { playPopSound } from "@/hooks/useAudio";
import { logoNumatik } from "@/assets/placeholder";

const timelineData = [
  {
    date: "Januari 2026",
    icon: Lightbulb,
    title: "Ide & Konsep",
    description: "Inisiasi pengembangan aplikasi edukasi matematika berbasis Deep Learning sesuai Kurikulum Merdeka",
    color: "hsl(190, 100%, 50%)"
  },
  {
    date: "Februari 2026",
    icon: Code,
    title: "Fase Pengembangan",
    description: "Perancangan UI/UX space-themed dan implementasi fitur pembelajaran interaktif",
    color: "hsl(320, 100%, 60%)"
  },
  {
    date: "Maret 2026",
    icon: Users,
    title: "Testing & Feedback",
    description: "Uji coba aplikasi dengan siswa-siswi SMPN 28 Bandung untuk evaluasi dan penyempurnaan",
    color: "hsl(45, 100%, 55%)"
  },
  {
    date: "Maret 2026",
    icon: Rocket,
    title: "Peluncuran Versi 1A",
    description: "Launching aplikasi NUMATIK untuk seluruh siswa SMP di Indonesia",
    color: "hsl(140, 100%, 50%)"
  },
  {
    date: "Masa Depan",
    icon: Award,
    title: "Ekspansi Nasional",
    description: "Menjangkau seluruh pelosok Nusantara sebagai sahabat belajar matematika siswa SMP",
    color: "hsl(280, 100%, 65%)"
  }
];

const TentangAplikasiPage = () => {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />

      {/* Shooting stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animation: `shootingStar ${3 + Math.random() * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
              boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.6)'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }
      `}</style>

      <PageNavigation />

      <div className="relative z-10 max-w-4xl w-full px-4 py-10">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse" />
            <img
              src={logoNumatik}
              alt="NUMATIK Logo"
              className="relative w-32 h-32 mx-auto opacity-90 hover:opacity-100 transition-opacity animate-float-slow"
            />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-primary text-glow-cyan mb-2">
            NUMATIK
          </h1>
          <p className="text-accent font-body text-sm">
            Numerasi Aktif dengan Teknologi Informasi dan Komunikasi
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-6 md:p-8 mb-6 animate-slide-up">
          <div className="space-y-4">
            <p className="text-white font-body text-sm md:text-base leading-relaxed text-center">
              <strong className="text-primary">Numatik (Versi 1A)</strong> adalah aplikasi edukasi matematika yang dirancang khusus untuk menjembatani tantangan belajar di era digital. Lahir dari semangat untuk menghadirkan pembelajaran yang tidak hanya informatif, tetapi juga <strong className="text-accent">bermakna dan menyenangkan</strong>.
            </p>

            <p className="text-white/90 font-body text-sm md:text-base leading-relaxed text-center">
              Diluncurkan pertama kali pada tahun <strong className="text-primary">2026</strong>, Numatik dikembangkan sepenuhnya selaras dengan <strong className="text-accent">Kurikulum Merdeka</strong>. Aplikasi ini mengintegrasikan pendekatan <strong className="text-secondary">Deep Learning</strong> untuk memastikan siswa tidak sekadar menghafal rumus, melainkan memahami konsep secara mendalam, kritis, dan kontekstual.
            </p>

            <p className="text-white/80 font-body text-sm md:text-base leading-relaxed text-center">
              Walaupun awalnya didedikasikan untuk siswa-siswi <strong className="text-primary">SMPN 28 Bandung</strong>, Numatik dipersiapkan untuk menjadi sahabat belajar bagi seluruh siswa SMP di pelosok Nusantara.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-accent text-glow-accent mb-6 text-center">
            Timeline Pengembangan
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isVisible = visibleItems.includes(index);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className={`flex items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left pl-12 md:pl-0`}>
                        <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-4 hover:border-primary/60 transition-all duration-300">
                          <p className="text-primary font-display text-xs mb-1">{item.date}</p>
                          <h3 className="text-white font-display text-sm md:text-base font-bold mb-2">{item.title}</h3>
                          <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Icon in center */}
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border-2 border-border bg-card z-10">
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>

                      {/* Spacer for desktop */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-6 mb-6 animate-slide-up text-center" style={{ animationDelay: '0.3s' }}>
          <p className="text-primary font-display text-xs mb-2">DIKEMBANGKAN OLEH</p>
          <p className="text-white font-body text-base md:text-lg font-bold mb-1">Irawan Sutiawan, M.Pd</p>
          <p className="text-white/60 font-body text-sm mb-3">SMPN 28 Bandung</p>
          <p className="text-accent font-body text-sm">numatik.app@gmail.com</p>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/40 font-body text-xs">
            Versi 1A - © 2026 NUMATIK. All rights reserved.
          </p>
        </div>

        <button
          onClick={() => { playPopSound(); navigate("/menu"); }}
          className="mt-6 block mx-auto text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
        >
          ← Kembali ke Menu
        </button>
      </div>
    </div>
  );
};

export default TentangAplikasiPage;
