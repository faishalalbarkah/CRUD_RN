import axios from 'axios'
import {  
    API_URL,
    GET_CONTACT,
    setFail,
    setLoading,
    setSuccess 
} from '../../../../utils'

const GetcontactsActions = (req, res) =>
{
    return async dispatch =>
    {
        // const accessToken = await getData('access_token')

        dispatch(setLoading(GET_CONTACT.ATTEMPT))

        axios({
            method: 'GET',
            url: `${API_URL}/contact`,
            headers:
            {
                // Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            dispatch(setSuccess(GET_CONTACT.SUCCEED, result.data.data))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            // console.log('error', error.response)
            dispatch(setFail(GET_CONTACT.FAILED, error.response))
            if(res && res.failed) res.failed()
        })
    }
}

export default GetcontactsActions
