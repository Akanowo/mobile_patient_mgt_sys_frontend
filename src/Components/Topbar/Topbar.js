import React from 'react';

const Topbar = () => {
	return (
		<>
			{/* <!-- Topbar Start --> */}
			<div className="navbar-custom">
				<ul className="list-unstyled topbar-menu float-end mb-0">
					<li className="notification-list">
						<a className="nav-link end-bar-toggle" href="#">
							<i className="dripicons-gear noti-icon"></i>
						</a>
					</li>

					<li className="dropdown notification-list">
						<a
							className="nav-link dropdown-toggle nav-user arrow-none me-0"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="false"
							aria-expanded="false"
						>
							<span className="account-user-avatar">
								<img
									src="/images/users/avatar-1.jpg"
									alt="user-image"
									className="rounded-circle"
								/>
							</span>
							<span>
								<span className="account-user-name">Dominic Keller</span>
								<span className="account-position">Founder</span>
							</span>
						</a>
						<div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
							{/* <!-- item--> */}
							<div className=" dropdown-header noti-title">
								<h6 className="text-overflow m-0">Welcome !</h6>
							</div>

							{/* <!-- item--> */}
							<a href="#" className="dropdown-item notify-item">
								<i className="mdi mdi-account-circle me-1"></i>
								<span>My Account</span>
							</a>

							{/* <!-- item--> */}
							<a href="#" className="dropdown-item notify-item">
								<i className="mdi mdi-account-edit me-1"></i>
								<span>Settings</span>
							</a>

							{/* <!-- item--> */}
							<a href="#" className="dropdown-item notify-item">
								<i className="mdi mdi-lifebuoy me-1"></i>
								<span>Support</span>
							</a>

							{/* <!-- item--> */}
							<a href="#" className="dropdown-item notify-item">
								<i className="mdi mdi-lock-outline me-1"></i>
								<span>Lock Screen</span>
							</a>

							{/* <!-- item--> */}
							<a href="#" className="dropdown-item notify-item">
								<i className="mdi mdi-logout me-1"></i>
								<span>Logout</span>
							</a>
						</div>
					</li>
				</ul>
				<button className="button-menu-mobile open-left">
					<i className="mdi mdi-menu"></i>
				</button>
				{/* <div className="app-search dropdown d-none d-lg-block">
					<form>
						<div className="input-group">
							<input
								type="text"
								className="form-control dropdown-toggle"
								placeholder="Search..."
								id="top-search"
							/>
							<span className="mdi mdi-magnify search-icon"></span>
							<button className="input-group-text btn-primary" type="submit">
								Search
							</button>
						</div>
					</form>

					<div
						className="dropdown-menu dropdown-menu-animated dropdown-lg"
						id="search-dropdown"
					>
						
						<div className="dropdown-header noti-title">
							<h5 className="text-overflow mb-2">
								Found <span className="text-danger">17</span> results
							</h5>
						</div>

						
						<a href="#" className="dropdown-item notify-item">
							<i className="uil-notes font-16 me-1"></i>
							<span>Analytics Report</span>
						</a>

						
						<a href="#" className="dropdown-item notify-item">
							<i className="uil-life-ring font-16 me-1"></i>
							<span>How can I help you?</span>
						</a>
						<a href="#" className="dropdown-item notify-item">
							<i className="uil-cog font-16 me-1"></i>
							<span>User profile settings</span>
						</a>

						<div className="dropdown-header noti-title">
							<h6 className="text-overflow mb-2 text-uppercase">Users</h6>
						</div>

						<div className="notification-list">
							<a href="#" className="dropdown-item notify-item">
								<div className="d-flex">
									<img
										className="d-flex me-2 rounded-circle"
										src="/images/users/avatar-2.jpg"
										alt="Generic placeholder image"
										height="32"
									/>
									<div className="w-100">
										<h5 className="m-0 font-14">Erwin Brown</h5>
										<span className="font-12 mb-0">UI Designer</span>
									</div>
								</div>
							</a>

							<a href="#" className="dropdown-item notify-item">
								<div className="d-flex">
									<img
										className="d-flex me-2 rounded-circle"
										src="/images/users/avatar-5.jpg"
										alt="Generic placeholder image"
										height="32"
									/>
									<div className="w-100">
										<h5 className="m-0 font-14">Jacob Deo</h5>
										<span className="font-12 mb-0">Developer</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div> */}
			</div>
			{/* <!-- end Topbar --> */}
		</>
	);
};

export default Topbar;
