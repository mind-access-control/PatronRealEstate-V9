import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  FileText,
  ArrowRight,
  Home,
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  Handshake,
  Shield,
  CheckCircle,
  MapPin,
  Calculator,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

export default function SellingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-gray-900 mb-6">
            Are you ready to sell your
            <span className="block text-primary">home?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Patron Real Estate Inc, we look to educate you first on all aspects of real estate. 
            We know how to sell your home. The question is are you ready, well informed and prepared 
            to sell what may be your biggest asset and/or investment decision to date?
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Having 18 plus years of experience in the industry, Patron REI has gained a wealth of knowledge and wisdom. 
                One thing we have learned is that every situation is unique. We follow that approach with each new client 
                we meet and take the time to understand their big picture. We strongly believe in the principles of putting 
                our customer's best interest first!
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Selling your property can be a daunting and overwhelming process when not fully informed of all your options. 
                Your first step is to arm yourself with a team you can trust and will work on a plan that is <strong>RIGHT FOR YOU!</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The following pages will provide you some of the basic steps you are expected to encounter when starting 
                the home selling process. As mentioned, every situation is different. If you need additional or specific 
                information on this topic, please click here to get in contact with a Patron team member.
              </p>

              <div className="text-center p-6 bg-primary/10 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Put your trust in Patron REI!</h3>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">The starting point:</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At this stage, we begin to gather information and understand your needs so we can begin to develop a strategy 
                that is <strong>RIGHT FOR YOU!</strong> The initial stage of getting to know each other is really the foundation 
                of how we build that structured approach to meet your needs. This also gives you the opportunity to interact 
                with a representative of Patron REI to help you decide if you want to put your trust in us.
              </p>

              <div className="space-y-8">
                {/* Time Frame Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What is your time-frame?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We need to understand if time is on your side or time is already working against you. Understanding 
                      how much time you have to get your home sold is very important. Having seen homes sell in as little 
                      as 10-15 days to as long as 5-6 months due to unstable buyers who tie up your property while 
                      continuing to fish around for other property or someone trying to wholesale your property while in 
                      escrow and under contract to buy your home. Are you prepared for these unforeseen obstacles and/or 
                      delays to sell?
                    </p>
                  </div>
                </div>

                {/* Bottom Line Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What's your bottom Line?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We need to determine your strike price and your deal breakers. Are there any repairs in mind or 
                      options to explore to improve your home and optimize the value? By taking the time to understand 
                      and prepare yourself very early in the process, you will be able to make confident and favorable 
                      decisions. This also can help target the right buyers and reduce the back and forth that can happen 
                      between buyer and seller mentioned which happens during the offer>negotiation>acceptance stage of 
                      the selling process.
                    </p>
                  </div>
                </div>

                {/* Setting the Price Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-6 h-6 text-primary" />
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Forming a Partnership….</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to work diligently and meeting all the objectives set forth in the plan created 
                      just for YOU. If you agree with the plan, we ask that you commit to partnering with us on your 
                      real estate ventures. We will earn your business!!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Patron Real Estate Inc's goal is to provide you information and share what we learned along our 18 plus 
                  years of working in the industry. The experience has allowed Patron REI to gain valuable wisdom and knowledge. 
                  We want to share what we know and help position you to protect your home and make well informed decisions 
                  that best fits your needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Property Valuation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Get an accurate market value assessment of your property with
                our comprehensive analysis.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/home-value">
                  Get Valuation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-primary" />
                Marketing Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional photography, virtual tours, and targeted marketing
                to attract qualified buyers.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Expert Agents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Work with our experienced agents who know how to maximize your
                property's value.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/agents">
                  Meet Our Agents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Sell Your Property?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let our experienced team help you get the best value for your home.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us to Sell</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
