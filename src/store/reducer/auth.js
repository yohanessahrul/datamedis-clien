const initialState = {
    profile: null,
    token: null
}

export default function auth(state={...initialState}, action){
    switch (action.type) {
        case 'STORING_PROFILE':
            return({
                ...state,
                profile: action.payload
            })
        case 'STORING_TOKEN':
            return({
                ...state,
                token: action.payload
            })
        case 'CLEAR_TOKEN_PROFILE':
            return({
                ...state,
                token: null,
                profile: null
            })
        default:
            return state;
    }
}