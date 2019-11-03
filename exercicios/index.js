/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';
import Menu from './src/Menu'

// Define o nome do ponto de entrada da aplicação, no caso abaixo, Menu
AppRegistry.registerComponent(appName, () => Menu);


/* 
 * Uma apliacação em React-Native (e também react) é uma aplicação baseada em componentes
 * Como se fosse uma árvore de componentes
 * No index.js é definido o componente principal (na linha AppRegistry.registerComponent(appName, () => Menu);)
 * A partir desse componente inicial vários outros vão sendo carregados
 * Um componente pode ter outro componente e assim por diante
 * Cada componente baseados em classe tem o seu estado interno
 * 
 */
