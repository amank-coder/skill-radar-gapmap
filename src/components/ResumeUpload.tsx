
import { useState } from "react";
import { Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }
    
    setUploading(true);
    setFile(selectedFile);
    
    // Simulate upload progress
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 20;
      setProgress(uploadProgress);
      
      if (uploadProgress >= 100) {
        clearInterval(interval);
        setUploading(false);
        toast.success("Resume uploaded successfully");
      }
    }, 500);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFile = e.dataTransfer.files?.[0];
    
    if (!droppedFile) return;
    
    if (droppedFile.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }
    
    setUploading(true);
    setFile(droppedFile);
    
    // Simulate upload progress
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 20;
      setProgress(uploadProgress);
      
      if (uploadProgress >= 100) {
        clearInterval(interval);
        setUploading(false);
        toast.success("Resume uploaded successfully");
      }
    }, 500);
  };

  const preventDefaults = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="glass-card p-6 rounded-xl bg-pastel-gradient border-gapmap-pastel-purple/20">
      <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Upload Your Resume</h2>
      <p className="text-muted-foreground mb-6">
        Upload your resume in PDF format to analyze your skills
      </p>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
          file ? "border-gapmap-pastel-purple/40 bg-gradient-to-br from-gapmap-pastel-purple/10 to-transparent" : "border-gapmap-gray/30 hover:border-gapmap-pastel-purple/30 hover:bg-gradient-to-br hover:from-gapmap-pastel-purple/5 hover:to-transparent"
        }`}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onDragLeave={preventDefaults}
        onDrop={handleDrop}
      >
        {!file ? (
          <>
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
            <h3 className="font-medium text-lg mb-2">Drag & drop your resume here</h3>
            <p className="text-muted-foreground mb-6">or</p>
            <Button 
              variant="secondary" 
              className="relative bg-gradient-to-r from-gapmap-pastel-purple/80 to-gapmap-pastel-blue/80 hover:from-gapmap-pastel-purple hover:to-gapmap-pastel-blue text-white border-none"
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept=".pdf"
              />
              Browse Files
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Supported file: PDF (max 5MB)
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center">
            {uploading ? (
              <>
                <Upload className="h-12 w-12 text-gapmap-pastel-purple animate-pulse mb-3" />
                <h3 className="font-medium text-lg mb-4">Uploading...</h3>
                <div className="w-full max-w-xs bg-gapmap-gray/30 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-gradient-to-r from-gapmap-pastel-purple to-gapmap-pastel-blue h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-muted-foreground">{progress}%</p>
              </>
            ) : (
              <>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gapmap-pastel-purple/30 to-gapmap-pastel-blue/30 flex items-center justify-center mb-3">
                  <Check className="h-6 w-6 text-gapmap-pastel-purple" />
                </div>
                <h3 className="font-medium text-lg mb-2">Upload Complete!</h3>
                <p className="text-muted-foreground mb-4">{file.name}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFile(null)}
                  className="border-gapmap-pastel-purple/30 text-gapmap-pastel-purple hover:bg-gapmap-pastel-purple/10"
                >
                  Change File
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
