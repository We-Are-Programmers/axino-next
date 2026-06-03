import { ThemeButton } from "@/components/ui/ThemeButton";

export function CtaSection() {
  return (
    <section className="cta-section-layout1 pt-0">
      <div className="outer-box">
        <div className="bg-shape-cat">
          <img src="/images/icons/bg-shape-cat-1.png" alt="" />
        </div>
        <div className="container">
          <div className="content-box text-center aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="sec-title text-center">
              <h2 className="title text-reveal-anim">
                Get started with a 14-day free trial. <br />
                <img className="me-1" src="/images/icons/cta-shape-1.png" alt="" />
                No credit card required.
              </h2>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </div>
            <ThemeButton href="/contact" label="Start Free Trial" />
          </div>
        </div>
      </div>
    </section>
  );
}
