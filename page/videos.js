var videoId = getParameterByName('video');
jQuery.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=AIzaSyAA_UsLtqF-c8dPaXc9PAlbBiDKerDmodA&part=snippet,contentDetails,statistics,status', function(data) {
    console.log(data);
    document.getElementById('videoPlayer').src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    document.getElementById('videoTitle').innerHTML = data.items[0].snippet.title;
    document.getElementById('videoDescription').innerHTML = data.items[0].snippet.description;
    document.getElementById('username').innerHTML = data.items[0].snippet.channelTitle;
    document.getElementById('views').innerHTML = ' ' + data.items[0].statistics.viewCount + ' ';
    document.getElementById('likes').innerHTML = ' ' + data.items[0].statistics.likeCount + ' ';
    document.getElementById('dislikes').innerHTML = ' ' + data.items[0].statistics.dislikeCount + ' ';
    document.getElementById('comments').innerHTML = ' ' + data.items[0].statistics.commentCount + ' ';
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}