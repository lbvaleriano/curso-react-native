// emulator -no-snapshot -dns-server 8.8.8.8 -avd Nexus_5X_API_29_x86
// react-native run-android
// react-native run-ios --simulator "iPhone 8"

import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import Navigator from './src/Navigator'
import { name as appName } from './app.json'
import axios from 'axios'

import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'https://lambe-luke.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
	<Provider store={store}>
		<Navigator />
	</Provider>
)

AppRegistry.registerComponent(appName, () => Redux)

