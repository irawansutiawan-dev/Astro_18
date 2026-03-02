import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { useAudio } from "@/hooks/useAudio";

const slides = [
  {
    title: "Lingkaran",
    subtitle: "Definisi",
    content: "Lingkaran adalah kumpulan titik-titik yang berjarak sama terhadap suatu titik tertentu. Titik tertentu itu disebut titik pusat lingkaran.",
    visual: "definition",
  },
  {
    title: "Bagian-Bagian Lingkaran",
    subtitle: "Unsur-Unsur",
    content: "Lingkaran memiliki beberapa bagian penting yang perlu dipahami.",
    items: ["Titik Pusat", "Jari-jari", "Diameter", "Busur", "Tali Busur", "Apotema", "Juring", "Tembereng"],
    visual: "parts",
  },
  {
    title: "Titik Pusat",
    subtitle: "1",
    content: "Titik pusat lingkaran adalah titik yang terletak di tengah-tengah lingkaran. Titik O adalah titik pusat lingkaran.",
    visual: "center",
  },
  {
    title: "Jari-Jari",
    subtitle: "2",
    content: "Jari-jari lingkaran adalah garis dari titik pusat lingkaran ke lengkungan lingkaran. Garis OP adalah jari-jari lingkaran.",
    visual: "radius",
  },
  {
    title: "Diameter",
    subtitle: "3",
    content: "Diameter adalah garis lurus yang menghubungkan dua titik pada lengkungan lingkaran dan melalui titik pusat. RP adalah diameter lingkaran.",
    visual: "diameter",
  },
  {
    title: "Busur Lingkaran",
    subtitle: "4",
    content: "Busur lingkaran adalah garis lengkung yang terletak pada lengkungan lingkaran dan menghubungkan dua titik sebarang di lengkungan tersebut. AB adalah busur lingkaran.",
    visual: "arc",
  },
  {
    title: "Tali Busur",
    subtitle: "5",
    content: "Tali busur lingkaran adalah garis lurus dalam lingkaran yang menghubungkan dua titik pada lengkungan lingkaran. Garis AB dan CD adalah tali busur.",
    visual: "chord",
  },
  {
    title: "Apotema",
    subtitle: "6",
    content: "Apotema adalah garis terpendek antara tali busur dan pusat lingkaran. Garis OD adalah apotema.",
    visual: "apothem",
  },
  {
    title: "Juring",
    subtitle: "7",
    content: "Daerah yang dibatasi oleh dua jari-jari serta busur di antaranya. Daerah AOB adalah juring.",
    visual: "sector",
  },
  {
    title: "Tembereng",
    subtitle: "8",
    content: "Daerah yang dibatasi oleh tali busur dan busurnya disebut tembereng. Daerah yang diarsir atau daerah yang dibatasi oleh busur AC dan Tali Busur AC adalah tembereng.",
    visual: "segment",
  },
];

