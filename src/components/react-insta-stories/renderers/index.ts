import image from './Image';
import video from './Video';
import quiz from './Quiz';
import defaultRenderer from './Default';
import autoplayContent from './AutoPlayContent';

export const renderers = [
    quiz,
    image,
    video,
    autoplayContent,
    defaultRenderer
];
