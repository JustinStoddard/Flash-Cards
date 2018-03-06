let showForm = false

function toggleForm() {
  showForm = !showForm
  $('#form1A').toggle();
}

$(document).ready(function(){
  $('#toggle1').on('click', function() {
    toggleForm()
  });
});

$(document).on('submit', '#form1A', function() {
  
})



