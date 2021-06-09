import axios from "axios";

export default class SeekerService {
  getAll() {
    return axios.get("http://localhost:8080/api/seekers/getAll");
  }
}
