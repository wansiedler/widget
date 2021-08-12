// @ts-ignore
import React from 'react';

// import React from 'preact';
// import { useEffect } from 'preact/hooks'

import { GlobalCtx } from '../interfaces';

export const initialContext = {
	defaultInterval: 4000,
	width: 360,
	height: 640,
};

const GlobalContext = React.createContext<GlobalCtx>(initialContext);

export default GlobalContext;
