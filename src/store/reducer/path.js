const initialState = {
    mainScrollingPath: '/contain',
    mainPath: '/contain',
    currentPath: 'intro'
}

export default function pathSettings(state={...initialState}, action){
    switch (action.type) {
        case 'PINDAH_MAIN_PATH':
          return({
              ...state,
              mainPath: action.payload.main,
              currentPath: action.payload.path
          })
        case 'PINDAH_MAIN':
          return({
              ...state,
              mainPath: action.payload.main,
              currentPath: action.payload.path
          })
    
        default:
          return state;
    }
}