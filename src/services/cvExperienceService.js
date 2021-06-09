import axios from 'axios';

export default class CvExperienceService {

  getAll() {
    return axios.get("http://localhost:8080/api/cvExperience/getAll");
  }
}
