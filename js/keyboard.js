$(function(){
	var $show = $('#show'),
		blank = false,
		blank1 = false;
	
	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		// Delete
		if ($this.hasClass('delete')) {
			var html = $show.html();
			
			$show.html(html.substr(0, html.length - 1));
			return false;
		}
		// Special characters
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		

		// Add the character
		$show.html($show.html() + character);
	});
});