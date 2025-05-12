$(function() {
	var $tableRows = $('tr');

	$tableRows.on('mouseover', function(e) {
		var $this = $(this);
		$this.css('background-color', '#2C2D33');
		$this.css('color', '#CCCCCC');
		console.log("mouseover");
	});

	$tableRows.on('mouseout', function(e) {
		var $this = $(this);
		$this.css('background-color', '#CCCCCC');
		$this.css('color', '#000000');
		console.log("mouseout");
	});
});