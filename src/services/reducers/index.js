import { combineReducers } from 'redux'
import GetcontactsReducer from './GetcontactsReducer'
import GetcontactByIDReducer from './GetcontactByIDReducer'
import RemovecontactReducer from './RemovecontactReducer'
import PostcontactReducer from './PostcontactReducer'
import PutcontactReducer from './PutcontactReducer'


const reducers = combineReducers({
    contactList: GetcontactsReducer,
    contactID: GetcontactByIDReducer,
    contactRemove: RemovecontactReducer,
    contactCreate: PostcontactReducer,
    contactUpdate: PutcontactReducer
})

export default reducers

