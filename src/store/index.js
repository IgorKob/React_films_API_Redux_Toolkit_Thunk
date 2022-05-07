import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from '../features/users/usersSlice';
import users_reducer from './users_reducer';

export default configureStore({
    reducer: {
        // users: usersReducer,
        users_reducer: users_reducer,
    },
});

// window.store = store;