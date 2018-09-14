//slider
var  slider_btn_one = document.querySelector('.slider_btn_one');
var  slider_btn_two = document.querySelector('.slider_btn_two');
var  slider_btn_three = document.querySelector('.slider_btn_three');
var  bg = document.querySelector('body');
var  slider_one = document.querySelector('.slider_one');
var  slider_two = document.querySelector('.slider_two');
var  slider_three = document.querySelector('.slider_three');
var  bg_ice_cream = document.querySelector('.bg_ice_cream_one');
window.onload=function() {
  slider_btn_one.classList.add('slider_btn_active_now');
}
slider_btn_one.addEventListener("click", function() {
  slider_btn_one.classList.add('slider_btn_active_now');
  slider_btn_two.classList.remove('slider_btn_active_now');
  slider_btn_three.classList.remove('slider_btn_active_now');

  bg.classList.add('bg_slider_back_one');
  bg.classList.remove('bg_slider_back_two');
  bg.classList.remove('bg_slider_back_three');

  slider_one.classList.remove('visually-hidden');
  slider_two.classList.add('visually-hidden');
  slider_three.classList.add('visually-hidden');

  bg_ice_cream.classList.add('bg_ice_cream_one');
  bg_ice_cream.classList.remove('bg_ice_cream_two');
  bg_ice_cream.classList.remove('bg_ice_cream_three');
});

slider_btn_two.addEventListener("click", function() {
  slider_btn_one.classList.remove('slider_btn_active_now');
  slider_btn_two.classList.add('slider_btn_active_now');
  slider_btn_three.classList.remove('slider_btn_active_now');

  bg.classList.remove('bg_slider_back_one');
  bg.classList.add('bg_slider_back_two');
  bg.classList.remove('bg_slider_back_three');

  slider_one.classList.add('visually-hidden');
  slider_two.classList.remove('visually-hidden');
  slider_three.classList.add('visually-hidden');

  bg_ice_cream.classList.remove('bg_ice_cream_one');
  bg_ice_cream.classList.add('bg_ice_cream_two');
  bg_ice_cream.classList.remove('bg_ice_cream_three');
});

slider_btn_three.addEventListener("click", function() {
  slider_btn_one.classList.remove('slider_btn_active_now');
  slider_btn_two.classList.remove('slider_btn_active_now');
  slider_btn_three.classList.add('slider_btn_active_now');

  bg.classList.remove('bg_slider_back_one');
  bg.classList.remove('bg_slider_back_two');
  bg.classList.add('bg_slider_back_three');

  slider_one.classList.add('visually-hidden');
  slider_two.classList.add('visually-hidden');
  slider_three.classList.remove('visually-hidden');

  bg_ice_cream.classList.remove('bg_ice_cream_one');
  bg_ice_cream.classList.remove('bg_ice_cream_two');
  bg_ice_cream.classList.add('bg_ice_cream_three');
});




//popup
var overlay = document.querySelector('body');
var feedback_link = document.querySelector('.feedback_link');
var modal_open = document.querySelector('.modal_task_feedback');
var close_feedback = document.querySelector('.modal_close');
var login_modal = document.querySelector('#name_user');
var mail_modal = modal_open.querySelector('[name=email]');
var textarea_modal = modal_open.querySelector('textarea');
var form = modal_open.querySelector('form');
feedback_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_open.classList.add("modal_task_feedback_show");
  overlay.classList.add("overlay");
  login_modal.focus();
});


close_feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_open.classList.remove("modal_task_feedback_show");
  overlay.classList.remove("overlay");
  modal_open.classList.remove('modal_error');
});

form.addEventListener("submit", function (evt) {
  if (!mail_modal.value || login_modal.value || textarea_modal.value) {
    evt.preventDefault();
    modal_open.classList.add('modal_error');
    /*setInterval(function(){
      modal_open.classList.remove('modal_error');
    },3000);*/
    console.log('Error: no value form');
  }

});
