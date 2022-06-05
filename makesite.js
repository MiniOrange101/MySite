var Elements = new Object();//定义元素对象容器
var i = 0;
class ElemObj {
    constructor(id, tag, attribute, style, value) {
        this.tag = tag;
        this.id = id;
        this.attribute = { "border-style": "none", "border-width": "0px" };
        this.style = {};
        for (i in attribute) {
            this.attribute[i] = attribute[i];
        }
        for (i in style) {
            this.style[i] = style[i];
        }
        this.style.cursor = "default";
        this.value = value;
        var ele = document.createElement(tag);
        var node = document.createTextNode(value);
        ele.appendChild(node);
        for (i in this.attribute) {
            ele.setAttribute(i, this.attribute[i]);
        }
        ele.setAttribute("id", this.id);
        for (i in this.style) {
            ele.style[i] = this.style[i];
        }
        this.element = ele;
        this.isHighlighted = 0;
    }
    apply() {
        Elements[this.id] = this;
    }
    refresh() {
        for (i in this.attribute) {
            this.element.setAttribute(i, this.attribute[i]);
        }
        for (i in this.style) {
            this.element.style[i] = this.style[i];
        }
        this.element.id = this.id;
    }
    changeAttribute(qualifiedName, value) {
        this.attribute[qualifiedName] = value;
        this.refresh();
    }
    changeStyle(styleName, value) {
        this.style[styleName] = value;
        this.refresh();
    }
    setHighlight() {
        if (this.isHighlighted) {
            this.element.style["border-style"] = this.attribute["border-style"];
            this.element.style["border-width"] = this.attribute["border-width"];
            this.isHighlighted = 0;
        } else {
            this.element.style["border-style"] = "solid";
            this.element.style["border-width"] = "2px";
            this.isHighlighted = 1;
        }
    }
}

function refresh() {
    for (i in Elements) {
        Elements[i].refresh();
    }
}

function addElement(id, tag, value) {
    if (id == "") {
        document.getElementById("piderr").style.display = "block";
    }
    if (id != "") {
        document.getElementById("piderr").style.display = "none";
        Elements[id] = new ElemObj(id, tag, {}, {}, value);
        document.getElementById("container").appendChild(Elements[id].element);
        $("div#askforpinfo.reveal-modal a.close-reveal-modal").trigger("click");
        document.getElementById("Pid").value = "";
        document.getElementById("Pcontent").value = "";
    } else {
        return 0;
    }
}
