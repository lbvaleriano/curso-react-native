import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

import { Alert } from 'react-native'

export const addPost = post => {
	return dispatch => {
		// https://us-central1-lambe-luke.cloudfunctions.net/uploadImage
		axios({
			url: 'uploadImage',
			baseURL: 'https://us-central1-lambe-luke.cloudfunctions.net',
			method: 'post',
			data: {
				image: post.image.base64
			}
		})
			.catch(err => console.log(err))
			.then(res => {
				post.image = res.data.imageUrl
				axios.post('/posts.json', { ...post })
					.catch(err => console.log(err))
					.then(res => console.log(res.data))
			})
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
