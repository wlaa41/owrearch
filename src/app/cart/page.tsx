import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import CartContent from "../../components/Cart/CartContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Cart" />

      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <CartContent />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
