import { useState } from "react";
import { Search, Upload, Link2, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import VerificationResults from "./VerificationResults";

type InputType = "text" | "url" | "file";

interface VerificationState {
  isAnalyzing: boolean;
  hasResults: boolean;
  inputType: InputType;
  inputValue: string;
}

const VerificationInterface = () => {
  const [verificationState, setVerificationState] = useState<VerificationState>({
    isAnalyzing: false,
    hasResults: false,
    inputType: "text",
    inputValue: "",
  });

  const handleVerify = () => {
    if (!verificationState.inputValue.trim()) return;
    
    setVerificationState(prev => ({ ...prev, isAnalyzing: true }));
    
    // Simulate API call
    setTimeout(() => {
      setVerificationState(prev => ({
        ...prev,
        isAnalyzing: false,
        hasResults: true,
      }));
    }, 2000);
  };

  const handleInputChange = (value: string, type: InputType) => {
    setVerificationState(prev => ({
      ...prev,
      inputValue: value,
      inputType: type,
      hasResults: false,
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange(`File uploaded: ${file.name}`, "file");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Main Interface Card */}
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cut through the noise. <span className="text-primary">Discover the truth.</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Verify any claim, article, or content with our advanced AI-powered fact-checking system. 
              Get instant, reliable results with detailed explanations.
            </p>
          </div>

          <Tabs 
            value={verificationState.inputType} 
            onValueChange={(value) => handleInputChange("", value as InputType)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Text
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                URL
              </TabsTrigger>
              <TabsTrigger value="file" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                File
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <Textarea
                placeholder="Paste the text or claim you want to verify here..."
                value={verificationState.inputValue}
                onChange={(e) => handleInputChange(e.target.value, "text")}
                className="min-h-[120px] text-base"
                disabled={verificationState.isAnalyzing}
              />
            </TabsContent>

            <TabsContent value="url" className="space-y-4">
              <Input
                placeholder="https://example.com/article-to-verify"
                value={verificationState.inputValue}
                onChange={(e) => handleInputChange(e.target.value, "url")}
                className="text-base"
                disabled={verificationState.isAnalyzing}
              />
            </TabsContent>

            <TabsContent value="file" className="space-y-4">
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-neutral-600 mb-4">
                  Upload a screenshot, document, or image to analyze
                </p>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept="image/*,.pdf,.doc,.docx,.txt"
                  disabled={verificationState.isAnalyzing}
                />
                <Button 
                  onClick={() => document.getElementById('file-upload')?.click()}
                  variant="outline"
                  disabled={verificationState.isAnalyzing}
                >
                  Choose File
                </Button>
                {verificationState.inputValue && (
                  <p className="text-sm text-primary mt-2">
                    {verificationState.inputValue}
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleVerify}
              size="lg"
              disabled={!verificationState.inputValue.trim() || verificationState.isAnalyzing}
              className="px-8 py-6 text-lg font-semibold"
            >
              {verificationState.isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Verify Content
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {verificationState.hasResults && (
        <VerificationResults 
          inputType={verificationState.inputType}
          inputValue={verificationState.inputValue}
        />
      )}
    </div>
  );
};

export default VerificationInterface;