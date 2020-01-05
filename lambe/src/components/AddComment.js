import React, { Component } from 'react'
import { View, 
			Text, 
			StyleSheet, 
			TextInput, 
			TouchableWithoutFeedback as TMF, 
			Alert 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
	state = {
		comment: '',
		editMode: false
	}

	handleAddComment = () => {
		Alert.alert('Adicionado!', this.state.comment)
	}

	render() {
		let commentArea = null
		if (this.state.editMode) {
			commentArea = (
				<View style={styles.container}>
					<TextInput placeholder='Pode comentar...' style={styles.input} autoFocus={true} value={this.state.comment}
						onChangeText={comment => this.setState({ comment })}
						onSubmitEditing={this.handleAddComment} />
					<TMF onPress={() => this.setState({ editMode: false })}>
						<Icon name='times' size={15} color='#555' />
					</TMF>
				</View>
			)
		} else {
			commentArea =(
				<TMF onPress={() => this.setState({ editMode: true })}>
					<View style={styles.container}>
						<Icon name='comment-o' size={25} color='#555' />
						<Text style={styles.caption}>Adicione um comentário...</Text>
					</View>
				</TMF>
			)
		}

		return (
			<View style={{ flex: 1 }}>
				{commentArea}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	},
	input: {
		width: '90%'
	}, 
	caption: {
		marginLeft: 10,
		fontSize: 12,
		color: '#ccc'
	}
})

export default AddComment