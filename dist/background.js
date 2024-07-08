chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.color) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: (color) => {
                    const resultElement = document.querySelector('#color-result');
                    if (resultElement) {
                        resultElement.textContent = `Selected color: ${color}`;
                    }
                },
                args: [message.color]
            });
        });
    }
});
// background.js

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ tasks: [] }, () => {
      console.log('Tasks initialized');
    });
  });
  