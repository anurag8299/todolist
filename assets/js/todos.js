/**
  * @file All the functions for the to do list
  * @author Nicole Li [<nicolehcli@gmail.com>]
**/

// Feature r10: Check Off Specific Todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");

  // TEST alert("You've clicked an LI item");
  // Version 1: $(this).css("color", "gray");
  // Version 1: $(this).css("text-decoration", "line-through");
  // Version 2: $(this).css({
  //   color: "gray";
  //   textDecoration: "line-through"; // NOTE: js object names with hyphen is not allowed
  // });
  // Version 3: Moved to CSS in a "completed" class
});

// Feature r7: Click on X to delete the item after it
// NOTE: to fadeout() or remove() the <li> the span is within, not the span
$("ul").on("click", "span", function(event){
  // XXX fadeOut does not remove <li> element for our delete feature
  // XXX fadeOut().remove() will remove before fadeOut finishes
  // Solution: so use callback
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });

  // XXX FIXED to prevent event bubbling to any parents of span
  // clicking span will not affect any of its li, ul, body parents
  event.stopPropagation();
});

// Feature r4 input item adds to <li> list and then clear input
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabbing new todo text from input
    var todoNew =   $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoNew + "</li>");
  }
});

// Feature r1 the Plus icon will toggle input field
/* This plus icon will toggle input field*/
$(".fa-plus").click(function(){
  $("input").slideToggle();
});
