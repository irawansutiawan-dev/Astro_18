import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { startGlobalAmbient } from "@/hooks/useAudio";
import { ThemeProvider } from "@/contexts/ThemeContext";
import WelcomePage from "./pages/WelcomePage";
import MenuPage from "./pages/MenuPage";
import PetunjukPage from "./pages/PetunjukPage";
import MateriPage from "./pages/MateriPage";
import KubusPage from "./pages/KubusPage";
import LingkaranMateriPage from "./pages/LingkaranMateriPage";
import LatihanPage from "./pages/LatihanPage";
import QuizPage from "./pages/QuizPage";
import LingkaranQuizPage from "./pages/LingkaranQuizPage";
import ReferensiPage from "./pages/ReferensiPage";
import TugasMandiriPage from "./pages/TugasMandiriPage";
import DonasiPage from "./pages/DonasiPage";
import BiografiPage from "./pages/BiografiPage";
import OlimpiadePage from "./pages/OlimpiadePage";
import OlimpiadeBilanganBulatPage from "./pages/OlimpiadeBilanganBulatPage";
import TKAPage from "./pages/TKAPage";
import PerbandinganMenuPage from "./pages/PerbandinganMenuPage";
import PerbandinganUmumPage from "./pages/PerbandinganUmumPage";
import AljabarMateriPage from "./pages/AljabarMateriPage";
import BilanganBulatMenuPage from "./pages/BilanganBulatMenuPage";
import BilanganRasionalMenuPage from "./pages/BilanganRasionalMenuPage";
import AljabarMenuPage from "./pages/AljabarMenuPage";
import PersamaanMenuPage from "./pages/PersamaanMenuPage";
import AritmetikaSosialMenuPage from "./pages/AritmetikaSosialMenuPage";
import GarisDanSudutMenuPage from "./pages/GarisDanSudutMenuPage";
import HimpunanMenuPage from "./pages/HimpunanMenuPage";
import SegitigaDanSegiempatMenuPage from "./pages/SegitigaDanSegiempatMenuPage";
import BilanganBerpangkatMenuPage from "./pages/BilanganBerpangkatMenuPage";
import KesebangunanDanKekongruenMenuPage from "./pages/KesebangunanDanKekongruenMenuPage";
import PapanPeringkatPage from "./pages/PapanPeringkatPage";
import BankSoalPage from "./pages/BankSoalPage";
import ChatAIPage from "./pages/ChatAIPage";
import PengaturanPage from "./pages/PengaturanPage";
import TentangAplikasiPage from "./pages/TentangAplikasiPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppInner = () => {
  useEffect(() => {
    const handleInteraction = () => {
      startGlobalAmbient();
      window.removeEventListener("click", handleInteraction);
    };
    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/petunjuk" element={<PetunjukPage />} />
      <Route path="/materi" element={<MateriPage />} />
      <Route path="/materi/bilangan-bulat" element={<BilanganBulatMenuPage />} />
      <Route path="/materi/bilangan-rasional" element={<BilanganRasionalMenuPage />} />
      <Route path="/materi/aljabar-menu" element={<AljabarMenuPage />} />
      <Route path="/materi/persamaan-menu" element={<PersamaanMenuPage />} />
      <Route path="/materi/kubus" element={<KubusPage />} />
      <Route path="/materi/lingkaran" element={<LingkaranMateriPage />} />
      <Route path="/materi/perbandingan" element={<PerbandinganMenuPage />} />
      <Route path="/materi/perbandingan/umum" element={<PerbandinganUmumPage />} />
      <Route path="/materi/aljabar" element={<AljabarMateriPage />} />
      <Route path="/materi/aritmetika-sosial" element={<AritmetikaSosialMenuPage />} />
      <Route path="/materi/garis-dan-sudut" element={<GarisDanSudutMenuPage />} />
      <Route path="/materi/himpunan" element={<HimpunanMenuPage />} />
      <Route path="/materi/segitiga-dan-segiempat" element={<SegitigaDanSegiempatMenuPage />} />
      <Route path="/materi/bilangan-berpangkat" element={<BilanganBerpangkatMenuPage />} />
      <Route path="/materi/kesebangunan-dan-kekongruen" element={<KesebangunanDanKekongruenMenuPage />} />
      <Route path="/latihan" element={<LatihanPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/lingkaran-quiz" element={<LingkaranQuizPage />} />
      <Route path="/referensi" element={<ReferensiPage />} />
      <Route path="/tugas-mandiri" element={<TugasMandiriPage />} />
      <Route path="/donasi" element={<DonasiPage />} />
      <Route path="/biografi" element={<BiografiPage />} />
      <Route path="/olimpiade" element={<OlimpiadePage />} />
      <Route path="/olimpiade/bilangan-bulat" element={<OlimpiadeBilanganBulatPage />} />
      <Route path="/tka" element={<TKAPage />} />
      <Route path="/papan-peringkat" element={<PapanPeringkatPage />} />
      <Route path="/bank-soal" element={<BankSoalPage />} />
      <Route path="/chat-ai" element={<ChatAIPage />} />
      <Route path="/pengaturan" element={<PengaturanPage />} />
      <Route path="/tentang-aplikasi" element={<TentangAplikasiPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
