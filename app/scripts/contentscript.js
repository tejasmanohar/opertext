var text = '';
function getText(e) {
    text = (document.all) ? document.selection.createRange().text : document.getSelection();
    text = text.anchorNode.nodeValue;

    var resp = confirm('Wanna reverse ' + text + '?');
    if (resp == true) {
      alert(text.split('').reverse().join(''));
    }
}

document.onmouseup = getText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
