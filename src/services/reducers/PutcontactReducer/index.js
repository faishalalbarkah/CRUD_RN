import { PUT_CONTACT } from '../../../utils'


const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const PutcontactReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case PUT_CONTACT.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case PUT_CONTACT.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        case PUT_CONTACT.FAILED:
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

export default PutcontactReducer