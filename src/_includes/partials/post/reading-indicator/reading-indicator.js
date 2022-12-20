const getOffsetTop = (elem) => {

  // Set our distance placeholder
  let distance = 0;

  // Loop up the DOM
  if (elem.offsetParent) {
    do {
      distance += elem.offsetTop;
      elem = elem.offsetParent;
    } while (elem);
  }

  // Return our distance
  return distance < 0 ? 0 : distance;
};


class ReadingIndicator {
  constructor(selector) {
    this.selector = selector;
    if (!this.selector) return;
    this.element = document.querySelector(selector);
    if (!this.element) return;
    this.article = document.querySelector('[data-article]');
    if (!this.article) return;
    this.rect = this.article.getBoundingClientRect();
    this.offset = getOffsetTop(this.article);
    this.max = Math.ceil(this.rect.height + this.offset);
  }

  handleScroll() {
    const contentScrolled = window.pageYOffset;
    const total = this.max;
    const percent = parseInt((contentScrolled / total) * 100, 10);

    this.element.value = percent > 100 ? 100 : percent < 0 ? 0 : percent;
    console.log('💯', `${this.element.value}%`);
  }

  init() {
    console.log('🌡  ', this.element);
    if (!this.element) return;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
}

(() => {
  const indicator = new ReadingIndicator('[data-js-reading-indicator]');
  indicator.init();
})();
