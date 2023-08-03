const scrollText = document.querySelector('.scroll-text');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  if (isElementInViewport(scrollText)) {
    scrollText.classList.add('visible');
  }
}

window.addEventListener('scroll', checkVisibility);