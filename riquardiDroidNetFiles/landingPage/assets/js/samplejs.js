//sampleJS
function clickedWaiting() {
  window.open("../secondPage/index.html","_self");
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
  setTimeout(clickedWaiting,3000);
});
