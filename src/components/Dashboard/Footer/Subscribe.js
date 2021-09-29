import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Subscribe = () => {
    const {email} = useParams()
        axios.put('http://localhost:3001/theuser/verifymail', {
            userEmail: email
        })
        .then(function (response) {
            console.log(response.data.message);
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.error.message);
        })
    return (
        <div>
            <h5>You have successfully subscribed to our promotions</h5>
        </div>
    )
}

export default Subscribe
