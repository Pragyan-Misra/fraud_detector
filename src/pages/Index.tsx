import Navigation from "@/components/Navigation";
import VerificationInterface from "@/components/VerificationInterface";


const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      <div className="relative z-10">
        <main className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-16">
          <div id="verify" className="scroll-mt-20">
            <VerificationInterface />
          </div>
        </main>
        {/* Features Section */}
        <section className="py-24 bg-transparent" id="how-it-works">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black  mb-4">
                How VeritasAI Works
              </h2>
              {/* <p className="text-lg text-black max-w-3xl mx-auto">
                Our advanced AI system analyzes content across multiple dimensions to provide 
                you with accurate, trustworthy verification results in seconds.
              </p> */}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Submit Content</h3>
                  <p className="text-black">
                    Paste text, enter a URL, or upload an image or document for analysis.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">AI Analysis</h3>
                  <p className="text-black">
                    Our ensemble of AI models cross-references claims against credible sources.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Get Results</h3>
                  <p className="text-black">
                    Receive a clear verdict with detailed explanations and source references.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-24 bg-primary text-primary-foreground" id="api">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Enterprise Integration?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Integrate our powerful verification API into your platform and protect your users from misinformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  View API Docs
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          </section>
      </div>
      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-neutral-100">VeritasAI</span>
              </div>
              <p className="text-neutral-400 text-sm">
                Cutting through the noise to discover the truth with advanced AI verification technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-100 mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#verify" className="hover:text-primary transition-colors">Verification Tool</a></li>
                <li><a href="#api" className="hover:text-primary transition-colors">API Access</a></li>
                <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Browser Extension</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-100 mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-100 mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              © 2024 VeritasAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;