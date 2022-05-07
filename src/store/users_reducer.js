import { createSlice } from '@reduxjs/toolkit';
import { userFetch, usersFetch } from "../api";

export const counterSlice = createSlice({
  name: 'users_reducer',
  initialState: {
    user: {},
    users: [],
    pages: {},
    currentUsersId: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.results;
      state.pages = action.payload.info;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentUsers: (state, action) => {
      state.currentUsersId.push(action.payload);
    },
    removeCurrentUsers: (state, action) => {
        state.currentUsersId = state.currentUsersId.filter(el => el !== action.payload);
    },

  },
})

export const { setUsers, setUser, setCurrentUsers, removeCurrentUsers } = counterSlice.actions

export const getUsersThunk = (location) => (dispatch) => {
    let numberPage = new URLSearchParams(location.search).get('page') || 1;
    let userName = new URLSearchParams(location.search).get('name') || '';
    let userGender = new URLSearchParams(location.search).get('gender') || '';
    let species = new URLSearchParams(location.search).get('species') || '';

    if (numberPage || userName || userGender || species ) {
        usersFetch(numberPage, userName, userGender, species)
            .then(res => {
                if (res.status === 200 && res.data) {
                    dispatch(setUsers(res.data));
                }
            })
            .catch((err) => {
                dispatch(setUsers({ results: [], info: {} }));
            });
    } 
}

export const getUserThunk = (id) => (dispatch) => {
    userFetch(id)
        .then(res => {
            if (res.status === 200 && res.data) {
                dispatch(setUser(res.data));
            }
        })
        .catch((err) => {
            dispatch(setUser({}));
        });
}

// // const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
// export const currentUsersId = (state) => state.users_reducer.currentUsersId;

export default counterSlice.reducer