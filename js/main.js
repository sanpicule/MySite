'use strict';
{
  //intersection Observer

  function callback (entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };
  
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');
  console.log(targets);

  targets.forEach(target => {
    observer.observe(target);
  });
}