const CircleDiagram = ({ type, animate }: { type: string; animate: boolean }) => {
  const baseClass = `transition-all duration-700 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`;
  
  return (
    <div className={`${baseClass} flex items-center justify-center my-4`}>
      <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-56 md:h-56">
        {/* Main circle */}
        <circle cx="100" cy="100" r="75" fill="none" stroke="hsl(190, 100%, 50%)" strokeWidth="2" className="animate-[draw_1s_ease-out_forwards]" />
        
        {/* Center dot */}
        <circle cx="100" cy="100" r="3" fill="hsl(45, 100%, 55%)" />
        <text x="108" y="98" fill="hsl(45, 100%, 55%)" fontSize="12" fontFamily="Orbitron">O</text>

        {type === "center" && (
          <>
            <circle cx="100" cy="100" r="6" fill="none" stroke="hsl(45, 100%, 55%)" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "2s" }} />
          </>
        )}

        {type === "radius" && (
          <>
            <line x1="100" y1="100" x2="160" y2="60" stroke="hsl(320, 100%, 60%)" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="160" cy="60" r="3" fill="hsl(320, 100%, 60%)" />
            <text x="165" y="55" fill="hsl(320, 100%, 60%)" fontSize="11" fontFamily="Orbitron">P</text>
            <text x="125" y="90" fill="hsl(320, 100%, 60%)" fontSize="10" fontFamily="Exo 2">r</text>
          </>
        )}

        {type === "diameter" && (
          <>
            <line x1="30" y1="120" x2="170" y2="80" stroke="hsl(140, 100%, 50%)" strokeWidth="2.5" />
            <circle cx="30" cy="120" r="3" fill="hsl(140, 100%, 50%)" />
            <circle cx="170" cy="80" r="3" fill="hsl(140, 100%, 50%)" />
            <text x="15" y="135" fill="hsl(140, 100%, 50%)" fontSize="11" fontFamily="Orbitron">R</text>
            <text x="173" y="75" fill="hsl(140, 100%, 50%)" fontSize="11" fontFamily="Orbitron">P</text>
            <text x="90" y="115" fill="hsl(140, 100%, 50%)" fontSize="10" fontFamily="Exo 2">d</text>
          </>
        )}

        {type === "arc" && (
          <>
            <path d="M 145 40 A 75 75 0 0 1 170 110" fill="none" stroke="hsl(45, 100%, 55%)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="145" cy="40" r="3" fill="hsl(45, 100%, 55%)" />
            <circle cx="170" cy="110" r="3" fill="hsl(45, 100%, 55%)" />
            <text x="150" y="35" fill="hsl(45, 100%, 55%)" fontSize="11" fontFamily="Orbitron">A</text>
            <text x="175" y="115" fill="hsl(45, 100%, 55%)" fontSize="11" fontFamily="Orbitron">B</text>
          </>
        )}

        {type === "chord" && (
          <>
            <line x1="40" y1="55" x2="155" y2="45" stroke="hsl(320, 100%, 60%)" strokeWidth="2.5" />
            <circle cx="40" cy="55" r="3" fill="hsl(320, 100%, 60%)" />
            <circle cx="155" cy="45" r="3" fill="hsl(320, 100%, 60%)" />
            <text x="25" y="50" fill="hsl(320, 100%, 60%)" fontSize="11" fontFamily="Orbitron">A</text>
            <text x="160" y="40" fill="hsl(320, 100%, 60%)" fontSize="11" fontFamily="Orbitron">B</text>
          </>
        )}

        {type === "apothem" && (
          <>
            <line x1="40" y1="55" x2="155" y2="45" stroke="hsl(210, 30%, 60%)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="97" y2="50" stroke="hsl(45, 100%, 55%)" strokeWidth="2.5" strokeDasharray="5 3" />
            <circle cx="97" cy="50" r="3" fill="hsl(45, 100%, 55%)" />
            <text x="80" y="78" fill="hsl(45, 100%, 55%)" fontSize="10" fontFamily="Exo 2">apotema</text>
            <text x="102" y="47" fill="hsl(45, 100%, 55%)" fontSize="11" fontFamily="Orbitron">D</text>
          </>
        )}

        {type === "sector" && (
          <>
            <path d="M 100 100 L 145 40 A 75 75 0 0 1 170 110 Z" fill="hsl(190, 100%, 50%, 0.2)" stroke="hsl(190, 100%, 50%)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="145" y2="40" stroke="hsl(190, 100%, 50%)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="170" y2="110" stroke="hsl(190, 100%, 50%)" strokeWidth="1.5" />
            <text x="148" y="35" fill="hsl(190, 100%, 50%)" fontSize="11" fontFamily="Orbitron">A</text>
            <text x="175" y="115" fill="hsl(190, 100%, 50%)" fontSize="11" fontFamily="Orbitron">B</text>
          </>
        )}

        {type === "segment" && (
          <>
            <path d="M 40 55 A 75 75 0 0 0 155 45" fill="hsl(320, 100%, 60%, 0.2)" stroke="none" />
            <path d="M 40 55 A 75 75 0 0 0 155 45 L 40 55 Z" fill="hsl(320, 100%, 60%, 0.15)" stroke="hsl(320, 100%, 60%)" strokeWidth="1.5" />
            <circle cx="40" cy="55" r="3" fill="hsl(320, 100%, 60%)" />
            <circle cx="155" cy="45" r="3" fill="hsl(320, 100%, 60%)" />
            <text x="25" y="50" fill="hsl(320, 100%, 60%)" fontSize="11" fontFamily="Orbitron">A</text>
            <text x="160" y="40" fill="hsl(320, 100%, 60%)" fontSize="11" fontFamily="Orbitron">C</text>
          </>
        )}

        {(type === "definition" || type === "parts") && (
          <>
            <line x1="100" y1="100" x2="175" y2="100" stroke="hsl(190, 100%, 50%, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="130" y="95" fill="hsl(190, 100%, 50%, 0.6)" fontSize="9" fontFamily="Exo 2">r</text>
          </>
        )}
      </svg>
    </div>
  );
};

const LingkaranMateriPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(true);
  const { playLaser } = useAudio();

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    setAnimating(false);
    playLaser();
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimating(true);
    }, 200);
  }, [playLaser]);

  const slide = slides[currentSlide];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation prevPath="/materi" nextPath="/latihan" />

      <div className="relative z-10 max-w-3xl w-full px-4 py-8">
        {/* Progress */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-display text-xs text-primary">{currentSlide + 1} / {slides.length}</span>
          <h1 className="font-display text-lg md:text-xl font-bold text-primary text-glow-cyan">LINGKARAN</h1>
          <span className="font-display text-xs text-accent">{slide.subtitle}</span>
        </div>
        <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden">
          <div className="h-full gradient-neon rounded-full transition-all duration-500" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>

        {/* Slide content */}
        <div className={`bg-card/80 backdrop-blur border border-border rounded-xl p-6 mb-6 transition-all duration-500 ${animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="font-display text-xl md:text-2xl font-bold text-accent text-glow-accent mb-4 text-center">{slide.title}</h2>

          <CircleDiagram type={slide.visual} animate={animating} />

          <p className="text-sm text-muted-foreground font-body leading-relaxed text-center mb-4">{slide.content}</p>

          {slide.items && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {slide.items.map((item, i) => (
                <div
                  key={item}
                  className="bg-muted/50 border border-border rounded-lg px-3 py-2 text-center text-xs font-display text-foreground animate-slide-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => currentSlide === 0 ? navigate("/materi") : goToSlide(currentSlide - 1)}
            className="font-display text-sm px-5 py-2 rounded-lg bg-muted text-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            ← {currentSlide === 0 ? "Materi" : "Sebelumnya"}
          </button>

          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/40"}`}
              />
            ))}
          </div>

          <button
            onClick={() => currentSlide === slides.length - 1 ? navigate("/lingkaran-quiz") : goToSlide(currentSlide + 1)}
            className="font-display text-sm px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
          >
            {currentSlide === slides.length - 1 ? "Quiz →" : "Berikutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LingkaranMateriPage;
