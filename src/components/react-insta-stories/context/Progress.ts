// @ts-ignore
import React from 'react'

// import React from 'preact';
// import { useEffect } from 'preact/hooks'

import { ProgressContext } from '../interfaces'

export default React.createContext<ProgressContext>({
    currentId: 0,
    videoDuration: 0,
    bufferAction: false,
    pause: false,
    next: () => { }
})