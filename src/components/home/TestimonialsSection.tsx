import { testimonialText, testimonialsRow1, testimonialsRow2 } from "@/lib/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialMarquee } from "@/components/ui/TestimonialMarquee";

export function TestimonialsSection() {
  return (
    <section className="testimonial-section-layout1 pt-0">
      <SectionTitle
        subTitle="Testimonial"
        title={
          <>
            Trusted by Over 25,000+ <br />
            Teams Worldwide
          </>
        }
      />
      <TestimonialMarquee
        items={testimonialsRow1}
        text={testimonialText}
        className="testimonial-swiper-h1"
      />
      <TestimonialMarquee
        items={testimonialsRow2}
        text={testimonialText}
        className="testimonial-swiper-h2"
        reverse
      />
    </section>
  );
}
