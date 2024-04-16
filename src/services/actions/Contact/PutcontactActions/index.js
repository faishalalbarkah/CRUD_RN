import axios from 'axios'
import {
    PUT_CONTACT,
    API_URL,
    setFail,
    setLoading,
    setSuccess
} from '../../../../utils'

const PutcontactActions = (req, res) =>
{
    console.log('Update',req)
    const RequestData = {
        firstName: req.firstName,
        lastName: req.lastName,
        age: req.age,
        photo: req.photo
    }
    console.log('RequestData',RequestData)
    return async dispatch =>
    {
        // const accessToken = await getData('access_token')

        dispatch(setLoading(PUT_CONTACT.ATTEMPT))

        axios({
            method: 'PUT',
            url: `${API_URL}/contact/${req.id}`,
            headers:
            {
                // Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            },
            data: RequestData
        })
        .then(result =>
        {
            console.log('result',result)
            dispatch(setSuccess(PUT_CONTACT.SUCCEED, result.data))
            if(res && res.succeed) res.succeed(result.data)
        })
        .catch(error =>
        {
            console.log('error',error)
            dispatch(setFail(PUT_CONTACT.FAILED, error))
            if(res && res.failed) res.failed()
        })
    }
}

export default PutcontactActions