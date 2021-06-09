import axios from 'axios';

export default class CvLanguageService {

  getAll() {
    return axios.get("http://localhost:8080/api/cvLanguage/getAll");
  }
}
