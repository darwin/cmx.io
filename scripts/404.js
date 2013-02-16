(function() {
  var m;

  m = location.pathname.match(/^\/gist\/([^#?\/]+)/);

  if (m) {
    window.location = "/#" + m[1];
  }

}).call(this);
