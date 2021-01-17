


$(function() {
  console.log($('p.id').html());
  console.log($('p.id').text());
  
  let $myQuery = new jQuery('<p id="a">aa</p>', 'p#a');


  console.log($myQuery.html());
});