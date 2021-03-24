//sampleJS
function dimmingPreloading(){
  $('#wrapper').css({
    'animation-duration':'0.7s',
    'animation-name': 'opacityDown',
    'opacity':'0'
  });
};
function clickedWaiting() {
  window.open("../secondPage/index2.html","_self");
};
$('#linkIcon').click(function(){
  $('#riquardi').css({
    'animation-duration':'3s',
    'animation-name': 'logoResize',
    'animation-timing-function': 'cubic-bezier(.43,-0.04,.3,1.2)'
  });
  $('.content').css({
    'animation-duration':'0.7s',
    'animation-name': 'opacityDown',
    'opacity':'0'
  });
  $('#navigation').css({
    'animation-duration':'0.7s',
    'animation-name': 'opacityDown',
    'opacity':'0'
  });
  setTimeout(dimmingPreloading,2300);
  setTimeout(clickedWaiting,3000);
});
