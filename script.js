function MenuClicked(id) {
    var eleas = document.getElementsByTagName('a');
    for (var i = 0; i < eleas.length; i++) {
        eleas[i].setAttribute("class", "");
    }
    document.getElementById(id).setAttribute('class', 'active');
}