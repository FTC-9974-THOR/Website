function showLatestCommitDate(repo, element) {
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")   
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readystate === 4 && xmlhttp.status === 200) {
            console.log(xmlhttp)
            var json = JSON.parse(xmlhttp.responseText);
            console.log(xmlhttp.responseText)
            console.log(json[0]["commit"]["author"]["date"])
        }
    }
    xmlhttp.open("GET", "https://api.github.com/repos/FTC-9974-THOR/" + repo + "/commits/", false)
    xmlhttp.setRequestHeader("User-Agent", "FTC-9974-THOR-Website")
    xmlhttp.send()
}

$(document).ready(function () {
})