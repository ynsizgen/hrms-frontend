import axios from 'axios';

export default class CvSchoolService {

  getAll() {
    return axios.get("http://localhost:8080/api/cvSchool/getAll");
  }
}
