import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Privacy Policy
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Last updated: January 2025
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="mb-3">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Contact us through our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request property information</li>
                    <li>Apply for our services</li>
                  </ul>
                  <p>
                    This information may include your name, email address, phone number, and any other information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about properties and services</li>
                    <li>Send you marketing materials (with your consent)</li>
                    <li>Respond to your inquiries and requests</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Information Sharing
                  </h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Data Security
                  </h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Your Rights
                  </h2>
                  <p className="mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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
