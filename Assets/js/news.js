$(function(){
	$('.sidenav').on('click','li',function(){
		var $this = !!$(this).data('target') ? $(this) : $(this).closest('li'),
			target = $this.data('target'),
			isAtive = $this.hasClass('active');

		if(!isAtive){
			$this.closest('.sidenav').find('.active').removeClass('active');
			$this.addClass('active');
		}

		$('.scd_r .news').hide(200);
		$('.scd_r .'+ target).show(200);
	})	
	$('.nav a').on('mouseout',function(){
		$(this).closest('li').removeClass('now');
	})	
})