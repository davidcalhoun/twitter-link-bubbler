var twitter = require("ntwitter");

function fromList(args) {
	if(!args) {
		throw new Error("No arguments passed into fromList().");
	}

	//	https://dev.twitter.com/apps/5385711/show
	var twit = new twitter({
		consumer_key: "41eSJKZB7tAKkQBGIaAOpQ",
		consumer_secret: "wYIP4b4UhChFvEntkTebK3pIVPtHlhrq1lxN5QuQ",
		access_token_key: "16521889-FxSWVnIdKX5HUgVXc5PzVe7jNGhdBi0SL8p617EpF",
		access_token_secret: "Qq3drHP1lh8JR87pCRJq7OgZqzDEI0aefpwAqZExEHmFt"
	});

	console.log(typeof twit.showList)

	twit.showList("franksvalli", "frontend", 1000, function(err, data){
		console.log(data.length)
		console.log(data[0].text)

		var links = [];
		var css = [];
		var js = [];
		var html = [];

		for(var i=0, len=data.length; i<len; i++) {
			if(data[i].text.indexOf("http://") != -1) {
				links.push(data[i].text);

				if(data[i].text.indexOf("css") != -1) {
					css.push(data[i].text);
				}

				if(data[i].text.indexOf("javascript") != -1) {
					js.push(data[i].text);
				}

				if(data[i].text.indexOf("html") != -1) {
					html.push(data[i].text);
				}		
			}
		}
		console.log(links.length);
		console.log(links)
	});

	return "foo";
}

exports.twitterBubbler = {
	fromList: fromList
};