markdownTodo = (function(){
	var parser = {};
	
	var transformations = [
		{
			expression: /(^\s*\-)(.*)+$/gm,
			replaceWith: "$1 <input type='checkbox' checked>$2</input>"
		},
	
		{
			expression: /(^\s*\+)(.*)+$/gm,
			replaceWith: "$1 <input type='checkbox'>$2</input>"
		}
	]

	
	var converter = new Markdown.Converter();
	
	converter.hooks.chain("preConversion", function (text) {

		for(var i = 0; i < transformations.length; i++){
			var transformation = transformations[i]; 
			text = text.replace(transformation.expression, transformation.replaceWith);
		}

	    return text;
   	});

  	parser.parse = function(markdoneText){
  		return converter.makeHtml(markdoneText); 
  	}

  	parser.transformations = transformations;

	return parser;
})();