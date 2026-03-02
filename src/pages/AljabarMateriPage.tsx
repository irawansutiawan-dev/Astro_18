import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";

const sections = [
  {
    heading: "3.1 Mengenal Aljabar",
    content: `Aljabar bukan hanya membahas permasalahan yang berkaitan dengan operasi hitung bilangan, tetapi juga mengenai hubungan antara bilangan-bilangan tersebut.

Sebuah bilangan yang tidak diketahui dapat diwakili dengan simbol berupa huruf (variabel), misalnya x dan y.

Contoh:
• 3 kantong uang dengan jumlah sama: x + x + x = 3x rupiah
• Berat kotak buah: y = 5 + x, dimana x = berat kotak, 5 kg = berat buah

Suatu bentuk aljabar dapat terdiri dari bilangan, variabel, atau gabungan dari bilangan dan variabel yang terkait dengan operasi hitung.`
  },
  {
    heading: "3.2 Bentuk Aljabar",
    content: `3.2.1 Pengertian Bentuk Aljabar

Berdasarkan arti perkalian:
• 2 × a = a + a = 2a
• 3 × p = p + p + p = 3p
• 5 × x = x + x + x + x + x = 5x

a² ditulis sebagai a × a
a³ ditulis sebagai a × a × a

Bentuk-bentuk seperti 2a, -3b, 7xy, 3m + 4, -8p - 5q disebut bentuk aljabar.`
  },
  {
    heading: "3.2.2 Suku Tunggal dan Suku Banyak",
    content: `• Suku satu (monomial): 4a, 6ab², -5a²bc³
• Suku dua (binomial): 2p + 15, 7p² - 10p
• Suku tiga (trinomial): 8x - 4y + 9, 6x + 3xy - 5
• Suku banyak (polinom): bentuk aljabar dengan lebih dari tiga suku

Contoh:
• 2p + 15 → suku: 2p dan 15
• 7p² - 10p → suku: 7p² dan -10p`
  },
  {
    heading: "3.2.3 Suku-Suku Sejenis",
    content: `Pada bentuk 5a²:
• 5 disebut koefisien
• a disebut variabel (peubah)

Pada bentuk -7x²y + 3:
• -7 adalah koefisien dari x²y
• 3 adalah konstanta

Suku-suku sejenis: memiliki variabel dan pangkat yang sama, hanya berbeda koefisien.

Contoh: Pada 1y - 9xy - 8y + 7xy² - 4y + 5xy
• 1y dan -4y → sejenis
• -9xy dan 5xy → sejenis
• -9xy dan 7xy² → BUKAN sejenis (xy ≠ xy²)`
  },
  {
    heading: "3.3 Operasi Penjumlahan dan Pengurangan",
    content: `Operasi penjumlahan dan pengurangan pada bentuk aljabar hanya dapat dilakukan pada suku-suku yang sejenis.

Contoh:
• 3a + 5a = 8a
• 7x² - 4x² = 3x²
• 2ab + 3ab = 5ab

Untuk suku yang tidak sejenis, operasi tidak dapat disederhanakan:
• 3a + 5b tetap ditulis 3a + 5b`
  },
  {
    heading: "3.4 Operasi Perkalian",
    content: `Perkalian bentuk aljabar menggunakan sifat distributif:

a × (b + c) = ab + ac

Contoh:
• 2(3x + 4) = 6x + 8
• 3a(2a - 5) = 6a² - 15a

Perkalian suku dua:
(a + b)(c + d) = ac + ad + bc + bd

Contoh:
(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15
(2x - 1)(x + 4) = 2x² + 8x - x - 4 = 2x² + 7x - 4`
  },
  {
    heading: "3.5 Faktorisasi Bentuk Aljabar",
    content: `Faktorisasi adalah kebalikan dari perkalian → menguraikan bentuk aljabar menjadi faktor-faktornya.

1. Faktor Persekutuan:
   6a + 8 = 2(3a + 4)

2. Selisih Dua Kuadrat:
   a² - b² = (a + b)(a - b)

3. Trinomial bentuk x² + bx + c:
   Cari dua bilangan yang hasil kalinya = c dan jumlahnya = b
   x² + 7x + 12 = (x + 3)(x + 4)

4. Trinomial bentuk ax² + bx + c:
   6x² + 11x + 3 = (2x + 3)(3x + 1)`
  },
];

const AljabarMateriPage = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (idx: number) => {
    playPopSound();
    setExpandedSections(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          ALJABAR
        </h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">Kelas 7 — Operasi dan Faktorisasi Bentuk Aljabar</p>

        <div className="space-y-3 animate-slide-up">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer text-left"
              >
                <span className="font-display text-sm text-accent font-bold">{section.heading}</span>
                {expandedSections.includes(idx) ? (
                  <ChevronUp className="w-4 h-4 text-accent shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
                )}
              </button>
              {expandedSections.includes(idx) && (
                <div className="px-5 pb-4">
                  <pre className="font-body text-sm text-white/80 whitespace-pre-wrap leading-relaxed">
                    {section.content}
                  </pre>
                </div>
              )}
            </div>
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

export default AljabarMateriPage;
