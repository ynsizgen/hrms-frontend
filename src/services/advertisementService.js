import axios from 'axios';

export default class AdvertisementService {
  

  add({ deadline, city: { cityId }, description, employer: { id }, jobPosition: { id }, maxSalary, minSalary, amountOfPositions }) {
    return axios.post("http://localhost:8080/api/advertisement/add", {
      deadline,
      city: { id: cityId },
      description,
      employer: { id: id },
      jobPosition: { id: id },
      maxSalary,
      minSalary,
      amountOfPositions,
    });
  }

  getAll() {
    return axios.get("http://localhost:8080/api/advertisement/getAll");
  }
}