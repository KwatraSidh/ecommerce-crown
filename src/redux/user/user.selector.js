import {createSelector} from 'reselect'

const selectUser = state => state.user; //input selector for user

export const selectCurrentUser =  createSelector(
    [selectUser],
    user=>user.currentUser
)