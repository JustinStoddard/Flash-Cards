let titles = []
let descriptions = []
let index = 0;

const CreateCard = (title, description) => {
  i++;
  titles[index] = title;
  answers[index] = description;
  card = `${title}`
  $('#flashcards').append(`
  <div data-id="${index}">
    <div class="row">
      <div class="col s12 m3">
        <div class="card blue-grey darken-1">
          <div class="card-content">
            <span class="card-title">${card}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a href="#" data-d="${index}" id="show-answer">Show Answer</a>
    </div>
  </div>
  `)
};

$(document).ready( function() {
  $(document).on('submit', '#form1A', function(foo) {
    foo.preventDefault();
    CreateCard((document.getElementById('title').value),(document.getElementById('description').value))
  });
});



