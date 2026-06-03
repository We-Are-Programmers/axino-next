import { clientLogos } from "@/lib/data/home";
import { ClientsSwiper } from "@/components/ui/ClientsSwiper";

type ClientsSectionProps = {
  logos?: typeof clientLogos;
  title?: string;
};

export function ClientsSection({
  logos = clientLogos,
  title = "Trusted by 1200+ founders & business owners",
}: ClientsSectionProps) {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="outer-box aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <h6 className="client-title">
            <img className="icon-bounce" src="/images/icons/theme-icon22.png" alt="" />
            {title}
          </h6>
          <ClientsSwiper logos={logos} />
        </div>
      </div>
    </section>
  );
}
