import axios from "axios";

const bookRequest = async(requestObject) => {
    const createdRequest = await axios.post('http://localhost:8000/api/user/request', requestObject);
    console.log(createdRequest);
}

export default bookRequest;