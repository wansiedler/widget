// @ts-ignore
import React from 'react';

// import React from 'preact';
import { useEffect } from 'preact/hooks'

import {
    StoriesContext as StoriesContextInterface,
    Story,
} from '../interfaces';

export const initialContext: { stories: Story[] } = {
    stories: [],
};

const StoriesContext = React.createContext<StoriesContextInterface>(
    initialContext
);

export default StoriesContext;
