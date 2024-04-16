import { ADD_CONTACT } from '../../../utils'


const initialState = {
    data: false,
    errors: false,
    isLoading: false
}

const PostcontactReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case ADD_CONTACT.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case ADD_CONTACT.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        case ADD_CONTACT.FAILED:
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

export default PostcontactReducer