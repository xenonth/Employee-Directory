import axios from "axios";
 
//setup category and property functions once data is rendering to the screen

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    employeeList: function() {     
        return axios.get('https://randomuser.me/api/?format=json');
    },
}