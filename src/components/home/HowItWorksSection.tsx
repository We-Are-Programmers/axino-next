import Link from "next/link";
import { howItWorksSteps } from "@/lib/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stepShapeSvg = (
  <svg width="227" height="168" viewBox="0 0 227 168" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M226.999 -0.000488281C95.6392 3.31004 20.9324 113.379 -0.000976562 168V37.9995C-0.000976562 17.0127 17.0122 -0.000488281 37.999 -0.000488281H226.999Z"
      fill="currentColor"
    />
  </svg>
);

export function HowItWorksSection() {
  const delays = ["200", "300", "400", "500"];

  return (
    <section className="features-section-two-h1">
      <div className="outer-box">
        <div className="shape-one">
          <img src="/images/icons/shape-13.png" alt="" />
        </div>
        <div className="shape-two tm-gsap-img-parallax">
          <img src="/images/icons/shape-14.png" alt="" />
        </div>
        <div className="container">
          <SectionTitle
            subTitle=" How It Works"
            title={
              <>
                Simple Setup, <br />
                Powerful Performance
              </>
            }
          />
          <div className="row">
            {howItWorksSteps.map((item, index) => (
              <div
                key={item.step}
                className="col-xl-3 col-sm-6 aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={delays[index]}
              >
                <div className="feature-box">
                  <div className="inner-box ">
                    <div className="shape-1" style={{ color: "#091D1E" }}>
                      {stepShapeSvg}
                    </div>
                    <div className="shape-2" style={{ color: "#02DF82" }}>
                      {stepShapeSvg}
                    </div>
                    <div className="step">{item.step}</div>
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h4 className="title mb-1">
                      <Link href="/services/task-management">{item.title}</Link>
                    </h4>
                    <div className="text">Create your account with our guided setup process.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-box aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="inner-box">
              <div className="image-box">
                <img src="/images/resource/feature-bottom1-1.jpg" alt="" />
                <img src="/images/resource/feature-bottom1-2.jpg" alt="" />
                <img src="/images/resource/feature-bottom1-3.jpg" alt="" />
                <img src="/images/resource/feature-bottom1-4.jpg" alt="" />
              </div>
              <div className="text-box">
                Ready to grow? Let&apos;s build something great together. <Link href="/contact">Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
