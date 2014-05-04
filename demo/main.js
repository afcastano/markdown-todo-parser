var fileName = "test.txt";
var textbox = document.getElementById('textbox'),
  refresh = document.getElementById('refresh'), 
  input = document.getElementById('file-input');

function initInput() {
  FileReaderJS.setupInput(input, {
    readAsDefault: "Text",
    on: {
      load: function(e, file) {
        loadHtml(e.target.result);
        $("#textbox").val(e.target.result);
        fileName = file.name;
      }
    }
  });
}

function loadHtml(markdown){
  var parsedString = markdownTodo.parse(markdown);
  $("#result").html(parsedString);
}

function refreshHtml(){
  loadHtml(textbox.value);
}

initInput();

refresh.addEventListener('click', function() {
  refreshHtml();
}, false);