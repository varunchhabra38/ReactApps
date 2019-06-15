import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';


export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });


};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};





export const fetchUser = (id) => {

    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};
