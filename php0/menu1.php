<html>
<head>
	<title>Menu</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="menu1style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>
<body>
	<div class="mobile-menu" id="mobile-menu"> 
		Menu <img src="menuicon.png">
	</div>
	<nav>
		<ul>
			<li><a href="#">Inicio</a></li>
			<li><a href="#">Formulario</a></li>
			<li><a href="#">Ayuda</a></li>
			<li><a href="#">Contacto</a></li>
			<li><a href="#">Redes</a></li>
		</ul>
	</nav>
	<script type="text/javascript">
	$(function() {
        var pull = $('#mobile-menu');
        menu = $('nav ul');
        menuHeight = menu.height();
        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });
	</script>
</body>
</html>