import React from "react";

const Footer = () => {
  return (
    <footer className="booksaw-footer">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 footer-col">
            <h3>BookSaw</h3>
            <p>
              Discover thousands of books across different genres.
              Read, explore and grow your knowledge with BookSaw.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 footer-col">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/featured">Featured</a></li>
              <li><a href="/popular">Popular</a></li>
              <li><a href="/offers">Offers</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="/categories/fiction">Fiction</a></li>
              <li><a href="/categories/romance">Romance</a></li>
              <li><a href="/categories/self-help">Self Help</a></li>
              <li><a href="/categories/motivation">Motivation</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 footer-col">
            <h4>Follow Me</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com/abinash.behera.9674227" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/lucky_world29/" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.youtube.com/@abinashbehera9898" target="_blank"><i className="bi bi-youtube"></i></a>
              <a href="https://x.com/lucky_world29" target="_blank"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 BookSaw. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;