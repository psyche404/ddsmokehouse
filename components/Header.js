import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="nav">
    <Link href="/">
      <a className="logo">
        <img src="/images/logo.svg" alt="Dirty Don's Smokehouse Logo" />
      </a>
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
