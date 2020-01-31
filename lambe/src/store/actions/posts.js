import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

import { Alert } from 'react-native'

export const addPost = post => {
	// getState: pega o status completo da aplicação (não apenas aquele gerenciado pelo POST)
	// boa pratica: nunca alterar o estado a partir do getstate, dar preferencia ao dispatch
	return (dispatch, getState) => {
		dispatch(creatingPost())
		// https://us-central1-lambe-luke.cloudfunctions.net/uploadImage
		axios({
			url: 'uploadImage',
			baseURL: 'https://us-central1-lambe-luke.cloudfunctions.net',
			method: 'post',
			data: {
				image: post.image.base64
			}
		})
			.catch(err => {
				dispatch(setMessage({
					title: 'Erro',
					text: 'Ocorreu um erro inexperado!'
				}))
			})
			.then(res => {
				post.image = res.data.imageUrl
				axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
					.catch(err => {
						dispatch(setMessage({
							title: 'Erro',
							text: err
						}))
					})
					.then(res => {
						dispatch(fetchPosts())
						dispatch(postCreated())
					})
			})
	}
	// return {
	// 	type: ADD_POST,
	// 	payload: post
	// }
}

export const addComment = payload => {
	return (dispatch, getState) => {
		axios.get(`/posts/${payload.postId}.json`)
			.catch(err => {
				dispatch(setMessage({
					title: 'Erro',
					text: err
				}))
			})
			.then(res => {
				const comments = res.data.comments || []
				comments.push(payload.comment)
				axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
					.catch(err => {
						dispatch(setMessage({
							title: 'Erro',
							text: err
						}))
					})
					.then(res => {
						dispatch(fetchPosts())
					})
			})
	}

	// return {
	// 	type: ADD_COMMENT,
	// 	payload
	// }
}

export const setPosts = posts => {
	return {
		type: SET_POSTS,
		payload: posts
	}
}

export const fetchPosts = () => {
	return dispatch => {
		axios.get('/posts.json')
			.catch(err => {
				dispatch(setMessage({
					title: 'Erro',
					text: err
				}))
			})
			.then(res => {
				const rawPosts = res.data
				const posts = []
				for (let key in rawPosts) {
					posts.push({
						...rawPosts[key],
						id: key
					})
				}

				dispatch(setPosts(posts.reverse()))
			})
	}
}

export const creatingPost = () => {
	return {
		type: CREATING_POST
	}
}

export const postCreated = () => {
	return {
		type: POST_CREATED
	}
}