if (getParameterByName('article') != undefined) {
    openArticle(getParameterByName('article'));
}

function openArticle(articleURL) {
    document.getElementById('newsStoryContainer').className = 'open';
    document.getElementById('shadePage').className = 'open';
    window.history.pushState("CLOSE ARTICLE", "James M News", "?article=" + articleURL);
    window.history.pushState("ARTICLE", "James M News", "?article=" + articleURL);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        var json = JSON.parse(this.responseText);
        document.getElementById('newsStoryTitle').innerHTML = json.title;
        document.getElementById('newsStorySubtitle').innerHTML = json.subtitle;
        document.getElementById('newsStoryContent').innerHTML = json.body;
    };
    xmlhttp.open("GET", articleURL + '.json', true);
    xmlhttp.send();
};
function closeArticle() {
    history.back();
    history.back();
    document.getElementById('newsStoryContainer').className = 'closed';
    document.getElementById('shadePage').className = 'closed';
    setTimeout(function () {
        document.getElementById('newsStoryTitle').innerHTML = 'Loading...';
        document.getElementById('newsStorySubtitle').innerHTML = 'Loading...';
        document.getElementById('newsStoryContent').innerHTML = 'Loading...';
    }, 500);
};
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
document.querySelector('#saveButton').addEventListener('click', function(event) {
    event.preventDefault();
    var id = this.dataset.articleId;
    var articleURL = getParameterByName('article') + '.json';
    console.log(articleURL);
    caches.open('jmArticles').then(function(cache) {
        fetch(articleURL).then(function(response) {
        return response.json();
        }).then(function(urls) {
            cache.add(articleURL).then(function() {
                console.log('article ' + articleURL + ' cached');
            });
        });
    });
});

function updateNewsPage() {
    caches.open('jm023').then(function(cache) {
        cache.delete('page/News.html').then(function(response) {
            location.reload();
            console.log('Newsfeed has been refreshed');
        });
    })
};