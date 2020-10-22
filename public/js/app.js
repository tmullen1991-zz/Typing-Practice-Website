$(document).ready(function () {
  var wordList = [];
  var time = -1;
  var currentId = 0;
  var count = 0;
  var right = 0;
  var wrong = 0;
  var load = function (x, y) {
    for (i = x; i < y; i++) {
      $("#text-dump").append(wordList[i]);
    }
  };
  $.ajax({
    method: "GET",
    url: "/words",
  }).then((data) => {
    wordList = data.sort(() => Math.random() - 0.5);
    wordList.forEach((element, i) => {
      wordList[i] =
        "<span class='px-1 py-2' id='word" +
        i +
        "'>" +
        element.name +
        " </span> ";
    });
    load(0, 10);
  });

  //create highlighted word
  $("#user-input").keyup((key) => {
    if (time === -1) {
      time += 1;
      setInterval(() => {
        time += 1;
        var number = time;
        if (number.toString().length === 1) {
          number = ("0" + number).slice(-2);
        }
        $("#timer").html(number);
      }, 1000);
    }
    var id = "#word" + currentId.toString();
    var currentWord = $(id).text();
    var userInput = $("#user-input").val();
    if (userInput.length === currentWord.length && userInput == currentWord) {
      currentId += 1;
      count += 1;
      right += 1;
      $("#number-count").text(right);
      var next = "#word" + currentId.toString();
      $(id).attr("class", "highlight-done");
      $(next).attr("class", "highlight-right");
      $("#user-input").val("");
      if (count === 5) {
        $(".highlight-done").remove();
        load(currentId + 5, currentId + 10);
        count = 0;
      }
    } else if (userInput === currentWord.slice(0, userInput.length)) {
      $(id).attr("class", "highlight-right");
    } else {
      if (key.code !== "Backspace") {
        wrong += 1;
        $(id).attr("class", "highlight-wrong");
      }

      $("#number-wrong").text(wrong);
    }
  });
});
