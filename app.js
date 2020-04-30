function addInputErrorAnim() {
  let input =document.getElementById('input-password');
  input.classList.add('input-error-shake');
  let x=setInterval(function(){
    input.classList.remove('input-error-shake');
    clearInterval(x);
  },820);
}
