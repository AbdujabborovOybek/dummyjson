import React, { memo } from "react";
import { Link } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="header">
      <Link to="/">Logo</Link>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
});
