'use strict';

// 
const LawUrl = '//test/jsp/main/search/searchLaw.jsp';
const HomeUrl = '//test/jsp/main/search/searchHomepage.jsp';
const GtsUrl = '//test/jsp/main/search/searchGts.jsp';

// data : 서버에 전송할 데이터, key/value 형식의 Object
// dataType : 서버가 리턴하는 데이터 타입 (xml, json, script, html)
// type: 서버로 전송하는 데이터의 타입 (POST, GET)
// url: 데이터를 전송할 URL
// success: ajax 통신에 성공했을 때 호출될 이벤트 핸들러

function getData(url)
{
  $.ajax({
    url: url
    , dateType: 'html'
    , type: 'POST'
    , data: {'qt':'문화'}
    , success: function(result)
    {
      if(result!==undefined && result!==null)
      console.log(result.length);
    }
  });
}

getData(LawUrl);

console.log('여기까지');