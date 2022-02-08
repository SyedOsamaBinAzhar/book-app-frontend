import axios from "axios";

const createUser = async (userDetails) => {

    try {

        const user = await axios({
            method: 'post',
            url: 'https://book-app-vd.herokuapp.com/api/user/register',
            data: userDetails,
          })

        console.log("user",user);
        return user;
        
        } catch (error) {
        console.log("err2",error);
    }
}

export default createUser;