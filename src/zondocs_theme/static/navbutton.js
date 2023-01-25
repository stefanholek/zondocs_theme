(() => {
  const button = document.querySelector('#navbutton');
  const sidebar = document.querySelector('#sidebar');
  button.addEventListener('click', ( event ) => {
      let expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      sidebar.classList.toggle('opened');
  });
})();
