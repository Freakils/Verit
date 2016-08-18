// client-side js
// run by the browser each time your view template is loaded

// protip: you can rename this to use .coffee if you prefer

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('#imageInput').change(function(e) {
    e.preventDefault();
    var url = e.target.files[0]; // get the image url
    var img = document.getElementById('preview'); // get the preview image element
    img.src = window.URL.createObjectURL(url); // set the src of the preview

    // decode
    var qr = new QCodeDecoder();
    var socket = io();

    qr.decodeFromImage(img, function (err, result) {
      if (err) return alert(err);

      socket.emit('scan', {});

      //alert(result);
    });
  });

});
