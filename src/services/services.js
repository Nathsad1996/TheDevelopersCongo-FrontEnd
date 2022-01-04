"use strict";

// we should have global interceptors here in order to pass the Bearer Token
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/'

export default {
    login: async (data) => {
        let response = await axios.post('login', data)
        return response.data;
    },
    getUsers: async () => {
        let response = await axios.get('users');
        return response.data;
    },
    updateUser: async (data) => {
        let response = await axios.post('user', data);
        return response.data;
    },
    getUser: async (data) => {
        let response = await axios.get(`user/${data.id}`)
        return response.data;
    },
    registerProfile:  async (data) => {
        let response = await axios.post('profile', data);
        return response.data;
    },
    updateProfile:  async (data) => {
        let response = await axios.patch('profile', data);
        return response.data;
    }
}