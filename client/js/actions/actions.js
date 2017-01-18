const questions_url = "/";
const users_url = "/users";

// get user

export const getUser = () => dispatch => {
	return fetch(users_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		}).then(res => {
			dispatch(getUserSuccess(res));
		}).catch(err => {
			dispatch(getError(err));
		});
}

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
	type: GET_USER_SUCCESS,
	userInfo
});

export const GET_ERROR = 'GET_ERROR';
export const getError = error => ({
	type: GET_ERROR,
	error
});

// get question

export const getQuestion = () => dispatch => {
	return fetch(users_url + '/question')
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		}).then(res => {
			dispatch(getQuestionSuccess(res))
		}).catch(err => {
			dispatch(getQuestionError(err))
		});
}

// send updated question info

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const getQuestionSuccess = question => ({
	type: GET_QUESTION_SUCCESS,
	question
});

export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';
export const getQuestionError = error => ({
	type: GET_QUESTION_ERROR,
	error
});

// update user's current score

export const sendResult = (result) => {
	console.log('send result action', result);
}