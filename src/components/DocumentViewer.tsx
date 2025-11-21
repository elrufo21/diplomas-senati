import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  ZoomIn,
  ZoomOut,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Printer,
  Loader2,
  Menu,
  MoreVertical,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentViewer = ({
  pdfUrl = "TITULO_73619637_22244F_251120_152231.pdf",
}) => {
  const { toast } = useToast();
  const [numPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.8);
  const [rotation, setRotation] = useState(0);

  const fileName = "TITULO_73619637_22244F_251120_152231.pdf";

  const handleDownload = () => {
    toast({
      title: "Descargando documento",
      description: fileName,
    });

    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = fileName;
      link.click();
    }
  };

  const handlePrint = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
    toast({
      title: "Preparando impresión",
      description: "Abriendo documento en nueva ventana",
    });
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const scalePercentage = Math.round(scale * 100);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 px-4">Documento</h2>

      <Card className="p-0 overflow-hidden border-0 shadow-lg">
        {/* Header con controles estilo PDF viewer */}

        {/* Área del documento con sidebar y viewer */}
        <div
          className="flex bg-[#3a3a3a]"
          style={{
            height: "calc(100vh - 600px)",
            minHeight: "200px",
          }}
        >
          {/* Sidebar con miniaturas */}

          {/* Main PDF viewer */}
          <div className="flex-1 overflow-auto p-6 ">
            <div className=" flex justify-center items-start">
              {pdfUrl ? (
                <div
                  className="shadow-2xl bg-white cursor-pointer"
                  onClick={handleDownload}
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                  }}
                >
                  <iframe
                    src={pdfUrl}
                    className="border-0 pointer-events-none"
                    style={{
                      width: "800px",
                      height: "1131px",
                    }}
                    title="PDF Viewer"
                  />
                </div>
              ) : (
                <div
                  className="bg-white shadow-2xl"
                  style={{ width: "800px", height: "1131px" }}
                >
                  <div className="h-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8">
                    <div className="text-center space-y-6 max-w-lg">
                      <div className="bg-blue-600/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                        <FileText className="w-12 h-12 text-blue-600" />
                      </div>

                      <div className="pt-6">
                        <Button onClick={handleDownload} className="gap-2">
                          <Download className="w-4 h-4" />
                          Descargar documento
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DocumentViewer;
