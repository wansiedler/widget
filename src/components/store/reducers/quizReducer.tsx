import {
    GET_QUIZZES,
    GET_RESULTS,
    RESET,
    SET_INDEX,
    NEXT_INDEX,
    UPDATE_STORIES,
    UPDATE_ANSWERED,
    IDLE,
    FINISH,
    ANSWERED,
    PREVIOUS_INDEX, NEXT_UNANSWERED, INTERACTIVE
} from '../actions/action-types';
import {QuizQuestion} from "../../Quiz/Fabian/QuizQuestion";


// import React from "preact";
// import {useEffect} from "preact/hooks";

import React, {useState} from "react";

const initialState = {
    title: "",
    type: "",
    currentIndex: 0,
    questions: [],
    answeredQuestions: [],
    results: [],
    personality: null,
    pause: false,
    stories: [],
    finished: false,
    loop: true,
    fontSize: 100,
    interactive: false
};


export const quizReducer = (state = initialState, action) => {
    const payload = action.payload
    let newState = {}

    let total = state.stories.length
    const totalIndex = total - 1
    switch (action.type) {
        case GET_QUIZZES:
            // console.log(action.payload)
            newState = {
                ...state,
                currentIndex: 0,
                title: payload.name,
                type: payload.type,
                // questions: payload.task_data.contents.slice(0, 3),
                // results: payload.task_data.results.slice(0, 3)
                questions: payload.task_data.contents,
                results: payload.task_data.results
            }
            // console.log(payload.task_data.contents)

            newState.questions = newState.questions.filter((q) =>
                    q.hasOwnProperty('answersOptions')
                // ).slice(0, 1);
            )


        function setResultsPersonality(results) {
            let res = []
            for (const index in results) {
                const result = results[index];
                if (result.element !== 'QuizDefaultResult') {
                    res[result.id] = result;
                } else {
                    res['default'] = result;
                }
            }
            return res
        }

        function setResultsTrivia(results) {
            let res = []
            const sortable = [];
            for (const index in results) {
                const result = results[index];
                sortable.push(result);
            }
            res = sortable.sort((a, b) => a.minValue - b.minValue);
            // console.log(res)
            return res
        }

            if (newState.type === 'Quiz-Personality') {
                // console.log(newState.type)
                newState.results = setResultsPersonality(newState.results);
            } else {
                // console.log(newState.type)
                newState.results = setResultsTrivia(newState.results);
            }

            // console.log(payload)
            // console.log(newState)
            // console.log(newState.results)


            // ))
            // console.log(newState)
            return newState

        case UPDATE_STORIES:
            newState = {
                ...state,
                // stories: state.stories.concat(payload)
                //     .map((a) => ({sort: Math.random(), value: a}))
                //     .sort((a, b) => a.sort - b.sort)
                //     .map((a) => a.value)
                stories: payload
            }
            // console.log(state)
            // console.log(payload)
            return newState

        case SET_INDEX:
            let step = payload > totalIndex ? totalIndex : payload < 0 ? totalIndex : payload
            // console.log(`${total}: ${state.currentIndex + 1} to ${step + 1}`)
            newState = {
                ...state,
                currentIndex: step
            }

            return newState


        case PREVIOUS_INDEX:
            let prevIndex = state.currentIndex - 1
            prevIndex = prevIndex > totalIndex ? totalIndex : prevIndex < 0 ? totalIndex : prevIndex

            newState = {
                ...state,
                interactive: false,
                currentIndex: prevIndex
            }
            return newState

        case NEXT_INDEX:
            let newIndex = state.currentIndex + 1
            newIndex = newIndex > totalIndex ? 0 : newIndex < 0 ? totalIndex : newIndex
            newState = {
                ...state,
                interactive: false,
                currentIndex: newIndex
            }
            return newState

        case INTERACTIVE:
            newState = {
                ...state,
                interactive: true
            }
            return newState

        case NEXT_UNANSWERED:
            let unanswered = 0
            console.log(state.answeredQuestions)
            let ids = []
            state.questions.forEach(question => {
                ids += question.id
            })

            // state.stories.forEach()
            // console.log(ids)

            // let newIndex = state.currentIndex + 1
            // newIndex = newIndex > totalIndex ? 0 : newIndex < 0 ? totalIndex : newIndex
            newState = {
                ...state,
                currentIndex: unanswered
            }
            return newState


        case RESET:
            // state.stories.pop()
            newState = {
                ...state,
                stories: state.oldStories,
                currentIndex: 0,
                finished: false,
                answeredQuestions: [],
                loop: true,
            }
            // console.log(newState)
            return newState

        case ANSWERED:
            // console.log(payload)
            newState = {
                ...state,
                // answeredQuestions: [...state.answeredQuestions,]
            }
            newState.answeredQuestions[payload.name] = payload.value
            return newState

        case IDLE:
            newState = {
                ...state,
                oldStories: state.stories,
                answeredQuestions: [],
                stories: [payload],
                currentIndex: 0,
                finished: true,
                loop: false,
            }
            return newState

        case GET_RESULTS:
            // console.log(state.stories.length)
            // console.log(state.stories)
            // console.log(state.stories.push(payload))
            newState = {
                ...state,
                oldStories: state.stories,
                answeredQuestions: [],
                // stories: [...state.stories, payload],
                // currentIndex: state.currentIndex + 1,
                stories: [payload],
                currentIndex: 0,
                finished: true,
                loop: false,
            }
            // console.log(newState.stories.length)
            return newState

        case UPDATE_ANSWERED:
            newState = {
                ...state,
                ...(payload ? payload : {})
            }
            // console.log(newState)
            return newState

        default:
            newState = {
                ...state,
                ...(payload ? payload : {})
            }
            // console.log(newState)
            return newState
    }
}
