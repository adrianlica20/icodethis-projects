const btns = document.querySelectorAll('.button');
const reports = document.querySelectorAll('.full-report');

btns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    reports.forEach((report, reportIndex) => {
      if (btnIndex == reportIndex) {
        report.classList.toggle('hidden');
      }
    });
  });
});
