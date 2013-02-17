(function() {
  var m;

  m = location.pathname.match(/^\/gist\/([^#?\/]+)/);

  if (m) {
    window.location = "/#" + m[1];
    return;
  }

  m = location.pathname.match(/^\/error\/([^#?\/]+)/);

  if (m) {
    window.location = "/#" + m[1];
    return;
  }

  document.getElementById("body").style.display = "block";

}).call(this);
