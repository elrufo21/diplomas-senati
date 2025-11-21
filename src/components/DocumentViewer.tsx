import { Card } from "@/components/ui/card";
import { FileCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DocumentViewer = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // Simular descarga del documento
    toast({
      title: "Descargando documento",
      description: "RD-3_documento_firmado.pdf",
    });
    
    // En producción, aquí iría la lógica real de descarga
    // const link = document.createElement('a');
    // link.href = '/path/to/document.pdf';
    // link.download = 'RD-3_documento_firmado.pdf';
    // link.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-lg font-semibold text-primary">Documento</h3>
        <Button 
          onClick={handleDownload}
          size="sm"
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Descargar PDF</span>
        </Button>
      </div>
      
      <Card className="p-0 overflow-hidden">
        <div className="bg-[#323232] p-3 sm:p-4">
          <div className="flex items-center gap-2 text-white text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap">
            <span className="truncate max-w-[120px] sm:max-w-none">RD-3_documento_firmado.pdf</span>
            <span className="text-muted-foreground">•</span>
            <span>1 / 1</span>
            <span className="text-muted-foreground">•</span>
            <span>100%</span>
          </div>
          
          <button
            onClick={handleDownload}
            className="w-full bg-[#4a4a4a] rounded-lg p-3 sm:p-6 hover:bg-[#525252] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-center min-h-[300px] sm:min-h-[500px]">
              <div className="bg-white rounded shadow-lg p-3 sm:p-4 w-full max-w-2xl group-hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-white rounded flex items-center justify-center p-4">
                  <div className="text-center space-y-3 sm:space-y-4 max-w-sm">
                    <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="bg-primary rounded p-1">
                          <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                        </div>
                        <div className="text-primary font-bold text-sm sm:text-lg">SENATI</div>
                      </div>
                      
                      <div className="text-primary font-bold text-base sm:text-lg">REPÚBLICA DEL PERÚ</div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground">A NOMBRE DE LA NACIÓN</div>
                      
                      <div className="pt-2 sm:pt-4 space-y-1">
                        <div className="text-xs font-medium text-muted-foreground">
                          Resolución Directoral N° 3
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">
                          Documento firmado digitalmente
                        </div>
                        <div className="text-[10px] text-success font-semibold pt-1">
                          ✓ 2 firmas válidas
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-xs text-primary font-medium flex items-center justify-center gap-1">
                        <Download className="w-3 h-3" />
                        Click para descargar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default DocumentViewer;
