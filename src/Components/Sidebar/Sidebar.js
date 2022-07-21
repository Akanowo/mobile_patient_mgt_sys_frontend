import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	return (
		<>
			{/* !-- ========== Left Sidebar Start ========== --> */}
			<div className="leftside-menu">
				{/* !-- LOGO --> */}
				<Link to="/" className="logo text-center logo-light">
					<span className="logo-lg">
						<img src="/images/logo.png" alt="" height="16" />
					</span>
					<span className="logo-sm">
						<img src="/images/logo_sm.png" alt="" height="16" />
					</span>
				</Link>

				{/* !-- LOGO --> */}
				<Link to="/" className="logo text-center logo-dark">
					<span className="logo-lg">
						<img src="/images/logo-dark.png" alt="" height="16" />
					</span>
					<span className="logo-sm">
						<img src="/images/logo_sm_dark.png" alt="" height="16" />
					</span>
				</Link>

				<div className="h-100" id="leftside-menu-container" data-simplebar>
					{/* !--- Sidemenu --> */}

					<ul className="side-nav">
						<li className="side-nav-title side-nav-item">Navigation</li>

						{props.routes.map((route, index) => (
							<li className="side-nav-item" key={index}>
								<Link to={route.path} className="side-nav-link">
									<i className="uil-calender"></i>
									<span> {route.name} </span>
								</Link>
							</li>
						))}
					</ul>

					<div className="clearfix"></div>
				</div>
				{/* !-- Sidebar -left --> */}
			</div>
			{/* !-- Left Sidebar End --> */}
		</>
	);
};

export default Sidebar;
