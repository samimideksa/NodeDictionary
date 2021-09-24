$(function() {
    // Handler for .ready() called.
    $("#button").on('click', function() {
        var bla = $('#txt_name').val();
        $.ajax({
            "url": `http://localhost:3000/?word=${bla}`, "type": "GET", 
            "success": function(data){
                $('#msg').html('');
                for(var i = 0; i < data.length; i++){
                    $('#msg').append(`<p> ${i + 1} . ${data[i].wordtype} ${data[i].definition}</p>`);
                }
            }, "error": function(err){
                console.log(err);
            }
            });
         });
  });