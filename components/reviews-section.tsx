"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Claudia Gutierrez",
    rating: 5,
    comment:
      "Gracias Fabiola Patron por ayudarme a obtener mi primera casa 🥰. Después de una experiencia frustrante con otros servicios que tardaban mucho en responder y al final no pudieron calificarme para un préstamo 😟. Fabiola fue atenta, profesional y logró ayudarme a calificar. 100% recomendada 👍❤️",
    location: "Los Angeles",
  },
  {
    name: "BethM",
    rating: 5,
    comment:
      "I am so thankful we found Fabiola. She has an amazing work ethic and took the time to talk with us and listen to what we wanted. She helped us sell our family home of 55 years in Tujunga. Has local resources to help with estates sales, junk removal, plumbing problems, so many things that need doing to sell a home these days and she was on it! Very detail oriented and a great advocate. I highly recommend Fabiola Patron!",
    location: "Tujunga",
  },
  {
    name: "Michelle Pena",
    rating: 5,
    comment:
      "I want to highly recommend working with Fabiola Patron if you're looking to sell your home or buy a home. She was truly a blessing to have on our team when selling my mother's townhome. Fabiola went above and beyond. She was there every step of the process. My mother's home was sold in less than two months from going on the market thanks to the dedication and commitment Fabiola provided. If you're looking for a trusting, professional, and dedicated realtor look no further. Fabiola Patron is the best!!!!",
    location: "Los Angeles",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience with Patron Real
            Estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>

                {/* Client info */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to experience the Patron Real Estate difference?
          </p>
          <a
            href="/contact"
            className="inline-block bg-lime-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-600 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
