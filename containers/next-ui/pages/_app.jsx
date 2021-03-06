import React from 'react';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
