import { CheckCircle, XCircle, AlertTriangle, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

type VerdictType = "TRUE" | "FALSE" | "MIXTURE" | "UNVERIFIABLE";

interface VerificationResultsProps {
  inputType: "text" | "url" | "file";
  inputValue: string;
}

const VerificationResults = ({ inputType, inputValue }: VerificationResultsProps) => {
  // Mock data - in real app this would come from API
  const verdict: VerdictType = "FALSE";
  const confidence = 95;
  const analysisTime = "2.3s";

  const getVerdictConfig = (verdict: VerdictType) => {
    switch (verdict) {
      case "TRUE":
        return {
          color: "verdict-true",
          lightColor: "verdict-true-light",
          icon: CheckCircle,
          label: "TRUE",
          description: "This claim is supported by credible evidence",
        };
      case "FALSE":
        return {
          color: "verdict-false",
          lightColor: "verdict-false-light",
          icon: XCircle,
          label: "FALSE",
          description: "This claim contradicts credible evidence",
        };
      case "MIXTURE":
        return {
          color: "verdict-mixture",
          lightColor: "verdict-mixture-light",
          icon: AlertTriangle,
          label: "MIXTURE",
          description: "This claim contains both accurate and inaccurate elements",
        };
      case "UNVERIFIABLE":
        return {
          color: "verdict-unverifiable",
          lightColor: "verdict-unverifiable-light",
          icon: HelpCircle,
          label: "UNVERIFIABLE",
          description: "Insufficient credible evidence to determine accuracy",
        };
    }
  };

  const verdictConfig = getVerdictConfig(verdict);
  const VerdictIcon = verdictConfig.icon;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Main Verdict Banner */}
      <Card className={`border-2 shadow-lg bg-${verdictConfig.lightColor}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-full bg-${verdictConfig.color}`}>
                <VerdictIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className={`text-3xl font-bold text-${verdictConfig.color}`}>
                  {verdictConfig.label}
                </h2>
                <p className="text-neutral-600">{verdictConfig.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{confidence}%</div>
              <div className="text-sm text-neutral-500">Confidence</div>
            </div>
          </div>
          <Progress value={confidence} className="h-2" />
          <div className="flex justify-between text-sm text-neutral-500 mt-2">
            <span>Analyzed in {analysisTime}</span>
            <span>Model ensemble agreement</span>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Analysis Summary</span>
            <Badge variant="secondary">AI Generated</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">
            The claim being analyzed contains several factual inaccuracies when cross-referenced 
            with authoritative sources. Our fact-checking models identified contradictory evidence 
            from multiple credible news organizations and official data sources. The primary 
            assertions made in this content do not align with verified information from 
            Reuters, Associated Press, and government databases.
          </p>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="source-analysis">
              <AccordionTrigger>Source Analysis</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Source Credibility</h4>
                      <p className="text-sm text-neutral-600">newsxyz.com</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-verdict-false">Low</div>
                      <div className="text-sm text-neutral-500">Trust Score: 2/10</div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700">
                    This domain has been flagged multiple times for spreading misinformation. 
                    It lacks editorial oversight and has no established fact-checking process.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="key-claims">
              <AccordionTrigger>Key Claims Analysis</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-verdict-false pl-4">
                    <h4 className="font-semibold text-verdict-false">❌ Claim 1: Statistical Data</h4>
                    <p className="text-sm text-neutral-600 mt-1">
                      "95% of experts agree..." - This statistic is unsupported and contradicts 
                      peer-reviewed research showing only 23% consensus.
                    </p>
                  </div>
                  <div className="border-l-4 border-verdict-mixture pl-4">
                    <h4 className="font-semibold text-verdict-mixture">⚠️ Claim 2: Event Description</h4>
                    <p className="text-sm text-neutral-600 mt-1">
                      Partially accurate timeline but omits crucial context that changes the narrative.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="evidence">
              <AccordionTrigger>Supporting Evidence</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-verdict-true mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Reuters Fact Check</h4>
                      <p className="text-sm text-neutral-600">
                        "No evidence supports the statistical claims made in viral post"
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Source
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-verdict-true mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Associated Press</h4>
                      <p className="text-sm text-neutral-600">
                        "Official data contradicts viral social media claims"
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Source
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold">Model Confidence</h4>
                    <p className="text-neutral-600">95% agreement across ensemble</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sources Checked</h4>
                    <p className="text-neutral-600">127 credible sources</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Processing Time</h4>
                    <p className="text-neutral-600">2.3 seconds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Language</h4>
                    <p className="text-neutral-600">English (Confidence: 99.8%)</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerificationResults;