import axios from "axios";

const writeComment = async(commentObject) => {
    try {
        const createdComment = await axios.post('https://book-app-vd.herokuapp.com/api/user/comments', commentObject);
    } catch (error) {
        alert(error)
    }
}

export default writeComment;