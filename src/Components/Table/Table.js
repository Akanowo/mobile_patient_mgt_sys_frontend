import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Table = (props) => {
	return (
		<>
			<table id="basic-datatable" className="table dt-responsive nowrap w-100">
				<thead>
					<tr>
						{props.tableHeads.map((head, index) => (
							<th key={index}>{head}</th>
						))}
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{props.data.map((rowData, index) => (
						<tr key={index}>
							{props.tableHeads.map((head) => (
								<td key={head}>{rowData[head]}</td>
							))}
							{props.type === 'patients' ? (
								<td className="table-action">
									<Link
										to={`/records/user/${rowData._id}`}
										className="btn btn-info"
									>
										View Records
									</Link>
								</td>
							) : (
								<td className="table-action">
									<a href="" className="action-icon">
										{' '}
										<i className="mdi mdi-pencil"></i>
									</a>
									<a href="" className="action-icon">
										{' '}
										<i className="mdi mdi-delete"></i>
									</a>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
