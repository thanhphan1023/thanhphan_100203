import { AllCustomers, createCustomers, deleteCustomers } from "../api/customerApi";


export const fetchAllCustomers = async () => {
	try {
		const response = await AllCustomers();
		return response.data;
	} catch (error) {
		console.error("Error getting customer list:", error);
		throw error;
	}
};

export const fechDeleteCustomers = async (email) => {
	try {
		const response = await deleteCustomers(email);
		return response.data;
	} catch (error) {
		console.error("Error deleting customer:", error);
		throw error;
	}
};

export const fetchCreateCustomers = async (customerData) => {
	try {
		const response = await createCustomers(customerData);
		return response.data;
	} catch (error) {
		console.error("Error creating customer:", error);
		throw error;
	}
};
