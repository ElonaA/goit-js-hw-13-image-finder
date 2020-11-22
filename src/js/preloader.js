export function showPreloader() {
 document.body.classList.add('loaded_hiding');
}

export function hidePreloader() {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
}

export default window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }