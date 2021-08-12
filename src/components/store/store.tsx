import {quizReducer} from "./reducers/quizReducer";

// import { configureStore } from '@reduxjs/toolkit'
// export const store = configureStore({
//     reducer: {
//         quiz: quizReducer
//     }
// })
//
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
const middleware = [thunk];

const rootReducer = combineReducers({
    quiz: quizReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);
export type RootState = ReturnType<typeof rootReducer>


// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// export type QuizState = ReturnType<typeof quizReducer>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch


