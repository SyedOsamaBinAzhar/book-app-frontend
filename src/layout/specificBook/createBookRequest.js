import axios from "axios";

const bookRequest = async(requestObject) => {
    const createdRequest = await axios.post('https://book-app-vd.herokuapp.com/api/user/request', requestObject);
    // console.log(createdRequest);
}

export default bookRequest;