//API CALL

import axios from "axios";

const loginUser = async (userDetails) => {

    try {

        const user = await axios({
            method: 'post',
            url: 'https://book-app-vd.herokuapp.com/api/user/login',
            data: userDetails,
          })

        return user;
        
        } catch (error) {
        return error;
    }
}

export default loginUser;