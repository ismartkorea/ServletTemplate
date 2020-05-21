/////////////////////////////////////////////////////////////////
//////    GENERAL VALIDATION  CHECK  RETURN MESSAGE /////////////
/////////////////////////////////////////////////////////////////
/*--------------------------------------------------
  ���   : Cookie Setting
  INPUT  : name, value
           expireFg : 'Y' : 2020�� ���� ��Ű����
           expireFg : 'N' : session�� �������� ��Ű����
  RETURN : NONE
----------------------------------------------------*/
function setCookie( name, value, expireFg ) {
    var expireDate = new Date ( 2020, 1, 1, 1, 1, 1 ) ;

    if ( expireFg = 'Y' )
        document.cookie = name + "=" + value + "; expires=" + expireDate.toGMTString();
    else
        document.cookie = name + "=" + value + ";" ;

}
/*--------------------------------------------------
  ���   : Cookie Get
  INPUT  : name
  RETURN : ��Ű��( ������ "" )
----------------------------------------------------*/
function getCookie( name ) {
    var cookieFound = false ;
    var start = 0 ;
    var end   = 0 ;
    var cookieString = document.cookie;

    var i = 0 ;

    // name�� �ش�Ǵ� cookie�� ã�´�.
    while ( i <= cookieString.length ) {
        start = i ;
        end = start + name.length ;
        if ( cookieString.substring( start, end ) == name ) {
            cookieFound = true ;
            break ;
        }
        i++ ;
    }

    // cookie�� ã������ �ش��ϴ� ���� �׷��� ������ ""�� return ;
    if ( cookieFound ) {
        start = end + 1 ;
        end   = document.cookie.indexOf(";",start) ;
        if ( end < start )
            end = document.cookie.length ;
        return document.cookie.substring( start, end ) ;
    }

    return "" ;
}

/*-----------------------------------------------
 ' ->���ڸ� �������� ���� ������ �߻��ϹǷ� `�� ��ġ
 INPUT  : str
 RETURN : ���ڿ����� ������ ' ���ڸ� ` �� ������ ���ڿ�
-------------------------------------------------*/
function jsChangeComma( str ){
 while( str.indexOf("'") != -1 ){ 
  str = str.replace("'","`");
 }
   return str;
}

/*----------------------------------------------------------
  ���   : Split Code RETURN Splited code by varSplitChar
  INPUT  : varString ����
     : varSplitChar ������
   : varIndex �������� ��ġ
  RETURN : Splited code by varSplitChar
  ��     : jsSplitCode( "111^222^333", "^", 2 ) == "222"
-----------------------------------------------------------*/
function jsSplitCode(varString, varSplitChar, varIndex) {
 var varArray = varString.split(varSplitChar) ;

 return varArray[eval(varIndex)-1];
}

/*--------------------------------------------------
  ���   : Check Null RETURN T/F
  INPUT  : check  data
  RETURN : true  -> NULL
           false -> NOT NULL
----------------------------------------------------*/
function jsCheckNull( toCheck )
{
     var chkstr = toCheck + "";
     var is_Space = true ;

     if ( ( chkstr == "") || ( chkstr == null ) )
    return( true );

     for (var j = 0 ; is_Space && ( j < chkstr.length ) ; j++)
     {
      if( chkstr.substring( j , j+1 ) != " " )
         {
        is_Space = false ;
         }
     }
     return ( is_Space );
}

