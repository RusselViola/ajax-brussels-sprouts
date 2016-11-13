$('#get-dish').on('click', function(event) {
  event.preventDefault();
  //request a new dish and alert the user

  //ajax call
  var request = $.ajax({
    method: "GET",
    url: "/dishes/random.json"
  });
  // request a new dish and alert the user
  //newDish is a placeholder for data from out .json page
  request.done(function(newDish) {
    alert(newDish.dish);
  });
});
