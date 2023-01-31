function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/FokOhPK3snSkNp3N/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}