// document ready function 
// onclick css strike through
// onclick remove
// click function append 
// capture value of text input

$(document).ready(function(){
	$('#js-shopping-list-form').submit(function(event){
	$('.shopping-list').append(
		'<li>'+ 
	 '<span class="shopping-item">'+$('#shopping-list-entry').val() +'</span>'
	 +'<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' 
	 +' <span class="button-label">delete</span>' +'<span class="button-label">check</span>'
	);	
$()
$('.shopping-list').on("click","shopping-item-delete", function(event){
	$(this).closest("li").remove();

});

  $('li').click(function(event) {
    this.remove();