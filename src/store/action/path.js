import history from '../../history';

export function pindahMainPath(payload) {
    console.log('masuk ke action pindahMainPath')
    return dispatch => {
        dispatch(successMainPath(payload))
    }
}

export function pindahMain(payload) {
    console.log('masuk ke action pindahMain')
    return dispatch => {
        dispatch(successMain(payload))
        history.push('/contain')
    }
}

export function successMainPath (payload) {
    return {
        type: 'PINDAH_MAIN_PATH',
        payload: payload
    }
}
export function successMain (payload) {
    return {
        type: 'PINDAH_MAIN',
        payload: payload
    }
}