import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<div className={`${style.footer}`}>
				<h2 className="pb-4">
					CS<span>PP</span>
				</h2>

				<div className={`${style.footerNavigate} d-flex gap-3 pb-3`}>
					<ul className="navbar-nav col-2">
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								how it works
							</Link>
						</li>
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								benifits
							</Link>
						</li>
						<li className={`${style.navItem} nav-item`}>
							<Link className={`${style.navLink} nav-link`} to="/">
								FAQs
							</Link>
						</li>
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								our clients
							</Link>
						</li>
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								about us
							</Link>
						</li>
					</ul>

					<ul className="navbar-nav col-2">
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								<i class="fa-brands fa-whatsapp pe-3"></i>customer support
							</Link>
						</li>
						<li className={`${style.navItem} nav-item`}>
							<Link
								className={`${style.navLink} nav-link text-capitalize`}
								to="/"
							>
								<i class="fa-solid fa-phone pe-3"></i>+970 1 234 5678
							</Link>
						</li>
					</ul>
				</div>

				<div
					className={`${style.footerContact} d-flex align-items-center justify-content-between pt-5`}
				>
					<div>
						<h3 className=" pb-3">Be the first to hear our news</h3>
						<form className="d-flex align-items-center gap-3" role="subscribe">
							<input
								className={`${style.emailFooter} ms-auto`}
								type="search"
								placeholder="Enter your email"
							/>
							<input
								type="submit"
								value="Subscribe"
								className={`${style.submitEmailFooter} nav-link text-capitalize`}
							/>
						</form>
					</div>

					<div className="col-2">
						<h3 className="text-capitalize pb-3">follow us</h3>
						<ul className="d-flex gap-4 ps-0">
							<li className={`${style.navItem} nav-item`}>
								<Link
									className={`${style.navLink} nav-link text-capitalize`}
									to="/"
								>
									<i class="fa-brands fa-facebook"></i>
								</Link>
							</li>
							<li className={`${style.navItem} nav-item`}>
								<Link
									className={`${style.navLink} nav-link text-capitalize`}
									to="/"
								>
									<i class="fa-brands fa-instagram"></i>
								</Link>
							</li>
							<li className={`${style.navItem} nav-item`}>
								<Link
									className={`${style.navLink} nav-link text-capitalize`}
									to="/"
								>
									<i class="fa-brands fa-pinterest"></i>
								</Link>
							</li>
							<li className={`${style.navItem} nav-item`}>
								<Link
									className={`${style.navLink} nav-link text-capitalize`}
									to="/"
								>
									<i class="fa-brands fa-linkedin"></i>
								</Link>
							</li>
							<li className={`${style.navItem} nav-item`}>
								<Link
									className={`${style.navLink} nav-link text-capitalize`}
									to="/"
								>
									<i class="fa-brands fa-youtube"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div
					className={`${style.footerEnd} d-flex justify-content-between py-3`}
				>
					<h4>Copyright © 2023 CSPP. All rights reserved.</h4>
					<div className="d-flex gap-3">
						<Link
							className={`${style.navLink} nav-link text-capitalize`}
							to="/"
						>
							Terms of Service
						</Link>
						<span>•</span>
						<Link
							className={`${style.navLink} nav-link text-capitalize`}
							to="/"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
