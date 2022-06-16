var Elements = new Object();//定义元素对象容器
var i = 0;
var j = 0;
var k = 0;
var ElementsObj = JSON.parse("{\"h1\":\"一号标题\",\"h2\":\"二号标题\",\"h3\":\"三号标题\",\"h4\":\"四号标题\",\"h5\":\"五号标题\",\"h6\":\"六号标题\",\"p\":\"段落\",\"br\":\"折行\",\"hr\":\"分割线\",\"abbr\":\"缩写\",\"address\":\"地址\",\"b\":\"粗体文本\",\"blockquote\":\"块引用\",\"cite\":\"引用\",\"code\":\"代码\",\"dfn\":\"定义项目\",\"em\":\"强调文本\",\"i\":\"斜体文本\",\"ins\":\"被插入文本\",\"kbd\":\"键盘链接\",\"mark\":\"有记号的文本\",\"meter\":\"度量衡\",\"pre\":\"预格式文本\",\"progress\":\"进度条\",\"q\":\"短引用\",\"s\":\"删除线文本\",\"samp\":\"计算机代码样本\",\"small\":\"小号文本\",\"strong\":\"更强烈的强调文本\",\"sub\":\"上标文本\",\"sup\":\"下标文本\",\"time\":\"时间\",\"u\":\"下划线文本\",\"var\":\"变量文本\",\"wbr\":\"响应式折行\",\"form\":\"表单\",\"input\":\"输入\",\"textarea\":\"文本域\",\"button\":\"按钮\",\"select\":\"下拉列表\",\"option\":\"选项\",\"optgroup\":\"选项集合\",\"label\":\"标注\",\"fieldset\":\"外框\",\"legend\":\"外框标题\",\"datalist\":\"选项列表\",\"output\":\"输出\",\"iframe\":\"内联框架\",\"img\":\"图像\",\"map\":\"图像映射\",\"area\":\"图像映射点击区域\",\"canvas\":\"画布\",\"figure\":\"figure\",\"figcaption\":\"figcaption\",\"audio\":\"音频\",\"source\":\"媒体资源\",\"track\":\"track\",\"video\":\"视频\",\"a\":\"链接\",\"main\":\"主体\",\"nav\":\"导航链接\",\"ol\":\"有序列表\",\"ul\":\"无序列表\",\"li\":\"列表项\",\"dl\":\"定义列表\",\"dt\":\"定义列表项\",\"dd\":\"描述定义列表项\",\"menu\":\"菜单列表\",\"table\":\"表格\",\"captain\":\"表格标题\",\"th\":\"表头\",\"tr\":\"表格行\",\"td\":\"单元格\",\"tbody\":\"表格主体\",\"tfoot\":\"脚注\",\"col\":\"col\",\"colgroup\":\"colgroup\",\"div\":\"块节\",\"span\":\"内联节\",\"header\":\"头部\",\"footer\":\"底部\",\"section\":\"区域\",\"article\":\"文章内容\",\"aside\":\"旁白\",\"details\":\"补充细节\",\"dialog\":\"对话框\",\"summary\":\"summary\",\"script\":\"客户端脚本\",\"noscript\":\"noscript\",\"embed\":\"容器\",\"object\":\"嵌入对象\",\"param\":\"嵌入对象参数\"}");
var ElementAttributes = {};

function loadRevalModal() {
  j = 1;
  for (i in ElementsObj) {
    var e_0 = document.createElement("li");
    var e_1 = document.createElement("a");
    e_1.setAttribute("onclick", "elementSelected(this)");
    e_1.setAttribute("data-eletag", i);
    e_1.appendChild(document.createTextNode(ElementsObj[i]));
    var e_2 = document.createElement("small");
    e_2.appendChild(document.createTextNode(i));
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    if (j > 0 && j <= 9) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-0"));
    } else if (j > 9 && j <= 35) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-1"));
    } else if (j > 35 && j <= 47) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-2"));
    } else if (j == 48) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-3"));
    } else if (j > 48 && j <= 54) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-4"));
    } else if (j > 54 && j <= 58) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-5"));
    } else if (j > 58 && j <= 61) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-6"));
    } else if (j > 61 && j <= 68) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-7"));
    } else if (j > 68 && j <= 77) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-8"));
    } else if (j > 77 && j <= 87) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-9"));
    } else if (j > 87 && j <= 92) {
      document.getElementById("ElementList").insertBefore(e_0, document.getElementById("ul-10"));
    }
    j++;
  }
}

