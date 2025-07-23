/**
 * DOM Utility Functions
 */

export const dom = {
  /**
   * Get element by selector
   * @param {string} selector 
   * @returns {Element|null}
   */
  $(selector) {
    return document.querySelector(selector);
  },

  /**
   * Get all elements by selector
   * @param {string} selector 
   * @returns {NodeList}
   */
  $$(selector) {
    return document.querySelectorAll(selector);
  },

  /**
   * Create element with attributes and content
   * @param {string} tag 
   * @param {Object} attributes 
   * @param {string|Element} content 
   * @returns {Element}
   */
  create(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else {
        element.setAttribute(key, value);
      }
    });

    if (typeof content === 'string') {
      element.textContent = content;
    } else if (content instanceof Element) {
      element.appendChild(content);
    } else if (Array.isArray(content)) {
      content.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof Element) {
          element.appendChild(child);
        }
      });
    }

    return element;
  },

  /**
   * Add event listener with optional delegation
   * @param {Element|string} target 
   * @param {string} event 
   * @param {Function} handler 
   * @param {string} delegate 
   */
  on(target, event, handler, delegate = null) {
    const element = typeof target === 'string' ? this.$(target) : target;
    
    if (delegate) {
      element.addEventListener(event, (e) => {
        if (e.target.matches(delegate)) {
          handler.call(e.target, e);
        }
      });
    } else {
      element.addEventListener(event, handler);
    }
  },

  /**
   * Remove class from element
   * @param {Element|string} target 
   * @param {string} className 
   */
  removeClass(target, className) {
    const element = typeof target === 'string' ? this.$(target) : target;
    element?.classList.remove(className);
  },

  /**
   * Add class to element
   * @param {Element|string} target 
   * @param {string} className 
   */
  addClass(target, className) {
    const element = typeof target === 'string' ? this.$(target) : target;
    element?.classList.add(className);
  },

  /**
   * Toggle class on element
   * @param {Element|string} target 
   * @param {string} className 
   */
  toggleClass(target, className) {
    const element = typeof target === 'string' ? this.$(target) : target;
    element?.classList.toggle(className);
  },

  /**
   * Check if element has class
   * @param {Element|string} target 
   * @param {string} className 
   * @returns {boolean}
   */
  hasClass(target, className) {
    const element = typeof target === 'string' ? this.$(target) : target;
    return element?.classList.contains(className) || false;
  },

  /**
   * Wait for DOM to be ready
   * @param {Function} callback 
   */
  ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  },

  /**
   * Smooth scroll to element
   * @param {Element|string} target 
   * @param {Object} options 
   */
  scrollTo(target, options = {}) {
    const element = typeof target === 'string' ? this.$(target) : target;
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options
      });
    }
  },

  /**
   * Get element's position relative to viewport
   * @param {Element|string} target 
   * @returns {DOMRect}
   */
  getRect(target) {
    const element = typeof target === 'string' ? this.$(target) : target;
    return element?.getBoundingClientRect();
  },

  /**
   * Check if element is in viewport
   * @param {Element|string} target 
   * @returns {boolean}
   */
  isInViewport(target) {
    const rect = this.getRect(target);
    if (!rect) return false;
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }
};