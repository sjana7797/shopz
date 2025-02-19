import React from "react";

function WelcomeBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-5">
      <div className="bg-primary text-primary-foreground mx-auto w-full space-y-5 rounded-2xl p-4 pb-20">
        <h2 className="text-2xl font-bold md:text-3xl xl:text-4xl">
          👋 Welcome to ShopZ
        </h2>
        <p className="text-muted">One stop solution for your Business</p>
      </div>

      <div className=""></div>
    </section>
  );
}

export default WelcomeBanner;
