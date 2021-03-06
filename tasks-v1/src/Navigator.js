import React from 'react'
import 'react-native-gesture-handler'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import createDrawerNavigator from 'react-navigation-drawer'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'

const MenuRoutes = {
	Today: {
		name: 'Today',
		screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
		navigationOptions: { 
			title: 'Hoje'
		}
	},
	Tomorrow: {
		name: 'Tomorrow',
		screen: props => <Agenda title='Amanhã' daysAhead={1} {...props} />,
		navigationOptions: {
			title: 'Amanhã'
		}
	},
	Week: {
		name: 'Week',
		screen: props => <Agenda title='Semana' daysAhead={7} {...props} />,
		navigationOptions: {
			title: 'Semana'
		}
	},
	Month: {
		name: 'Month',
		screen: props => <Agenda title='Mês' daysAhead={30} {...props} />,
		navigationOptions: {
			title: 'Mês'
		}
	}
}

const MenuConfig = {
	initialRouteName: 'Today',
	contentOption: {
		labelStyles: {
			fontFamily: commonStyles.fontFamily,
			fontWeight: 'normal',
			fontSize: 20
		},
		activeLabelStyles: {
			color: '#080'
		}
	}
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
	Auth: {
		name: 'Auth',
		screen: Auth
	},
	Home: {
		name: 'Home',
		screen: MenuNavigator
	}
}

const MainNavigator = createAppContainer(createSwitchNavigator(MainRoutes, { initialRouteName: 'Auth' }))

export default MainNavigator

