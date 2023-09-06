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

        </div>
      </div>

    </nav>
  );
};

export default Navbar;