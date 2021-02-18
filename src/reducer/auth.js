let defaultState={
    isLogin: false,
    userLogin : {
        username:"",
        phone:"",
        email:"",
        role:"",
    }
}

const authReducer = (state=defaultState, action)=>{
    console.warn("state: ", state)
    console.warn("action: ", action)
    switch (action.type) {
        case "LOGIN":
            return{
                isLogin: true,
                userLogin : {
                    username:action.payload.username,
                    phone:action.payload.phone,
                    email:action.payload.email,
                    role:action.payload.role,
                }
                
            }
    
        default:
            return state;
    }
}

export default authReducer