/*--------------------------------------------------
  ���   : Check IP address RETURN T/F
  INPUT  : toCheck  -> check data
  RETURN : true  -> IP address
           false -> not IP address
----------------------------------------------------*/
function jsCheckIp(toCheck) {
     //var chkstr = toCheck+"" ;
     var isIp = true ;

     if ( jsCheckNull(toCheck) )
          return false;

     for (var j = 0 ; isIp && (j < toCheck.length) ; j++) {
          if ((toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9")) {
              if ( toCheck.substring(j,j+1) == "." ) {
                  if ( j == 0 ) {
                      isIp = false ;
                  } else {
                	  isIp = false ;
                  };
              };
          };
     }

     return isIp;
}

/*--------------------------------------------------
  ���   : Check Number RETURN T/F ( �Ҽ���"."�� Number�� ��޾��� )
  INPUT  : toCheck  -> check data
  RETURN : true  -> number ( "."�� ���Ծȵ� )
           false -> not number
----------------------------------------------------*/
function jsCheckNumber(toCheck)
{
     var chkstr = toCheck+"" ;
     var isNum = true ;

     if ( jsCheckNull(toCheck) )
          return false;

     for (var j = 0 ; isNum && (j < toCheck.length) ; j++)
     {
          if ((toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9"))
          {
             if ( toCheck.substring(j,j+1) == "-" || toCheck.substring(j,j+1) == "+")
             {
                if ( j != 0 )
                {
                   isNum = false;
                }
             }
             else
       isNum = false;
     }
     }

     if (chkstr == "+" || chkstr == "-") isNum = false;

     return isNum;
}

/*--------------------------------------------------
  ���   : Check data RETURN T/F
  INPUT  : toCheck  -> check data
           checkOK  -> ������ �ȵǴ� data
  RETURN : false -> ������ �ȵǴ� data�� ����
           true  -> ������ �ȵǴ� data�� �ִ�.
  ��1    : jsStrCheck( '12345', 'ABab' )
           string '12345'���� 'ABab'�� �����Ƿ�
           false�� ����
  ��2    : jsStrCheck( '12$45', 'ABab$#%' )
           string '12$45'���� '$'�� �����Ƿ�
           true�� ����
----------------------------------------------------*/
function jsStrCheck(checkStr, checkOK) {
    for (var i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (var j = 0; j < checkOK.length; j++)
        if (ch == checkOK.charAt(j))
           break;
        if (j == checkOK.length) {
                return false;
                break;
        }
    }
    return true;
}

/*--------------------------------------------------
  ���   : Check Float RETURN T/F (������ Float�� ���)
  INPUT  : toCheck  -> check data
  RETURN : true  -> number
           false -> not number
----------------------------------------------------*/
function jsCheckFloat(toCheck)
{
     //var chkstr = toCheck+"" ;
     var isFloat = true;

     var chkPoint = false;
     var chkMinus = false;

     if ( jsCheckNull(toCheck) )
     {
           return false;
     }

     for (var j = 0 ; isFloat && (j < toCheck.length); j++)
     {
         if ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9"))
         {

            if ( toCheck.substring(j,j+1) == "." )
            {
               if ( !chkPoint ) chkPoint = true ;
               else  isFloat = false ;
            }
            else if ( toCheck.substring(j,j+1) == "-" || toCheck.substring(j,j+1) == "+")
            {
               if ( ( j == 0 ) && ( !chkMinus ) ) chkMinus = true ;
               else isFloat = false;
            }
            else isFloat = false;
        }
    }

    return isFloat;
}

/*--------------------------------------------------
  ���   : �ڸ��� check RETURN T/F
  INPUT  : toCheck  -> check data
  RETURN : true  -> number
           false -> not number
----------------------------------------------------*/
function jsCheckPoint( toCheck , Positive , Negative )
{
     var strPos = toCheck + "" ;
     var isPoint = true ;

     if ( jsCheckFloat ( toCheck ) )
     {

         var inx = strPos.indexOf(".") ;

         if ( inx == -1 )
         {
              if ( strPos.length > parseInt(Positive) )
                 isPoint = false ;
              else
                 isPoint = true ;
          }
          else
          {
               var pos = strPos.substring( 0, inx ) ;
               var nev = strPos.substring(inx + 1) ;

               if ( pos.length > parseInt(Positive) )
                     isPoint = false ;
               else if ( nev.length > parseInt(Negative) )
                     isPoint = false ;
               else
                     isPoint = true ;
          }
      }
      else if ( jsCheckNumber (toCheck) )
            isPoint = true  ;
      else
            isPoint = false ;

      return isPoint ;

}

////////////////////////////////////////////////////////////////n
////////////    DATE  VALIDATION  CHECK    //////////////////////
/////////////////////////////////////////////////////////////////

/*--------------------------------------------------
  ���   : calender���� ����� ���� �迭�� �����.
  INPUT  : �� ������ ��
----------------------------------------------------*/
function jsMonthArray(m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11)
{
      this[0] = m0;
      this[1] = m1;
      this[2] = m2;
      this[3] = m3;
      this[4] = m4;
      this[5] = m5;
      this[6] = m6;
      this[7] = m7;
      this[8] = m8;
      this[9] = m9;
      this[10] = m10;
      this[11] = m11;
}


/*--------------------------------------------------
  ���   : �⵵�� check�Ѵ�.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/

function jsCheckYYYY(toCheck)
{
   return ( ( toCheck.length == 4) && ( jsCheckNumber(toCheck)  ) && ( toCheck != "0000") );
}

/*--------------------------------------------------
  ���   : ����� check�Ѵ�.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/

function jsCheckYYYYMM(toCheck)
{
     var isDate  = true ;

     if ( toCheck.length != 6 )
     {
          isDate = false ;
     }
     else
     {

           var yy = toCheck.substring(0,4) +"" ;
           var mm = toCheck.substring(4,6) +"" ;

           if ( !jsCheckYYYY(yy) )
              isDate = false ;
           else if ( !jsCheckMM(mm) )
              isDate = false ;
     }

     return isDate ;
}

/*--------------------------------------------------
  ���   : ���� check�Ѵ�.
  INPUT  : toCheck
  RETURN :
    MSG  :
----------------------------------------------------*/
function jsCheckMM(toCheck)
{
      return ((toCheck.length > 0) && (jsCheckNumber(toCheck)) && (0< eval(toCheck)) && (eval(toCheck) < 13));
}

/*--------------------------------------------------
  ���   : ���� check�Ѵ�.
  INPUT  : toCheck
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckDD(yyyy,mm,toCheck)
{
      var isYMD  = false;
      var monthDD= new jsMonthArray(31,28,31,30,31,30,31,31,30,31,30,31);
      var im     = eval(mm) - 1;
      if ( toCheck.length == 0 )  return false;
      if ( !jsCheckNumber(toCheck)  )  return false;
      var dd     = eval(toCheck);
      if ( ( (yyyy%4 == 0) && (yyyy%100 != 0) ) || (yyyy%400 == 0) )
      {
           monthDD[1] = 29;
      }
      if ( (0 < dd) && (dd <= monthDD[im]) ) isYMD = true;
           return isYMD;
}

/*--------------------------------------------------
  ���   : ��¥�� check�Ѵ�.
  INPUT  : dateval '20030321'
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckDate( dateVal)
{

     var isDate  = true ;

     if ( dateVal.length != 8 )  {
          isDate = false ;
     } else {

           var yy = dateVal.substring(0,4) +"" ;
           var mm = dateVal.substring(4,6) +"" ;
           var dd = dateVal.substring(6,8) +"" ;

           if ( !jsCheckYYYY(yy) )
              isDate = false ;
           else if ( !jsCheckMM(mm) )
              isDate = false ;
           else if ( !jsCheckDD (yy,mm,dd) )
              isDate = false ;
     }

     return isDate ;

}

/*--------------------------------------------------
  ���   : ��¥�� ����� ���Ѵ�.
  INPUT  : startDt(YYYYMMDD), year
  RETURN : rtnValue : ��¥�� ����� ���� ��¥
           -1       : ERROR..!
           ��) 20000110 + 1�� = 20010110
           ��) 20000229 + 1�� = 20010228
     MSG :
----------------------------------------------------*/
function jsAddYear( startDt, plusYear ) {
 var rtnValue = -1 ;

 // input date�� ��¥ üũ
 if ( !jsCheckDate(startDt) || !jsCheckNumber(plusYear) ) {
  rtnValue = -1 ;
  return rtnValue ;
 }

 var yyyy = startDt.substring(0,4) +"" ;
 var mm   = startDt.substring(4,6) +"" ;
 var dd   = startDt.substring(6,8) +"" ;

 var newYyyy = (eval(yyyy) + eval(plusYear)) ;

 // ����(29��) �� ��� 28�Ϸ� ��ħ
 // ��) 20000229 �� 1���� ���ϸ� 20000228
 var isYoonYear = false ;
 // 4 �� ������ �������� ����
 // 100 ���� ������ �������� ���� �ƴ�
 // 400 ���� ������ �������� ����
 if ( (eval(newYyyy)%4) == 0 ) isYoonYear = true ;
 if ( (eval(newYyyy)%100) == 0 ) isYoonYear = false ;
 if ( (eval(newYyyy)%400) == 0 ) isYoonYear = true ;

 if ( (mm == '02') && (dd == '29') && !isYoonYear ) dd = '28' ;

 rtnValue = newYyyy + mm + dd ;

 return rtnValue ;
}

/*--------------------------------------------------
  ���   : ��¥�� ������ ���Ѵ�.
  INPUT  : startDt(YYYYMMDD), year
  RETURN : rtnValue : ��¥�� ������ ���� ��¥
           -1       : ERROR..!
           ��) 20000110 + 3��  = 20000410
           ��) 20000229 + 12�� = 20000228
     MSG :
----------------------------------------------------*/
function jsAddMonths( startDt, plusMonth ) {
 var rtnValue = -1 ;

 // input date�� ��¥ üũ
 if ( !jsCheckDate(startDt) || !jsCheckNumber(plusMonth) ) {
  rtnValue = -1 ;
  return rtnValue ;
 }

 var yyyy = startDt.substring(0,4) +"" ;
 var mm   = startDt.substring(4,6) +"" ;
 var dd   = startDt.substring(6,8) +"" ;

 var newMm = null;

 // ������ ���Ͽ� 1���� �Ѵ� ���
 if ( (eval(mm) + eval(plusMonth)) > 12 ) {
  yyyy  = eval(yyyy) + 1 ;
  newMm = eval(mm) + eval(plusMonth) - 12 ;
 } else {
  newMm = eval(mm) + eval(plusMonth) ;
 }

 // ���� ó��
 var isYoonYear = false ;
 // 4 �� ������ �������� ����
 // 100 ���� ������ �������� ���� �ƴ�
 // 400 ���� ������ �������� ����
 if ( (eval(yyyy)%4) == 0 ) isYoonYear = true ;
 if ( (eval(yyyy)%100) == 0 ) isYoonYear = false ;
 if ( (eval(yyyy)%400) == 0 ) isYoonYear = true ;

 // ������ ���
 if ( isYoonYear ) {
  if ( (newMm == '02') && ( dd=='30' || dd=='31' ) ) dd = '29' ;
 // ����� ���
 } else {
  if ( (newMm == '02') && ( dd=='29' || dd=='30' || dd=='31' ) ) dd = '28' ;
 }

 // ���� �ڸ����� �����. ( 2 �� -> 02 )
 if ( eval(newMm) < 10 ) { newMm = "0" + newMm;  } 
 	rtnValue = yyyy + newMm + dd ;

	return rtnValue ;
}

/*--------------------------------------------------
  ���   : ��¥�� ��¥ ������ �ϼ��� �����Ѵ�.
  INPUT  : startDt(YYYYMMDD), endDt(YYYYMMDD)
  RETURN : rtnValue : ��¥�� ��¥ ������ �ϼ�
           -1       : ERROR..!
     MSG :

----------------------------------------------------*/
function jsGetBetweenDay( startDt, endDt )
{
     var rtnValue = 0 ;

     // input date�� ��¥ üũ
     if ( !jsCheckDate(startDt) || !jsCheckDate(endDt) ) {
      rtnValue = -1 ;
     }
     else {
           var yyyy = startDt.substring(0,4) +"" ;
           var mm   = startDt.substring(4,6) +"" ;
           var dd   = startDt.substring(6,8) +"" ;
           var startDate = new Date(yyyy,(eval(mm)-1),dd) ; // �� �� �Ѵ��� �����Ƿ� 1�� ���ش�.

           yyyy = endDt.substring(0,4) +"" ;
           mm   = endDt.substring(4,6) +"" ;
           dd   = endDt.substring(6,8) +"" ;
           var endDate = new Date(yyyy,(eval(mm)-1),dd) ;

           // 1000���� 1�� ������ �� ������ �ٲٱ�
           rtnValue = ((endDate-startDate)/60/60/24/1000) ;
     }

     return rtnValue ;

}
/*--------------------------------------------------
  ���   : Check Time RETURN T/F
  INPUT  : check  time
  RETURN : true  -> TIME
           false -> NOT TIME
----------------------------------------------------*/
function jsCheckTime( toCheck )
{
     var chkstr  = toCheck + "";

     if ( ( chkstr == "") || ( chkstr == null ) )
    return( false );

     var mm = chkstr.substring( 0 ,2 );
     var ss = chkstr.substring( 3 ,5 );

     if (( mm <= "23" ) && ( mm >= "00" ))
     {
         if (( ss <= "60" ) && ( ss >= "00" ))
         {
             if ( chkstr.substring( 2 ,3 ) == ":")
             {
              return( true );
             }
         }
     }
     return( false );
}

/*--------------------------------------------------
  ���   : Check �ֹε�Ϲ�ȣ RETURN T/F
  INPUT  : toCheck
  RETURN : true  -> �ùٸ� ��ȣ
           false ->
----------------------------------------------------*/
function jsCheckJumin(toCheck) {
    var isJumin = true;
    if ( jsCheckNull(toCheck) ) {
          return false;
    } else if ( toCheck.length < 13 || toCheck.length > 13 ) {
          return false;
    } else if ( toCheck.substring(2,3) > "1" || toCheck.substring(6,7) > "2" || toCheck.substring(6,7) == "0" ) {
          return false;
    } else if ( toCheck.substring(2,3) == "1" && toCheck.substring(3,4) > "2" ){
          return false;
    } else if (!(toCheck.substring(4,6) >= "01" && toCheck.substring(4,6) <= "31")){
          return false;
    }
   for (var j = 0; isJumin && (j < toCheck.length); j++) {
       if ( ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9")) ) {
           isJumin = false;
       }
   }


  var a1=toCheck.substring(0,1);
  var a2=toCheck.substring(1,2);
  var a3=toCheck.substring(2,3);
  var a4=toCheck.substring(3,4);
  var a5=toCheck.substring(4,5);
  var a6=toCheck.substring(5,6);
  var check_digit = a1*2+a2*3+a3*4+a4*5+a5*6+a6*7;
  var b1=toCheck.substring(6,7);
  var b2=toCheck.substring(7,8);
  var b3=toCheck.substring(8,9);
  var b4=toCheck.substring(9,10);
  var b5=toCheck.substring(10,11);
  var b6=toCheck.substring(11,12);
  var b7=toCheck.substring(12,13);

  var check_digit = check_digit+b1*8+b2*9+b3*2+b4*3+b5*4+b6*5;
  check_digit = check_digit%11;
  check_digit = 11 - check_digit;
  check_digit = check_digit%10;
  if (check_digit != b7){
   isJumin = false;
  }

   return isJumin;
}

/*--------------------------------------------------
  ���   : Check ����� ��Ϲ�ȣ RETURN T/F
  INPUT  : toCheck
  RETURN : true  -> �ùٸ� ��ȣ
           false ->
----------------------------------------------------*/
function jsCheckSaupJa(toCheck) {
    var isSaupJa = true;
    if ( jsCheckNull(toCheck) ) {
          return false;
    } else if ( toCheck.length < 10 || toCheck.length > 10 ) {
          return false;
    }
    for (var j = 0; isSaupJa && (j < toCheck.length); j++) {
       if ( ( (toCheck.substring(j,j+1) < "0") || (toCheck.substring(j,j+1) > "9")) ) {
           isSaupJa = false;
       }
    }
    return isSaupJa;
}

/*--------------------------------------------------
  ���   : E-Mail�� check�Ѵ�.
  INPUT  : emailVal
  RETURN : NONE
     MSG :
----------------------------------------------------*/
function jsCheckEmail( emailVal )
{
     if ( jsCheckNull(emailVal) ) return true;

     var inx = emailVal.indexOf("@") ;

     if ( inx <= 0 || inx==emailVal.length-1 ) return false;

     return true ;
}
/*--------------------------------------------------
  ���   :
  INPUT  : varNum : �Ǽ�
       varLeft : �����κ� �ڸ���
       varRight : �Ҽ��κ� �ڸ���
  RETURN : true : �Ǽ��� ��/�Ҽ��κ��� �ڸ����� �ʰ����� �ʴ´�.
       false : �Ǽ��� ��/�Ҽ��κ��� �ڸ����� �ʰ��Ѵ�.
----------------------------------------------------*/
function jsCheckFloatType( varNum, varLeft, varRight ) {

 var resultFlag = true ;

 if ( varNum.charAt(0) == "-" ){
  varNum = varNum.substring(1,varNum.length);
 }

 var PointIndex = varNum.indexOf(".");

 if ( PointIndex < 0 ){
  if ( varNum.length > varLeft )
   resultFlag = false ;
 }else{
  var LeftLength = varNum.substring(0,PointIndex).length;
  var RightLength = varNum.substring(PointIndex+1, varNum.length ).length;

  if ( (LeftLength > varLeft) || (RightLength > varRight) )
   resultFlag = false ;
 }

 return resultFlag ;

}

/*--------------------------------------------------
  ���   :
  INPUT  : helpfile
  RETURN :
----------------------------------------------------*/
function jsShowHelp( helpfile )
{
      var helpstr = helpfile + "" ;
      var URL     = "" ;
      var cWin ;

      URL = "/help/"+helpfile+".html" ;

      cWin = window.open(URL,"help","toolbar=0,location=0,directories=0,status=0,menubar=1,scrollbars=1,resizable=1,width=560,height=320");

      cWin.focus();
}

/*--------------------------------------------------
  ���   : �ѱ��̵� �����̵� ����� ���� üũ�� ���ش�.
  INPUT  : String
  RETURN :
----------------------------------------------------*/
function getByteLength(s){
   var len = 0;
   if ( s == null ) return 0;
   for(var i=0;i<s.length;i++){
      var c = escape(s.charAt(i));
      if ( c.length == 1 ) len ++;
      else if ( c.indexOf("%u") != -1 ) len += 2;
      else if ( c.indexOf("%") != -1 ) len += c.length/3;
   }
   return len;
}

/*--------------------------------------------------
  ���   : FormObj���� varObjName�� � �����ϴ��� �����Ѵ�.
  INPUT  : FormObj : FormName
     : varObjName : ��ü��
  RETURN :
----------------------------------------------------*/
function jsGetObjCnt( FormObj, varObjName ){
 var cnt = 0 ;
   for(var inx = 0; inx < FormObj.elements.length ; inx++ ) {
      if ( FormObj.elements[inx].name == varObjName ) {
       cnt++ ;
      }
   }
   return cnt;
}

/*--------------------------------------------------
  ���   :  SELECT OPTION BOX�� ���� RETURN �Ѵ�.
  INPUT  : sb = selectBoxName
  RETURN :
----------------------------------------------------*/
function jsCheckSelectBox ( sb )
{
    var temp = sb.options[sb.selectedIndex].value ;
    return ( temp );
}

function jsCheckSelectBoxNm ( sb )
{
    var temp = sb.options[sb.selectedIndex].text ;
    return ( temp );
}

/*--------------------------------------------------
  ���   :  �ش� Frame�� ������������ ����
  INPUT  : fr : FrameName
  RETURN :
----------------------------------------------------*/
function jsClearFrame( fr ) {
    fr.location = "/common/blank.jsp";
}

/*--------------------------------------------------
  ���   : checkBox�� ��ü���� �� ������ �Ҽ� �ְ� �Ѵ�.
  INPUT  : FormObj FormName
       elemNm CheckBox name
       checkYn boolean
  RETURN :
----------------------------------------------------*/
function jsToggle(FormObj, elemNm, checkYn){
 var i =0;
 while (i < FormObj.elements.length)
 {
  if (FormObj.elements[i].name== elemNm )
  {
   FormObj.elements[i].checked= checkYn;
  }
  i++;
 }
}

/*--------------------------------------------------
  ���   : focus �ű��
  INPUT  : varTextObj : TextBox ��ü��
       varLength  : ���ǿ� �´� textLength
       varFocusToObj : Focus�� �Űܰ� ��ü��
  RETURN :
----------------------------------------------------*/
function jsMoveFocus( varTextObj, varLength, varFocusToObj ) {
 if ( varTextObj.value.length == varLength ) {
  varFocusToObj.focus() ;
  varFocusToObj.select() ;
  return ;
 }
}

/*--------------------------------------------------
  ���   : ���ڸ� ���ڷ� convert �Ѵ�. ��, 
       parseFloat �� �ٸ� ���� null �� �ö� 0 ���� �ν��Ѵ�.
  INPUT  : 
  RETURN :
----------------------------------------------------*/
function jsParseInt( varStr ) {
 if ( varStr == null || varStr == "" )
  return 0 ;
 else
  return parseInt(varStr) ;
}

/*--------------------------------------------------
  ���   : ���ڸ� �ѱ۷� ��ȯ�Ѵ�.
   ��) 450,000,000 -> ����õ��
  INPUT  : 
  RETURN :
----------------------------------------------------*/
function jsConvertNumberToHangul( varNum )
{
 // ������ ���ڿ�
 var returnStr = "" ;

 // ������ ���� ����
 if ( eval(varNum) < 0 ) {
  return returnStr ;
 }

 // �Ѿ�� ���ڸ� ���ڷ� ��ȯ
 var numLen = varNum.length ;
 // ��ȯ�� ���ڸ� �տ��� ���� ���ھ� �߶� ������ ����
 var oneChar = null ;
 var isDone1 = true ;
 var isDone2 = true ;
 var isDone3 = true ;
 var isDone4 = true ;
 var isDone5 = false ;
 for ( var inx = 0 ; inx < numLen ; inx++ ) {
  oneChar = varNum.substring( inx, inx+1 ) ;
  isDone5 = false ;

  if ( oneChar == "0" ) {
   // �ƹ��ϵ� ����
  } else if ( oneChar == "1" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "2" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "3" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "4" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "5" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "6" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "7" ) {
   returnStr = returnStr + "ĥ" ;
   isDone5 = true ;
  } else if ( oneChar == "8" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  } else if ( oneChar == "9" ) {
   returnStr = returnStr + "��" ;
   isDone5 = true ;
  }

  if ( ((numLen-inx) % 4) == 0 && oneChar != "0" ) {
   returnStr = returnStr + "õ" ;
  } else if ( ((numLen-inx) % 4) == 3 && oneChar != "0" ) {
   returnStr = returnStr + "��" ;
  } else if ( ((numLen-inx) % 4) == 2 && oneChar != "0" ) {
   returnStr = returnStr + "��" ;
  } else if ( ((numLen-inx) % 4) == 1 ) {
   if ( numLen >= 17 && isDone1 && isDone5 ) {
    returnStr = returnStr + "��" ;
    isDone1 = false ;
   } else if ( numLen >= 13  && isDone2 && isDone5 ) {
    returnStr = returnStr + "��" ;
    isDone2 = false ;
   } else if ( numLen >= 9  && isDone3 && isDone5 ) {
    returnStr = returnStr + "��" ;
    isDone3 = false ;
   } else if ( numLen >= 5  && isDone4 && isDone5 ) {
    returnStr = returnStr + "��" ;
    isDone4 = false ;
   }
  }
 }

 return returnStr ;
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� �ʵ忡 comma�� �� comma �� �� ä���ش�.
      �Ҽ��� ��� ���� 
    ��) 1000.00 -> 1,000    
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeCurrency( varTextObj ) {
 varTextObj.value = jsDeleteComma( varTextObj.value ) ;

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 var isPointed = false ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
   varText = varText + varTextObj.value.substring(inx, inx+1) ;
  }
 }

 varTextObj.value = jsAddComma( varText ) ;
}


/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� �ʵ忡 comma�� �� comma �� �� ä���ش�.
      �Ҽ��� ��� ��    
    ��) 1000.00 -> 1,000.00    
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeForeignCurrency( varTextObj ) {
 varTextObj.value = jsDeleteComma( varTextObj.value ) ;

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 var isPointed = false ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) || (varTextObj.value.substring(inx, inx+1)=='.') ) {
   // ���� �������� ó������ ���� ��������
   if ( !isPointed && varTextObj.value.substring(inx, inx+1)=='.' ) {
    isPointed = true ;
    varText = varText + varTextObj.value.substring(inx, inx+1) ;
   // ���� �϶�
   } else if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
    varText = varText + varTextObj.value.substring(inx, inx+1) ;
   }

  }
 }

 varTextObj.value = jsAddComma( varText ) ;
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� ��ü�ʵ忡 ���ڸ��� �Է¹ް� ���ش�.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsOnlyNumber( varTextObj ) {

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
   varText = varText + varTextObj.value.substring(inx, inx+1) ;
  }
 }

 // �տ� ���� 0 ���ֱ� (��) 00200 -> 200
 varLength = varText.length ;
 var varTempReturnNumber = varText;
 var varReturnNumber = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
   // '0' �� �Ѿ���� ��� '0'�� �״�� �����ؾ� �Ѵ�.
   if ( varLength == 1 ) varReturnNumber = "0" ;
   else if ( eval(jsDeleteComma(varTempReturnNumber)) == '0' ) {
    varReturnNumber = "0" ;
    break ;
   }
  } else {
   varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
   break ;
  }
 }

 varTextObj.value = varReturnNumber;
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� �ʵ忡 ���ڿ� 1���� point���� �Է¹ް� ���ش�.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsOnlyFloat( varTextObj ) {

 varTextObj.value = jsDeleteComma( varTextObj.value ) ;

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 var isPointed = false ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) || (varTextObj.value.substring(inx, inx+1)=='.') ) {
   // ���� �������� ó������ ���� ��������
   if ( !isPointed && varTextObj.value.substring(inx, inx+1)=='.' ) {
    isPointed = true ;
    varText = varText + varTextObj.value.substring(inx, inx+1) ;
   // ���� �϶�
   } else if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
    varText = varText + varTextObj.value.substring(inx, inx+1) ;
   }

  }
 }

 // �տ� ���� 0 ���ֱ� (��) 00200 -> 200
 varLength = varText.length ;

 var varReturnNumber = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varText.substring(inx, inx+1) == '0' ) {
   // '0' �� �Ѿ���� ��� '0'�� �״�� �����ؾ� �Ѵ�.
   if ( varLength == 1 ) varReturnNumber = "0" ;
   else if ( eval(jsDeleteComma(varText)) == '0' ) {
    varReturnNumber = "0" ;
    break ;
   }
  } else {
   varReturnNumber = varText.substring(inx, varLength+1) ;
   break ;
  }
 }

 varTextObj.value = varReturnNumber ;

}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� �ʵ忡 YYYY/MM�������� [/]�� �� ä���ش�. 
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeYyyyMm( varTextObj ) {
 varTextObj.value = jsDeleteChar( varTextObj.value, '/' ) ;

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
   varText = varText + varTextObj.value.substring(inx, inx+1) ;
  }
 }

 if ( varText.length < 6 ) {
  varTextObj.value = varText ;
 } else {
  varTextObj.value = varText.substring(0,4) + "/" + varText.substring(4,6) ;
 }
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� String�� ��¥�������� [/]�� �� ����.
    ��) 200103 -> 2001/03
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeYyyyMmString( varText ) {
 if ( varText.length != 6 || !jsCheckNumber( varText ) ) {
  return varText ;
 }

 var varReturnText   = "" ;

 varReturnText = varText.substring(0,4) + "/" + varText.substring(4,6) ;

 return varReturnText;
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� �ʵ忡 ��¥�������� [/]�� �� ä���ش�.      
    ��) 20010301 -> 2001/03/01          
  INPUT  : Text Object
  RETURN :
