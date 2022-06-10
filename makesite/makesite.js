var Elements = new Object();//定义元素对象容器
var i = 0;
var j = 0;
var k = 0;

function elementSelected(litem_a) {
    document.getElementById('ElementDropdown').innerHTML = generateElementsList(0)[litem_a.dataset.eletag];
    document.getElementById('elementTag').value = litem_a.dataset.eletag;
}

function generateElementsList(wiz) {
    var TagToData = {};
    var DataToTag = {};
    var ELEOBJS = $("ul#ElementList li a").toArray();
    for (i in ELEOBJS) {
        TagToData[ELEOBJS[i].dataset.eletag] = ELEOBJS[i].innerHTML;
    }
    for (i in ELEOBJS) {
        DataToTag[ELEOBJS[i].innerHTML] = ELEOBJS[i].dataset.eletag;
    }
    return [TagToData, DataToTag][wiz];
}

function searchElement(string) {
    document.getElementById("ElementSearchList").innerHTML = "";
    var Regstr = new RegExp("\\" + string, "i");
    var shownElems = [];
    j = 0;
    var elelist = generateElementsList(0);
    for (i in elelist) {
        if (Regstr.test(i) || Regstr.test(elelist[i])) {
            var e_0 = document.createElement("li");
            var e_1 = document.createElement("a");
            e_1.setAttribute("onclick", "elementSelected(this)");
            e_1.setAttribute("data-eletag", i);
            e_1.appendChild(document.createTextNode(elelist[i]));
            var e_2 = document.createElement("small");
            e_2.appendChild(document.createTextNode(i));
            e_1.appendChild(e_2);
            e_0.appendChild(e_1);
            shownElems[j] = e_0;
            j++;
        }
    }
    for (i in shownElems) {
        document.getElementById("ElementSearchList").appendChild(shownElems[i]);
    }
}
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
    if (id != "") {
        document.getElementById(tag + "iderr").style.display = "none";
        switch (tag) {
            case "p":
                Elements[id] = new ElemObj(id, tag, {}, {}, value);
                break;
            case "img":
                if (value[0] == "") {
                    value[0] = "auto";
                }
                if (value[1] == "") {
                    value[1] = "auto";
                }
                if (value[0] != "" && value[1] != "") {
                    Elements[id] = new ElemObj(id, tag, { src: value[2] }, { width: value[0] + "px", height: value[1] + "px" }, "");
                }
                break;
            case "table":
                Elements[id] = new ElemObj(id, tag, {}, {}, "");
                Elements[id].element.appendChild(constructTable(value));
                break;
            case "list":
                Elements[id] = new ElemObj(id, value[0], {}, {}, "");
                for (i in value.slice(1)) {
                    Elements[id].element.appendChild(document.createElement("li").appendChild(document.createTextNode(value.slice(1)[i])));
                }
                break;
            case "form":
                Elements[id] = new ElemObj(id, tag, {}, {}, "");
                break;
            case "iframe":
                Elements[id] = new ElemObj(id, tag, { src: value[2] }, { width: value[0], height: value[1] }, "");
                break;
            case "script":
                if (value[0]) {
                    Elements[id] = new ElemObj(id, tag, { src: value[1] }, {}, "");
                } else if (!value[0]) {
                    Elements[id] = new ElemObj(id, tag, {}, {}, value[1]);
                } else {
                    return 0;
                }
        }
        document.getElementById("container").appendChild(Elements[id].element);
        $("div#askfor" + tag + "info.reveal-modal a.close-reveal-modal").trigger("click");
        document.getElementById(tag + "id").value = "";
        document.getElementById(tag + "content").value = "";
        makelLi(tag, id);
    } else {
        return 0;
    }
}

function makelLi(tag, id) {
    var shownText;
    var isform = 0;
    switch (tag) {
        case "p":
            shownText = "文本";
            break;
        case "img":
            shownText = "图片";
            break;
        case "table":
            shownText = "表格";
            break;
        case "ol":
            shownText = "有序列表";
            break;
        case "ul":
            shownText = "无序列表";
            break;
        case "form":
            shownText = "表单";
            break;
        case "form input.text":
            shownText = "文本输入框";
            break;
        case "form input.password":
            shownText = "密码输入框";
            break;
        case "form input.submit":
            shownText = "提交按钮";
            break;
        case "form input.other":
            shownText = "获取输入框";
            break;
        case "form other":
            shownText = "表单获取框";
            break;
        case "iframe":
            shownText = "框架";
            break;
        case "script":
            shownText = "JS脚本";
            break;
        default:
            shownText = "其他元素";
            break;
    }
    var e_0 = document.createElement("li");
    var e_1 = document.createElement("a");
    e_1.setAttribute("href", "javascript:ElementSelected(" + id + ");");
    e_1.appendChild(document.createTextNode(shownText));
    var e_2 = document.createElement("strong");
    e_2.appendChild(document.createTextNode(" id=" + id));
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    document.getElementById("ElementsList").appendChild(e_0);
}

function ElementSelected(id) {
    Elements[id].setHighlight();
}

function constructTable(value) {
    var table = document.createElement("tbody");
    for (i in value) {
        var tr = document.createElement("tr");
        for (j in value[i]) {
            tr.appendChild(document.createElement("td").appendChild(document.createTextNode(value[i][j])));
        }
        table.appendChild(tr);
    }
    return table;
}

function constructList(value) {
    var list = document.createElement(value[0]);
    for (i in value.slice(1)) {
        list.appendChild(document.createElement("li").appendChild(document.createTextNode(value.slice(1)[i])));
    }
    return list;
}