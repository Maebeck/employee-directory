import axios from 'axios';
const SEED = 'employee_dir_seed';
const BASEURL = 'https://randomuser.me/api/';
const URLOPTIONS = `?page=1&results=25&seed=${SEED}`;


export default {
    search: function () {
        return axios.get(BASEURL + URLOPTIONS);
    }
};