----------------------------------------------------*/
function jsMakeDate( varTextObj ) {
 varTextObj.value = jsDeleteChar( varTextObj.value, '/' ) ;

 var varLength = varTextObj.value.length ;
 var varText   = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( jsCheckNumber(varTextObj.value.substring(inx, inx+1)) ) {
   varText = varText + varTextObj.value.substring(inx, inx+1) ;
  }
 }

 if ( varText.length < 8 ) {
  varTextObj.value = varText ;
 } else {
  varTextObj.value = varText.substring(0,4) + "/" + varText.substring(4,6) + "/" + varText.substring(6,8) ;
 }
}

/*--------------------------------------------------
  ���   : �Ķ���ͷ� �Ѿ�� String�� ��¥�������� [/]�� �� ä���ش�.      
    ��) 20010301 -> 2001/03/01          
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsMakeDateString( varText ) {
 if ( varText.length != 8 || !jsCheckNumber( varText ) ) {
  return varText ;
 }

 var varReturnText   = "" ;

 varReturnText = varText.substring(0,4) + "/" + varText.substring(4,6) + "/" + varText.substring(6,8) ;

 return varReturnText;
}

/*--------------------------------------------------
  ���   : ���ڸ� �޾Ƽ� comma�� �� �����Ѵ�. ������ ǥ������
    ��) 1000.00 -> 1,000.00 
    ��) ���ڰ� �ƴ� �� -> -1 ����      
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsAddComma( varNumber ){
 // ���ڰ� �ƴϸ� -1�� �����Ѵ�.
 if ( jsCheckNull(varNumber) ) return "" ;
 if ( !jsCheckFloat(varNumber) ) {
  return -1 ;
 }

 // �Ҽ� �̻�, ���� �κ��� ���� ����.
 var PointIndex = varNumber.indexOf(".") ;
 var varUnderPoint = "" ;
 var isPointed = false ;
 // �Ҽ� ���ϰ� ������
 if ( PointIndex < 0 ) {
  isPointed = false ;
  // �Ҽ� ���� �κ�
  varUnderPoint = "" ;
  // �Ҽ� �̻� �κ�
  varOverPoint = varNumber ;
 // �Ҽ� ���ϰ� ������
 } else {
  isPointed = true ;
  // �Ҽ� ���� �κ�
  varUnderPoint = varNumber.substring(PointIndex+1, varNumber.length ) ;
  // �Ҽ� �̻� �κ�
  varOverPoint = varNumber.substring(0, PointIndex) ;
 }

 // �����϶� ���� "-" ���� ����
 var negativeFlag = false ;
 if ( varOverPoint.substring(0,1) == "-" ) {
  negativeFlag = true ;
  varOverPoint = varOverPoint.substring(1,varOverPoint.length+1) ;
 }

 // �Ҽ� �̻� �κп� comma �ֱ�
 var varLength = varOverPoint.length ;
 var varCnt = 0 ;
 var varTempReturnNumber = "" ;
 for ( var inx = varLength-1 ; inx >= 0 ; inx-- ) {
  varCnt++ ;

  // �Ҽ��� ���
  if ( varCnt == 4 ) {
   varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + "," + varTempReturnNumber ;
   varCnt = 1 ;
  // �Ҽ��� �����
  } else {
   varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + varTempReturnNumber ;
  }

 }

 // �տ� ���� 0 ���ֱ� (��) 00200 -> 200
 varLength = varTempReturnNumber.length ;
 var varReturnNumber = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
   // '0' �� �Ѿ���� ��� '0'�� �״�� �����ؾ� �Ѵ�.
   if ( varLength == 1 ) varReturnNumber = "0" ;
   else if ( eval(jsDeleteComma(varTempReturnNumber)) == '0' ) {
    varReturnNumber = "0" ;
    break ;
   }
  } else {
   varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
   break ;
  }
 }

 // �Ҽ��� ���� ���̱�
 if ( isPointed ) {
  varReturnNumber = varReturnNumber + "." + varUnderPoint ;
 }

 // ���� ���̱�
 if ( negativeFlag ) {
  varReturnNumber = "-" + varReturnNumber ;
 }

 return varReturnNumber ;

}

/*--------------------------------------------------
  ���   : ���ڸ� �޾Ƽ� comma�� �� �����Ѵ�.
    ��) 1000 -> 1,000.00
    ��) ���ڰ� �ƴ� �� -> -1 ����   
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsAddCommaAndZero( varNumber ){
 // ���ڰ� �ƴϸ� -1�� �����Ѵ�.
 if ( jsCheckNull(varNumber) ) return "" ;
 if ( !jsCheckFloat(varNumber) ) {
  return -1 ;
 }

 // �Ҽ� �̻�, ���� �κ��� ���� ����.
 var PointIndex = varNumber.indexOf(".") ;
 var varUnderPoint = "" ;
 // �Ҽ� ���ϰ� ������
 if ( PointIndex < 0 ) {
  // �Ҽ� ���� �κ�
  varUnderPoint = "" ;
  // �Ҽ� �̻� �κ�
  varOverPoint = varNumber ;
 // �Ҽ� ���ϰ� ������
 } else {
  // �Ҽ� ���� �κ�
  varUnderPoint = varNumber.substring(PointIndex+1, varNumber.length ) ;
  // �Ҽ� �̻� �κ�
  varOverPoint = varNumber.substring(0, PointIndex) ;
 }

 // �Ҽ� �̻� �κп� comma �ֱ�
 var varLength = varOverPoint.length ;
 var varCnt = 0 ;
 var varTempReturnNumber = "" ;
 for ( var inx = varLength-1 ; inx >= 0 ; inx-- ) {
  varCnt++ ;

  // �Ҽ��� ���
  if ( varCnt == 4 ) {
   varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + "," + varTempReturnNumber ;
   varCnt = 1 ;
  // �Ҽ��� �����
  } else {
   varTempReturnNumber = varOverPoint.substring( inx, inx+1 ) + varTempReturnNumber ;
  }

 }

 // �տ� ���� 0 ���ֱ� (��) 00200 -> 200
 varLength = varTempReturnNumber.length ;
 var varReturnNumber = "" ;
 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varTempReturnNumber.substring(inx, inx+1) == '0' ) {
  } else {
   varReturnNumber = varTempReturnNumber.substring(inx, varLength+1) ;
   break ;
  }
 }

 // �Ҽ��� ���� ���̱�
 if ( varUnderPoint.length == 0 ){
  varReturnNumber = varReturnNumber + "." + "00" ;
 }else if ( varUnderPoint.length == 1 ){
  varReturnNumber = varReturnNumber + "." + varUnderPoint + "0";
 }else if ( varUnderPoint.length == 2 ){
  varReturnNumber = varReturnNumber + "." + varUnderPoint ;
 }

 return varReturnNumber ;

}

/*--------------------------------------------------
  ���   : ���ڸ� �޾Ƽ� comma�� ���ְ� �����Ѵ�
    ��) 1,000.00 -> 1000.00     
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsDeleteComma( varNumber ){
 var varLength = varNumber.length ;

 varReturnNumber = "" ;

 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varNumber.substring( inx, inx+1 ) != "," ) {
   varReturnNumber = varReturnNumber + varNumber.substring( inx, inx+1 ) ;
  }
 }

 return varReturnNumber ;
}

/*--------------------------------------------------
  ���   : ���ڸ� �޾Ƽ� param�� ���ְ� �����Ѵ�.
    ��) 2001/01/01 -> 20010101     
  INPUT  : varText ���ڿ� varDelete �����ϰ����ϴ� Character
  RETURN :
----------------------------------------------------*/
function jsDeleteChar( varText, varDelete ){
 var varLength = varText.length ;

 varReturnText = "" ;

 for ( var inx = 0 ; inx < varLength ; inx++ ) {
  if ( varText.substring( inx, inx+1 ) != varDelete ) {
   varReturnText = varReturnText + varText.substring( inx, inx+1 ) ;
  }
 }

 return varReturnText ;
}

