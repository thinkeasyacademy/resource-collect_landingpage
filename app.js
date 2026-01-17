(function () {
  const cfg = window.THINKEASY_FORM || {};
  const year = document.getElementById('year');
  const cardBtn = document.getElementById('openFormBtnCard');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // শুধু Start Upload বাটন → Google Form
  const formUrl = cfg.OPEN_URL || cfg.EMBED_URL || '#';

  if (cardBtn) {
    cardBtn.href = formUrl;
    cardBtn.target = '_blank';
    cardBtn.rel = 'noopener';
  }
})();
