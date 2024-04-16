import axios from 'axios'
import {  
    API_URL,
    GET_CONTACT_ID,
    setFail,
    setLoading,
    setSuccess 
} from '../../../../utils'

const GetcontactByIDActions = (req, res) =>
{
    return async dispatch =>
    {
        // const accessToken = await getData('access_token')

        dispatch(setLoading(GET_CONTACT_ID.ATTEMPT))

        axios({
            method: 'GET',
            url: `${API_URL}/contact/${req}`,
            headers:
            {
                // Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            dispatch(setSuccess(GET_CONTACT_ID.SUCCEED, result.data.data))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            // console.log('error', error.response)
            dispatch(setFail(GET_CONTACT_ID.FAILED, error.response))
            if(res && res.failed) res.failed()
        })
    }
}

export default GetcontactByIDActions
