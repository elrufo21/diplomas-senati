import Header from "@/components/Header";
import DocumentViewer from "@/components/DocumentViewer";
import SignatureList from "@/components/SignatureList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <DocumentViewer />
          <SignatureList />
        </div>
      </main>
    </div>
  );
};

export default Index;
