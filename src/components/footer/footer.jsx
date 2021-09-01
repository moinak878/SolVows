import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <span class="logo_name">SolVows</span>
            </div>
            <div class="media-icons">
              <i class="fa fa-facebook"></i>

              <i class="fa fa-twitter"></i>

              <i class="fa fa-instagram"></i>

              <i class="fa fa-linkedin"></i>

              <i class="fa fa-youtube"></i>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Links</li>
              <li>Home</li>
              <li>Contact</li>
              <li>About Us</li>
              <li>Get Started</li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
              <li>App Design</li>
              <li>Web Design</li>
              <li>Logo Design</li>
              <li>Banner Design</li>
            </ul>
            <ul class="box">
              <li class="link_name">Other services</li>
              <li>SEO</li>
              <li>Content Marketing</li>
              <li>Prints</li>
              <li>Social Media</li>
            </ul>
            <ul class="box">
              <li class="link_name">Contact</li>
              <li>+91 8879887262</li>
              <li>+91 8879887262</li>
              <li>contact@sitesoch.com</li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2021 SolVows.</span>
            <span class="policy_terms">Privacy policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
