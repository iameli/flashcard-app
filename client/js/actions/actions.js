const questions_url = "/";
const users_url = "/users";

// get user

export const getUser = () => dispatch => {
	return fetch(users_url + '/Megan')
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
export const getUserSuccess = name => ({
	type: GET_USER_SUCCESS,
	name
});

export const GET_ERROR = 'GET_ERROR';
export const getError = error => ({
	type: GET_ERROR,
	error
});

// get question

export const getQuestion = () => dispatch => {
	return fetch(users_url + '/Megan/questions')
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		}).then(res => {
			console.log('get result', res);
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

export const sendResult = (result) => dispatch => {
	console.log('updated object to put', result);
	return fetch(
		users_url + '/Megan/questions',
		{
			method: "PUT",
			body: JSON.stringify({ result }),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.status);
		}
	}).then(() => {
		dispatch(getQuestion());
	}).catch(err => {
		dispatch(sendQuestionError(err));
	});
}

export const SEND_QUESTION_ERROR = 'SEND_QUESTION_ERROR';
export const sendQuestionError = error => ({
	type: SEND_QUESTION_ERROR,
	error
});


// update high score_btn

export const HIGH_SCORE = 'HIGH_SCORE';
export const highScore = score => ({
	type: HIGH_SCORE,
	score
})
