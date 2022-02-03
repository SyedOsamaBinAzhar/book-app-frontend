//API CALL

import axios from "axios";

const loginUser = async (userDetails) => {

    try {

        const user = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/user/login',
            data: userDetails,
            headers : {
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin' : true 
            }
          })

        return user;
        
        } catch (error) {
        // console.log("err2",error);
        return error;
    }
}

export default loginUser;