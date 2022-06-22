// @ts-nocheck
import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Association from "./Association";
import Pricing from "./Pricing";
import Download from "./Download";
import Footer from "../Footer";

const Landing = ({ login, createAccount, error }) => {
  return (
    <div>
      <Navbar login={login} createAccount={createAccount} error={error} />
      <Title />
      <Features />
      <Association />
      <Testimonials />
      <Pricing />
      <Download />
      <Footer />
    </div>
  );
};

export default Landing;
