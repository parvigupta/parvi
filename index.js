const btn = document.getElementById('toggle');

const menu = document.getElementById('nav-links');
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
})
window.addEventListener('scroll', function () {
  const navBarHeight = document.getElementById('nav').offsetHeight;
  const backButton = document.querySelector('.top');

  if (window.pageYOffset > navBarHeight) {
    backButton.classList.add('visible');
  } else {
    backButton.classList.remove('visible');
  }
}); document.addEventListener('DOMContentLoaded', function () {body.classList.toggle('dark-mode');
  var socialMediaLinks = document.querySelectorAll('.social-media a');
  var loadingOverlay = document.querySelector('.loading-overlay');

  socialMediaLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var linkText = link.getAttribute('data-link-text');
      showLoadingOverlay(linkText);

      setTimeout(function () {
        hideLoadingOverlay();
        window.location.href = link.href;
      }, 500);
    });
  });

  function showLoadingOverlay(linkText) {
    var loadingText = document.createElement('span');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'Redirecting ' + linkText + '...';

    loadingOverlay.appendChild(loadingText);
    loadingOverlay.style.display = 'block';
  }

  function hideLoadingOverlay() {
    var loadingText = document.querySelector('.loading-text');
    loadingOverlay.removeChild(loadingText);
    loadingOverlay.style.display = 'none';
  }
});
const darkModeToggle = document.getElementsByClassName("checkbox")[0];
const body = document.body;
const readBtn=document.getElementById('read-btn');
readBtn.addEventListener('click',()=>{
  if(readBtn.innerText==="Read More ..."){
    readBtn.innerText="Read Less .. ";
  }else{
    readBtn.innerText="Read More ..."
  }
})
darkModeToggle.addEventListener("change", function () {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Turn on Light Mode';
  } else {
    darkModeToggle.textContent = 'Turn on Dark Mode';
  }
});




// Call the incrementVisitorCount function when the page loads
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1230);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (
      entry.isIntersecting) {
      entry.target.classList.add('animating-skill')
    }
    else {
      entry.target.classList.remove('animating-skill');
    }
  });
});
const observed2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('experience-animation');

      if (entry.target.classList.contains('experience-animation')) {
        setTimeout(function () {
          entry.target.classList.add("opacity-1");
        }, 800);
      }
    } else {
      entry.target.classList.remove('experience-animation');
      entry.target.classList.remove('opacity-1');
    }
  });
});
const observed3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hobby-apply');
    }
    else {
      entry.target.classList.remove('hobby-apply');
    }
  });
});
const observed4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('hobby-apply-left');
    }
    else {
      entry.target.classList.remove('hobby-apply-left');
    }
  });
});
const observed5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('left-edu-apply');
    }
    else {
      entry.target.classList.remove('left-edu-apply');
    }
  });
});
const observed6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('right-edu-apply');
    }
    else {
      entry.target.classList.remove('right-edu-apply');
    }
  });
});



const noAnimation = document.querySelectorAll('.no-animation');
noAnimation.forEach((el) => observer.observe(el));
const pr = document.querySelectorAll('.experience');
pr.forEach((el) => {
  observed2.observe(el);

});
const hb = document.querySelectorAll('.hobby-right');
hb.forEach((el) => {
  observed3.observe(el);

});
const about_right = document.querySelectorAll('.about-me');
about_right.forEach((el) => {
  observed3.observe(el);

});
const hb2 = document.querySelectorAll('.hobby-left');
hb2.forEach((el) => {
  observed4.observe(el);

});
const about_left = document.querySelectorAll('.left-about');
about_left.forEach((el) => {
  observed4.observe(el);

});
const edu_left = document.querySelectorAll('.left-edu');
edu_left.forEach((el) => {
  observed5.observe(el);

});
const edu_right = document.querySelectorAll('.right-edu');
edu_right.forEach((el) => {
  observed6.observe(el);

});

