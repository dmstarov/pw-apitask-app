import axios from 'axios';


const baseUrl = 'http://localhost:8080/api';


/**
 * Create a user in the system.
 * @param user - The user data to be created.
 * @param headers - The headers to be included in the request.
 */
export const createUser = async (user: any, headers = {}) => {
  try {
    const response = await axios.post(`${baseUrl}/users`, user, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

/**
 * Get a user by ID.
 * @param userId - The ID of the user to retrieve.
 * @param headers - The headers to be included in the request.
 */
export const getUserById = async (userId: string, headers = {}) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

/**
 * Update a user by ID.
 * @param userId - The ID of the user to update.
 * @param updatedData - The new data for the user.
 * @param headers - The headers to be included in the request.
 */
export const updateUser = async (userId: string, updatedData: any, headers = {}) => {
  try {
    const response = await axios.put(`${baseUrl}/users/${userId}`, updatedData, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};

/**
 * Delete a user by ID.
 * @param userId - The ID of the user to delete.
 * @param headers - The headers to be included in the request.
 */
export const deleteUser = async (userId: string, headers = {}) => {
  try {
    const response = await axios.delete(`${baseUrl}/users/${userId}`, { headers });
    return response;
  } catch (error) {
    return error.response;
  }
};
