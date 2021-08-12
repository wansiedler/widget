// @ts-ignore
import React from 'react';

// import React from 'preact';
import { useEffect } from 'preact/hooks'

import { Story } from '../../interfaces';
import Header from "../../components/Header";

const WithHeader: React.FC<{ story: Story, globalHeader: Function }> = ({ story, globalHeader, children }) => {
    return <>
        {children}
        {story.header && (
            <div style={{ position: "absolute", left: 12, top: 20, zIndex: 19 }}>
                {typeof story === "object" ? (
                    globalHeader ? (
                        globalHeader(story.header)
                    ) : (
                            <Header
                                heading={story.header.heading}
                                subheading={story.header.subheading}
                                profileImage={story.header.profileImage}
                            />
                        )
                ) : null}
            </div>
        )}
    </>
}

export default WithHeader;