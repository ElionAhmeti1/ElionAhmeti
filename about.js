const scrollBtn = document.querySelector('#scroll-btn');
scrollBtn.addEventListener('click', function() {
  console.log('Button clicked!');
  window.scrollTo(0,document.body.scrollHeight);
});

