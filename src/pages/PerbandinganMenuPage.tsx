import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Presentation, ArrowLeft } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";

const subTopics = [
  { label: "Perbandingan Umum, Satuan Pembanding dan Rasio", path: "/materi/perbandingan/umum" },
  { label: "Perbandingan Bertingkat", path: "" },
  { label: "Perbandingan Senilai dan Berbalik Nilai", path: "" },
  { label: "Skala", path: "" },
];

const PerbandinganMenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          PERBANDINGAN
        </h1>
        <p className="text-white/60 text-sm text-center mb-8 font-body">Kelas 7 — Pilih sub-topik</p>

        <div className="flex flex-col gap-3 animate-slide-up">
          {subTopics.map((topic, i) => (
            <button
              key={topic.label}
              onClick={() => {
                playPopSound();
                if (topic.path) navigate(topic.path);
              }}
              className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                cursor-pointer text-left animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Presentation className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-body text-sm text-white">{topic.label}</span>
              {topic.path && (
                <span className="ml-auto text-xs text-accent font-display">📖 BUKA</span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => { playPopSound(); navigate("/materi"); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke Materi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerbandinganMenuPage;
