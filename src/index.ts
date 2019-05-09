let myApp = (function() {
  const currencyDenominations: number[] = [5, 10, 20, 50, 100, 200, 500, 2000];

  function addEvents() {
    document.querySelector("#printList").addEventListener("click", () => {
      processUserInput(document.querySelector("#userInput").value);
    });
  }

  let processUserInput = value => {
    var closestMatch = currencyDenominations.reduce(function(prev, curr) {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });

    processHTML(closestMatch);
  };

  let processHTML = value => {
    let updatedIndex = currencyDenominations.indexOf(value),
      range: any = [];

    for (let i = updatedIndex; i < currencyDenominations.length; i++) {
      range.push("<tr><td>" + currencyDenominations[i] + "</td></tr>");
    }

    document.querySelector("#results").innerHTML = range;
  };

  function init() {
    addEvents();
  }

  return {
    init: init
  };
})();

myApp.init();
