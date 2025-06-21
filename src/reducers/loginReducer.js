const loginReducer = (state , {type , payload}) =>{
    switch (type) {
      case "USERNAME":
        return {
            ...state,
            userName: payload.value
        }
      case "PASSWORD":
        return {
            ...state,
            password: payload.value
        }
      case "TOKEN":
        return{
           ...state,
            token : payload.token
        }
      case "LOGOUT": 
        return{
            ...state,
            userName: '',
            password: '',
            token: ''
        }
      default:
            return state
    }
}

export default loginReducer;