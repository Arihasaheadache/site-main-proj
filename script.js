function revealWords(selector, reverse = false, delay = 500) {
  const spans = [...document.querySelectorAll(selector + ' span')];
  const words = reverse ? spans.reverse() : spans;

  words.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = 1;
    }, index * delay);
  });
}

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
  const delayPerWord = 500; // ms
  revealWords('#left-hero', false, delayPerWord);
  revealWords('#right-hero', true, delayPerWord);
});

const navigation = document.getElementById('navbar');
setTimeout(() => {
    navigation.style.opacity = 1;
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
  const achievements = document.getElementById('achievements');
  const cards = achievements.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 400); 
        });
        observer.unobserve(achievements); 
      }
    });
  }, { threshold: 0.2 });

  observer.observe(achievements);
});

function setHeroHeight() {
  const hero = document.getElementById('hero');
  hero.style.height = `${window.innerHeight}px`;
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);
