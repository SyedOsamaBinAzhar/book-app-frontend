import axios from "axios";

const createUser = async (userDetails) => {

    console.log("userDetails",userDetails);
    try {

        const user = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/user/register',
            data: userDetails,
            headers : {
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin' : true 
            }
          })

        console.log("user",user);
        return user;
        
        } catch (error) {
        console.log("err2",error);
    }
}

export default createUser;