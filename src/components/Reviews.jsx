import React, { useState } from "react";

const Reviews = () => {
  // State to track which card is currently active
  const [activeCard, setActiveCard] = useState(0);

  // Updated review data for the three cards
  const reviews = [
    {
      title: "Very Professional",
      content:
        "Since having our new website built by famefing, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. And his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized, and effective. Thanks to famefing for all of your hard work and support!",
      names: [
        { name: "Anna Smith", color: "#00FBF4" },
        { name: "Demilec (USA)", color: "white" },
      ],
    },
    {
      title: "Highly Satisfied",
      content:
        "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at famefing has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing. I would recommend famefing to anyone looking for website design or SEO work!",
      names: [
        { name: "Johnhenry", color: "#00FBF4" },
        { name: "Max Mechanical", color: "white" },
      ],
    },
    {
      title: "Fantastic Service",
      content:
        "We re-did our website twice in a 12-month period. There was no comparison between the first company and famefing. Professional, Creative, Attentive to Detail, Excellent Communication... If I had contracted with famefing the first time I would not have had to do it twice.",
      names: [
        { name: "Jacksonpol", color: "#00FBF4" },
        { name: "Arlington Management", color: "white" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative">
      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row items-center justify-start ml-12 mr-12 mt-12">
        {/* Left Section with Cards */}
        <div className="w-full md:w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                activeCard === index ? "opacity-100" : "opacity-0 translate-x-full"
              }`}
              style={{
                display: activeCard === index ? "block" : "none",
              }}
            >
              <div
                className="bg-black w-full h-3/5 p-10 rounded-lg shadow-lg flex flex-col justify-between border-solid"
                style={{
                  borderWidth: "1px", // Very narrow border
                  borderColor: "#00FBF4", // Border color
                }}
              >
                <p className="text-lg mb-4">{review.content}</p>

                {/* Names inside the card */}
                <div className="mt-4">
                  {review.names.map((name, idx) => (
                    <p
                      key={idx}
                      className="text-sm"
                      style={{ color: name.color }}
                    >
                      {name.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              activeCard === index ? "bg-[#00FBF4]" : "bg-white"
            } hover:bg-[#00FBF4]`}
            onClick={() => setActiveCard(index)}
            aria-label={`Go to review ${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