/*--------------------------------------------------
  ���   : �� �̸��� �޾Ƽ� ��� text,hidden���� comma, / ���ڸ� �����ش� 
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsDeleteCharAll( FormObj ) {
 for (var i=0; i<FormObj.elements.length; i++ ) {
  if ( FormObj.elements[i].type == "text" || FormObj.elements[i].type == "hidden" ) {
   if ( !jsCheckNull(FormObj.elements[i].value) && jsCheckFloat(jsDeleteComma(FormObj.elements[i].value)) ) {
    FormObj.elements[i].value = jsDeleteComma(FormObj.elements[i].value);
   } else if ( !jsCheckNull(FormObj.elements[i].value) && jsCheckDate(jsDeleteChar(FormObj.elements[i].value,'/')) ) {
    FormObj.elements[i].value = jsDeleteChar( FormObj.elements[i].value, '/' );
   }
  }
 }
}

/*--------------------------------------------------
  ���   : FormObj���� checkBox �� � ���õǾ�����  �����Ѵ�.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function jsCheckBoxSelectedCnt( FormObj, checkBoxName ){
   var cnt = 0 ;
   for(var inx = 0; inx < FormObj.elements.length ; inx++ ) {
      if ( FormObj.elements[inx].name == checkBoxName && FormObj.elements[inx].checked ) {
       cnt++ ;
      }
   }
   return cnt;
}

/*--------------------------------------------------
  ���   : ���� �� ���ڷθ� �̷�� ������  üũ�� ���ش�.
  INPUT  :
  RETURN :
----------------------------------------------------*/
function isAlphaNum(input) {
    var chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/*----------------------------------------------------
  �Է°��� Ư�� ����(chars)������ �Ǿ��ִ��� üũ
  Ư�� ���ڸ� ����Ϸ� �� �� ���
  ex) if (!containsCharsOnly(form.blood,"ABO")) {
          alert(!"������ �ʵ忡�� A,B,O ���ڸ� ����� �� �ֽ��ϴ�.");
      }
------------------------------------------------------*/
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/*--------------------------------------------------
  ���   : POPUP OPEN Script
  INPUT  :
  RETURN :
----------------------------------------------------*/
function popup1( varAction, varWinName, varWidth, varHeight ){
 var win = /*window.open*/( varAction, varWinName , "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1, width=" + varWidth + ",height=" + varHeight + ", left=50,top=50"); 
 return win;
 
 //var FormObj = document.dataForm;
 //FormObj.target = varWinName ;
 //FormObj.action = varAction ;
 //FormObj.submit() ;
}


function toTimeString( varDateObj ) { //formatTime(date)
    var year  = varDateObj.getFullYear();
    var month = varDateObj.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    var day   = varDateObj.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day );
}

