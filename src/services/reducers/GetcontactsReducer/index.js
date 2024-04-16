import { GET_CONTACT } from "../../../utils" 

const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const GetcontactsReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_CONTACT.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case GET_CONTACT.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        case GET_CONTACT.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        default:
            return state
    }
}

export default GetcontactsReducer
