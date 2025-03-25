import api from "./api";


export const AllEmployess = async () => {
	return await api.get("/employees");
};