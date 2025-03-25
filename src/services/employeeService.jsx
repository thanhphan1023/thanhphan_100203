import { AllEmployess } from "../api/employeeApi";

export const fetchAllEmployee = async () => {
    try {
        const response = await AllEmployess();
        return response.data;
    } catch (error) {
        console.error("Error getting employees list:", error);
        throw error;
    }
};