function jsAfterThisDate( varStdDate , varYYYY , varMM , varDD ) {

    var varDateObj = new Date();

    varStdDate = jsDeleteChar( varStdDate, "/" );

    var yyyy = varStdDate.substring(0,4) +"" ;
    var mm   = varStdDate.substring(4,6) +"" ;
    var dd   = varStdDate.substring(6,8) +"" ;

    var startDate = new Date(yyyy,(eval(mm)-1),dd) ; // �� �� �Ѵ��� �����Ƿ� 1�� ���ش�.

    varDateObj.setFullYear(startDate.getFullYear() + eval(varYYYY) ); //���� ����
    varDateObj.setMonth(startDate.getMonth() + eval(varMM) );       //���� ����
    varDateObj.setDate(startDate.getDate() + eval(varDD)  );         //���� ����

    return toTimeString(varDateObj);
}

/*--------------------------------------------------
  ���   : text �Է½� �����̿��� Ű�� �������� ��ȿȭ��Ų��.
  INPUT  : ����
  RETURN : �̺�Ʈ ��ȿȭ

  ����!  : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeypress �̺�Ʈ�� ����Ұ�
          ��) <input type="text" [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeypress="jsOnlyNumberKey();">
----------------------------------------------------*/
function jsOnlyNumberKey() {
    if ( event != null) {
      if ( event.keyCode < 48 || event.keyCode > 57 ) {
        event.returnValue = false;
      }
    }
}

