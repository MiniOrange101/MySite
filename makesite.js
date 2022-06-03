var Elements = new Object();//定义元素对象容器
function ElemObj(tag, id, attribute, text) {//定义元素对象构造器
    this.id = id;//设置元素id
    this.tag = tag;//设置标签
    this.attribute = attribute;//设置属性对象
    this.highlighted = false;
    var ele = document.createElement(tag);//创建元素
    var i;//定义循环变量
    for (i in attribute) {//遍历属性对象的属性和值
        ele[i] = attribute[i];//设置元素每一项属性的值
    }
    ele.appendChild(document.createTextNode(text));//设置元素的值
    this.element = ele;//设置元素作为对象的属性
    function changeAttribute(name, value) {//定义更改元素属性的方法
        if (name = "style") {//当属性为CSS时
            this.changeStyle(value);//调用更改CSS的方法
        } else {
            this.attribute[name] = value;//设置对象的属性
            this.element[name] = value;//设置元素的属性
        }
    }
    this.changeAttribute = changeAttribute;//设置更改元素的方法
    function changeStyle(style) {//定义更改CSS的方法
        var i;//定义循环变量
        for (i in style) {//遍历样式的属性和值
            this.element.style[i] = style[i];//设置元素的样式
            this.attribute.style[i] = style[i];//设置对象的属性
        }
    }
    this.changeStyle = changeStyle;//设置更改CSS的方法
    function highlight() {//定义高亮方法
        this.element.style["border-style"] = "solid";//设置元素边框样式
        this.element.style["border-width"] = "3px";
        this.highlighted = true;
    }
    this.highlight = highlight;//设置高亮方法
    function unhighlight() {//定义取消高亮方法
        this.element.style["border-style"] = "solid";//设置元素边框样式
        this.element.style["border-width"] = "3px";
        this.highlighted = false;
        this.refresh();//刷新元素
    }
    this.unhighlight = unhighlight;//设置取消高亮方法
    function refresh() {//定义刷新方法
        this.element.id = this.id;//同步id
        var i;//定义循环变量
        for (i in this.attribute) {//遍历对象的属性和值
            this.element[i] = this.attribute[i];//同步属性值
        }
    }
    this.refresh = refresh;//设置刷新元素方法
}

function clicked(id) {//当元素被点击时
    Elements[id].highlight();
}

function refresh() {
    for (i in Elements) {
        Elements[i].refresh();
    }
}
function addElement(id, tag, content) {
    if (id == "") {
        document.getElementById("piderr").style.display = "block";
    }
    if (id != "" && content != "") {
        document.getElementById("piderr").style.display = "none";
        Elements[id] = new ElemObj(tag, id, { "style": "cursor:defult;", "onclick": "setHighlight(this.id)", "id": id }, content);
        document.getElementById("container").appendChild(Elements[id].element);
        document.getElementById("askforpinfo").style.display = "none";
    } else {
        return 0;
    }
}
function setHighlight(id) {
    if (Elements[id].highlighted == true) {
        Elements[id].unhighlight();
    } else if (Elements[id].highlighted == false) {
        Elements[id].highlight();
    } else {
        return 0;
    }
}