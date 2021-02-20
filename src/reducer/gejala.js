let defaultState = {
    id:0,
    indications: [
        
    ]
}

const gejalaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INDICATION_PAGE":
            let dataBaru = {
                id:state.id++,
                indication : action.payload.indication,
                description: action.payload.description,
            }
            let gejala = {}
            if (state.indications.length === 0) {
                gejala = state.indications.concat(dataBaru)
                gejala = state.indications.concat(dataBaru)
            } else {
                gejala = state.indications.concat(dataBaru)
            }
            console.log(gejala)
            return {
                indications: gejala
            }
            

            case "CLEAR_DATA":
                // let data = state.indications.splice(idx, 1)
                return{
                    // indications:data
                }
                
                
            default:
                return state
    }
}

export default gejalaReducer