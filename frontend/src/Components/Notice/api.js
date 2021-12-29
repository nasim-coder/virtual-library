import axios from "axios";

const url='http://localhost:3003/msgs';

export const getMsgs = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
} 
export const addMsg = async (msg) => {
    return await axios.post(url, msg);
}
export const deleteMsg = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editMsg = async (id, msg) => {
    return await axios.put(`${url}/${id}`,msg)
}


const url1='http://localhost:3002/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url1}/${id}`);
} 
export const addUser = async (user) => {
    return await axios.post(url1, user);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url1}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url1}/${id}`,user)
}
