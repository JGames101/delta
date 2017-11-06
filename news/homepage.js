var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var feed = JSON.parse(this.responseText);
        var jsonLength = Object.keys(feed).length;
        var title1 = eval('feed.n' + jsonLength + '.title');
        var body1 = eval('feed.n' + jsonLength + '.body');
        var image1 = eval('feed.n' + jsonLength + '.image');
        var page1 = eval('feed.n' + jsonLength + '.page');
        if ((jsonLength-1) > 0) {
            var title2 = eval('feed.n' + (jsonLength-1) + '.title');
            var body2 = eval('feed.n' + (jsonLength-1) + '.body');
            var image2 = eval('feed.n' + (jsonLength-1) + '.image');
            var page2 = eval('feed.n' + (jsonLength-1) + '.page');
        };
        if ((jsonLength-2) > 0) {
            var title3 = eval('feed.n' + (jsonLength-2) + '.title');
            var body3 = eval('feed.n' + (jsonLength-2) + '.body');
            var image3 = eval('feed.n' + (jsonLength-2) + '.image');
            var page3 = eval('feed.n' + (jsonLength-2) + '.page');
        };
        console.log(title3, body3, image3);
        console.log(title2, body2, image2);
        console.log(title1, body1, image1);
        document.getElementById('codeTitle1').innerHTML = title1;
        document.getElementById('codeBody1').innerHTML = body1;
        if (image1 != 'none') {
            document.getElementById('codeImage1').src = image1;
        };
        if (page1 != 'none') {
            document.getElementById('codeButton1').style.display = 'block';
            document.getElementById('codeButton1').href = page1;
        };
        if (title2 != undefined) {
            document.getElementById('codeCard2').style.display = 'block';
            document.getElementById('codeTitle2').innerHTML = title2;
            document.getElementById('codeBody2').innerHTML = body2;
            if (image2 != 'none') {
                document.getElementById('codeImage2').src = image2;
            };
            if (page2 != 'none') {
                document.getElementById('codeButton2').style.display = 'block';
                document.getElementById('codeButton2').href = page2;
            };
        };
        if (title3 != undefined) {
            document.getElementById('codeCard3').style.display = 'block';
            document.getElementById('codeTitle3').innerHTML = title3;
            document.getElementById('codeBody3').innerHTML = body3;
            if (image3 != 'none') {
                document.getElementById('codeImage3').src = image3;
            };
            if (page3 != 'none') {
                document.getElementById('codeButton3').style.display = 'block';
                document.getElementById('codeButton3').href = page3;
            };
        }
    }
};
xmlhttp.open("GET", "/news/feeds/code.json", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var feed = JSON.parse(this.responseText);
        var jsonLength = Object.keys(feed).length;
        var title1 = eval('feed.n' + jsonLength + '.title');
        var body1 = eval('feed.n' + jsonLength + '.body');
        var image1 = eval('feed.n' + jsonLength + '.image');
        var page1 = eval('feed.n' + jsonLength + '.page');
        if ((jsonLength-1) > 0) {
            var title2 = eval('feed.n' + (jsonLength-1) + '.title');
            var body2 = eval('feed.n' + (jsonLength-1) + '.body');
            var image2 = eval('feed.n' + (jsonLength-1) + '.image');
            var page2 = eval('feed.n' + (jsonLength-1) + '.page');
        };
        if ((jsonLength-2) > 0) {
            var title3 = eval('feed.n' + (jsonLength-2) + '.title');
            var body3 = eval('feed.n' + (jsonLength-2) + '.body');
            var image3 = eval('feed.n' + (jsonLength-2) + '.image');
            var page3 = eval('feed.n' + (jsonLength-2) + '.page');
        };
        console.log(title3, body3, image3);
        console.log(title2, body2, image2);
        console.log(title1, body1, image1);
        document.getElementById('newsTitle1').innerHTML = title1;
        document.getElementById('newsBody1').innerHTML = body1;
        if (image1 != 'none') {
            document.getElementById('newsImage1').src = image1;
        };
        if (page1 != 'none') {
            document.getElementById('newsButton1').style.display = 'block';
            document.getElementById('newsButton1').href = page1;
        };
        if (title2 != undefined) {
            document.getElementById('newsCard2').style.display = 'block';
            document.getElementById('newsTitle2').innerHTML = title2;
            document.getElementById('newsBody2').innerHTML = body2;
            if (image2 != 'none') {
                document.getElementById('newsImage2').src = image2;
            };
            if (page2 != 'none') {
                document.getElementById('newsButton2').style.display = 'block';
                document.getElementById('newsButton2').href = page2;
            };
        };
        if (title3 != undefined) {
            document.getElementById('newsCard3').style.display = 'block';
            document.getElementById('newsTitle3').innerHTML = title3;
            document.getElementById('newsBody3').innerHTML = body3;
            if (image3 != 'none') {
                document.getElementById('newsImage3').src = image3;
            };
            if (page3 != 'none') {
                document.getElementById('newsButton3').style.display = 'block';
                document.getElementById('newsButton3').href = page3;
            };
        }
    }
};
xmlhttp.open("GET", "/news/feeds/news.json", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var feed = JSON.parse(this.responseText);
        var jsonLength = Object.keys(feed).length;
        var title1 = eval('feed.n' + jsonLength + '.title');
        var body1 = eval('feed.n' + jsonLength + '.body');
        var image1 = eval('feed.n' + jsonLength + '.image');
        var page1 = eval('feed.n' + jsonLength + '.page');
        if ((jsonLength-1) > 0) {
            var title2 = eval('feed.n' + (jsonLength-1) + '.title');
            var body2 = eval('feed.n' + (jsonLength-1) + '.body');
            var image2 = eval('feed.n' + (jsonLength-1) + '.image');
            var page2 = eval('feed.n' + (jsonLength-1) + '.page');
        };
        if ((jsonLength-2) > 0) {
            var title3 = eval('feed.n' + (jsonLength-2) + '.title');
            var body3 = eval('feed.n' + (jsonLength-2) + '.body');
            var image3 = eval('feed.n' + (jsonLength-2) + '.image');
            var page3 = eval('feed.n' + (jsonLength-2) + '.page');
        };
        console.log(title3, body3, image3);
        console.log(title2, body2, image2);
        console.log(title1, body1, image1);
        document.getElementById('mediaTitle1').innerHTML = title1;
        document.getElementById('mediaBody1').innerHTML = body1;
        if (image1 != 'none') {
            document.getElementById('mediaImage1').src = image1;
        };
        if (page1 != 'none') {
            document.getElementById('mediaButton1').style.display = 'block';
            document.getElementById('mediaButton1').href = page1;
        };
        if (title2 != undefined) {
            document.getElementById('mediaCard2').style.display = 'block';
            document.getElementById('mediaTitle2').innerHTML = title2;
            document.getElementById('mediaBody2').innerHTML = body2;
            if (image2 != 'none') {
                document.getElementById('mediaImage2').src = image2;
            };
            if (page2 != 'none') {
                document.getElementById('mediaButton2').style.display = 'block';
                document.getElementById('mediaButton2').href = page2;
            };
        };
        if (title3 != undefined) {
            document.getElementById('mediaCard3').style.display = 'block';
            document.getElementById('mediaTitle3').innerHTML = title3;
            document.getElementById('mediaBody3').innerHTML = body3;
            if (image3 != 'none') {
                document.getElementById('mediaImage3').src = image3;
            };
            if (page3 != 'none') {
                document.getElementById('mediaButton3').style.display = 'block';
                document.getElementById('mediaButton3').href = page3;
            };
        }
    }
};
xmlhttp.open("GET", "/news/feeds/media.json", true);
xmlhttp.send();