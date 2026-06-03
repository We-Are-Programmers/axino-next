import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <PageWrapper currentPath="/shop" headerVariant="absolute">
      <PageBanner title="Checkout" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />
      <section className="checkout-section pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h4>Billing Details</h4>
              <form className="checkout-form row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First name" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last name" required />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Address" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="City" required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="ZIP" required />
                </div>
                <div className="col-12">
                  <button type="submit" className="theme-btn btn-style-one">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="order-summary p-4">
                <h4>Your Order</h4>
                <p>Subtotal: $219.00</p>
                <p>Shipping: $10.00</p>
                <p>
                  <strong>Total: $229.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
