import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import { Gamepad2, ArrowLeft } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

const latihanData = {
  "KELAS 7": [
    "BILANGAN BULAT",
    "BILANGAN RASIONAL",
    "ALJABAR",
    "PERSAMAAN DAN PERTIDAKSAMAAN SATU VARIABEL",
    "PERBANDINGAN",
    "ARITMETIKA SOSIAL",
    "GARIS DAN SUDUT",
    "SEGITIGA DAN SEGIEMPAT",
    "HIMPUNAN",
  ],
  "KELAS 8": [
    "POLA BILANGAN",
    "KOORDINAT CARTECIUS",
    "SISTEM PERSAMAAN LINEAR DUA VARIABEL (SPLDV)",
    "RELASI DAN FUNGSI",
    "TEOREMA PYTHAGORAS",
    "LINGKARAN",
    "PERSAMAAN GARIS LURUS",
    "BANGUN RUANG SISI DATAR",
  ],
  "KELAS 9": [
    "BILANGAN BERPANGKAT",
    "KESEBANGUNAN DAN KEKONGRUENAN",
    "TRANSFORMASI GEOMETRI",
    "BANGUN RUANG SISI LENGKUNG",
    "STATISTIKA",
    "PELUANG",
  ],
};

type Kelas = keyof typeof latihanData;

const LatihanPage = () => {
  const navigate = useNavigate();
  const [selectedKelas, setSelectedKelas] = useState<Kelas | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation prevPath="/materi" nextPath="/referensi" />

      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan mb-2 text-center">
          LATIHAN
        </h1>
        <p className="text-muted-foreground text-sm text-center mb-8 font-body">
          Pilih tingkatan kelas untuk memulai latihan
        </p>

        {!selectedKelas ? (
          <div className="animate-slide-up grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            {(Object.keys(latihanData) as Kelas[]).map((kelas, i) => (
              <button
                key={kelas}
                onClick={() => setSelectedKelas(kelas)}
                className="group bg-card/80 backdrop-blur border border-border rounded-xl p-6 
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300 
                  cursor-pointer text-center animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm font-bold text-white">{kelas}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  {latihanData[kelas].length} latihan
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedKelas(null)}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali
              </button>
              <h2 className="font-display text-base font-bold text-white text-glow-accent">
                {selectedKelas}
              </h2>
              <div className="w-4" />
            </div>

            <div className="flex flex-col gap-3">
              {latihanData[selectedKelas].map((topik, i) => (
                <button
                  key={topik}
                  className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                    hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                    cursor-pointer text-left animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => {
                    if (topik === "BANGUN RUANG SISI DATAR") {
                      navigate("/quiz");
                    } else if (topik === "LINGKARAN") {
                      navigate("/lingkaran-quiz");
                    }
                  }}
                >
                  <Gamepad2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm text-white">{topik}</span>
                  {(topik === "BANGUN RUANG SISI DATAR" || topik === "LINGKARAN") && (
                    <span className="ml-auto text-xs text-accent font-display">🚀 PLAY</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatihanPage;
