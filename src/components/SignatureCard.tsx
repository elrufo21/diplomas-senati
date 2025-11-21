import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SignatureData {
  name: string;
  fecha: string;
  tipo: string;
  serial: string;
  hash: string;
  emisor: string;
  validez: string;
}

interface SignatureCardProps {
  signature: SignatureData;
  defaultExpanded?: boolean;
}

const SignatureCard = ({ signature, defaultExpanded = false }: SignatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card
      className={`overflow-hidden transition-all ${
        isExpanded ? "border-2 border-success" : "border border-border"
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-accent/50 transition-colors"
      >
        <span className="font-semibold text-foreground text-left text-sm sm:text-base">{signature.name}</span>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-foreground flex-shrink-0 ml-2" />
        ) : (
          <ChevronRight className="w-5 h-5 text-foreground flex-shrink-0 ml-2" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 text-xs sm:text-sm">
          <div>
            <span className="font-semibold text-foreground">Fecha de Firma:</span>{" "}
            <span className="text-muted-foreground">{signature.fecha}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo de Firma:</span>{" "}
            <span className="text-muted-foreground">{signature.tipo}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Serial del Certificado:</span>{" "}
            <span className="text-muted-foreground break-all">{signature.serial}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Hash:</span>{" "}
            <span className="text-muted-foreground">{signature.hash}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Emisor:</span>{" "}
            <span className="text-muted-foreground break-all">{signature.emisor}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Validez:</span>{" "}
            <span className="text-success font-semibold">{signature.validez}</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SignatureCard;
