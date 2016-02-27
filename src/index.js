class SectionNav {
  /**
   * Renders a section navigation list to the DOM.
   *
   * @param {Object} options
   * @param {string} options.selector - Selector for elements to include in the list.
   * @param {HTMLElement} options.targetElement - Element to contain the list.
   * @param {function} [options.linkText] - Callback for generating link text.
   * @param {string} [options.idPrefix] - Prefix to use for generated ids.
   */
  constructor(options) {
    this.options = Object.assign(this.defaultOptions(), options);
    this.render();
  }

  defaultOptions() {
    return {
      idPrefix: 'section-',
      linkText: number => `Section ${number}`,
    };
  }

  render() {
    const {
      ids,
      links,
      list,
      options,
    } = this;
    const {
      idPrefix,
      linkText,
      selector,
      targetElement,
    } = options;

    const htmlString = list(links(ids(selector, idPrefix), linkText));
    targetElement.innerHTML = htmlString;
  }

  /**
   * Empties the targetElement
   */
  unmount() {
    this.options.targetElement.innerHTML = '';
  }

  /**
   * Query a selector and returns an array of element ids, and
   * set an id for any elements that don't have one.
   *
   * @param {string} selector - The selector to query.
   * @param {string} idPrefix - Prefix to use for generated ids.
   * @returns {string[]} The ids of elements matching the selector
   */
  ids(selector, idPrefix) {
    const ids = [];
    const elements = document.querySelectorAll(selector);

    Array.prototype.forEach.call(elements, (element, index) => {
      if (!element.id) {
        element.id = idPrefix + (index + 1);
      }

      ids.push(element.id);
    });

    return ids;
  }

  /**
   * Generate anchor links for an array of ids
   *
   * @param {string[]} ids
   * @returns {string[]} Anchor links for each id.
   */
  links(ids, linkText) {
    return ids.map((id, index) => {
      return `<a href="#${id}">${linkText(index + 1)}</a>`;
    });
  }

  /**
   * Generate list for an array of items.
   *
   * @param {string[]} items
   * @returns {string} HTML string for the list.
   */
  list(items) {
    return [
      '<ul>',
      ...items.map(item => `  <li>${item}</li>`),
      '</ul>',
    ].join('\n');
  }
}

export default SectionNav;
