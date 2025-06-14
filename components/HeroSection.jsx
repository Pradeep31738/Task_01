import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
    <section className='heroBanner' style={{ backgroundImage: 'url(/images/mobile-bar-hire.jpg)' }}>
      <nav className="navBar">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/calculator">Calculator</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/news">News & Blog</Link></li>
            <li><Link href="/team">Meet The Team</Link></li>
            <li><Link href="/portal" className="button">Client Portal</Link></li>
        </ul>
      </nav>
      <div className='heroSection d-flex align-items-center'>
        <div className="container">
          <div className="row align-items-center" style={{ position: 'absolute', top: '100px' }}>
            {/* Left Text */}
            <div className="col-md-7 text-white">
              <h1 className="display-4 fw-bold">
                Tristique ultrices. Nam tempor, augu
              </h1>
            </div>

            {/* Right Form */}
            <div className="col-md-4 offset-md-1">
              <div className="p-4 rounded callbackBox">
                <h3 className="mb-3 fw-bold" style={{ color: '#2d347b' }}>Request a free call back</h3>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control border-0 border-bottom" placeholder="Full Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control border-0 border-bottom" placeholder="Email Address" />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control border-0 border-bottom" placeholder="Phone" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control border-0 border-bottom" placeholder="Case Description..." rows="2" />
                  </div>
                  <div className='callBackButton d-flex justify-content-center'>
                    <button type="submit" className="btn w-100" style={{ backgroundColor: '#2d347b', color: '#fff' }}>Request call back</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
