import React from 'react';
import AuthGaurd from './guards/AuthGuard';

const RootGaurd = ({ children }) => {
	return <AuthGaurd>{children}</AuthGaurd>;
};

export default RootGaurd;
