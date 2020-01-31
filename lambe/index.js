// emulator -no-snapshot -dns-server 8.8.8.8 -avd Nexus_5X_API_29_x86
// react-native run-android
// react-native run-ios --simulator "iPhone 8"
// react-native log-android

// 1) instalar o firebase: sudo npm install -g firebase-tools
// 2) logar no Firebase: sudo firebase login
// 3) criar projeto: sudo firebase init
// 4) instalar bibliiotecas necessárias: npm i -s @google-cloud/storage cors uuid
// 5) fazer deploy da function: sudo firebase deploy

import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import axios from 'axios'

import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'https://lambe-luke.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => Redux)

