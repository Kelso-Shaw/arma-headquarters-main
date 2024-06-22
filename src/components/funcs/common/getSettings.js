import { apiRequest } from "./apiRequest";

export const getSettings = async () => {
	try {
		const data = await apiRequest("panel", "GET", "", null);
		return data.settings;
	} catch (error) {
		console.error("Error fetching settings:", error);
		throw error;
	}
};
