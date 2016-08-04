$(function() {
  console.log("loaded extension!");
  $(function() {
    var url = $('.content__article-body.from-content-api.js-article__body figure a').attr('href')
    console.log("url", url);
    window.open(url, '_blank');
  });
});
