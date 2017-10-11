function showPersonalInfo(click_item,text,image) {    
    var item = document.getElementById(click_item);
    var name = document.getElementById(text);
    var img = document.getElementById(image);
    /*
    if (item.style.visibility === 'hidden') {
        item.style.visibility = 'visible';
        item.style.display = 'block';
        name.style.color = "#4DBBBA";
        img.src = "dropdown-white.jpg";
    } else {
        item.style.visibility = 'hidden';
        item.style.display = 'none';
        name.style.color = "#999999";
        img.src = "arrowup.jpg";
    }*/



    if (item.title == "hide") {
        item.style.visibility = 'visible';
        item.style.display = 'block';
        name.style.color = "#4DBBBA";
        img.src = "dropdown-white.jpg";
        item.title="";
    } else {
        item.title="hide";
        item.style.visibility = 'hidden';
        item.style.display = 'none';
        name.style.color = "#999999";
        img.src = "arrowup.jpg";
    }

}