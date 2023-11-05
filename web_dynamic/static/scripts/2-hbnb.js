const $ = window.$;
$(function () {
  const baba = {};
  function check () {
    $('div.amenities li input').map(function () {
      if ($(this).is(':checked')) {
        baba[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete baba[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(baba).join(', ') || ' ');
    });
  }
  check();
  $('div.amenities li input').change(function () {
    check();
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
