/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { backgroundNotificationListener } from './src/utils/Pushnotifications';

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {

        return null
    }
    return <App />
}

backgroundNotificationListener()

AppRegistry.registerComponent(appName, () => HeadlessCheck);
