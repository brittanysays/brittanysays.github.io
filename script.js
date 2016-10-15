/*$(document).ready( function() {
    $( "#pose-ul" ).sortable();
    $( "#pose-ul" ).draggable();
    $( "#pose-ul" ).droppable();
    $( "#pose-ul" ).disableSelection();
  });

$(document).ready( function() {
    $( "#sequence-ul" ).sortable();
    $( "#sequence-ul" ).draggable();
    $( "#sequence-ul" ).droppable();
    $( "#sequence-ul" ).disableSelection();
  });
  */

/*
 $( function() {
    $( ".pose-li" ).draggable();
    $( ".pose-li" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .find( "#sequence-create" );
      }
    });
  } );
  */

/*
$(function() {
    $(".poseicon").draggable({ 
        revert: 'invalid', 
        scroll: false,
        containment: '#pose-ul',
        helper: 'clone',
        start : function() {
        this.style.display="none";
        },
        stop: function() {
        this.style.display="";
        }
    });
    $(".poseicon").droppable({
        accept: '.poseicon',
        activeClass: '.poseicon',
        drop: function(event, ui) {
            .appendTo("#sequence-create");
        }
    });
}); 
*/

$(document).ready(function(){
    
    $(".pose-li").click(function(e) {
        $("#sequence-ul").append($(this).clone());
    });
    $("#sequence-ul").sortable();
    
    $("#search-button").click(function() {
         $('.pose-li').not('.beginner').hide();           
    });
});