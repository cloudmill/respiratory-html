text mask
  pug
    .text
      - for (var i = 0; i < 10; i++)
        each word in ['wqe', 'ewq', '123']
          span.text__outer
            span.text__inner
              |#{word + " "}
        |#{'\n'}
  scss
    .text {
      overflow: hidden;
      resize: both;
      
      white-space: pre-wrap;
      
      &__outer {
        display: inline-block;
        overflow: hidden;
      }
      
      &__inner {
        @keyframes qwe {
          0% {
            transform: translateY(100%);
            
            opacity: 0;
          }
          
          100% {
            transform: translateY(0);
            
            opacity: 1;
          }
        }
        
        display: inline-block;
        
        animation: qwe 0.5s infinite alternate;
        
        &--active {
          
        }
      }
    }

flow
  html
    control (#1) active
      DOMContentLoaded
        load
          transition on
          
          preloader progress 1500
            init swiper without autoplay
            start parallax

            delay 500
              preloader hide 2000

              zoom out top image 2000

              delay 1000
                reveal text mask 1000
                fade other 1000

                delay 1000
                  control (#1) progress
                  image active

                  swiper play
                    autoplay turn on
                    change slide
                      update control progress, active
                      update image active
                      update content
                        update reveal text mask
                        update fade other
                    control click [non active]
                      change slide

aos
  все настройки aos можно сделать при инициализации AOS.init({ ... })
  или переопределять SCSS переменные когда импортим стили через SCSS
  
  по-умолчанию AOS.init() ждет DCL (DOMContentLoaded), поэтому имеет смысл запускать его до DCL
  
  AOS.refresh() - пересчет offset'ов и дистанций
    AOS сам вызывает это на window resize
  AOS.hardRefresh() - обновления списка эл-ов
    AOS сам вызывает это, используя MutationObserver
  
  анимации можно добавлять, изменять итд (новые классы и атрибуты), через SCSS (надо плотнее почитать доки)
