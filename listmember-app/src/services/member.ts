import axios from "axios";

export const membersService = {
  async get(filter: string) {
    return await axios.get(`https://api.github.com/orgs/${filter}/members`);
  },
  async set(filter: string) {
    const response = await axios
      .get(`https://api.github.com/orgs/${filter}/members`)
      .catch((error) => {
        console.log(error);
      });
    return response;
  },
};
