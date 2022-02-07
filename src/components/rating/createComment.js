import axios from "axios";

const writeComment = async(commentObject) => {
    try {
        const createdComment = await axios.post('http://localhost:8000/api/user/comments', commentObject);
    } catch (error) {
        alert(error)
    }
}

export default writeComment;