/* ������������ �̵� */
function jsBack(){
 history.go(-1);
}

/* �𷡽ð� ���̰� �ϱ� */
function jsVisible( str ){
 if( str == '1' )
  document.body.style.cursor='wait';
 else
  document.body.style.cursor='auto'; 
} 

/* 15���Ŀ� jsRefresh()��� function�� ȣ�� */
var timeId   = null ;

function jsRunAfterTime() {
 //15�� �Ŀ� Refresh
 timeId = setTimeout( "jsRefresh()", 15000 ) ;
}

/**
 * �Ҽ��� �Ʒ� ���ڸ� ���� ����.
 *
 * @param num ����
 * @param place �ڸ���
 * @return ����� ����
 */
function getCutNumber(num, place) {
 var returnNum;
 var str = "1";

 return Math.floor( num * Math.pow(10,parseInt(place,10)) ) / Math.pow(10,parseInt(place,10)); 
}

/* text�� �¿� ������ �����ؼ� ����*/
function trim(text) {
 if (text == "") {
  return text;
 }

 var len = text.length;
 var st = 0;

 while ((st < len) && (text.charAt(st) <= ' ')) {
  st++;
 }

 while ((st < len) && (text.charAt(len - 1) <= ' ')) {
  len--;
 }

 return ((st > 0) || (len < text.length)) ? text.substring(st, len) : text;
}

