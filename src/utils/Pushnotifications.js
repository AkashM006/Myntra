import messaging from '@react-native-firebase/messaging';

const getFCMToken = async _ => {
    try {
        const token = await messaging().getToken()
        console.log("Token: ", token)
    } catch (err) {
        console.log("Error while getting FCM Token: ", err)
    }
}

const foregroundNotificationListener = _ => {
    return messaging().onMessage(async remoteMessage => {
        console.log('Message: ', remoteMessage)
    })
}

const backgroundNotificationListener = _ => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log("Background Message: ", remoteMessage)
    })
}

export { getFCMToken, backgroundNotificationListener, foregroundNotificationListener }