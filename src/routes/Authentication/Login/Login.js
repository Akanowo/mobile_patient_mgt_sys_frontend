import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants';
import { toast } from 'react-toastify';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email,
			password,
		};

		console.log(data);

		try {
			const response = await (
				await axios.post(`${BASE_URL}/auth/login`, data)
			).data;

			if (response.status) {
				localStorage.setItem('token', response.data.access_token);
				localStorage.setItem('user', JSON.stringify(response.data.user));
				return history('/staff');
			} else {
				toast.error(response.error);
			}
		} catch (error) {
			if (error.response) {
				return toast.error(error.response.data.error);
			}
			toast.error(error.message);
		}
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
								{/* <!-- Logo --> */}
								<div className="card-header pt-4 pb-4 text-center bg-primary">
									<Link to="/">
										<span>
											<img src="/images/logo.png" alt="" height="18" />
										</span>
									</Link>
								</div>

								<div className="card-body p-4">
									<div className="text-center w-75 m-auto">
										<h4 className="text-dark-50 text-center pb-0 fw-bold">
											Sign In
										</h4>
										<p className="text-muted mb-4">
											Enter your email address and password to access admin
											panel.
										</p>
									</div>

									<form onSubmit={handleSubmit}>
										<div className="mb-3">
											<label htmlFor="emailaddress" className="form-label">
												Email address
											</label>
											<input
												className="form-control"
												type="email"
												id="emailaddress"
												required=""
												placeholder="Enter your email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										<div className="mb-3">
											{/* <a
												href="pages-recoverpw.html"
												className="text-muted float-end"
											>
												<small>Forgot your password?</small>
											</a> */}
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

										<div className="mb-3 mb-0 text-center">
											<button className="btn btn-primary" type="submit">
												{' '}
												Log In{' '}
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
										Don't have an account?{' '}
										<Link to="/signup" className="text-muted ms-1">
											<b>Sign Up</b>
										</Link>
									</p>
								</div>
								{/* <!-- end col --> */}
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

export default Login;
