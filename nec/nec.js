/*------------------------------------------------------------
 * (주) 레피아컴 검색 
 * common  : 비동기 방식 지원
 * release : 2021.01.07
 *------------------------------------------------------------*/
'use strict';

let ExecTime = new Date();
let StartTime = new Date();
let EndTime = new Date();

const GTS_URL = 'http://127.0.0.1:8080/test/jsp/main/search/searchGts.jsp';
const LAW_URL = 'http://127.0.0.1:8080/test/jsp/main/search/searchLaw.jsp';
const HOMEPAGE_URL = 'http://127.0.0.1:8080/test/jsp/main/search/searchHomepage.jsp';

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
				// console.log(result);
		}
		, error: function()
		{
			
		}
		, complete: function()
		{
			const curTime=new Date();
			if( (curTime.getTime() - EndTime.getTime())>0)
				EndTime = curTime;

			let execTime = (curTime.getTime() - StartTime.getTime());
			
			ExecTime = (EndTime.getTime() - StartTime.getTime());
			console.log(url, execTime, ExecTime);
		}
	});
}

// 선거법규포털
function getGtsData()
{
	getData(GTS_URL);
	$('dl.sr_category dd ul.total').append('<li class=\"first\"><a href=\"#Result_99\">선거법규포털<span>(696)</span></a></li>');
	// viewEle('eleQna');
}

// 위원회홈페이지
function getHomepageData()
{
	getData(HOMEPAGE_URL);
	$('dl.sr_category dd ul.total').append('<li class=\"first\"><a href=\"#Result_98\">국가법령정보<span>(37,543)</span></a></li>');
	// viewHp('hpNews');
}

// 국가법령정보
function getLawData()
{
	getData(LAW_URL);
	$('dl.sr_category dd ul.total').append('<li class=\"first\"><a href=\"#Result_98\">국가법령정보<span>(37,543)</span></a></li>');
	// viewLaw('lawLaw');
}

function getAllApiData()
{
	return Promise.all([getGtsData(), getLawData(), getHomepageData()])
	.then(console.log(''));
}

$(function() {
	StartTime = new Date();
	// getLawData();
	
	// getGtsData();
	
	// getHomepageData();
	
	getAllApiData();
	
});

