import axios from 'axios';

export default class CvPhotoService {

  getAll() {
    return axios.get("http://localhost:8080/api/cvPhotos/getAll");
  }
}
