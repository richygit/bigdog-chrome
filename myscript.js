$(function() {
  console.log("loaded extension!");
  var url = $('.content__article-body.from-content-api.js-article__body figure a').attr('href');
  var iconUrl = chrome.extension.getURL("/link-new-tab.png");
  var btn = $('<div id="bigdog" style="position:absolute;top:0;right:0;cursor:pointer"><img style="width:100px;opacity:0.5" src="' + iconUrl + '" /></div>');
  var comic = $('.content__article-body');
  comic.append(btn);
  btn.click(function() {
    console.log("url", url);
    window.open(url, '_blank');
  });
});
