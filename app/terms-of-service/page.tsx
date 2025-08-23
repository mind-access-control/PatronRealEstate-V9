import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Terms of Service
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Last updated: January 2025
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using the Patron Real Estate website and services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Description of Service
                  </h2>
                  <p className="mb-3">
                    Patron Real Estate provides real estate services including:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Property buying and selling assistance</li>
                    <li>Property management services</li>
                    <li>Home valuation services</li>
                    <li>Real estate consulting</li>
                    <li>Market analysis and reports</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="mb-3">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services for lawful purposes only</li>
                    <li>Respect the privacy and rights of other users</li>
                    <li>Not interfere with the proper functioning of our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Privacy and Data Protection
                  </h2>
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    Patron Real Estate shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Modifications to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Governing Law
                  </h2>
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Contact Information
                  </h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-3 p-4 bg-gray-100 rounded-lg">
                    <p className="font-medium">Patron Real Estate</p>
                    <p>Email: legal@patron.com</p>
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
