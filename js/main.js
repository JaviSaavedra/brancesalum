
//  funcion para fancybox y hora
 
 $(document).ready(function() {
    $('.fancybox').fancybox();
  });

  function displayTime() {
    var time = new Date()
    document.getElementById("fechahorazonahoraria").innerHTML = time;
  }
  setInterval(displayTime, 1000)
