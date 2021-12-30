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



