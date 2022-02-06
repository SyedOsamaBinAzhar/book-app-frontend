import axios from "axios";

const updateUser = async (user) => {

    const id = user.userId;

    try {
        const updatedUser = await axios.patch(`http://localhost:8000/api/user/users/${id}`, user);
    } catch (error) {
        alert(error)
    }
}

export default updateUser;