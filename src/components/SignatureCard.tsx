import { useState, useRef, useEffect } from "react";
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
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignatureCard = ({
  signature,
  defaultExpanded = false,
  setIsActive,
}: SignatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  useEffect(() => {
    setIsExpanded(false);
  }, []);
  return (
    <Card
      className={`rounded-xl shadow-sm border transition-all ${
        isExpanded ? "border-success shadow-md" : "border-border"
      }`}
    >
      {/* HEADER */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          setIsActive(!isExpanded);
        }}
        className="w-full p-4 flex items-center justify-between hover:bg-accent/50 rounded-xl transition-colors"
      >
        <span className="font-semibold text-foreground text-left text-base sm:text-lg">
          {signature.name}
        </span>

        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-foreground" />
        ) : (
          <ChevronRight className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2 text-sm">
          <Info label="Fecha de Firma" value={signature.fecha} />
          <Info label="Tipo de Firma" value={signature.tipo} />
          <Info
            label="Serial del Certificado"
            value={signature.serial}
            breakValue
          />
          <Info label="Hash" value={signature.hash} />
          <Info label="Emisor" value={signature.emisor} breakValue />
          <div>
            <span className="font-semibold text-foreground">Validez:</span>{" "}
            <span className=" font-semibold">{signature.validez}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Info = ({
  label,
  value,
  breakValue,
}: {
  label: string;
  value: string;
  breakValue?: boolean;
}) => (
  <div>
    <span className="font-semibold text-foreground">{label}:</span>{" "}
    <span className={`text-muted-foreground ${breakValue ? "break-all" : ""}`}>
      {value}
    </span>
  </div>
);

export default SignatureCard;
