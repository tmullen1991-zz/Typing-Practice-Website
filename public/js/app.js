$(document).ready(function () {
  var wordList = [];
  var wordArrHTML = [];
  var currentWordNum = 0;
  $.ajax({
    method: "GET",
    url: "/words",
  }).then((data) => {
    wordList = data.sort(() => Math.random() - 0.5);
    wordList.forEach((element, i) => {
      wordList[i] = element.name;
      $("#text-dump").append(
        "<span id='word" + i + ">" + element.name + "</span>"
      );
    });
    wordList.forEach((word, i) => {
      var text = "<span class='px-1' id='word" + i + "'>" + word + "</span> ";
      wordArrHTML.push(text)
      //$("#text-dump").append(text);
    });
  });
 
  //create highlighted word
  $("#user-input").keyup(() => {
    var currentWordStr = wordList[currentWordNum] + " ";
    var id = "#word" + currentWordNum.toString();
    var next = "#word" + (currentWordNum + 1).toString();
    var input = $("#user-input").val();
    var test = currentWordStr.slice(0, input.length);
    console.log($("#text-dump").scrollTop())
    
    if (input.length === currentWordStr.length && input == test) {
      currentWordNum = currentWordNum + 1;
      $(id).attr("class", "highlight-done");
      $(next).attr("class", "highlight-right");
      $("#user-input").val("");
    } else if (input === test) {
      $(".highlight-right").attr("scrollTop")
      $(id).attr("class", "highlight-right");
    } else {
      $(id).attr("class", "highlight-wrong");
    }
  });
});
