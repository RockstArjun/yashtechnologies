import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">Contact us</p>
				<p className="footer-subscription-text">Kindly enter your email-id!</p>
				<div className="input-areas">
					<form>
						<input className="footer-input" name="email" type="email" placeholder="Your Email" />
						<Button buttonStyle="btn--outline">SUBMIT</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							SAHADEVA
							<i className="fab fa-speakap" />
						</Link>
					</div>
					<small className="website-rights">SAHADEVA © 2023</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f" />
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram" />
						</Link>
						<Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
							<i className="fab fa-youtube" />
						</Link>
						<Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
							<i className="fab fa-twitter" />
						</Link>
						<Link className="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
							<i className="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
