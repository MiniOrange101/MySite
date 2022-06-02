document.write("<link rel='stylesheet' type='text\/css' media='screen' href='styles.css'>");
//样式表
document.write("<link rel=\"stylesheet\" href=\"http:\/\/cdn.static.runoob.com\/libs\/foundation\/5.5.3\/css\/foundation.min.css\">");
document.write("<script src=\"http:\/\/cdn.static.runoob.com\/libs\/jquery\/2.1.1\/jquery.min.js\"><\/script>");
document.write("<script src=\"http:\/\/cdn.static.runoob.com\/libs\/foundation\/5.5.3\/js\/foundation.min.js\"><\/script>");
document.write("<script src=\"http:\/\/cdn.static.runoob.com\/libs\/foundation\/5.5.3\/js\/vendor\/modernizr.js\"><\/script>");
document.write("<link rel=\"stylesheet\" href=\"https:\/\/cdn.staticfile.org\/font-awesome\/4.7.0\/css\/font-awesome.css\">");
//foundation
document.write("<link rel=\"stylesheet\" href=\"http:\/\/static.runoob.com\/assets\/foundation-icons\/foundation-icons.css\">");
//图标

function DebugHtmlCode(srccode, targetdiv) {
    targetdiv.innerHTML = srccode;
}//For makesite.html

function AddElem(TagName, ElemID) {
    document.getElementById(ElemID)
}
