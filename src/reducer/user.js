let defaultState = {
    users: []
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "REGISTER":
            let newData = {
                username: action.payload.username,
                password: action.payload.password,
                name: action.payload.name,
                nik: action.payload.nik,
            }
            let data = {}
            if (state.users.length === 0) {
                data = state.users.concat(newData)
                data = state.users.concat(newData)
            } else {
                data = state.users.concat(newData)
            }
            console.log(data)
            return {
                users: data
            }

            case "INDICATION":
                let newIndication={
                    username: action.payload.username,
                    password: action.payload.password,
                    name: action.payload.name,
                    nik: action.payload.nik,
                    indication: action.payload.indication
                }
                let data2 = {}
                if (state.users.length === 0) {
                    data = state.users.concat(newIndication)
                    data = state.users.concat(newIndication)
                } else {
                    data = state.users.concat(newData)
                }
                console.log(data2)
                return {
                    users: data
                 }

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default userReducer