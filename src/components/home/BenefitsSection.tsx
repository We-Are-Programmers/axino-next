import { SectionTitle } from "@/components/ui/SectionTitle";
import { ThemeButton } from "@/components/ui/ThemeButton";

export function BenefitsSection() {
  return (
    <section className="benefits-section-layout1">
      <div className="container">
        <div className="outer-box">
          <div className="shape-1 tm-gsap-img-parallax">
            <img src="/images/icons/shape-32.png" alt="" />
          </div>
          <SectionTitle
            subTitle=" Our Benefits"
            title={
              <>
                The Benefits of Smarter <br /> Task Management
              </>
            }
          />
          <div className="row">
            <div className="benefits-block-layout1 col-12 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="inner-block">
                <div className="shape-one">
                  <img src="/images/icons/shape-16.png" alt="" />
                </div>
                <div className="shape-two">
                  <img src="/images/icons/shape-17.png" alt="" />
                </div>
                <div className="logo-box">
                  <div className="logo">
                    <img src="/images/icons/benefits-icon1-1.png" alt="" />
                  </div>
                </div>
                <div className="content-box">
                  <h4 className="title">Integrate effortlessly with your favorite tools</h4>
                  <ThemeButton href="/about" label="See All Integratioin" />
                </div>
              </div>
            </div>
            <div className="feature-block-h1 col-xl-6 aos-init" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div className="inner-block pe-0 pb-0">
                <div className="content-box">
                  <h4 className="title">Flexible & Scalable</h4>
                  <div className="text">
                    Assign responsibilities, set deadlines, <br />
                    track progress, and keep
                  </div>
                </div>
                <div className="image-box mt-10">
                  <figure className="image mb-0">
                    <img src="/images/resource/featureH1-5.png" alt="Flexible features" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="benefits-block-two-layout1 col-xl-6 aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <div className="inner-block">
                <div className="shape-18 tm-gsap-img-parallax">
                  <img src="/images/icons/shape-18.png" alt="" />
                </div>
                <div className="content-box">
                  <h4 className="title">
                    Powerful Features <br />
                    to Simplify Your Work <br />
                    Every Day
                  </h4>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy
                  </div>
                </div>
                <ThemeButton href="/about" label="Explore More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
