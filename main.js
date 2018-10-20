//**
//attendance sheet //
//
// st name //
// student name store //
//*click button to see names//
var studentList = [];
//enter student name
$('#add').on("click",function(e){
//prev def brow
e.preventDefault()
//get vavlue
if( $("#input").val() !== ''){
var studentName = $("#input").val()
$("#input").val('')
//store vavlues
studentList.push(studentName);
}else{
  alert('Enter a value')
}

});

//clear input user can enter another value
$('#clear').on('click', function(){
$('li').remove();
});
//add jquery..compress version// add script tag
//teacher can click a button to see names 2 arguments
$("#student").on("click",function(){
//take names from list an append them to dom//
studentList.forEach(function(el){
$("ul").append("<li>"+el+"</li>")
});
studentList = []
});
$(window).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault()
      //get vavlue
      if( $("#input").val() !== ''){
      var studentName = $("#input").val()
      $("#input").val('')
      //store vavlues
      studentList.push(studentName);
      }else{
        alert('Enter a value')
      }
    }
});
