import React, { useEffect, useState } from 'react';
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Services = () => {
	const [token] = useState(localStorage.getItem('token'));
	const [services, setServices] = useState([]);
	const [tableHeads, setTableHeads] = useState([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [charge, setCharge] = useState(0);

	useEffect(() => {
		(async function () {
			try {
				const config = {
					headers: {
						authorization: `Bearer ${token}`,
					},
				};
				const response = await (
					await axios.get(`${BASE_URL}/services`, config)
				).data;

				console.log('RESPONSE: ', response);
				if (response.status) {
					setServices(response.data);

					if (response.data.length > 0) {
						setTableHeads(['name', 'description', 'charge']);
					}
				}
			} catch (error) {
				if (error.response) {
					return toast.error(error.respose.data.error);
				}
				toast.error(error.message);
			}
		})();

		// return () => {
		// 	document.body.removeChild(script1);
		// 	document.body.removeChild(script2);
		// 	document.body.removeChild(script3);
		// 	document.body.removeChild(script4);
		// 	document.body.removeChild(script5);
		// };
	}, []);

	const handleCreateService = async (e) => {
		e.preventDefault();

		const data = {
			name,
			description,
			charge,
		};

		console.log(data);

		const config = {
			headers: {
				authorization: `Bearer ${token}`,
			},
		};

		try {
			const response = await (
				await axios.post(`${BASE_URL}/services`, data, config)
			).data;
			if (response.status) {
				toast.success(response.message);
				const spreadServices = [...services];
				spreadServices.push(response.data);
				setServices(spreadServices);
				return;
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
									data-bs-target="#add-service-modal"
								>
									Add Service
								</button>
								<div
									id="add-service-modal"
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
																src="images/logo-dark.png"
																alt=""
																height="18"
															/>
														</span>
													</a>
												</div>

												<form class="ps-3 pe-3" onSubmit={handleCreateService}>
													<div class="mb-3">
														<label htmlFor="serviceName" class="form-label">
															Service Name
														</label>
														<input
															class="form-control"
															type="text"
															id="serviceName"
															required
															placeholder="Enter service name"
															value={name}
															onChange={(e) => setName(e.target.value)}
														/>
													</div>

													<div class="mb-3">
														<label hrmlFor="description" class="form-label">
															Description
														</label>
														<input
															class="form-control"
															type="text"
															id="description"
															required
															placeholder="Enter a description"
															value={description}
															onChange={(e) => setDescription(e.target.value)}
														/>
													</div>

													<div class="mb-3">
														<label htmlFor="charge" class="form-label">
															Charge
														</label>
														<input
															className="form-control"
															data-toggle="touchspin"
															type="number"
															data-bts-prefix="₦"
															id="charge"
															min={0}
															charge={charge}
															onChange={(e) => setCharge(e.target.value)}
														/>
													</div>

													<div class="mb-3 text-center">
														<button
															class="btn rounded-pill btn-primary"
															type="submit"
														>
															Create
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
							<h4 className="page-title">Services</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<Table tableHeads={tableHeads} data={services} />
				</div>
			</div>
		</>
	);
};

export default Services;
