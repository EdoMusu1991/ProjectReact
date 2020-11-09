import axios from 'axios'

const CONTROLLER_API_URL = 'http://localhost:8080'
const USER_API_URL = `${CONTROLLER_API_URL}/user` //costante url dove troverò gli utenti

class UserDataService {

    retrieveAllUsers() {
                                                                                        console.log("class UserDataService { retrieveAllUsers() {");
        return axios.get(`${USER_API_URL}/allUsers`);
    }

    deleteUser(id) {
                                                                                         console.log('deleteUser(id) {')
       return axios.delete(`${USER_API_URL}/delete/${id}`);
    } 

    retrieveUser(id) {
                                                                    console.log(' retrieveUser( id) {')
        return axios.get(`${USER_API_URL}/users/${id}`);
    }

    updateUser(user) {
                                                                 console.log('updateUser(user) {')
    return axios.put(`${USER_API_URL}/update/`, user);
    }

    createUsers(user) {
                                                                 console.log('createUsers(user)')
        return axios.post(`${USER_API_URL}/add/`, user);
    }

    loginUser(user) {
        console.log(' loginUsers(user) {')
        return axios.post(`${USER_API_URL}/login/`, user);
}

}
export default new UserDataService()