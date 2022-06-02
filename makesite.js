var Elements = new Object();
function ElemObj(tag, attribute, text) {
    this.tag = tag;
    this.attribute = attribute;
    this.child = child;
    var ele = document.createElement(tag);
    var i;
    for (i in attribute) {
        ele.setAttribute(i, attribute[i]);
    }
    ele.appendChild(document.createTextNode(text));
    this.element = ele;
}

function init() {

}