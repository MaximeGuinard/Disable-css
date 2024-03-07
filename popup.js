document.addEventListener("DOMContentLoaded", function () {
    var cssButton = document.getElementById("cssButton");
    var refreshButton = document.getElementById("refreshButton");
  
    cssButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            document.querySelectorAll('link[rel="stylesheet"]').forEach(function (link) {
              link.disabled = true;
            });
          }
        });
      });
    });
  
    refreshButton.addEventListener("click", function () {
      chrome.tabs.reload();
    });
  });