function elementSelected(litem_a) {
  document.getElementById('ElementDropdown').innerHTML = ElementsObj[litem_a.dataset.eletag];
  document.getElementById('elementTag').value = litem_a.dataset.eletag;
}

function appendList() {
  var eleul = document.getElementById("ElementList");
  var e_0 = document.createElement("li");
  var e_1 = document.createElement("h4");
  e_1.appendChild(document.createTextNode("基础"));
  e_0.appendChild(e_1);

}

function searchElement(string) {
  document.getElementById("ElementSearchList").innerHTML = "";
  if (string != "") {
    var Regstr = new RegExp(string, "i");
    var shownElems = [];
    j = 0;
    for (i in ElementsObj) {
      if (Regstr.test(i) || Regstr.test(ElementsObj[i])) {
        var e_0 = document.createElement("li");
        var e_1 = document.createElement("a");
        e_1.setAttribute("onclick", "elementSelected(this)");
        e_1.setAttribute("data-eletag", i);
        e_1.appendChild(document.createTextNode(ElementsObj[i]));
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

function askClearn(p) {
  if (confirm("确定要清楚所有" + (p ? "属性" : "样式") + "吗？操作无法恢复！")) {
    alert("已清除（并没有）");
  }
}

function askAddn(p) {
  var askvalue = p ? "属性" : "样式";
  var AttrName = prompt(askvalue + "名: ");
  if (AttrName) {
    var AttrValue = prompt(askvalue + "值: ");
    if (AttrValue) {
      var e_0 = document.createElement("div");
      e_0.setAttribute("data-alert", "");
      e_0.setAttribute("class", "alert-box info radius");
      var e_1 = document.createElement("strong");
      e_1.appendChild(document.createTextNode(askvalue + ":"));
      e_0.appendChild(e_1);
      e_0.appendChild(document.createTextNode(askvalue + "名:"));
      var e_2 = document.createElement("a");
      e_2.setAttribute("style", "color: black;");
      e_2.setAttribute("onclick", "changeValue(this)");
      var e_3 = document.createElement("em");
      e_3.appendChild(document.createTextNode(AttrName));
      e_2.appendChild(e_3);
      var e_4 = document.createElement("i");
      e_4.setAttribute("class", "fi-pencil");
      e_2.appendChild(e_4);
      e_0.appendChild(e_2);
      e_0.appendChild(document.createTextNode(";" + askvalue + "值:"));
      var e_5 = document.createElement("a");
      e_5.setAttribute("style", "color: black;");
      e_5.setAttribute("onclick", "changeValue(this)");
      var e_6 = document.createElement("em");
      e_6.appendChild(document.createTextNode(AttrValue));
      e_5.appendChild(e_6);
      var e_7 = document.createElement("i");
      e_7.setAttribute("class", "fi-pencil");
      e_5.appendChild(e_7);
      e_0.appendChild(e_5);
      var e_8 = document.createElement("a");
      e_8.setAttribute("class", "close");
      var e_9 = document.createElement("i");
      e_9.setAttribute("class", "fa fa-trash");
      e_8.appendChild(e_9);
      e_0.appendChild(e_8);
      e_0.setAttribute("data-" + (p ? "attr" : "style") + "name", AttrName);
      e_0.setAttribute("data-" + (p ? "attr" : "style") + "value", AttrValue);
      document.getElementById(p ? "attributes" : "styles").appendChild(e_0);
    }
  }
}

function changeValue(Element) {
  Element.innerHTML = "<em>" + prompt("更改为: ") + "</em>" + "<i class=\"fi-pencil\"></i>";
}