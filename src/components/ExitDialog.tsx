import { useState } from "react";
import { X } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";

interface ExitDialogProps {
  className?: string;
}

const ExitDialog = ({ className = "" }: ExitDialogProps) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleExit = () => {
    playPopSound();
    setShowDialog(true);
  };

  const confirmExit = () => {
    window.close();
    // Fallback: navigate to about:blank
    window.location.href = "about:blank";
  };

  return (
    <>
      <button
        onClick={handleExit}
        className={`w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border 
          flex items-center justify-center text-destructive hover:border-destructive/60 
          transition-all duration-300 cursor-pointer ${className}`}
        title="Keluar"
      >
        <X className="w-5 h-5" />
      </button>

      {showDialog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-sm w-[90vw] text-center animate-scale-in shadow-2xl">
            <X className="w-10 h-10 text-destructive mx-auto mb-3" />
            <h2 className="font-display text-lg font-bold text-foreground mb-2">
              Keluar Aplikasi?
            </h2>
            <p className="text-muted-foreground text-sm font-body mb-6">
              Apakah kamu yakin ingin keluar dari NUMATIK?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => { playPopSound(); setShowDialog(false); }}
                className="font-display text-sm px-6 py-2 rounded-lg bg-muted text-foreground cursor-pointer hover:opacity-90 transition-opacity"
              >
                Tidak
              </button>
              <button
                onClick={confirmExit}
                className="font-display text-sm px-6 py-2 rounded-lg bg-destructive text-destructive-foreground cursor-pointer hover:opacity-90 transition-opacity"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExitDialog;
