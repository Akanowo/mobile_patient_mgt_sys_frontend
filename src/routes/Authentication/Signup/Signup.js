import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [matricNumber, setMatricNumber] = useState('');
	const [address, setAddress] = useState('');
	const [type, setType] = useState('PATIENT');
	const [gender, setGender] = useState('MALE');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			email,
			password,
		};

		console.log(data);
	};

	return (
		<div
			className="loading authentication-bg"
			data-layout-config='{"darkMode": false}'
		>
			<div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xxl-4 col-lg-5">
							<div className="card">
								{/* <!-- Logo--> */}
								<div className="card-header pt-4 pb-4 text-center bg-primary">
									<Link to="/">
										<span>
											<img src="/images/logo.png" alt="" height="18" />
										</span>
									</Link>
								</div>

								<div className="card-body p-4">
									<div className="text-center w-75 m-auto">
										<h4 className="text-dark-50 text-center mt-0 fw-bold">
											Free Sign Up
										</h4>
										<p className="text-muted mb-4">
											Don't have an account? Create your account, it takes less
											than a minute{' '}
										</p>
									</div>

									<ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
										<li className="nav-item" onClick={() => setType('PATIENT')}>
											<Link
												to="#"
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0 active"
											>
												<i className="mdi mdi-home-variant d-md-none d-block"></i>
												<span className="d-none d-md-block">PATIENT</span>
											</Link>
										</li>
										<li className="nav-item" onClick={() => setType('STAFF')}>
											<Link
												to="#"
												data-bs-toggle="tab"
												aria-expanded="false"
												className="nav-link rounded-0"
											>
												<i className="mdi mdi-account-circle d-md-none d-block"></i>
												<span className="d-none d-md-block">STAFF</span>
											</Link>
										</li>
									</ul>

									<form onSubmit={handleSubmit}>
										<div className="mb-3">
											<label htmlFor="firstName" className="form-label">
												Firstname
											</label>
											<input
												className="form-control"
												type="text"
												id="firstName"
												placeholder="Enter your firstname"
												required
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</div>

										<div className="mb-3">
											<label htmlFor="lastName" className="form-label">
												Lastname
											</label>
											<input
												className="form-control"
												type="text"
												id="lastName"
												placeholder="Enter your lastname"
												required
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
											/>
										</div>

										<div className="mb-3">
											<label htmlFor="emailaddress" className="form-label">
												Email address
											</label>
											<input
												className="form-control"
												type="email"
												id="emailaddress"
												required
												placeholder="Enter your email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										{type === 'PATIENT' && (
											<div className="mb-3">
												<label htmlFor="matricNumber" className="form-label">
													Matric Number
												</label>
												<input
													className="form-control"
													type="text"
													id="matricNumber"
													required
													placeholder="Enter your matric number"
													value={matricNumber}
													onChange={(e) => setMatricNumber(e.target.value)}
												/>
											</div>
										)}

										<div className="mb-3">
											<label htmlFor="address" className="form-label">
												Address
											</label>
											<input
												className="form-control"
												type="text"
												id="address"
												required
												placeholder="Enter your address"
												value={address}
												onChange={(e) => setAddress(e.target.value)}
											/>
										</div>

										<div className="mb-3">
											<label htmlFor="gender" className="form-label">
												Gender
											</label>
											<select
												className="form-select mb-3"
												id="gender"
												value={gender}
												onChange={(e) => setGender(e.target.value)}
											>
												<option value="MALE">MALE</option>
												<option value="FEMALE">FEMALE</option>
											</select>
										</div>

										<div className="mb-3">
											<label htmlFor="password" className="form-label">
												Password
											</label>
											<div className="input-group input-group-merge">
												<input
													type="password"
													id="password"
													className="form-control"
													placeholder="Enter your password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												<div className="input-group-text" data-password="false">
													<span className="password-eye"></span>
												</div>
											</div>
										</div>

										<div className="mb-3 text-center">
											<button className="btn btn-primary" type="submit">
												{' '}
												Sign Up{' '}
											</button>
										</div>
									</form>
								</div>
								{/* <!-- end card-body --> */}
							</div>
							{/* <!-- end card --> */}

							<div className="row mt-3">
								<div className="col-12 text-center">
									<p className="text-muted">
										Already have account?{' '}
										<Link to="/login" className="text-muted ms-1">
											<b>Log In</b>
										</Link>
									</p>
								</div>
								{/* <!-- end col--> */}
							</div>
							{/* <!-- end row --> */}
						</div>
						{/* <!-- end col --> */}
					</div>
					{/* <!-- end row --> */}
				</div>
				{/* <!-- end container --> */}
			</div>
			{/* <!-- end page --> */}
		</div>
	);
};

export default Signup;
