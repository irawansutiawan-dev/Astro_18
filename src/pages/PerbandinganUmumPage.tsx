import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { playPopSound } from "@/hooks/useAudio";

const PerbandinganUmumPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-lg md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          Perbandingan Umum, Satuan Pembanding dan Rasio
        </h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">Kelas 7 — Perbandingan</p>

        <div className="space-y-6 animate-slide-up">
          {/* Pengantar */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <p className="font-body text-sm text-white/90 leading-relaxed">
              Perbandingan ukuran antara dua objek dapat ditinjau dari dua sudut pandang. Sudut pandang pertama adalah <strong className="text-accent">selisih ukurannya</strong> dan sudut pandang kedua adalah <strong className="text-accent">hasil bagi ukurannya</strong>.
            </p>
            <p className="font-body text-sm text-white/80 mt-3 leading-relaxed">
              Sebagai contoh, tinggi Andi 135 cm, sedangkan tinggi Berryl 180 cm. Jika cara membandingkannya adalah siapa yang lebih tinggi, maka jawabannya adalah Berryl dengan selisih tinggi 45 cm. Namun, jika yang ditanyakan adalah perbandingan, maka perbandingan yang dimaksud adalah hasil bagi ukuran antara unsur-unsur yang dibandingkan.
            </p>
          </div>

          {/* Contoh 1 */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Contoh 1</h3>
            <p className="font-body text-sm text-white/90 mb-2">
              <strong>1.</strong> Tinggi Andi 135 cm, tinggi Berryl 180 cm. Tentukan perbandingannya.
            </p>
            <div className="bg-muted/30 rounded-lg px-4 py-3 mt-2">
              <p className="font-body text-sm text-white/80">
                Tinggi Andi : Tinggi Berryl = 135/180 = (3×45)/(4×45) = <strong className="text-accent">3 : 4</strong>
              </p>
            </div>
          </div>

          {/* Contoh 2 */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Contoh 2</h3>
            <p className="font-body text-sm text-white/90 mb-2">
              <strong>2.</strong> Perbandingan panjang dan lebar persegi panjang 4 : 3. Keliling 70 cm. Tentukan panjang, lebar, dan luas.
            </p>
            <div className="bg-muted/30 rounded-lg px-4 py-3 mt-2 space-y-2">
              <p className="font-body text-sm text-white/80">Misalkan satuan pembandingnya x.</p>
              <p className="font-body text-sm text-white/80">Panjang = 4x, Lebar = 3x</p>
              <p className="font-body text-sm text-white/80">Keliling = 2(4x + 3x) = 14x = 70 → x = 5 cm</p>
              <p className="font-body text-sm text-white/80">Panjang = 20 cm, Lebar = 15 cm</p>
              <p className="font-body text-sm text-white/80">Luas = 20 × 15 = <strong className="text-accent">300 cm²</strong></p>
            </div>
          </div>

          {/* Contoh 3 */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Contoh 3</h3>
            <p className="font-body text-sm text-white/90 mb-2">
              <strong>3.</strong> Jumlah uang Ali, Budi, dan Cahya Rp45.000. Perbandingan 2 : 3 : 4. Berapa uang masing-masing?
            </p>
            <div className="bg-muted/30 rounded-lg px-4 py-3 mt-2 space-y-2">
              <p className="font-body text-sm text-white/80">Misalkan satuan pembanding p, maka total = 9p = 45.000 → p = 5.000</p>
              <p className="font-body text-sm text-white/80">Ali = 2p = <strong className="text-accent">Rp10.000</strong></p>
              <p className="font-body text-sm text-white/80">Budi = 3p = <strong className="text-accent">Rp15.000</strong></p>
              <p className="font-body text-sm text-white/80">Cahya = 4p = <strong className="text-accent">Rp20.000</strong></p>
            </div>
          </div>

          {/* Contoh 4 - Rasio */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Contoh 4 - Rasio</h3>
            <p className="font-body text-sm text-white/90 mb-2">
              <strong>4.</strong> Kecamatan Lengkong: luas 50 km², penduduk 20.000, 2 SMP dengan 400 siswa dan 25 guru.
            </p>
            <div className="bg-muted/30 rounded-lg px-4 py-3 mt-2 space-y-2">
              <p className="font-body text-sm text-white/80">
                a. Rasio penduduk : luas = 20.000/50 = <strong className="text-accent">400 jiwa/km²</strong>
              </p>
              <p className="font-body text-sm text-white/80">
                b. Rasio guru : siswa = 25/400 = <strong className="text-accent">1 : 16</strong> (1 guru menangani 16 siswa)
              </p>
              <p className="font-body text-sm text-white/80">
                c. Rasio siswa : guru = 400/25 = <strong className="text-accent">16 : 1</strong>
              </p>
            </div>
          </div>

          {/* Contoh 5 - Skala */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Contoh 5 - Skala Peta</h3>
            <p className="font-body text-sm text-white/90 mb-2">
              <strong>5.</strong> Jarak kota A-B = 60 km. Pada peta jarak = 4 cm. Tentukan rasio jarak peta : sebenarnya.
            </p>
            <div className="bg-muted/30 rounded-lg px-4 py-3 mt-2 space-y-2">
              <p className="font-body text-sm text-white/80">60 km = 6.000.000 cm</p>
              <p className="font-body text-sm text-white/80">Rasio = 4/6.000.000 = <strong className="text-accent">1 : 1.500.000</strong></p>
              <p className="font-body text-sm text-white/80">Artinya 1 cm pada peta mewakili 1.500.000 cm = 15 km sebenarnya.</p>
            </div>
          </div>

          {/* Kesimpulan */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl px-5 py-4">
            <h3 className="font-display text-sm text-accent font-bold mb-3">Kesimpulan</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li className="font-body text-sm text-white/80">
                Rasio dari dua besaran berbeda memiliki satuan pembanding berupa "satuan pembilang per satuan penyebut".
              </li>
              <li className="font-body text-sm text-white/80">
                Rasio antara dua besaran dengan satuan sama tidak memiliki satuan pembanding → disebut skala 1 : s.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => { playPopSound(); navigate("/materi/perbandingan"); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke Perbandingan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerbandinganUmumPage;
