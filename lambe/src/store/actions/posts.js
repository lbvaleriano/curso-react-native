import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

import { Alert } from 'react-native'

export const addPost = post => {
	return dispatch => {
		axios.post('/posts.json', { ...post })
			.catch(err => console.log(err)) 
			.then(res => console.log(res.data))
	}
	// return {
	// 	type: ADD_POST,
	// 	payload: post
	// }
}

export const addComment = payload => {
	return {
		type: ADD_COMMENT,
		payload
	}
}
