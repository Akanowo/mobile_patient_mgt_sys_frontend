import React, { useEffect, useState } from 'react';
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Staff = () => {
	const [token] = useState(localStorage.getItem('token'));
	const [staffs, setStaffs] = useState([]);
	const [tableHeads, setTableHeads] = useState([]);
	const [email, setEmail] = useState('');

	useEffect(() => {
		(async function () {
			try {
				const config = {
					headers: {
						authorization: `Bearer ${token}`,
					},
				};
				const response = await (
					await axios.get(`${BASE_URL}/staffs`, config)
				).data;

				console.log('RESPONSE: ', response);
				if (response.status) {
					setStaffs(response.data);

					if (response.data.length > 0) {
						setTableHeads(Object.keys(response.data[0]));
					}
				}
			} catch (error) {
				if (error.response) {
					return toast.error(error.respose.data.error);
				}
				toast.error(error.message);
			}
		})();
	}, []);

	const handleCreateStaff = async (e) => {
		e.preventDefault();

		const data = {
			email,
		};

		const config = {
			headers: {
				authorization: `Bearer ${token}`,
			},
		};

		try {
			const response = await (
				await axios.post(`${BASE_URL}/auth/invite`, data, config)
			).data;
			if (response.status) {
				return toast.success(response.message);
			}
		} catch (error) {
			if (error.response) {
				return toast.error(error.response.data.error);
			}
			toast.error(error.message);
		}
	};

	return (
		<>
			<Helmet>
				<script src="/js/vendor/jquery.dataTables.min.js"></script>
				<script src="/js/vendor/dataTables.bootstrap5.js"></script>
				<script src="/js/vendor/dataTables.responsive.min.js"></script>
				<script src="/js/vendor/responsive.bootstrap5.min.js"></script>

				<script src="/js/pages/demo.datatable-init.js"></script>
			</Helmet>
			<div className="container-fluid">
				{/* <!-- start page title --> */}
				<div className="row">
					<div className="col-12">
						<div className="page-title-box">
							<div className="page-title-right">
								{/* <!-- Login modal --> */}
								<button
									type="button"
									class="btn btn-info"
									data-bs-toggle="modal"
									data-bs-target="#login-modal"
								>
									Add Staff
								</button>
								<div
									id="login-modal"
									class="modal fade"
									tabindex="-1"
									role="dialog"
									aria-hidden="true"
								>
									<div class="modal-dialog modal-dialog-centered">
										<div class="modal-content">
											<div class="modal-body">
												<div class="text-center mt-2 mb-4">
													<a href="index.html" class="text-success">
														<span>
															<img
																src="/images/logo-dark.png"
																alt=""
																height="18"
															/>
														</span>
													</a>
												</div>

												<form class="ps-3 pe-3" onSubmit={handleCreateStaff}>
													<div class="mb-3">
														<label htmlFor="emailaddress1" class="form-label">
															Email address
														</label>
														<input
															class="form-control"
															type="email"
															id="emailaddress1"
															required=""
															placeholder="john@deo.com"
															value={email}
															onChange={(e) => setEmail(e.target.value)}
														/>
													</div>

													<div class="mb-3 text-center">
														<button
															class="btn rounded-pill btn-primary"
															type="submit"
														>
															Invite
														</button>
													</div>
												</form>
											</div>
										</div>
										{/* <!-- /.modal-content --> */}
									</div>
									{/* <!-- /.modal-dialog --> */}
								</div>
								{/* <!-- /.modal --> */}
							</div>
							<h4 className="page-title">Staffs</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<Table tableHeads={tableHeads} data={staffs} />
				</div>
			</div>
		</>
	);
};

export default Staff;
