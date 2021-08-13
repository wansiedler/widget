import {
    GET_QUIZZES,
    NEXT_INDEX,
    NEXT_UNANSWERED,
    ANSWERED,
    RESET,
    PREVIOUS_INDEX,
    SET_INDEX,
    GET_RESULTS,
    IDLE,
    INTERACTIVE
} from './action-types';
import {NoReaction} from "../../Quiz/NoReaction";
import React from "react";
import {helpFetch, log} from "../../util";

// let getFetch = (url): object => {
//     const headers =
//         {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         }
//     return fetch(url,
//         {
//             headers: headers,
//             method: "GET",
//         }
//     )
//         .then((response) => {
//             if (!response.ok) {
//                 console.error(url)
//                 console.error(response)
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then((response) => {
//             // console.log(response);
//             return response;
//         })
//         .catch((error) => {
//             console.error(url)
//             console.error(error);
//         });
// }
let getAxios = (url) => {
    // axios.get(
    //     widgetUrl,
    //     // withCredentials: false,
    //     headers: headers
    //     mode: 'no-cors' // 'cors' by default
    // }
    // )
    //     .then(function (response) {
    //         // console.log(response)
    //         dispatch({
    //             type: GET_QUIZZES,
    //             payload: response.data,
    //         })
    //     })
    //     .catch(
    //         function (error) {
    //             console.error(widgetUrl)
    //             console.error(error);
    //         }
    //     );
}


// GET QUIZZES
export const getQuizzes = (url, id) => async (dispatch, getState) => {
    const widgetUrl = `${url}/${id}`;
    // const response = await getFetch(widgetUrl);
    const response = await helpFetch(widgetUrl,);

    dispatch({
        type: GET_QUIZZES,
        payload: response,
    })
};

export const answer = (name, value) => (dispatch, getState) => {
    console.log(`${name} ${value}`)
    dispatch({
        type: ANSWERED,
        payload: {
            name: name,
            value: value
        }
    })
};


export const noContinuation = () => (dispatch, getState) => {
    dispatch({
        type: IDLE,
        payload: {
            type: 'quiz',
            choiceAmount: 1,
            finished: false,
            question: "Sie sind fast fertig mit ihrem Quiz.",
            subtext: '',
            choices: [],
            content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
                return <NoReaction
                    action={action}
                    story={story}
                />
            }
        },
    })
};
export const noReaction = () => (dispatch, getState) => {
    dispatch({
        type: IDLE,
        payload: {
            type: 'quiz',
            choiceAmount: 1,
            finished: false,
            question: "Sie erstellen grade ihr individuelles Quiz.",
            subtext: '',
            choices: [],
            content: ({config, messageHandler, action, isPaused, onAnswer, story}) => {
                return <NoReaction
                    action={action}
                    story={story}
                />
            }
        },
    })
};

export const getResult = (result) => (dispatch, getState) => {
    dispatch({
        type: GET_RESULTS,
        payload: {
            content: (props) => {
                props.action('pause')
                return result
            }
        },
    })
    // dispatch({
    //     type: SET_INDEX,
    //     payload: quiz.stories.length - 1,
    // })
};

export const firstStory = () => (dispatch, getState) => {
    dispatch({
        type: SET_INDEX,
        payload: 0
    })
};


export const nextStory = () => (dispatch, getState) => {
    // log('next')
    dispatch({
        type: NEXT_INDEX,
    })
};

export const interactive = () => (dispatch, getState) => {
    dispatch({
        type: INTERACTIVE,
    })
};

export const nextUnansweredStory = () => (dispatch, getState) => {
    dispatch({
        type: NEXT_UNANSWERED
    })

};

export const prevStory = () => (dispatch, getState) => {
    dispatch({
        type: PREVIOUS_INDEX,
    })
};

export const restart = () => (dispatch, getState) => {
    dispatch({
        type: RESET
    })
};


// POST RESULTS
export const postResult = (stagingUrl, formData) => (dispatch, getState) => {
    // axios.post(`${stagingUrl}/api/widgetsubmits/`,
    //     {...JSON.stringify(formData)},
    //     {headers: {'Content-Type': 'application/json'}}
    // )
    //     .catch(
    //         function (error) {
    //             console.log(error);
    //         }
    //     );
};
