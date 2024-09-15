import testimonialBG1 from "../../assets/testimonial1.png";
import testimonialBG2 from "../../assets/testimonial2.png";
import testimonialBG3 from "../../assets/testimonial3.png";

import reviewer1 from "../../assets/reviewer1.png";
import reviewer2 from "../../assets/reviewer2.png";
import reviewer3 from "../../assets/reviewer3.png";

export const Testimonials = () => {
  // fake review data
  const reviews = [
    {
      name: "John Doe",
      review:
        "Panto made my room feel more alive and minimalist. Highly recommend!",
      image: reviewer1,
      coverImg: testimonialBG1,
      rating: 4,
    },
    {
      name: "Jane Smith",
      review: "Great designs and superb service! I love my new living space.",
      image: reviewer2,
      coverImg: testimonialBG2,
      rating: 5,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: reviewer3,
      coverImg: testimonialBG3,
      rating: 4,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: reviewer1,
      coverImg: testimonialBG1,
      rating: 3,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: reviewer2,
      coverImg: testimonialBG2,
      rating: 5,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: reviewer3,
      coverImg: testimonialBG3,
      rating: 4,
    },
  ];
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12">
        <p className="text-primary uppercase tracking-wide">Testimonials</p>
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
      </div>
    </section>
  );
};
