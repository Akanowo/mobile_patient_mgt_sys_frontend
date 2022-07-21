import React, { useEffect, useState } from 'react';
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Records = () => {
	const [token] = useState(localStorage.getItem('token'));
	const [patients, setPatients] = useState([]);
	const [tableHeads, setTableHeads] = useState([]);
	// const [name, setName] = useState('');
	// const [description, setDescription] = useState('');
	// const [charge, setCharge] = useState(0);

	useEffect(() => {
		(async function () {
			try {
				const config = {
					headers: {
						authorization: `Bearer ${token}`,
					},
				};
				const response = await (
					await axios.get(`${BASE_URL}/patients`, config)
				).data;

				console.log('RESPONSE: ', response);
				if (response.status) {
					setPatients(response.data);

					if (response.data.length > 0) {
						setTableHeads(['firstName', 'lastName', 'email', 'matricNumber']);
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
							<h4 className="page-title">Patients</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<Table tableHeads={tableHeads} data={patients} type={'patients'} />
				</div>
			</div>
		</>
	);
};

export default Records;
