import messaging from '@react-native-firebase/messaging';

const getFCMToken = async _ => {
    try {
        const token = await messaging().getToken()
        console.log("Token: ", token)
    } catch (err) {
        console.log("Error while getting FCM Token: ", err)
    }
}

export { getFCMToken }