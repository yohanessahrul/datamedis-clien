import history from '../../history';
import axios from 'axios';
import alertify from 'alertifyjs';

export function loginAction(payload) {
    return dispatch => {
        axios.post('http://passport.datamedis.id/auth/login/', payload)
          .then(response => {
              console.log('RESPON====> ', response)
              dispatch(setUserProfile(response.data.user))
              dispatch(setToken(response.data.token))
              localStorage.setItem('response', response.data)
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('profile', JSON.stringify(response.data.user))
              history.push('/dashboard')
              alertify.success(`Selamat datang ${JSON.stringify(response.data.user.username)}`)
          })
          .catch(err => {
            alertify.alert('Pemberitahuan', 'Periksa kembali email dan password anda, jika belum ada harap segera segera mendaftar');
          })
    }
}

export function logoutAction() {
    return dispatch => {
        localStorage.removeItem('token')
        localStorage.removeItem('profile')
        localStorage.removeItem('payloadDummy')
        dispatch(clearTokenAndProfile())
        alertify.success('Anda baru saja keluar')
        history.push('/')
    }
}

export function daftarAction(payload) {
    return dispatch => {
        let payloadPost = {
            name: payload.nama,
            email: payload.email,
            password1: payload.password1,
            password2: payload.password2,
            app_owner: 'datamedis_app',
            user_types: 'datamedis_app_admin',
        }
        console.log('action dapet payload => ', payloadPost)
        axios.post('http://66.42.62.145/auth/registration/', payloadPost)
          .then(response => {
              console.log('REGISTER RESPON ===> ', response)
              if (response.data.token) {
                alertify.alert('Daftar berhasil', `Terimakasih ${response.data.user.email} telah mendaftar, kami sudah mengirimkan email verifikasi untuk mengaktifkan akun anda`,
                    function() {
                        history.push('/login')
                    }
                );
              }
          })
          .catch(err => {
              console.log(err)
              alertify.alert('Perhatian', 'Email anda sudah terdaftar, pakailah email lain')
          })
    }
}

export function resetPasswordAction (payload) {
    console.log('payload RESET ==>', payload)
    return dispatch => {
        axios.post('http://66.42.62.145/auth/password/reset/', payload)
          .then(response => {
              alertify.alert('Tautan reset password sudah kami kirim ke email anda, silahkan cek email anda.')
          })
          .catch(err => {
              alertify.alert('Error')
          })
    }
}

export function setUserProfile (payload) {
    return {
        type: 'STORING_PROFILE',
        payload: payload
    }
}

export function setToken (payload) {
    return {
        type: 'STORING_TOKEN',
        payload: payload
    }
}

export function clearTokenAndProfile () {
    return {
        type: 'CLEAR_TOKEN_PROFILE'
    }
}
