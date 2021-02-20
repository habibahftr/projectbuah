let defaultState = {
    indications: [{
        indication:"",
        description:"",
    }]
}

const gejalaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INDICATION_PAGE":
            let newData = {
                indication: action.payload.indication,
                description: action.payload.description,
            }
            let data = {}
            if (state.indications.length === 0) {
                data = state.indications.concat(newData)
                data = state.indications.concat(newData)
            } else {
                data = state.indications.concat(newData)
            }
            console.log(data)
            return {
                indications: data
            }

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default gejalaReducer