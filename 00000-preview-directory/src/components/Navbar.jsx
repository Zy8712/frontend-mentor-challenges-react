import React from 'react';
import { Link, Route } from 'wouter';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-navbar-gradient-colour-1 to-navbar-gradient-colour-2 p-4">

      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/single-price-grid-component" className="text-white">
            PriceGrid
          </Link>
          <Link to="/qr-code-component" className="text-white">
            QRCode
          </Link>
          <Link to="/newsletter-sign-up-with-success-message" className="text-white">
            NewsletterSignUp
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;