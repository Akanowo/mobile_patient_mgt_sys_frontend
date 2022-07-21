import React, { useEffect } from 'react';
import { useNavigate as useHistory, useLocation } from 'react-router-dom';
const AuthGaurd = ({ children }) => {
	const history = useHistory();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname !== '/login' && location.pathname !== '/signup') {
			const token = localStorage.getItem('token');
			const user = JSON.parse(localStorage.getItem('user'));

			if (!token || !user) {
				console.log('Not authorized');
				return history('/login');
			}
		}
	}, [location.pathname]);
	return children;
};

export default AuthGaurd;
