
// get Element

const bottom = document.getElementById('apply');
const modal = document.querySelector('.awa-modal');
const alert = document.querySelector('.awa-alert');
const mclose = document.querySelector('.awa-modal .close');
const aclose = document.querySelector('.awa-alert .close');
const keep = document.getElementById('keep');
const dis = document.getElementById('discard');

bottom.addEventListener('click', function(e){

  e.preventDefault();

  modal.classList.add('active');
  
});

mclose.addEventListener('click', function(){

    alert.style.display = 'flex';

});

aclose.addEventListener('click', function(){

    alert.style.display = 'none';

});
keep.addEventListener('click', function(){

    alert.style.display = 'none';

});
dis.addEventListener('click', function(){

    alert.style.display = 'none';
    modal.classList.remove('active');

});

modal.addEventListener('click', function(e){

    if( e.target == this){

        modal.classList.remove('active');

    }

});