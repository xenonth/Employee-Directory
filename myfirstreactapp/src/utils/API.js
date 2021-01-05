import axios from "axios";
 
     
const EmployeeList = () => { 
      return axios.get('https://randomuser.me/api/', {  
          params: {
            dataType: 'json',
        }
      }
    )}

module.exports = EmployeeList;