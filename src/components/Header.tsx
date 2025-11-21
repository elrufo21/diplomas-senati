import { FileCheck } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4 sm:py-6">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-primary rounded-lg p-1.5 sm:p-2">
              <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary">SENATI</h1>
          </div>
          <h2 className="text-base sm:text-xl font-semibold text-primary">Validador de Firmas</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
