"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Target,
  DollarSign,
  CheckCircle,
  Handshake,
  Building2,
  ArrowRight,
  Calculator,
  Loader2,
  Home,
  MapPin,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function SellingPage() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    // Función para cargar el widget de Homebot
    const loadHomebotWidget = () => {
      try {
        // Verificar si Homebot ya está disponible
        if ((window as any).Homebot) {
          (window as any).Homebot(
            "#homebot_homeowner_selling",
            "6172d27b4c8835f47f7692e42c2fe8296fbc5631fff6439c"
          );
          setWidgetLoaded(true);
          return;
        }

        // Si no está disponible, cargar el script
        const script = document.createElement("script");
        script.src = "https://embed.homebotapp.com/lgw/v1/widget.js";
        script.async = true;

        script.onload = () => {
          // Esperar un poco para que Homebot se inicialice
          setTimeout(() => {
            if ((window as any).Homebot) {
              (window as any).Homebot(
                "#homebot_homeowner_selling",
                "6172d27b4c8835f47f7692e42c2fe8296fbc5631fff6439c"
              );
              setWidgetLoaded(true);
            } else {
              setWidgetError(true);
            }
          }, 1000);
        };

        script.onerror = () => {
          setWidgetError(true);
        };

        document.head.appendChild(script);

        // Timeout de seguridad
        setTimeout(() => {
          if (!widgetLoaded) {
            setWidgetError(true);
          }
        }, 10000);
      } catch (error) {
        console.error("Error loading Homebot widget:", error);
        setWidgetError(true);
      }
    };

    // Cargar el widget cuando el componente se monte
    loadHomebotWidget();
  }, [widgetLoaded]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Are you ready to sell your
            <span className="block text-lime-500">home?</span>
          </h1>
        </div>

        {/* Homebot Widget Integration */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Get Your Free Home Valuation */}
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-lime-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Home Valuation
                </CardTitle>
                <p className="text-gray-600">
                  Enter your address below to receive an instant estimate of your home's current market value
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {/* Homebot Widget Container */}
                <div id="homebot_homeowner_selling" className="min-h-[200px] relative z-0 mb-6">
                  {!widgetLoaded && !widgetError && (
                    <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
                      <Loader2 className="w-8 h-8 animate-spin text-lime-600 mb-3" />
                      <p className="text-base">Loading Homebot Widget...</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Please wait while we load the valuation tool
                      </p>
                    </div>
                  )}

                  {widgetError && (
                    <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
                      <Calculator className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-base text-gray-600 mb-2">
                        Widget Loading Issue
                      </p>
                      <p className="text-xs text-gray-400 mb-3 text-center">
                        There was an issue loading the Homebot widget. Please use
                        the direct link below.
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
                      >
                        <a
                          href="https://hmbt.co/aypqLM"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Calculator className="w-4 h-4 mr-2" />
                          Use Direct Homebot Link
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Alternative Direct Link */}
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Prefer to use the direct Homebot link?
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white"
                  >
                    <a
                      href="https://hmbt.co/aypqLM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Open Homebot Valuation Tool
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

                        {/* Right Column - About Patron Real Estate */}
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Patron Real Estate?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Patron Real Estate Inc, we look to educate you first on all aspects of real estate. 
                    We know how to sell your home. The question is, are you ready, well informed and prepared 
                    to sell what may be your biggest asset and/or investment decision to date?
                  </p>
                  
                  <p>
                    Having 20 plus years of experience in the industry, Patron REI has gained a wealth of knowledge and wisdom. 
                    One thing we have learned is that every situation is unique. We follow that approach with each new client 
                    we meet and take the time to understand their big picture. We strongly believe in the principles of putting 
                    our customer's best interest first!
                  </p>

                  <p>
                    Selling your property can be a daunting and overwhelming process when not fully informed of all your options. 
                    Your first step is to arm yourself with a team you can trust and will work on a plan that is <strong>RIGHT FOR YOU!</strong>
                  </p>

                  <p>
                    The following pages will provide you some of the basic steps you are expected to encounter when starting 
                    the home selling process. As mentioned, every situation is different. If you need additional or specific 
                    information on this topic, please{" "}
                    <Link href="/contact" className="text-lime-600 hover:text-lime-700 underline font-medium">
                      click here
                    </Link>{" "}
                    to get in contact with a Patron team member.
                  </p>

                  <div className="text-center p-4 border-2 border-lime-500 rounded-lg mt-6">
                    <h3 className="text-lg font-bold text-lime-600">Put your trust in Patron REI!</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>





        {/* Process Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">The starting point:</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                At this stage, we begin to gather information and understand your needs so we can begin to develop a strategy 
                that is <strong>RIGHT FOR YOU!</strong> The initial stage of getting to know each other is really the foundation 
                of how we build that structured approach to meet your needs. This also gives you the opportunity to interact 
                with a representative of Patron REI to help you decide if we are a right fit for you.
              </p>

              <div className="space-y-8">
                {/* Time Frame Section */}
                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-lime-600" />
                </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What is your time-frame?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We need to understand if time is on your side or time is already working against you. Understanding 
                      how much time you have to get your home sold is very important. Are you starting a new job and relocating? 
                      Are you downsizing? Are you retiring? These are all different scenarios with different timeframes. 
                      In addition to that we need to consider market conditions and create a timeline that works for you and your goals.
                    </p>
                  </div>
                </div>

                {/* Bottom Line Section */}
                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-lime-600" />
                </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What's your bottom Line?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We need to determine your strike price and your deal breakers. Are there any repairs in mind or 
                      options to explore to improve your home and optimize the value? By taking the time to understand 
                      and prepare yourself very early in the process, you will be able to make confident and favorable 
                      decisions. This also can help target the right buyers and reduce the back and forth that can happen 
                      between buyer and seller which happens during the offer>negotiation>acceptance stage of 
                      the selling process.
                    </p>
                  </div>
                </div>

                {/* Setting the Price Section */}
                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-6 h-6 text-lime-600" />
                </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Setting the price</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This step is very important and must line up with your desired time-frame and bottom line deal 
                      breakers and financials to help reduce any obstacles or challenges that may negatively affect 
                      your timeframes to sell your home. As the homeowner, PATRON REI puts YOUR financials, priorities, 
                      immediate and longer-term goals as factors into the plan which play a key role in coming up with 
                      the price that is <strong>RIGHT FOR YOU!</strong>
                    </p>
                  </div>
                </div>

                {/* Plan of Action Section */}
                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-lime-600" />
                </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">A Plan of Action for YOU</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Now that we have covered your critical areas, we can begin to formulate a plan that will take into 
                      account all of the information we have discussed. We will work with you to lay out the steps and 
                      anticipated time frames. PATRON REI is confident that we can tailor a plan to meet your needs.
                    </p>
                  </div>
                </div>

                {/* Partnership Section */}
                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Handshake className="w-6 h-6 text-lime-600" />
                </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Forming a Partnership….</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to working diligently and meeting all the objectives set forth in the plan created 
                      just for YOU. If you agree with the plan, we ask that you commit to partnering with us on your 
                      real estate ventures. We will earn your business!!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Patron Real Estate Inc's goal is to provide you information and share what we learned along our 20 plus 
                  years of working in the industry. The experience has allowed Patron REI to gain valuable wisdom and knowledge. 
                  We want to share what we know and help position you to protect your home and make well informed decisions 
                  that best fits your needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Your Selling Journey?</h3>
            <p className="text-lg mb-6 text-gray-600">
              Let our experienced team help you get the best value for your home.
            </p>
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white" asChild>
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
