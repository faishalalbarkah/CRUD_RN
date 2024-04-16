import axios from 'axios'
import {
    API_URL,
    DELETE_CONTACT,
    setFail,
    setLoading,
    setSuccess
} from '../../../../utils'

const RemovecontactAction = (req, res) =>
{
    // console.log('req',req)
    return async dispatch =>
    {

        dispatch(setLoading(DELETE_CONTACT.ATTEMPT))

        axios({
            method: 'delete',
            url: `${API_URL}/contact/${req}`,
            headers:
            {
                // Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            },
            data: req
        })
        .then(result =>
        {
            console.log('result', result)
            dispatch(setSuccess(DELETE_CONTACT.SUCCEED, result.data))
            if(res && res.succeed) res.succeed(result.data)
        })
        .catch(error =>
        {
            console.log('errorRemove', error.response)
            dispatch(setFail(DELETE_CONTACT.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default RemovecontactAction