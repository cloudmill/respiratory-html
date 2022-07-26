function forms() {

  const response = $('.form-response-modal');


  $("[data-parsley-validate]").submit(function (e) {
    e.preventDefault();


    setTimeout(() => {

      if (!$(this).find(".parsley-error").length) {

        $('.body').css('overflow', 'hidden');
        $('.modals-container').addClass('active');
        response.addClass('active');



        $(this).find("input").each(function() {
          $(this).val('')
        });
        $(this).find("textarea").each(function() {
          $(this).val('')
        });

      }

    }, 0);

  });

  $(window).on('click', (e) => {

    if ($('.modals-container').hasClass('active') && (!e.target.closest('.form-response-modal') || e.target.closest('.modal-close'))) {

      $('.body').css('overflow', '');
      $('.modals-container').removeClass('active');
      response.removeClass('active');

    }

  })
  
}

export default forms;
