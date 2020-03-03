console.log('Chrome extension go?');
let filenames = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg'
];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  let pic = document.getElementsByTagName('*');
  
  for (imgElt of pic) {
  
    let file = 'Dog/' + filenames[Number(message.txt)];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    imgElt.srcset = url;
    imgElt.href = url;
  }
}