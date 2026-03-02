import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import CubeUnfold from "@/components/CubeUnfold";
import PageNavigation from "@/components/PageNavigation";

const KubusPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation prevPath="/materi" nextPath="/latihan" />
      <div className="relative z-10 max-w-3xl w-full px-4">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan mb-6 text-center">
          MATERI: KUBUS
        </h1>

        {page === 0 && (
          <div className="animate-slide-up">
            <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-6 mb-4">
              <h2 className="font-display text-lg font-bold text-accent text-glow-accent mb-4">Unsur-Unsur Kubus</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display text-2xl font-bold text-primary mb-1">6</h3>
                  <p className="text-sm font-display text-foreground mb-1">SISI</p>
                  <p className="text-xs text-muted-foreground font-body">
                    Bidang datar berbentuk persegi: ABCD, EFGH, BCGF, ADHE, CDHG, ABFE
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display text-2xl font-bold text-secondary mb-1">12</h3>
                  <p className="text-sm font-display text-foreground mb-1">RUSUK</p>
                  <p className="text-xs text-muted-foreground font-body">
                    Garis potong antara dua sisi: AB, BC, CD, DA, EF, FG, GH, HE, AE, BF, CG, DH
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display text-2xl font-bold text-accent mb-1">8</h3>
                  <p className="text-sm font-display text-foreground mb-1">TITIK SUDUT</p>
                  <p className="text-xs text-muted-foreground font-body">
                    Titik pertemuan tiga rusuk: A, B, C, D, E, F, G, H
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-foreground font-body leading-relaxed">
                  <strong className="text-primary">Kubus</strong> adalah bangun ruang tiga dimensi yang dibatasi oleh enam bidang sisi berbentuk <strong className="text-accent">persegi</strong> yang kongruen. 
                  Setiap sisi kubus memiliki panjang yang sama.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => navigate("/materi")} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                ← Materi
              </button>
              <button onClick={() => setPage(1)} className="font-display text-sm px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer">
                Jaring-Jaring Kubus →
              </button>
            </div>
          </div>
        )}

        {page === 1 && (
          <div className="animate-slide-up">
            <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-6 mb-4">
              <h2 className="font-display text-lg font-bold text-accent text-glow-accent mb-4">Jaring-Jaring Kubus</h2>
              
              <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
                <strong className="text-foreground">Jaring-jaring kubus</strong> adalah pola dua dimensi yang terbentuk ketika kita 
                membongkar semua sisi kubus sehingga menjadi satu kesatuan yang masih saling berhubungan. 
                Kubus memiliki <strong className="text-accent">11 macam</strong> jaring-jaring yang berbeda.
              </p>

              <CubeUnfold />
            </div>
            <div className="flex justify-between">
              <button onClick={() => setPage(0)} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                ← Unsur Kubus
              </button>
              <button onClick={() => navigate("/quiz")} className="font-display text-sm px-6 py-2 rounded-lg gradient-neon text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer">
                🚀 Mulai Quiz →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KubusPage;
