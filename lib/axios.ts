import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://faq-api.yarhis.ir/api",
  headers: {
    accept: "application/json, text/plain, */*",
    authorization:
      "Bearer 302474b158a92c92d6c5f457ce7de3a971d1ec637b428d4eafd474b2a2a835f27cf37ab03be02d670a5e21ae8801fafa3a755a97216f987407a8028e931f8f0e82e6c799d6de643f1f398c2c393e1224db7e6bc23da062687cd9c2ef73b3a28e86047aa092425e2da89d7ec2e83bb09a215ddd30cceb501970dbbacfeb47028a",
  },
});

export const fetchInsureds = async (nationalCode: string) => {
  const { data } = await axiosInstance.get(
    `/test-insureds?filters[nationalCode][$contains]=${nationalCode}`
  );
  return data;
};

export const fetchInsuredDetails = async (id: string) => {
  const { data } = await axiosInstance.get(`/test-insureds/${id}`);
  return data;
};
