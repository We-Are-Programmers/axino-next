import { featuresPrimary } from "@/lib/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeaturesSection() {
  return (
    <section id="features" className="features-section-h1 pt-0">
      <div className="shape-one tm-gsap-img-parallax">
        <img src="/images/icons/shape-31.png" alt="" />
      </div>
      <div className="container">
        <SectionTitle
          subTitle=" Our Features"
          title={
            <>
              Powerful Features to <br />
              Simplify Your Work Every Day
            </>
          }
          description={
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum has been the industry&apos;s standard dummy
            </>
          }
        />
        <div className="row g-24">
          {featuresPrimary.map((feature) => (
            <div
              key={feature.title}
              className={`feature-block-h1 ${feature.colClass}${feature.styleTwo ? " style-two" : ""} aos-init`}
              data-aos={feature.aos}
              data-aos-duration="1000"
              data-aos-delay={feature.delay ?? "200"}
            >
              <div className={`inner-block${feature.wide ? " pe-0 pb-0" : ""}${feature.styleTwo ? " pb-0" : ""}`}>
                {feature.shape ? (
                  <div className={feature.shape.includes("shape-12") ? "shape-2" : "shape-1"}>
                    <img src={feature.shape} alt="" />
                  </div>
                ) : null}
                <div className={`content-box${feature.centered ? " text-center" : ""}`}>
                  <h4 className="title">{feature.title}</h4>
                  <div className="text">{feature.text}</div>
                </div>
                <div className={`image-box${feature.imageMt0 ? " mt-0" : ""}`}>
                  <figure className="image mb-0">
                    <img src={feature.image} alt={feature.title} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
