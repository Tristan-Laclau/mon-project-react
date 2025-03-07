import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';


/* Un exemple de service dans le cas d'une architecture en couche */

export const getTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const updateTask = (id, task) => {
        console.log('PUT Request:', `${API_URL}/${id}`);
        console.log('Task:', task);
        return axios.put(`${API_URL}/${id}`, task);
    }
;