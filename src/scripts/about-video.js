export default function aboutVideo() {

  const mediaQuery = window.matchMedia("(min-width: 1280px)");
  const aboutVideo = document.querySelector('[data-start-video]');
  const videoSourceTag = document.querySelector('[data-video-source]');

  if (aboutVideo && mediaQuery.matches) {

    videoSourceTag.setAttribute('src', 'assets/videos/about-back.mp4');

    aboutVideo.play();
    aboutVideo.setAttribute('autoplay', '');

  } else if (aboutVideo && !mediaQuery.matches) {

    videoSourceTag.setAttribute('src', 'assets/videos/about-back-mob.mp4');

    aboutVideo.play();
    aboutVideo.setAttribute('autoplay', '');
    
  }

}
