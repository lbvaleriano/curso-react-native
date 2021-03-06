import React, { Component } from 'react'
import { StyleSheet, 
			Text, 
			View, 
			ImageBackground, 
			FlatList, 
			TouchableOpacity, 
			Platform
		} from 'react-native'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'
import { server, showError } from '../common'
import todayImage from '../../assets/imgs/today.jpg'

export default class Agenda extends Component {
	state = {
		tasks: [],
		visibleTasks: [],
		showDoneTasks: true,
		showAddTask: false
	}

	AddTask = async task => {
		// const tasks = [...this.state.tasks]
		// tasks.push({
		// 	id: Math.random(),
		// 	desc: task.desc,
		// 	estimateAt: task.date,
		// 	doneAt: null
		// })

		// this.setState({ tasks, showAddTask: false}, this.filterTasks)
		try {
			await axios.post(`${server}/tasks`, {
				desc: task.desc,
				estimateAt: moment(task.date).format('YYYY-MM-DD HH:mm:ss')
			})

			this.setState({ showAddTask: false }, this.loadTasks)
		} catch (err) {
			showError(err)
		}
	}

	deleteTask = async id => {
		// const tasks = this.state.tasks.filter(task => task.id !== id)		
		// this.setState({ tasks }, this.filterTasks)
		try {
			await axios.delete(`${server}/tasks/${id}`)
			await this.loadTasks()
		} catch (err) {
			showError(err)
		}
	}

	filterTasks = () => {
		let visibleTasks = null
		if (this.state.showDoneTasks) {
			visibleTasks = [...this.state.tasks]
		} else {
			const pending = task => task.doneAt === null
			visibleTasks = this.state.tasks.filter(pending)
		}
		this.setState({ visibleTasks })
		// AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
	}

	toogleFilter = () => {
		// altera o estado e logo em seguida é chamada a função de filter
		this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
	}

	componentDidMount = async () => {
		// this.getTasks()
		this.loadTasks()
	}

	getTasks = async () => {
		// const data = await AsyncStorage.getItem('tasks')
		// const tasks = JSON.parse(data) || []
		// this.setState({ tasks }, this.filterTasks())		
	}

	toogleTask = async id => {
		// implementação com Map
		// const tasks = this.state.tasks.map(task => {
		// 	if (task.id === id) {
		// 		task = {...task}
		// 		task.doneAt = task.doneAt ? null : new Date()
		// 	}

		// 	return task
		// })
		// implementação com clone e forEach
		// const tasks = [...this.state.tasks]
		// tasks.forEach(task => {
		// 	if (task.id === id) {
		// 		task.doneAt = task.doneAt ? null : new Date()
		// 	}
		// })
		// this.setState({ tasks }, this.filterTasks)
		try {
			await axios.put(`${server}/tasks/${id}/toggle`)
			await this.loadTasks()
		} catch (err) {
			showError(err)
		}
	}

	loadTasks = async () => {
		try {
			const maxDate = moment().format('YYY-MM-DD 23:59')
			const res = await axios.get(`${server}/tasks?date=${maxDate}`)
			this.setState({ tasks: res.data }, this.filterTasks)
		} catch (err) {
			showError(err)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<AddTask isVisible={this.state.showAddTask} 
					onSave={this.AddTask}
					onCancel={() => this.setState({ showAddTask: false })} />
				<ImageBackground source={todayImage} style={styles.background}>
					<View	 style={styles.iconBar}>
						<TouchableOpacity onPress={this.toogleFilter}>
							<Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
						</TouchableOpacity>
					</View>
					<View style={styles.titleBar}>
						<Text style={styles.title}>Hoje</Text>
						<Text style={styles.subtitle}>
							{moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
						</Text>
					</View>
				</ImageBackground>
				<View style={styles.tasksContainer}>
					<FlatList data={this.state.visibleTasks}
						keyExtractor={item => `${item.id}`}
						renderItem={({ item }) => <Task {...item} onToogleTask={this.toogleTask} onDelete={this.deleteTask}/>} />
				</View>
				<ActionButton buttonColor={commonStyles.colors.today} onPress={() => { this.setState({ showAddTask: true }) }} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	background: {
		flex: 3
	},
	titleBar: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	title: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		fontSize: 50,
		marginLeft: 20,
		marginBottom: 10
	},
	subtitle: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		fontSize: 20,
		marginLeft: 20,
		marginBottom: 30
	},
	tasksContainer: {
		flex: 7
	},
	iconBar: {
		marginTop: Platform.OS === 'ios' ? 30 : 10,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
})