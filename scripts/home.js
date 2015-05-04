var dataRef = new Firebase('https://eia.firebaseio.com/');

//http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
function makeURL() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function init() {

	window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

	$("#tweetSubmit").on("click", function(e) {
		e.preventDefault();
		var secret = $("#secret");
		var confirm = $("#confirm");
		var cMessage = $("#finalMessage");
		var secretMessage = $("#inputPrivate").val();
		var decryptMessage;

		var url = makeURL();

		var tMessage = "Everything is awesome - test/index.html#"+url

		cMessage.append(tMessage);

		 $('#tweetBtn iframe').remove();
	    // Generate new markup
	    var tweetBtn = $('<a></a>')
	        .addClass('twitter-share-button')
	        .attr('href', 'http://twitter.com/share')
	        .attr('data-text', tMessage);
	    $('#tweetBtn').append(tweetBtn);
	    twttr.widgets.load();

		secret.css("display", "none");
		confirm.css("display", "block");''

		encryptMessage = UT.encrypt(secretMessage, "This is a test");

		dataRef.push(
		{
			url: url,
			message: encryptMessage
		});

	})

}

init();