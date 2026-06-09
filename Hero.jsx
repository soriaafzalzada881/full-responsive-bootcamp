import React from "react";

const data = [
  {
    title: "Market research",
    image:
      "https://framerusercontent.com/images/Ks478GmT2s9Ewl2BhCGGJWDqdKo.jpg?width=4213&height=2809",
  },
  {
    title: "Strategic planning",
    image:
      "https://framerusercontent.com/images/wnUzv0z9hQsQucujSeLpZ5hwOY.jpg?width=5425&height=3617",
  },
  {
    title: "Financial advisory",
    description:
      "From planning and budgeting to risk management, our financial advisory services help businesses optimize performance.",
    image:
      "https://framerusercontent.com/images/zTN763RqqgJAjH4qtwjuKBx3jt8.jpg?width=8037&height=5358",
    // large: true,
  },
  {
    title: "Digital transition",
    image:
      "https://framerusercontent.com/images/b9nu1QU2Wt1DIx7CIs7pWoPmiVo.jpg?width=8063&height=5375",
  },
  {
    title: "Sustainability",
    image:
      "https://framerusercontent.com/images/lvtgMzxIp4NvrKLmKcQW2Kes4M.jpg?width=3684&height=5526",
  },
  {
    title: "Management",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-2px bg-blue-600"></div>
              <span className="text-blue-600 text-sm">Our services</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              We offer a wide
              <br />
              range of services
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-gray-500 text-sm leading-relaxed">
              By combining our industry knowledge with cutting-edge tools and
              methodologies, we develop strategies that drive measurable
              results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer
      ${service.large ? "md:row-span-2 min-h-95" : "min-h-65"}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <h3 className="font-semibold text-lg">{service.title}</h3>

                {service.description && (
                  <p className="text-sm text-gray-200 mt-2 max-w-xs">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
