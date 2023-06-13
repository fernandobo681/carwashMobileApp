import { showMessage, hideMessage } from "react-native-flash-message";

export const ShowSuccess = (message: any) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message: message
    })
}

export const ShowError = (message: any) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message: message
    })
}



