
function openWin() {
	
    var URL = "<%=request.getContextPath%>/common/PopUp.jsp";

    window.open(URL,"��������","toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=560,height=320");

}


function openWin(url) {

    var cWin ;

    cWin = window.open(url,"��������","toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=560,height=320");

    cWin.focus();
	
}

function openWin(url, param, title) {

    var cWin ;

    cWin = window.open(url + param, title,"toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=560,height=320");

    cWin.focus();
	
}
/*
 * ��ǰ �� ��ȸ �˾�â ȣ��.
 */
function openProductDetailShowWin(url, param, title) {
	var pWin;
	
	pWin = window.open(url + param, title,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=800,height=600");
	
	pWin.focus();
}
