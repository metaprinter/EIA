var dataRef = new Firebase('https://eia.firebaseio.com/');
var listener = new window.keypress.Listener();
var recording = false;
var keyboardMap = ["","","","CANCEL","","","HELP","","BACK_SPACE","TAB","","","CLEAR","ENTER","RETURN","","SHIFT","CONTROL","ALT","PAUSE","CAPS_LOCK","KANA","EISU","JUNJA","FINAL","HANJA","","ESCAPE","CONVERT","NONCONVERT","ACCEPT","MODECHANGE","SPACE","PAGE_UP","PAGE_DOWN","END","HOME","LEFT","UP","RIGHT","DOWN","SELECT","PRINT","EXECUTE","PRINTSCREEN","INSERT","DELETE","","0","1","2","3","4","5","6","7","8","9","COLON","SEMICOLON","LESS_THAN","EQUALS","GREATER_THAN","QUESTION_MARK","AT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","WIN","","CONTEXT_MENU","","SLEEP","NUMPAD0","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD4","NUMPAD5","NUMPAD6","NUMPAD7","NUMPAD8","NUMPAD9","MULTIPLY","ADD","SEPARATOR","SUBTRACT","DECIMAL","DIVIDE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","","","","","","","","","NUM_LOCK","SCROLL_LOCK","WIN_OEM_FJ_JISHO","WIN_OEM_FJ_MASSHOU","WIN_OEM_FJ_TOUROKU","WIN_OEM_FJ_LOYA","WIN_OEM_FJ_ROYA","","","","","","","","","","CIRCUMFLEX","EXCLAMATION","DOUBLE_QUOTE","HASH","DOLLAR","PERCENT","AMPERSAND","UNDERSCORE","OPEN_PAREN","CLOSE_PAREN","ASTERISK","PLUS","PIPE","HYPHEN_MINUS","OPEN_CURLY_BRACKET","CLOSE_CURLY_BRACKET","TILDE","","","","","VOLUME_MUTE","VOLUME_DOWN","VOLUME_UP","","","SEMICOLON","EQUALS","COMMA","MINUS","PERIOD","SLASH","BACK_QUOTE","","","","","","","","","","","","","","","","","","","","","","","","","","","OPEN_BRACKET","BACK_SLASH","CLOSE_BRACKET","QUOTE","","META","ALTGR","","WIN_ICO_HELP","WIN_ICO_00","","WIN_ICO_CLEAR","","","WIN_OEM_RESET","WIN_OEM_JUMP","WIN_OEM_PA1","WIN_OEM_PA2","WIN_OEM_PA3","WIN_OEM_WSCTRL","WIN_OEM_CUSEL","WIN_OEM_ATTN","WIN_OEM_FINISH","WIN_OEM_COPY","WIN_OEM_AUTO","WIN_OEM_ENLW","WIN_OEM_BACKTAB","ATTN","CRSEL","EXSEL","EREOF","PLAY","ZOOM","","PA1","WIN_OEM_CLEAR",""];
var keystrokes = [];

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

  $('body').bind('keydown', function(e) {
    if (recording) {
        keystrokes.push(keyboardMap[e.keyCode]);
        $("#rkeystrokes").append( " "+keyboardMap[e.keyCode] );
    }
  });

  $("#startRecording").on("click", function(e) {
    console.log("Allo")
    e.preventDefault();

    recording = (recording) ? false : true

  });

	$("#tweetSubmit").on("click", function(e) {
		e.preventDefault();
		var secret = $("#secret");
		var confirm = $("#confirm");
		var cMessage = $("#finalMessage");
		var secretMessage = $("#inputPrivate").val();
		var decryptMessage;

		var url = makeURL();

		var tMessage = "Everything is awesome"

		cMessage.append(tMessage);

		 $('#tweetBtn iframe').remove();
	    // Generate new markup
	    var tweetBtn = $('<a></a>')
	        .addClass('twitter-share-button')
	        .attr('href', 'http://twitter.com/share')
	        .attr('data-url', 'http://test/index.html#'+url)
	        .attr('data-text', tMessage);
	    $('#tweetBtn').append(tweetBtn);
	    twttr.widgets.load();

		secret.css("display", "none");
		confirm.css("display", "block");''

		encryptMessage = UT.encrypt(secretMessage, 54344566);

    console.log("allo", encryptMessage)


		//Remove when we are ready to work with Firebase
		//
		// dataRef.push(
		// {
		// 	url: url,
		// 	message: encryptMessage
		// });

	})

}

init();