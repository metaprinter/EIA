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


$("#tweetSubmit").on("click", function(e) {
	e.preventDefault();
	var secret = $("#secret");
	var confirm = $("#confirm");
	var cMessage = $("#finalMessage");
	var secretMessage = $("#inputPrivate").val();
	var decryptMessage;

	var url = makeURL();

	var tMessage = '1Everything is awesome - test/'+url+'"</a>'

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
	confirm.css("display", "block");

	encryptMessage = UT.encrypt(secretMessage, "This is a test");

	decryptMessage = UT.decrypt(encryptMessage, "This is a test");


})