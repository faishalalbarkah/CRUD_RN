import { DELETE_CONTACT } from '../../../utils'

const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const RemovecontactReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case DELETE_CONTACT.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case DELETE_CONTACT.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        case DELETE_CONTACT.FAILED:
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

export default RemovecontactReducer