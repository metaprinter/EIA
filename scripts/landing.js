var dataRef = new Firebase('https://eia.firebaseio.com/');

function getThisURL() {
	var popurl;

	popurl = location.href;
	popurl = popurl.split('/');
	popurl = popurl.pop(popurl);

	popurl = popurl.split('#');

	return popurl[1];
}

dataRef.on("value", function(snapshot) {
  console.log(snapshot.val());

  var data =snapshot.val();
  var url = getThisURL();

  for (var key in data) {
   if (data.hasOwnProperty(key)) {
       var obj = data[key];

       if (obj.url === url) {

       	console.log("right")
       } else {
       	console.log("nope")
       }

   }
}


}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});