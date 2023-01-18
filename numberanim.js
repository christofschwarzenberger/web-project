function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

var observer = new IntersectionObserver(function (entries) {


    if (entries[0].isIntersecting === true) {
        const stat1 = document.getElementById("stat-number-one");
        animateValue(stat1, 0, 14, 600);

        const stat2 = document.getElementById("stat-number-two");
        animateValue(stat2, 0, 8, 600);

        const stat3 = document.getElementById("stat-number-three");
        animateValue(stat3, 0, 9, 600);
    }
}, { threshold: [1] });

observer.observe(document.querySelector(".stats-container"));
  
