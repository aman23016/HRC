import axios from "axios";

export const getData = async () => {
    try {
      let response = await axios.post(
        "http://localhost:8080/highradius/Fetch"
      );
      console.log(response.data);
      return response.data.Fetch;
    } catch (error) {
      const err = "error as AxiosError;";
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
      this.handleAxiosError(error);
    }
};

getData();