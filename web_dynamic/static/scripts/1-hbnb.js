const $ = window.$;
$(function () {
  const bubu = {};
  function check () {
    $('div.amenities li input').map(function () {
      if ($(this).is(':checked')) {
        bubu[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete bubu[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(bubu).join(', ') || ' ');
    });
  }
  check();
  $('div.amenities li input').change(function () {
    check();
  });
});
