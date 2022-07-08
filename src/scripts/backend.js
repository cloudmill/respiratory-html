import $ from "jquery";

$(function () {
  filterClick();
});

function filterClick() {
  $(document).on("click", "[data-type=js-filter-click]", function (e) {
    e.preventDefault();

    let thisObj = $(this),
      value = thisObj.attr("data-select-value");

    console.log("filter click");

    console.log(value);

    $.ajax({
      method: "GET",
      url: window.location.href,
      data: {
        ajax: 1,
        value: value,
      },
      success: function (r) {
        $(document).find("[data-type=items-container-full]").empty();
        $(document).find("[data-type=items-container-full]").append($(r));
      },
      error: function (r) {
        console.debug(r);
      },
    });
  });
}
