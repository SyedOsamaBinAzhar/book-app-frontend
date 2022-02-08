import axios from "axios";

const updateUser = async (user) => {

    const id = user.userId;

    try {
        const updatedUser = await axios.patch(`https://book-app-vd.herokuapp.com/api/user/users/${id}`, user);
    } catch (error) {
        alert("Something went wrong please try again.")
    }
}

export default updateUser;