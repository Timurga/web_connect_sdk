const axios = require('axios');

class WebAPIClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
    });
  }

  async createResource(resourcePath, data) {
    try {
      const response = await this.client.post(resourcePath, data);
      return response.data;
    } catch (error) {
      console.error('Error creating resource:', error);
      throw error;
    }
  }

  async getResource(resourcePath) {
    try {
      const response = await this.client.get(resourcePath);
      return response.data;
    } catch (error) {
      console.error('Error getting resource:', error);
      throw error;
    }
  }

  async updateResource(resourcePath, data) {
    try {
      const response = await this.client.put(resourcePath, data);
      return response.data;
    } catch (error) {
      console.error('Error updating resource:', error);
      throw error;
    }
  }

  async deleteResource(resourcePath) {
    try {
      const response = await this.client.delete(resourcePath);
      return response.data;
    } catch (error) {
      console.error('Error deleting resource:', error);
      throw error;
    }
  }
}

module.exports = WebAPIClient;
