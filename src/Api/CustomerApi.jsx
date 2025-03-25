import api from "./api";

export const AllCustomers = async () => {
	return await api.get("/customers");
};
export const DetailCustomerByEmail = async (email) => {
	return await api.get(`/customers/by-email?email=${email}`);
};
export const createCustomers = async (customerData) => {
	return await api.post("/customers/create", customerData);
};
export const updateCustomers = async (customerData) => {
	return await api.put("/customers/update", customerData);
};
export const deleteCustomers = async (email) => {
	return await api.delete(`/customers/delete?email=${email}`);
};


