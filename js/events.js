//1
function getIt() {
  alert("Hey!");
}
//2
function frameIt() {
  $(this).addclass(tasty);
  $(this).css('border', '3m soid red');
}
//3 I wrote this one to accept a parameter (each keystroke) - i'm not sure
// if that will function correctly but it seems simpler.
function pressIt(n) {
  if(n.which == 71) {
    alert("You have pressed the G key");
  }
}
//4
function submitIt() {
  alert("your form is going to submit now");
  return;
}

$(document).ready(function(){
//1
  $('p').click(getIt())
//2
  $('img').load(frameIt())
//3
  $('form').keydown(pressIt(n))
//4
  $('form').submit(submitIt())
});
