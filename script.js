var data = [
  {
    jasilp:
      "<span>About jasilpweb status<br/><br/>jasilp web under construction.</span><br/>Sorry for the inconvinience<br/>we will back soon :)<br/>But you can use my chat bot<br/><br/><span>my name is jasil, you know me?<br/> Y / N</span><br/>"
  }
];

var allElements = document.getElementsByClassName("typing");
for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;

  // type code
  var i = 0,
    isTag,
    text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    if (text === devTypeText) {
      addInteractionListener();
      return;
    }
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    setTimeout(type, 60);
  })();

  function addInteractionListener() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("hidden-input");
    document.body.appendChild(inputElement);

    if ('ontouchstart' in window) {
      // Mobile device
      openKeyboard(inputElement);
    } else {
      // Desktop
      element.addEventListener("click", function () {
        inputElement.focus();
      });
      inputElement.addEventListener("focus", function () {
        openKeyboard(inputElement);
      });
    }
  }

  function openKeyboard(inputElement) {
    inputElement.focus();
    inputElement.addEventListener("keydown", function (event) {
      var key = event.key.toLowerCase();
      if (key === "y" || key === "n") {
        element.innerHTML += key;
      } else if (event.code === "Enter") {
        processInput(inputElement.value);
        inputElement.value = "";
        simulateEnter();
      }
    });
  }

  function processInput(input) {
    if (input === "y") {
      reply(": Thats very good");
    } else if (input === "n") {
      reply(": its okay, you have times to know about me");
    } else {
      reply(": Respond 'Y' or 'N'");
    }
  }

  function reply(message) {
    element.innerHTML += message;
  }

  function simulateEnter() {
    setTimeout(function () {
      element.innerHTML += "<br/>";
    }, 500);
  }
}
