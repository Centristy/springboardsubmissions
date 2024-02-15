
let id = 0;
let list = [];


$(function() {

  
    $("#new-movie").on("submit", function(evt) {
      evt.preventDefault();
      let title = $("#title").val();
      let rating = $("#rating").val();
  
      let data = { title, rating, id };
      const HTMLtoAppend = createMovie(data);
  
      id++
      list.push(data);
  
      $("#movie-table-body").append(HTMLtoAppend);
      $("#new-movie").trigger("reset");
    });

    $("tbody").on("click", ".btn.btn-danger", function(evt) {
        // find the index where this movie is
        let removeIndex = list.findIndex(movie => movie.id === +$(evt.target).data("deleteId"))
        
        // remove it from the array of movies
        list.splice(removeIndex, 1)
    
        // remove it from the DOM
        $(evt.target)
          .closest("tr")
          .remove();
        
      });
    
  
});

function createMovie(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.id}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }

