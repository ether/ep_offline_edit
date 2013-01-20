<script type="text/javascript">

function updateDiffView(){
  // get text HTML of latest revision
  var latestUrl =  document.location.href.replace("/timeslider?","/export/txt");
  latestUrl =  latestUrl.replace("/timeslider","/export/txt");
  var endUrl = $('#exportplaina').attr('href'); // the URL on focus
  var latestContents = "";
  var targetContents = "";

  if(latestContents == ""){
    $.get(latestUrl, function(data) {
      latestContents = data;
    });
  }

  $.get(endUrl, function(targetContents){
    if(latestContents != targetContents){
      diffUsingJS(latestContents, targetContents);
    }else{
      $("#timesliderDiffOutput").html("Contents has not changed, move the slider and try again");
    }
  });

  return false;
}


function diffUsingJS (latestContents, targetContents) {
  var base = difflib.stringAsLines(latestContents);
  var newtxt = difflib.stringAsLines(targetContents);

  var sm = new difflib.SequenceMatcher(base, newtxt);
  var opcodes = sm.get_opcodes();
  var diffoutputdiv = $("#timesliderDiffOutput");
  diffoutputdiv.html(""); // blank the value
  while (diffoutputdiv.firstChild) diffoutputdiv.removeChild(diffoutputdiv.firstChild);
  var contextSize = null;
  contextSize = contextSize ? contextSize : null;

  diffoutputdiv.append(diffview.buildView({ baseTextLines:base,
    newTextLines:newtxt,
    opcodes:opcodes,
    baseTextName:"Base Text",
    newTextName:"New Text",
    contextSize:contextSize,
    viewType: $("inline").checked ? 1 : 0 
  })
  );

//  window.location = url + "#diff";
}

</script>
