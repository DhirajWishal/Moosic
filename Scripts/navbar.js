let navString = "<div class='logo'>";
navString += "<img src='../Assets/Moosic.png' width='100' height='50' alt='Moosic logo'/>";
navString += "</div>";
navString += "<ul class='linkalign'>";
navString += "<li><a href='MainPage.html'>Home</a></li>";
navString += "<li><a href='Menu.html'>Products</a></li>";
navString += "<li><a href='query.html'>Query</a></li>";
navString += "<li><a href='QuizPage.html'>Quiz</a></li>";
navString += "<li><a href='Gallery.html'>Gallery</a></li>";
navString += "<li><a href='Sitemap.html'>Sitemap</a></li>";
navString += "<li><a href='About.html'>About</a></li>";
navString += "<div class='audioControls'>";
navString += "<img src=\"../Assets/Play.png\" onclick=\"playAudio()\" height='25'>";
navString += "<img src=\"../Assets/Pause.png\" onclick=\"pauseAudio()\" height='25'>";
navString += "</div>";
navString += "</ul>";

document.getElementById('navbar').innerHTML = navString;