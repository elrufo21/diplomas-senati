import { useEffect, useState } from "react";
import SignatureCard from "./SignatureCard";

const signatures = [
  {
    name: "ROCIO GEOVANY TORO NORABUENA",
    fecha: "08-05-2024 12:07:19",
    tipo: "PAdES (CAdES Detached)",
    serial: "574E1742F840812290",
    hash: "SHA-256",
    emisor:
      "C=PE,ST=LIMA,L=LIMA,OU=see current address at www.camerfirma.com.pe/address,OU=AC CAMERFIRMA PERÚ CERTIFICADOS - 2016,SERIALNUMBER=20566302447,2.5.4.97=NTRPE-20566302447,O=CAMERFIRMA PERÚ S.A.C.,CN=AC CAMERFIRMA PERÚ CERTIFICADOS - 2016",
    validez: "Válido",
  },
  {
    name: "WILLY JUAN HERNANDEZ LUJAN",
    fecha: "08-05-2024 12:11:48",
    tipo: "PAdES (CAdES Detached)",
    serial: "43C935BF62A8214762",
    hash: "SHA-256",
    emisor:
      "C=PE,ST=LIMA,L=LIMA,OU=see current address at www.camerfirma.com.pe/address,OU=AC CAMERFIRMA PERÚ CERTIFICADOS - 2016,SERIALNUMBER=20566302447,2.5.4.97=NTRPE-20566302447,O=CAMERFIRMA PERÚ S.A.C.,CN=AC CAMERFIRMA PERÚ CERTIFICADOS - 2016",
    validez: "Válido",
  },
];

const SignatureList = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(false);
  }, []);
  return (
    <div className={`space-y-4  p-4 `}>
      <h3 className="text-lg font-semibold text-primary">Firmas Digitales</h3>

      <div className="space-y-3">
        {signatures.map((signature, index) => (
          <SignatureCard
            key={index}
            signature={signature}
            defaultExpanded={index === 0}
            setIsActive={setIsActive}
          />
        ))}
      </div>
    </div>
  );
};

export default SignatureList;
