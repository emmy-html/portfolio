
    document.getElementById("default").click();

// switch tabs
function openType(evt, project) {
    var i, tabContent, tabLinks;
    // get all elements with class "tabcontent" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // get all elements with class "tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    // show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}

// switch tabs
function openProject(evt, project) {
    var i, tabContent, tabLinks;
    // get all elements with class "tabcontent" and hide them
    tabContent = document.getElementsByClassName("project-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // get all elements with class "tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("project-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    // show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}
