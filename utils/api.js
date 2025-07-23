/**
 * API Utility Functions
 */

export const api = {
  /**
   * Base fetch wrapper with error handling
   * @param {string} url 
   * @param {Object} options 
   * @returns {Promise}
   */
  async request(url, options = {}) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  /**
   * GET request
   * @param {string} url 
   * @param {Object} options 
   * @returns {Promise}
   */
  async get(url, options = {}) {
    return this.request(url, {
      method: 'GET',
      ...options
    });
  },

  /**
   * POST request
   * @param {string} url 
   * @param {Object} data 
   * @param {Object} options 
   * @returns {Promise}
   */
  async post(url, data = {}, options = {}) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  },

  /**
   * PUT request
   * @param {string} url 
   * @param {Object} data 
   * @param {Object} options 
   * @returns {Promise}
   */
  async put(url, data = {}, options = {}) {
    return this.request(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    });
  },

  /**
   * DELETE request
   * @param {string} url 
   * @param {Object} options 
   * @returns {Promise}
   */
  async delete(url, options = {}) {
    return this.request(url, {
      method: 'DELETE',
      ...options
    });
  }
};

/**
 * Project-specific API functions
 */
export const projectsAPI = {
  /**
   * Load projects data
   * @returns {Promise<Array>}
   */
  async loadProjects() {
    try {
      const projects = await api.get('./data/projects.json');
      return Array.isArray(projects) ? projects : [];
    } catch (error) {
      console.error('Failed to load projects:', error);
      return [];
    }
  },

  /**
   * Get project by slug
   * @param {string} slug 
   * @returns {Promise<Object|null>}
   */
  async getProject(slug) {
    try {
      const projects = await this.loadProjects();
      return projects.find(project => project.slug === slug) || null;
    } catch (error) {
      console.error('Failed to get project:', error);
      return null;
    }
  },

  /**
   * Get projects excluding current one
   * @param {string} currentSlug 
   * @returns {Promise<Array>}
   */
  async getOtherProjects(currentSlug) {
    try {
      const projects = await this.loadProjects();
      return projects.filter(project => project.slug !== currentSlug);
    } catch (error) {
      console.error('Failed to get other projects:', error);
      return [];
    }
  }
};