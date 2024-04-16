import axios from 'axios'
import {
    ADD_CONTACT,
    API_URL,
    setFail,
    setLoading,
    setSuccess
} from '../../../../utils'

const PostcontactActions = (req, res) =>
{
    console.log('req',req)
    return async dispatch =>
    {
        // const accessToken = await getData('access_token')

        dispatch(setLoading(ADD_CONTACT.ATTEMPT))

        axios({
            method: 'POST',
            url: `${API_URL}/contact`,
            headers:
            {
                // Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            },
            data: req
        })
        .then(result =>
        {
            dispatch(setSuccess(ADD_CONTACT.SUCCEED, result.data))
            if(res && res.succeed) res.succeed(result.data)
        })
        .catch(error =>
        {
            dispatch(setFail(ADD_CONTACT.FAILED, error))
            if(res && res.failed) res.failed()
        })
    }
}

export default PostcontactActions