'use strict';

console.log('\'Allo \'Allo! Content script');

var text = '';
function getText(e) {
    text = (document.all) ? document.selection.createRange().text : document.getSelection();
    console.log(text);
}

document.onmouseup = getText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
