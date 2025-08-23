import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Cookie Policy
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Last updated: January 2025
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. What Are Cookies
                  </h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Types of Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Essential Cookies
                      </h3>
                      <p>
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Analytics Cookies
                      </h3>
                      <p>
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Functional Cookies
                      </h3>
                      <p>
                        These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. How We Use Cookies
                  </h2>
                  <p className="mb-3">
                    We use cookies to:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Third-Party Cookies
                  </h2>
                  <p>
                    Some cookies on our website are placed by third-party services that appear on our pages. These services may include Google Analytics, social media platforms, and advertising networks.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Managing Cookies
                  </h2>
                  <p className="mb-3">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Browser settings: Most browsers allow you to refuse cookies</li>
                    <li>Cookie consent: Use our cookie consent banner</li>
                    <li>Third-party opt-out: Visit third-party websites to opt out</li>
                  </ul>
                  <p>
                    Please note that disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Updates to This Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Contact Us
                  </h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <div className="mt-3 p-4 bg-gray-100 rounded-lg">
                    <p className="font-medium">Patron Real Estate</p>
                    <p>Email: privacy@patron.com</p>
                    <p>Phone: +1 (305) 555-0123</p>
                    <p>Address: 123 Miami Ave, Miami, FL 33101</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