/* text�� ������ ������ �����ؼ� ����*/
function ltrim(text) {
 if (text == "") {
  return text;
 }

 var len = text.length;
 var st = 0;

 while ((st < len) && (text.charAt(st) <= ' ')) {
  st++;
 }

 return (st > 0) ? text.substring(st, len) : text;
}

/* text�� ������ ������ �����ؼ� ����*/
function rtrim(text) {
 if (text == "") {
  return text;
 }

 var len = text.length;
 var st = 0;

 while ((st < len) && (text.charAt(len - 1) <= ' ')) {
  len--;
 }

 return (len < text.length) ? text.substring(st, len) : text;
}

/*--------------------------------------------------
  ���   : select box �� CLEAR ��Ų��.
  INPUT  : varObjFullNm : select box ��ü
           varDeleteCnt : ù��° ������ ���� ���� ����
  RETURN : NONE
----------------------------------------------------*/
function cmInitSelectBox( varObjFullNm, varDeleteCnt ) {
 varObj = eval( varObjFullNm ) ;
 varObj.length = varDeleteCnt ;
}

/*--------------------------------------------------
  ���   :  select box �� �����.
  INPUT  : varObjFullNm :  select box ��ü
           varText      : 
           varValue     :  
  RETURN : NONE
----------------------------------------------------*/
function cmMakeSelectBox( varObjFullNm, varText, varValue ) {
 varObj = eval( varObjFullNm ) ;
 
 var empOption = null ;

 empOption = document.createElement("OPTION");
 empOption.text = varText ;
 empOption.value = varValue ;
 varObj.options.add(empOption);
}

