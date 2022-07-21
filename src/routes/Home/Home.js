import React from 'react';
import { Router, Routes as Switch, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Topbar from '../../Components/Topbar/Topbar';
import Records from '../Records/Records';
import Services from '../Services/Services';
import Staff from '../Staff/Staff';

const Home = () => {
	const routes = [
		{
			path: '/staff',
			exact: true,
			name: 'Staff Management',
			main: () => <Staff />,
		},
		{
			path: '/services',
			exact: true,
			name: 'Service Management',
			main: () => <Services />,
		},
		{
			path: '/patients',
			exact: true,
			name: 'Patients Management',
			main: () => <Records />,
		},
	];

	return (
		<>
			<div className="wrapper">
				<Sidebar routes={routes} />
				<div className="content-page">
					<div className="content">
						<Topbar />
						<Switch>
							{routes.map((route, index) => (
								// Render more <Route>s with the same paths as
								// above, but different components this time.
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									element={<route.main />}
								/>
							))}
						</Switch>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
