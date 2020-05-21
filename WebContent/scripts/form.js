/**
 *
 * 자바스크립트 공통함수
 *
 * 주의: 아래의 모든 메소드는 입력폼의 필드이름(form1.myfield)을
 *       파라미터로 받는다. 필드의 값(form1.myfield.value)이 아님을
 *       유념할 것.
 *      개발을 위해 필요한 함수들을 확인하시고 이용.
 *       그 외, 각 업무와 관련하여 필요한 스크립트가 있다면 업무명.js의
 *        형태로 파일을 만들어 사용. 저장 디렉토리는 js 디렉토리로 단일화.
 *
 * @author  이재원(LEE JAE WON, heyjae), heyjae@bcline.com
 * @version 1.0, 2003/02/24
 * @since   1.0
 *
 * Copyright. (c) 2003 by GNB soft co.,ltd
 * All rights followed GNU General Public License's free software policy.
 */

/**
 * 입력값이 NULL인지 체크
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert(!"이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert(!"혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/* 한글이외의 캐릭터가 있을경우 false
 * 한자나 숫자 영문의 경우 false
*/
function checkKoreanOnly( koreanChar ) {
   koreanChar = koreanChar.split(' ').join('');

   if ( koreanChar == null ) return false ;

   for(var i=0; i < koreanChar.length; i++){

     var c=koreanChar.charCodeAt(i);

     //( 0xAC00 <= c && c <= 0xD7A3 ) 초중종성이 모인 한글자
     //( 0x3131 <= c && c <= 0x318E ) 자음 모음

     if( !( ( 0xAC00 <= c && c <= 0xD7A3 ) || ( 0x3131 <= c && c <= 0x318E ) ) ) {
        return false ;
     }
   }
   return true ;
}

/**
 * 입력값이 알파벳인지 체크
 * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
 * 자주 쓰이는 경우에는 var chars 변수를
 * global 변수로 선언하고 사용하도록 한다.
 * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 *     var lowercase = "abcdefghijklmnopqrstuvwxyz";
 *     var number    = "0123456789";
 *     function isAlphaNum(input) {
 *         var chars = uppercase + lowercase + number;
 *         return containsCharsOnly(input,chars);
 *     }
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/*
 * 영문 이외의 캐릭터가 있을경우 false
 * @see isAlphabet
*/
function checkEnglishOnly( englishChar ) {
    englishChar = englishChar.split(' ').join('');

    if ( englishChar == null ) return false ;

    for( var i=0; i < englishChar.length;i++){
       var c=englishChar.charCodeAt(i);
       if( !( (  0x61 <= c && c <= 0x7A ) || ( 0x41 <= c && c <= 0x5A ) ) ) {
        return false ;
       }
     }
    return true ;
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/*
 * 숫자 이외의 캐릭터가 있을경우 false
 * @see isNumber
*/
function checkDigitOnly( digitChar ) {

    if ( digitChar == null ) return false ;

    for(var i=0;i<digitChar.length;i++){
       var c=digitChar.charCodeAt(i);
       if( !(  0x30 <= c && c <= 0x39 ) ) {
        return false ;
       }
     }
    return true ;
}

/*
 * 내용 입력 시, 숫자만 입력하게 하는  script
 * @see isNumber
 * @see onlyNumber
*/
function onlyNumber() {
 if(event.keyCode !=13 && event.keyCode !=8 &&
  (event.keyCode<48)||(event.keyCode>57)) {
  event.returnValue=false;
  alert(!"숫자만 입력 가능합니다.");
 }
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/*
 * 삭제여부를 물어 본후 확인을 누르면 진행 시키는script
*/
function del( url ){
 result=confirm! ("삭제하시겠습니까?");

	 if (result) {
	  window.location.href= url;
	 }
}

function getTokenAt(obj, n)
{
 var string = obj;
 var token;   //넘길 값
 var pos = 0; //현재 position

 for(var i=0; i<n; i++) {
  pos    = string.indexOf("-");
  if(pos == -1) //맨 마지막 token을 위해..
   return string;
  token  = string.substring(0, pos); //둘로 나눈다. token <-> string
  string = string.substring(pos+1, string.length);
 }
 return token;
}

/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression!'을 참조
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        };
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

/*
 * select box을 선택된 상태로 만들기 위한 script
*/
function setSelected(select,value){
 for( var i=0; i<select.options.length; i++) {
	 if(select.options[i].value==value) select.options[i].selected='true';
 };
}

/*
 * checkbox와 radio button을 선택된 상태로 만들기 위한 script
*/
function setChecked(form,name,value,type){
// if(type==null || type.length() < 2 ||type =="radio"){
 if(type==null || type =="radio"){
  for( var i=0; i<form.elements.length; i++) {
   var element = form.elements[i];
   if ( element.name==name && element.value==value){
    element.checked="true";
    break;
   };
  };
 }else{
  if(value==null || value=="") return;
  for( var i=0; i<form.elements.length; i++) {
   var element = form.elements[i];
   if ( element.name==name && value.indexOf(element.value) > -1){
    element.checked="true";
   };
  };
 };
}

/* ===================================================================
 Function : getRadioValue(field)
 Return   :
 Usage   : Radio에서 선택된 것 값을 리턴한다.
=================================================================== */
function getRadioValue(field){
 if(field == null){
  return "";
 }
 if(field[0] == null){ //radio가 하나일때
  if(field.checked == true){
   return field.value;
  }
  return "";
 }
 else{ //radio가 하나이상일때
  for(var i=0;i<field.length;i++){
   if(field[i].checked == true){
    return field[i].value;
   };
  }
  return "";
 };
}
/* ===================================================================
 Function : getCheckBoxValue(field)
 Return   :
 Usage   : checkbox에서 선택된 것 값을 배열로 리턴한다.
=================================================================== */
function getCheckBoxValue(field){
 var arr = new Array();
 var arr_idx = 0;

 if(field == null){
  return arr;
 }

 if(field[0] == null){//checkbox가 하나일때
  if(field.checked == true){
   arr[arr_idx] = field.value;
  }
  return arr;
 } else {
  //checkbox 가 하나이상일때
  for(var i=0;i<field.length;i++){
   if(field[i].checked == true){
    arr[arr_idx] = field[i].value;
    arr_idx++;
   };
  }
  return arr;
 };
}

/* ===================================================================
 Function : getSelectValue(field)
 Return   :
 Usage   : select에서 선택된 것 값을 배열로 리턴한다.
=================================================================== */
function getSelectValue(field){
 var arr = new Array();
 var arr_idx = 0;

 if(field == null){
  return arr;
 }

 if(field.options == null ) {
  return arr;
 }

 if(field.options[0] == null){//option이 하나일때
  if(field.options.selected == true){
   arr[arr_idx] = field.options.value;
  }
  return arr;
 } else{//option이 하나이상일때
  for(var i=0;i<field.options.length;i++){
   if(field.options[i].selected == true){
    arr[arr_idx] = field.options[i].value;
    arr_idx++;
   };
  }
  return arr;
 };
}

/* ===================================================================
 Function : getSelectText(field)
 Return   :
 Usage   : select에서 선택된 것 label을 배열로 리턴한다.
=================================================================== */
function getSelectText(field){
 var arr = new Array();
 var arr_idx = 0;

 if(field == null){
  return arr;
 }

 if(field.options == null ) {
  return arr;
 }

 if(field.options[0] == null){//option이 하나일때
  if(field.options.selected == true){
   arr[arr_idx] = field.options.text;
  }
  return arr;
 } else {
  //option이 하나이상일때
  for(var i=0;i<field.options.length;i++){
   if(field.options[i].selected == true){
    arr[arr_idx] = field.options[i].text;
    arr_idx++;
   };
  }
  return arr;
 };
}

/* ===================================================================
 Function : radioChecked(field , hasValue)
 Return   :
 Usage   : radio를 선택되게 만들어준다.
             radioChecked(document.frm.radiofield,"선택될 값");
=================================================================== */
function radioChecked(field , hasValue ){

 if(field == null ) return;

 if(field[0] == null && field.value == hasValue ) {
  field.checked = true;
  return;
 }

 for(var i = 0; i < field.length ; i++){
  if( field[i].value == hasValue ){
   field[i].checked = true;
   return;
  };
 };
}

/* ===================================================================
 Function : radioChecked(field , hasValue)
 Return   :
 Usage   : checkbox를 선택되게 만들어준다.
             checkboxChecked(document.frm.checkboxfield,"선택될 값");
=================================================================== */
function checkboxChecked(field , hasValue ){

 if(field == null ) return;

 if(field[0] == null && field.value == hasValue ) {
  field.checked = true;
  return;
 }

 for(var i = 0; i < field.length ; i++){
  if( field[i].value == hasValue ){
   field[i].checked = true;
  };
 }
 return;
}


/**
 * 입력값의 바이트 길이를 리턴
 * Author : Wonyoung Lee
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        };
    }
    return byteLength;
}


/**
 * 입력 문자열의 바이트 길이를 리턴
 * Author : Wonyoung Lee
 */
function getByteStrLength(str){
    var byteLength = 0;
    for (var inx = 0; inx < str.length; inx++) {
        var oneChar = escape(str.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        };
    }
    return byteLength;
}


/*
 * 필수 입력사항중 빈 입력창을 걸러내는 script
*/
function notNull( formName )
{
 var formObj = formName ;
 var boxCheck;
 var notNullColumns="" ;
 for (var i = 0; i < formObj.length; i++)
 {

  if ((formObj[i].type == "text" || formObj[i].type == "textarea" || formObj[i].type == "file")
   ||formObj[i].type == "password" ) {


   if (formObj[i].style.backgroundColor != "" )
   {
    formObj[i].style.backgroundColor = "";
   }


   if ( formObj[i].Null == "false" )
   {
    notNullColumns += formObj[i].name+";";
    if (formObj[i].value == null || formObj[i].value == "" )
    {
     alert(!"필수 항목을 입력하지 않았습니다.");
     formObj[i].focus();
     formObj[i].style.backgroundColor = "#cccccc";
     return false;
    };
   };
  };
 }
// formName.notNullColumns.value = notNullColumns ;
 return true;
}

/*
 * POPUP WINDOW
 * formName :입력폼이름,
 * inputList : click시에 데이타를 넣을 입력창(여러개일 경우 ^ 로 연결한다)
 * sql : property파일에 지정된 property name,
 * display : 팝업창에서 보여질 컬럼 명 query문에 들어 있는 컬럼이어야 한다.
 * query : 프로퍼티에서 query를 읽지 않고 바로 넘겨 줄때 사용한다.
*/
function openDataWin(formName,inputList,sql,display,query){
 var urlWithParam = "/openDataWin?formName="+formName+
  "&inputList="+inputList+"&sql="+sql+"&display="+display;
 if(query !=null) urlWithParam  += "&query="+query;
 win = /*window.open*/(urlWithParam,'win','toolbar=yes,width=300,height=300');
 return false;
}

/*
 * 우편번호 찾기 팝업 창 열기
 * 향후 우편번호 페이지 나오면 아래 zipcode.jsp에 팝업 창 페이지명을 쓴다.
*/
function findZipCode(formName){
 /*window.open*/("/util/zipcode.jsp?formName="+formName,"test","toolbar=no,width=350,height=250");
 return false;
}

/* 혹시 폼 submit시에 http request가 두 번 연달아 간다면,
아래와 같은 형태로 하는 것을 고려

sub_flag = false;
function Js_submit() {
    if ( !sub_flag ) {
        sub_flag = true;
        form1.action='/호출 페이지';
        form1.target = "HiddenFrm";
        form1.submit();
    }else {
        alert(!"이미 실행중입니다.");
    }
}
*/

/********************************************************************
*  Function Name : trim()                                           *
*  Description   : Input Data 의 처음,마지막  Space를 제거한다.      *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  사용 Function : None                                             *
********************************************************************/
function trim(str)
{
  return endTrim(startTrim(str));
}

 

/********************************************************************
*  Function Name : startTrim()                                      *
*  Description   : Input Data 의 처음 Space를 제거한다.              *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  사용 Function : None                                             *
********************************************************************/
function startTrim(str)
{
    var src = new String(str);
    var i, len = src.length;

    for(i = 0;i < len;i++)
    {
        if(src.charAt(i) != " " && src.charAt(i) != "\t")
        {
        		break;
        };
    }
    return src.substring(i);
}


/********************************************************************
*  Function Name : endTrim()                                        *
*  Description   : Input Data 의 마지막의 Space를 제거한다.          *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  사용 Function : None                                             *
********************************************************************/
function endTrim(str)
{
    var src = new String(str);
    var i, len = src.length;

    for(i = len-1;i > 0;i--)
    {
        if(src.charAt(i) != " " && src.charAt(i) != "\t")
        {
        		break;
        };
    }
    return src.substring(0,i+1);
}

 

// 영조씨 추가분
// 사용방법
// <input size="14" type="text" name="jumin" maxLength="14" [안내]태그제한으로등록되지않습니다-xxonKeyDown="onlyNumberInput();" [안내]태그제한으로등록되지않습니다-xxonKeyUp="juminFormat(this)">

/* ===================================================================
 Function : onlyNumberInput()
 Return   :
 Usage   : 숫자만 입력 가능 ([안내]태그제한으로등록되지않습니다-xxonKeyDown 이벤트)
=================================================================== */
function onlyNumberInput(){
 var code = window.event.keyCode;

 /*if ((code > 32 && code < 48) || (code > 57 && code < 65) || (code > 90 && code < 97)){
    window.event.returnValue = false;
 return;
 }*/

 if ((code > 32 && code < 48) || (code > 57 && code < 65) || (code > 90 && code < 97) || (code > 34 && code < 41) || (code > 47 && code < 58) || (code > 95 && code < 106) || code == 8 || code == 9 || code == 13 || code == 46){
  window.event.returnValue = true;
  return;
 }
 window.event.returnValue = false;
}

// 손현수 추가분
// 숫자와 하이픈만 입력 가능
/* ===================================================================
 Function : onlyNumDashInput()
 Return   :
 Usage   : 숫자만 입력 가능 ([안내]태그제한으로등록되지않습니다-xxonKeyDown 이벤트)
=================================================================== */
function onlyNumDashInput(){
 var code = window.event.keyCode;
 if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105) || code == 109 || code == 189 || code == 8 || code == 9 || code == 13 || code == 46){
  window.event.returnValue = true;
  return;
 }
 window.event.returnValue = false;
}

// 손현수 추가분
// 숫자와 소수점만 입력 가능
/* ===================================================================
 Function : onlyNumDecimalInput(obj, number, maxDecimal)
 Return   :
 Usage   : 숫자만 입력 가능 ([안내]태그제한으로등록되지않습니다-xxonKeyDown 이벤트)
=================================================================== */
function onlyNumDecimalInput(obj, number, maxDecimal){
 var code = window.event.keyCode;

  if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105) || code == 110 || code == 190 || code == 8 || code == 9 || code == 13 || code == 46){
  window.event.returnValue = true;
   return;
  }
  window.event.returnValue = false;
}

/* ===================================================================
 Function : onlyNum(val)
 Return   :
 Usage   : 숫자만 리턴
=================================================================== */
function onlyNum(val){
 var num = val;
 var tmp = "";
 for(var i=0; i<num.length; i++){
  if (num.charAt(i) >= 0 && num.charAt(i) <= 9)
   tmp = tmp + num.charAt(i);
  else
   continue;
 }
 return tmp;
}

/* ===================================================================
 Function : juminFormat(obj)
 Return   :
 Usage   : 주민등록번호 형식 ([안내]태그제한으로등록되지않습니다-xxonKeyUp 이벤트)
=================================================================== */
function juminFormat(obj){
 var str = onlyNum(obj.value);
 var leng = str.length;

 switch(leng) {
  case  1 :
  case  2 :
  case  3 :
  case  4 :
  case  5 :
  case  6 : obj.value = str; break;
  case  7 :
  case  8 :
  case  9 :
  case 10 :
  case 11 :
  case 12 :
  case 13 : obj.value = str.substring(0, 6) + "-" + str.substring(6, 13);
      if(!isSSN(str.substring(0, 6) + str.substring(6, 13))){obj.value = "";}
      break;
 };
}


/* ===================================================================
 Function : isSSN(ssn)
 Return   :
 Usage   : 주민번호
=================================================================== */
function isSSN(ssn){
 if(ssn.length == 13){
  var A   = ssn.charAt(0);
  var B   = ssn.charAt(1);
  var C   = ssn.charAt(2);
  var D   = ssn.charAt(3);
  var E   = ssn.charAt(4);
  var F   = ssn.charAt(5);
  var G   = ssn.charAt(6);
  var H   = ssn.charAt(7);
  var I   = ssn.charAt(8);
  var J   = ssn.charAt(9);
  var K   = ssn.charAt(10);
  var L   = ssn.charAt(11);
  var Osub= ssn.charAt(12);

  var SUMM = A*2 + B*3 + C*4 + D*5+ E*6+ F*7+G*8+H*9+I*2+J*3+K*4+L*5;
  var N = SUMM % 11;
  var Modvalue = 11 - N;
  var LapointVal =  Modvalue % 10 ;

  if(Osub != LapointVal){
   alert(!"올바른 주민번호가 아닙니다.");
   return false;
  };
 }
 return true;
}

/* ===================================================================
 Function : juminnoCheck(ssn)
 Return   : true(정상 주민번호), false(오류인 주민번호)
 Usage   : 주민번호 체크
=================================================================== */
function juminnoCheck(ssn){

 ssn = ssn.replace("-", "");

 if(ssn.length == 13){
  var A   = ssn.charAt(0);
  var B   = ssn.charAt(1);
  var C   = ssn.charAt(2);
  var D   = ssn.charAt(3);
  var E   = ssn.charAt(4);
  var F   = ssn.charAt(5);
  var G   = ssn.charAt(6);
  var H   = ssn.charAt(7);
  var I   = ssn.charAt(8);
  var J   = ssn.charAt(9);
  var K   = ssn.charAt(10);
  var L   = ssn.charAt(11);
  var Osub= ssn.charAt(12);

  var SUMM = A*2 + B*3 + C*4 + D*5+ E*6+ F*7+G*8+H*9+I*2+J*3+K*4+L*5;
  var N = SUMM % 11;
  var Modvalue = 11 - N;
  var LapointVal =  Modvalue % 10 ;

  if(Osub != LapointVal){
   // 오류
   return false;
  }

  // 정상
  return true;

 } else {
  // 오류
  return false;
 };
}

/* ===================================================================
 Function : dashCut(juminStr)
 Return   :
 Usage   : 입력한 주민번호에 '-'를 뺀 문자열을 리턴한다.
=================================================================== */
function dashCut(juminStr){
 var jumin_temp = juminStr;
 jumin_temp = jumin_temp.substring(0, 6) + jumin_temp.substring(7, 14);
 return jumin_temp;
}

/* ===================================================================
 Function : dashAdd(juminStr)
 Return   :
 Usage   : 입력한 주민번호에 '-'를 넣어준 문자열을 리턴한다.
=================================================================== */
function dashAdd(juminStr){

 if (juminStr == null || trim(juminStr) == "") {
  return "";
 }

 var jumin_temp = juminStr;
 jumin_temp = jumin_temp.substring(0, 6) + "-" + jumin_temp.substring(6, 13);
 return jumin_temp;
}

/* ===================================================================
 Function : moneyForm(obj)
 Return   :
 Usage   : form을 넘겨받아 form에 변환된 값을 setting한다.
=================================================================== */
function moneyForm(obj){
    var num = obj.value;
 if(obj.value.length >= 4){
  // "$" and "," 입력 제거
  re = /^\$|,/g;
  num = num.replace(re, "");

  fl = "";
  if(isNaN(num)){
   alert(!"문자는 사용할 수 없습니다.");
   obj.value = "";
   return 0;
  }
  if(num==0) return num;

  if(num<0){
   num = num * (-1);
   fl = "-";
  }else{
   num = num * 1; //처음 입력값이 0부터 시작할때 이것을 제거한다.
  }

  num = new String(num);
  temp = "";
  co = 3;
  num_len = num.length;
  while(num_len>0){
   num_len = num_len-co;
   if(num_len < 0){
    co = num_len + co;
    num_len = 0;
   }
   temp = "," + num.substr(num_len, co) + temp;
  }

  obj.value =  fl+temp.substr(1);
  };
}

/* ===================================================================
 Function : moneyFormTwo(obj)
 Return   :
 Usage   : form을 넘겨받아 소수점 처리 후 Setting한다.
=================================================================== */
function moneyFormTwo(obj){
  var nums = obj.value;
  var indexInt = nums.indexOf('.');
 var nLength = nums.length;
 var num  = "";
 var jjum = "";
 if(indexInt <= 0) {
   num  = nums;
   jjum = "";
 }else {
  num  = nums.substring(0, indexInt);
  jjum = nums.substring(indexInt, nLength);
 }
 if(num.length >= 4){
  // "$" and "," 입력 제거
  re = /^\$|,/g;
  num = num.replace(re, "");

  fl = "";
  if(isNaN(num)){
   alert(!"문자는 사용할 수 없습니다.");
   obj.value = "";
   return 0;
  }
  if(num==0) return num;

  if(num<0){
   num = num * (-1);
   fl = "-";
  }else{
   num = num * 1; //처음 입력값이 0부터 시작할때 이것을 제거한다.
  }

  num = new String(num);
  temp = "";
  co = 3;
  num_len = num.length;
  while(num_len>0){
   num_len = num_len-co;
   if(num_len < 0){
    co = num_len + co;
    num_len = 0;
   }
   temp = "," + num.substr(num_len, co) + temp;
  }
  if(indexInt <= 0) {
   obj.value =  fl+temp.substr(1)+jjum;
  }else{
   if(indexInt > 4) {
    obj.value =  fl+temp.substr(1);
    obj.focus();
    obj.value = obj.value+jjum;
   }else{
    obj.value =  fl+temp.substr(1)+jjum;
   };
  };
  };
}

// 손현수 추가분
// 지정된 소숫점과 정수 최대치를 넘으면 입력받지 않는다
// moneyFormTwo 와 동일하나 인수를 두개 더 받으며 추가되는 소숫점및 정수에 대한 제어부분추가
//
/* ===================================================================
 Function : moneyFormThree(obj, number, maxDecimal)
 Return   :
 Usage   : form을 넘겨받아 소수점 처리 후 Setting한다.
=================================================================== */
function moneyFormThree(obj, number, maxDecimal){

  var nums = obj.value;
  var indexInt = nums.indexOf('.');
 var nLength = nums.length;
 var num  = "";
 var jjum = "";
 if(indexInt <= 0) {
   num  = nums;
   jjum = "";
 }else {
  num  = nums.substring(0, indexInt);
  jjum = nums.substring(indexInt, nLength);
 }

 //if(num.length >= 4){
 // "$" and "," 입력 제거
 re = /^\$|,/g;
 num = num.replace(re, "");

 fl = "";
 if(isNaN(num)){
  alert(!"문자는 사용할 수 없습니다.");
  obj.value = "";
  return 0;
 }

 //if(num==0) return num;

 if(num<0){
  num = num * (-1);
  fl = "-";
 }else{
  num = num * 1; //처음 입력값이 0부터 시작할때 이것을 제거한다.
 }


 num = new String(num);
 temp = "";
 co = 3;
 num_len = num.length;

 if( parseInt(number) < num_len ){
  num = num.substr(0, num_len-1);
  num_len = num_len - 1;
 }

 while(num_len>0){
  num_len = num_len-co;
  if(num_len < 0){
   co = num_len + co;
   num_len = 0;
  }
  temp = "," + num.substr(num_len, co) + temp;
 }

 if(indexInt <= 0) {
  obj.value =  fl+temp.substr(1)+jjum;
 }else{
  if( parseInt(maxDecimal) + 1 >= jjum.length ){ // 추가된 조건
   if(indexInt > 4) {
    obj.value =  fl+temp.substr(1);
    obj.focus();
    obj.value = obj.value+jjum;
   }else{
    obj.value =  fl+temp.substr(1)+jjum;
   };
  } else{
   obj.value = (obj.value+jjum).substr(0, nLength-1);
  };
 };
}

/* ===================================================================
 Function : moneyStrForm(str)
 Return   :
 Usage   : 문자열로 입력을 받아 변환한 문자열을 넘겨준다.
=================================================================== */
function moneyStrForm(str){
 str = ""+str+"";
 var retValue = "";
 var number = new Number(str);

 // 음수인 경우 "-" 제거하고 "," 처리
 if( number < 0 ) str = str.substring(1);

 for(var i=0; i<str.length; i++){
  if(i > 0 && (i%3)==0){
   retValue = str.charAt(str.length - i -1) + "," + retValue;
  }else{
   retValue = str.charAt(str.length - i -1) + retValue;
  };
 }

 // 음수인 경우 "-"를 붙혀준다.
 if( number < 0 ) retValue = "-" + retValue;

 return retValue;
}

/* ===================================================================
 Function : selectList()
 Return :
 작성자   : 변지하(whitedawn@hanmail.net) (2003-07-21)
 Parameter : controlToPopulate(form 객체 select),
    ItemArray(값 배열), ItemCodeArray(Code 배열)
 Usage : select box에 선택창을 나타나게 하기위한 function
=================================================================== */
function selectList( controlToPopulate, ItemArray, ItemCodeArray )
{
 myEle = document.createElement("option") ;
 myEle.value = 0 ;

 for (var x = 0; x < ItemArray.length; x++) {
  myEle = document.createElement("option") ;
  myEle.value = ItemCodeArray[x] ;
  myEle.text = ItemArray[x] ;
  controlToPopulate.add(myEle) ;
 };
}

/* ===================================================================
 Function : commaCut(money)
 Return   :
 Usage   : 입력된 문자열의 ','를 없앤 문자열을 리턴한다.
=================================================================== */
function commaCut(money){
 if(money == '') return '';
 return money.split(",").join("");
}

/* ===================================================================
 Function : slashCut(date)
 Return   :
 Usage   : 입력된 날짜의 '/'를 없앤 문자열을 리턴한다.
=================================================================== */
function slashCut(date){
 return date.split("/").join("");
}


/* =============================================================================
 Function : fSearch()
 Return   :
 Usage   : 조회 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fSearch() {

}


/* =============================================================================
 Function : fInsert()
 Return   :
 Usage   : 입력 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fInsert() {

}


/* =============================================================================
 Function : fUpdate()
 Return   :
 Usage   : 수정 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fUpdate() {

}


/* =============================================================================
 Function : fDelete()
 Return   :
 Usage   : 삭제 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fDelete() {

}


/* =============================================================================
 Function : fInit()
 Return   :
 Usage   : 초기화 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fInit() {

}


/* =============================================================================
 Function : fPrint()
 Return   :
 Usage   : 출력 버튼이 클릭되었을때 호출되는 함수
============================================================================= */
function fPrint() {

}


/* =============================================================================
 Function : fEnd()
 Return   :
 Usage   : 실행된 프로그램을 종료한다.
   body frame에 실행된 프로그램은 index.html로 이동하고,
   팝업창으로 실행된 프로그램은 open된 팝업창을 close 시킨다.
============================================================================= */
function fEnd() {

 if (!opener) {
  location.href = "/view/common/cm_mainbody.html";
 } else {
  self.close();
 }

}

/*=============================================================================
 Function : reportSendForm()
 Return   :
 Usage   : 레포트 SUBMIT
 작성자   :
=============================================================================*/
function reportSendForm(pFrm) {
      if(EncForm(pFrm)) {
        pFrm.target = "report";
        pFrm.submit();
        return true;
    } else {
        alert(!"데이타 암호화 도중에 문제가 발생했습니다.");
        return false();
    }
}

/*=============================================================================
 Function : fJohapno()
 Return   :
 Usage   : [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용, 조합원번호 5자리를 맞춘다.
            한글 입력시 경고창!
 작성자   :
=============================================================================*/
function fJohapno(str) {
 var frm = document.frm ;
 var johapno = frm.JOHAPNO.value;
 var johapLg = eval(johapno.length);

 if(!fKoreanCheck(johapno)){
  alert(!"조합원번호가 정확하지않습니다.");
  frm.JOHAPNO.value = "";
  return;
 }
 if(str == "1") {
  if(eval(johapLg) < 5) {
   /* 조합원 번호 생성 */
   fJohapProc('JO');
  };
 }else{
  if(event.keyCode == "9") {
   /* 조합원 번호 생성 */
   fJohapProc('JO');
  };
 }

 if(eval(johapLg) == 5) {
  frm.JOHAPNO.value = johapno.toUpperCase();
 };
}

/*=============================================================================
 Function : fJohapnoGrdSS()
 Return   :
 Usage   : [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용, 시트에서 조합원번호 5자리를 맞춘다.
            한글 입력시 경고창!
 수정   : 변지하(기능은  fJohapno 와 같다. 오류가 발생하면 true를 리턴한다.)
=============================================================================*/
function fJohapnoGrdSS(grdSS, col, row) {

 // 해당 row와 col를 셋팅
 grdSS.Row = row;
 grdSS.Col = col;

 var johapno = trim(grdSS.text); // 조합원번호 셋팅
 var johapLg = eval(johapno.length);

 if(!fKoreanCheck(johapno)){
  alert(!"조합원번호가 정확하지않습니다.");
  grdSS.text = "";
  return true;
 }

 if(eval(johapLg) < 5) {
  /* 조합원 번호 생성 */
  johapno = fJohapProcGrdSS(johapno);

  if (johapno == "") {
   alert(!"조합원번호 생성중 오류!!");
   grdSS.text = "";
   return true;
  };
 }

 if(eval(johapLg) == 5) {
  johapno = johapno.toUpperCase();
 }

 grdSS.text = johapno;

 // 성공
 return false;
}


/*=============================================================================
 Function : fJohapProcGrdSS()
 Return   :
 Usage   : [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용, 조합원번호 5자리를 맞춘다.
 수정자   : 변지하(조합원번호를 생성 하고 생성된 번호를 리턴한다.
                   시트에서 사용 한다. fJohapProc과 기능은 같다.)
=============================================================================*/
function fJohapProcGrdSS(str) {

 var pJohapno = str; // 조합원번호
 var vJohapnoLength = eval(pJohapno.length);
 var zero = "";
 var vJohapno = "";

 /* Mouse key Click.. */
 if(eval(vJohapnoLength) < 5) {

  if(eval(vJohapnoLength) <= 0 || eval(vJohapnoLength) > 4 ) {
   return ""; // 오류
  }

  /* 조합원 번호 생성
   * '0'을 붙여 조합원 번호를 완성한다.
   */
  for(var i = 0; i < (5-vJohapnoLength); i++) {
   zero += "0";
  }

  if(isNumber2(pJohapno, '0123456789') == true){

   // 부족한 자리수만큼 앞자리에 '0' 을 붙여준다.
   vJohapno = zero + pJohapno;

  } else {

	   //조합원번호 전체가 수가 아닌경우(비조합원인경우)
	
	   // 뒷자리에 '0' 을 붙여준다.
	   vJohapno = (pJohapno.toUpperCase()).charAt(0) + zero ;
	   for (i=1; i < vJohapnoLength; i++) {
		   vJohapno +=  pJohapno.charAt(i);
	   };
  }

  return vJohapno;
 } else {
  return "";
 };
 
}

/*=============================================================================
 Function : isNumber2()
 Return   :
 Usage   : 입력받은 값이 숫자인지체크
 작성자   :
=============================================================================*/
function isNumber2(str, chars) {
    for (var inx = 0; inx < str.length; inx++) {
       if (chars.indexOf(str.charAt(inx)) == -1)
           return false;
    }
    return true;
}


/*=============================================================================
 Function : fYdYsJohapno()
 Return   :
 Usage   : [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용, 조합원번호 5자리를 맞춘다.
            한글 입력시 경고창!
 작성자   :
=============================================================================*/
function fYdYsJohapno(str, gubun) {

 var frm = document.frm ;
 var johap = "";
 var johapno = "";

 if (gubun == "YD") {
  johap = frm.YDJOHAPNO;
 } else {
  johap = frm.YSJOHAPNO;
 }

 johapno = johap.value;

 var johapLg = eval(johapno.length);

 if(!fKoreanCheck(johapno)){
  alert(!"조합원번호가 정확하지않습니다.");
  johap.value = "";
  return;
 }
 if(str == "1") {
  if(eval(johapLg) < 5) {
   /* 조합원 번호 생성 */
   if (gubun == "YD") {
    fJohapProc('YD');
   } else if(gubun == "YS"){
    fJohapProc('YS');
   } else {
    fJohapProc('SC');
   };

  };
 }else{
  if(event.keyCode == "9") {
   /* 조합원 번호 생성 */
   if (gubun == "YD") {
    fJohapProc('YD');
   } else if(gubun == "YS"){
    fJohapProc('YS');
   } else {
    fJohapProc('SC');
   };
  };
 }

 if(eval(johapLg) == 5) {
  johap.value = johapno.toUpperCase();
 };
}

/*=============================================================================
 Function : johapnoClick()
 Return   :
 Usage   : [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용, 조합원번호 5자리를 맞춘다.
 작성자    :
=============================================================================*/
function fJohapProc(str) {
 var frm = document.frm ;
 var pJohapno = "";
 var johapno = "";
 if(str == "JO") {
  pJohapno = frm.JOHAPNO.value;
  johapno = frm.JOHAPNO;
 }else if (str == 'YS') {
  pJohapno = frm.YSJOHAPNO.value;
  johapno = frm.YSJOHAPNO;
 }else if (str == 'YD') {
  pJohapno = frm.YDJOHAPNO.value;
  johapno = frm.YDJOHAPNO;
 }else if (str == 'SC') {
  pJohapno = frm.SCJOHAPNO.value;
  johapno = frm.SCJOHAPNO;
 }
 var vJohapnoLength = eval(pJohapno.length);
 var zero = "";
 var vJohapno = "";
 var vChkVL = false;

 /* Mouse key Click.. */
 if(eval(vJohapnoLength) < 5) {
  if(eval(vJohapnoLength) <= 0 || eval(vJohapnoLength) > 4 ) {
   pJohapno = "";
   return;
  }

  /* 조합원 번호 생성
   * '0'을 붙여 조합원 번호를 완성한다.
   */
  for(var i = 0; i < (5-vJohapnoLength); i++) {
   zero += "0";
  }

  if(isNumber(johapno) == true){
   vJohapno = zero+pJohapno;
   johapno.value = vJohapno;
  } else {
   vJohapno = (pJohapno.toUpperCase()).charAt(0) + zero ;
   for (var i=1; i < vJohapnoLength; i++)
   {
    vJohapno +=  pJohapno.charAt(i);
   }
   johapno.value = vJohapno;
  }
  return true;
 } else {
  return false;
 };
}

/*=============================================================================
 Function : johapnoKeyup()
 Return   : 조합원정보
 Usage   : 조합원 찾기 Auto Commit..
       [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용. 한글 입력시 경고창!
 작성자  :
=============================================================================*/
function fJohapInfo(str) {
 // Shift + Tab 조합키 사용시 사용불가 처리..
 if(event.keyCode == 9 || event.keyCode == 16) {
  return;
 }
 fJohapInfoTwo('JO'+str);
}

/*=============================================================================
 Function : johapnoKeyup()
 Return   : 조합원정보
 Usage   : 조합원 찾기 Auto Commit..
       [안내]태그제한으로등록되지않습니다-xxonblur!, [안내]태그제한으로등록되지않습니다-xxonkeyup Event에 적용. 한글 입력시 경고창!
 작성자  :
=============================================================================*/
function fJohapInfoTwo(str) {

 var frm = document.frm;
 var johapno = "";
 var sangho  = "";
 var jijumnm = "";

 var strTwo  = str.substring(2,3);
 var strGB  = str.substring(0,2);

 // Shift + Tab 조합키 사용시 사용불가 처리..
 if(event.keyCode == 9 || event.keyCode == 16) {
  return;
 }

 if(strGB == 'JO' || strGB == 'MN') {
  johapno = frm.JOHAPNO.value;
  sangho  = frm.SANGHO.value;
  jijumnm = frm.JIJUMNM.value;
  /* 한글 입력시 */
  if (!fKoreanCheck(johapno)) {
   frm.JOHAPNO.value = "";
   alert(!"조합원번호는 숫자만 가능합니다.");
   return;
  };
 }else if (strGB == 'YS') {
  johapno = frm.YSJOHAPNO.value;
  sangho  = frm.YSSANGHO.value;
  jijumnm = frm.YSJIJUMNM.value;
  /* 한글 입력시 */
  if (!fKoreanCheck(johapno)) {
   alert(!"조합원번호는 숫자만 가능합니다.");
   frm.YSJOHAPNO.value = "";
   return;
  };
 }else if (strGB == 'YD') {
  johapno = frm.YDJOHAPNO.value;
  sangho  = frm.YDSANGHO.value;
  jijumnm = frm.YDJIJUMNM.value;
  /* 한글 입력시 */
  if (!fKoreanCheck(johapno)) {
   alert(!" 조합원번호는 숫자만 가능합니다.");
   frm.YDJOHAPNO.value = "";
   return;
  };
 }else if (strGB == 'SC') {
  johapno = frm.SCJOHAPNO.value;
  sangho  = frm.SCSANGHO.value;
  jijumnm = frm.SCJIJUMNM.value;
  /* 한글 입력시 */
  if (!fKoreanCheck(johapno)) {
   alert(!"조합원번호는 숫자만 가능합니다.");
   frm.SCJOHAPNO.value = "";
   return;
  };
 }

 var johapLg = eval(johapno.length);
 var vChkVL = false;

 if(strTwo == "1" ) {//[안내]태그제한으로등록되지않습니다-xxonblur!
  if(eval(johapLg) == 5) {
   vChkVL = true;
  }else{
   /* 조합원 번호 생성 */
   vChkVL = fJohapProc(strGB);
  };
 }else {//[안내]태그제한으로등록되지않습니다-xxonkeyup
  /* Tab 키 작동 */
  if(eval(johapLg) == 5) {
   /* 조합원 번호 생성 */
   vChkVL = true;
   johapno.toUpperCase();
  }else if(event.keyCode == "9") {
   /* 조합원 번호 생성 */
   vChkVL = fJohapProc(strGB);
  };
 }

 if(vChkVL){
  /*
   if(sangho == "" || jijumnm == "")
  {*/
   if(eval(johapLg) == 5)
   {
    if(strGB == 'JO'|| strGB == 'MN') {
     frm.JOHAPNO.value = johapno.toUpperCase();
     setJohap(frm.JOHAPNO);
     frm.HBUSEO.value = strGB;
    }else if(strGB == 'YS') {
     frm.YSJOHAPNO.value = johapno.toUpperCase();
     setJohap(frm.YSJOHAPNO);
     frm.YSHBUSEO.value = strGB;
    }else if(strGB == 'YD') {
     frm.YDJOHAPNO.value = johapno.toUpperCase();
     setJohap(frm.YDJOHAPNO);
     frm.YDHBUSEO.value = strGB;
    }else if(strGB == 'SC') {
     frm.SCJOHAPNO.value = johapno.toUpperCase();
     setJohap(frm.SCJOHAPNO);
     frm.SCHBUSEO.value = strGB;
    };
   }else{
    if(strGB == 'JO' || strGB == 'MN') {
     setJohap(frm.JOHAPNO);
     frm.HBUSEO.value = strGB;
    }else if(strGB == 'YS') {
     setJohap(frm.YSJOHAPNO);
     frm.YSHBUSEO.value = strGB;
    }else if(strGB == 'YD') {
     setJohap(frm.YDJOHAPNO);
     frm.YDHBUSEO.value = strGB;
    }else if(strGB == 'SC') {
     setJohap(frm.SCJOHAPNO);
     frm.SCHBUSEO.value = strGB;
    };
   }

   // 페이지 이벤트 발생을 방지한다.
   //setLoading(true);
   if( strGB == 'MN' ) { // 관리에서만 사용

    frm.target = "iframe";
    frm.action.value = "johapInfo";
    frm.worker.value = "management.MNZkwBean";
    sendForm(frm);

   } else {
    frm.action.value = "takeSearch";
    frm.target = "iframe";
    frm.worker.value = "contribution.CBZCobaseBean";
    sendForm(frm);
   };

/*
  }else {
    return;
  }
*/
 }else{
  return;
 };
}

/*=============================================================================
 Function : OnJohapError()
 Return   :
 Usage   : 조합원 찾기, issueError 메시지 이후 처리..
 작성자   :
=============================================================================*/
/** call back event
 절대 이름 바꾸지 말것.
function OnJohapError(){
 frm.JOHAPNO.disabled = false;
}
*/

/*=============================================================================
 Function : setJohap(inputName)  inputName - input box 명(NAME)
 Return   : 조합원정보
 Usage   : disabled, background 처리
 작성자    :
=============================================================================*/
function setJohap(inputName) {
 inputName.disabled = true;
 //inputName.style.background = "#e2e2e2";
}

/*=============================================================================
 Function : resetJohap() - input box 명(NAME)
 Return   :
 Usage   : disabled, background 초기화
 작성자   :
=============================================================================*/
function resetJohap(inputName) {

 if(!inputName) {
  inputName = document.frm.JOHAPNO;
 }

 inputName.disabled = false;
 //inputName.style.background = "#ffffff";
}

/*=============================================================================
 Function : jahapPopup() - 조합원 검색팝업창을 호출하는 함수
 Return   :
 Usage   : disabled, background 초기화
 작성자   :
=============================================================================*/
function johapPopup() {
 var frm = document.frm;
 fGubunJohap('JO');
}
/*=============================================================================
 Function : jahapPopup() - 조합원 검색팝업창을 호출하는 함수
 Return   :
 Usage   : 조합원정보를 팝업창에서 호출한다.
 작성자   :
=============================================================================*/
function fGubunJohap(str) {
 var frm = document.frm;
 var vReturnArray = new Array();
 var LeftPosition = 0;
 var TopPosition  = 0;
/*
 if(str == 'JO' || str == 'MN') {
  if(isEmpty(frm.JOHAPNO) == false){
   return;
  }
 }else if(str == 'YS') {
  if(isEmpty(frm.YSJOHAPNO) == false){
   return;
  }
 }else if(str == 'YD') {
  if(isEmpty(frm.YDJOHAPNO) == false){
   return;
  }
 }
*/
// LeftPosition = (screen.width - 800)/2;  // 팝업창을 오른쪽에서 -20px 만큼 띄운다
 TopPosition  = (screen.height - 600); // 팝업창을 하단에서 -57px 만큼 띄운다

 vReturnArray = window.showModalDialog("/view/contribution/cbz_johapinfo_popup.jsp", "popup",
 "dialogWidth=800px; dialogHeight=507px; dialogleft=200; dialogtop="+TopPosition+"; center: No; help: No; resizable: No; status: No; scrollerable: No ");

 if (vReturnArray == null){
  return;
 }

 if(str == 'JO') {
  frm.JOHAPNO.value = vReturnArray[0]; //조합원번호
  frm.SANGHO.value  = vReturnArray[1]; //상호
  frm.JIJUMNM.value = vReturnArray[2]; //관할지점명
  frm.HBUSEO.value  = vReturnArray[3]; //지점코드
 }else if(str == 'YS') {
  frm.YSJOHAPNO.value = vReturnArray[0]; //조합원번호
  frm.YSSANGHO.value  = vReturnArray[1]; //상호
  frm.YSJIJUMNM.value = vReturnArray[2]; //관할지점명
  frm.YSHBUSEO.value  = vReturnArray[3]; //지점코드
 }else if(str == 'YD') {
  frm.YDJOHAPNO.value = vReturnArray[0]; //조합원번호
  frm.YDSANGHO.value  = vReturnArray[1]; //상호
  frm.YDJIJUMNM.value = vReturnArray[2]; //관할지점명
  frm.YDHBUSEO.value  = vReturnArray[3]; //지점코드
 }else if(str == 'SC') {
  frm.SCJOHAPNO.value = vReturnArray[0]; //조합원번호
  frm.SCSANGHO.value  = vReturnArray[1]; //상호
  frm.SCJIJUMNM.value = vReturnArray[2]; //관할지점명
  frm.SCHBUSEO.value  = vReturnArray[3]; //지점코드
 }else if(str == 'MN') {
  frm.JOHAPNO.value = vReturnArray[0]; //조합원번호
  fJohapInfoTwo('MN2'); // 조합원 정보조회
 };
}

/*=============================================================================
 Function : bjsnoPopup() - 보증서번호 검색팝업창을 호출하는 함수
 Return   :
 작성자   :
=============================================================================*/
function bjsnoPopup(p_bgyear,p_bjsno) {
    var frm = document.frm;
 var ret,obj = new Object();
 //김황수 추가
 //보증년도 보증서번호 필드명은 사용자가 재정의할수 있게
 // 넘어오는 컬럼명을 사용하게한다.
 if(!p_bgyear) p_bgyear = "BGYEAR";
 if(!p_bjsno) p_bjsno = "BJSNO";

 if(frm.JOHAPNO)
  obj.JOHAPNO = frm.JOHAPNO.value;
 if(frm.SANGHO)
  obj.SANGHO = frm.SANGHO.value;
 if(frm.BJJONG)
  obj.BJJONG = frm.BJJONG.value;
 if(frm.BGDATE)
  obj.BGDATE = frm.BGDATE.value;
 if(frm.JIJUMNM)
     obj.JIJUMNM = frm.JIJUMNM.value;
 if(frm.BGDATE01)
  obj.BGDATE01 = frm.BGDATE01.value;
 if(frm.SYSID)
  obj.SYSID = frm.SYSID.value;
 if(frm.elements[p_bgyear])
  obj.BGYEAR = frm.elements[p_bgyear].value;
 if(frm.elements[p_bjsno])
  obj.BJSNO = frm.elements[p_bjsno].value;
 if(frm.DGGU && frm.DGGU[0] && frm.DGGU[1])
  obj.DGGU = frm.DGGU[0].checked?1:2 ;

 obj.pForm = document.frm;

 var sUrl  = "/view/guarantee/etcjob/guz_bjnomain_popup.jsp";
 var sOpt = "dialogWidth=830px; dialogHeight=530px; center: Yes; ";
 sOpt += "help: No; resizable: No; status: No; scrollerable: No ";
 ret = window.showModalDialog(sUrl, obj, sOpt);

 if(ret && ret[0]) {
  if(frm.JOHAPNO)
   frm.JOHAPNO.value = ret[0]; //조합원번호

  if(frm.SANGHO)
   frm.SANGHO.value = ret[7]; //상호

  if(frm.JIJUMNM)
   frm.JIJUMNM.value = ret[8]; //지점

  if(frm.elements[p_bjsno])
   frm.elements[p_bjsno].value = ret[1]; //보증서번호

  if(frm.elements[p_bgyear])
   frm.elements[p_bgyear].value = ret[2]; //발급년도

  if(frm.BJJONG)
   frm.BJJONG.value = ret[3]; //보증종류


  if(frm.BJGUM)
   frm.BJGUM.value = ret[4]; //보증금액


//  if(frm.HJGUM)
//   frm.HJGUM.value = ret[5]; //해제금액

//  if(frm.SSRYO)
//   frm.SSRYO.value = ret[6]; //수수료

//SS_BGYEAR SS_BJJONG SS_BJAMT SS_HJAMT SS_SSRYO
 }

 /*
  * 관리 업무에서는 조합원의 상세정보가 필요하기 때문에
  * 추가작업(조합원정보상세조회)이 필요하다.
  */
 if(frm.SYSID){
  if(frm.SYSID.value == "MN") {
   setJohapReset();
   frm.BJGUM.value = "";

   fKWJohapInfo('1');
  };
    };

}

/*=============================================================================
 Function : 파라미터의 String 값이 한글이 있는지 없는지를 검사
 Return   :
 Usage   : 한글이 존재하면 false, 한글이 존재하지 않으면 true
 작성자    : 장영조
=============================================================================*/
function fKoreanCheck(str) {
 for(var i=0;i<str.length;i++) {
  var a=str.charCodeAt(i);
  if (a > 128) {
   return false;
  };
 }
 return true;
}


function invalidate() {
 if(parent) parent.invalidate();
}

/* ===================================================================
Function : getSaupNo()
Return   : 사업자번호(XXX-XX-XXXXX)
작성자   : 박세동 (gatayozzang@naver.com) (2003-10-07)
Usage    : 사업자번호 형식 변환(XXX-XX-XXXXX)
=================================================================== */
function getSaupNo( str ) {

 if (str == null || trim(str) == "") {
  return "";
 } // 일자가 없거나 "" 인경우 값을 "" 를 리턴한다.

 str = str.replace("/", "");
 var sa = str.substr(0, 3);
 var up = str.substr(3, 2);
 var no = str.substr(5, 5);

 return sa + "-" + up + "-" + no;
}
/* ===================================================================
 Function : bubinFormat(obj)
 Return   :
 Usage   : 법인번호 형식 입력 ([안내]태그제한으로등록되지않습니다-xxonKeyUp 이벤트)
=================================================================== */
function bubinFormat(obj){
 var str = onlyNum(obj.value);
 var leng = str.length;

 switch(leng){
  case  1 :
  case  2 :
  case  3 :
  case  4 :
  case  5 :
  case  6 : obj.value = str; break;
  case  7 :
  case  8 :
  case  9 :
  case 10 :
  case 11 :
  case 12 :
  case 13 : obj.value = str.substring(0, 6) + "-" + str.substring(6, 13);
 };
 return obj;
}

/* ===================================================================
 Function : saupnoFormat(obj)
 Return   :
 Usage   : 사업자 번호 형식 입력 ([안내]태그제한으로등록되지않습니다-xxonKeyUp 이벤트) - obj의 HTML상에 maxlength="12" 지정요
=================================================================== */
function saupnoFormat(obj){
 var str = onlyNum(obj.value);
 var leng = str.length;
 switch(leng){
  case  1 :
  case  2 :
  case  3 :obj.value = str; break;
  case  4 :
  case  5 :obj.value = str.substring(0, 3) + "-" + str.substring(3, 5); break;
  case  6 :
  case  7 :
  case  8 :
  case  9 :obj.value = str.substring(0, 3) + "-" + str.substring(3, 5) + "-" + str.substring(5, 10);break;
  default :break;
 }
 return obj;
}

/* ===================================================================
 Function : vSeqNumber(input, num)
 Return   :
 Usage   : 사업자 번호 형식 입력 ([안내]태그제한으로등록되지않습니다-xxonKeyUp 이벤트)
=================================================================== */
function vSeqNumber(input, num) {
 var zero = "";
 var values = input.value.trim();
 if(values == "") {
  return;
 }

 for(i = 0; i < (eval(num) - eval(values.length)); i++) {
  zero += "0";
 }
 input.value = zero+values;
}

 

/* =============================================================================
 Function : linkAuthCheck(psPgmid, psUrl, psGubun, psTarget, psStyle, psModalyn)
 Return   :
 Usage   : 링크프로그램의 사용자 버튼권한을 체크한다.
          psPgmid - 권한체크대상 프로그램, psUrl - 호출될 페이지,
          psGubun(Y/N) 팝업여부, psTarget - 팝업target,
          psStyle - 팝업스타일, psModalyn - 팝업모달여부,
          psPostParam - Post방식으로 넘겨야할 파라미터
          psGetParam - Get방식으로 넘겨야할 파라메터.
           ex) 'SABUN=value1,NAME=value2,...'
============================================================================= */
var _GETPARAM;//get방식에서 사용하는 전역변수(변수명충돌을 막기위해 _로시작한다)
var _OBJ;
var GET_PARAM;
function befLinkAuthCheck(psPgmid, psUrl, psGubun, psTarget, psStyle, psModalyn, psPostParam, psGetParam) {
 AuthCheckForm.PGMID.value = psPgmid;
 AuthCheckForm.LINKURL.value = psUrl;

 if (psGubun) AuthCheckForm.POPUPYN.value = psGubun;
 else AuthCheckForm.POPUPYN.value = 'N';
 if (psTarget) AuthCheckForm.TARGET.value = psTarget;
 if (psStyle) AuthCheckForm.STYLE.value = psStyle;
 if (psModalyn) AuthCheckForm.MODALYN.value = psModalyn;
 else AuthCheckForm.MODALYN.value = 'N';

 if(AuthCheckForm.MODALYN.value == "Y"){
  _OBJ = psPostParam;
 }

 // Post로 넘겨야할 파라미터 값이 존재한다면
 if (psPostParam && psPostParam != null) {
  var cHtml1 = "<INPUT TYPE=HIDDEN NAME=";
  var cHtml2 = " VALUE=\"";
  var cHtml3 = "\">";
  var params = psPostParam.split(',');
  var iLen = params.length;
  var buf='';
  for (var i=0; i<iLen; i++) {
   param = trim(params[i]).split('=');
   var obj = eval("AuthCheckForm2."+param[0]);
   if (!obj) {
    AuthCheck.insertAdjacentHTML("BeforeEnd", cHtml1 + param[0] + cHtml2 + param[1] + cHtml3);
   } else {
    obj.value = param[1];
   };
  };
 }

 //Get 방식으로 넘겨야할 값.
 _GETPARAM = psGetParam;

 AuthCheckForm.target = "iframe";
 AuthCheckForm.action.value = "PgmAclInfo";
 AuthCheckForm.worker.value = "common.linkAuth.CMPgmAclBean";

 sendForm(AuthCheckForm);
}

/* =============================================================================
 Function : aftLinkAuthCheck()
 Return   :
 Usage   : 체크된 권한을 통해 설정된 페이지를 호출한다.
============================================================================= */
function aftLinkAuthCheck() {
 var sUrl = AuthCheckForm.LINKURL.value + '/' + AuthCheckForm.PGMID.value;
 //get /post방식을 병행해서 사용하기위해 추가.
 if(_GETPARAM) sUrl += "?"+_GETPARAM;
 //AuthCheckForm2.MENUID.value = AuthCheckForm.MENUID.value;
 AuthCheckForm2.PGMID.value = AuthCheckForm.PGMID.value;
 AuthCheckForm2.MENULOCATION.value = AuthCheckForm.MENULOCATION.value;
 AuthCheckForm2.POPUPYN.value = AuthCheckForm.POPUPYN.value;
 AuthCheckForm2.action = sUrl;

 if (AuthCheckForm.POPUPYN.value == 'Y') {  // 팝업창으로 호출
  AuthCheckForm2.target = AuthCheckForm.TARGET.value;
  if (AuthCheckForm.MODALYN.value == 'Y') {
   //EncModal('', '', AuthCheckForm.TARGET.value, AuthCheckForm.STYLE.value);
   // GET_PARAM = window.showModalDialog('', AuthCheckForm.TARGET.value, AuthCheckForm.STYLE.value, _OBJ);
   GET_PARAM = window.showModalDialog(sUrl, AuthCheckForm.TARGET.value, AuthCheckForm.STYLE.value, _OBJ);
  } else {
   //EncLink('', '', AuthCheckForm.TARGET.value, AuthCheckForm.STYLE.value);
   /*window.open*/('', AuthCheckForm.TARGET.value, AuthCheckForm.STYLE.value);
  };
 } else {
  AuthCheckForm2.MENUID.value='';
 }

 AuthCheckForm2.submit();
}


/* =============================================================================
 Function : openLinkPgm(psPgmUrl, psPgmId, psBtrole, psParameters, menuid)
 Return   :
 Usage   : psParameters는 ex) 'SABUN=V1,NAME=V2,JCCD=V3,....&Y&formname' 형식으로 입력한 값이다.
     마지막 Y값은 modal(Y), modaless(N) 여부이다.
============================================================================= */
function openLinkPgm(psPgmUrl, psPgmId, psBtrole, psParameters, psMenuLocation, psMenuId) {
 var sModalyn = 'N';
 var arr = psParameters.split('&');
 var targetFrm;
 if (arr.length == 2) {
  sModalyn = arr[1];
 } else if (arr.length == 3) {
  targetFrm = eval(arr[2]);
 }
 // create form field
 var encData = setFormParameter(arr[0], targetFrm);
 if (encData == null) {
  alert(!" 폼 데이터가 맞는 것이 없습니다. form name을 확인하여 주십시오.");
  return;
 }
 encData += "&PGMID=" + psPgmId;
 if (psMenuId) {
  encData += "&MENUID=" + psMenuId;
 }
 encData += "&MENULOCATION="+psMenuLocation;
 encData += "&BTROLE=" + psBtrole;
 encData += "&POPUPYN=Y";

 // open popup window and send post method
 var url = psPgmUrl + "/" + psPgmId;
 // var target = "linkprogram";
 var target = "";
 var style1 = "width=820,height=610,personalbar=0,scrollbars=1,menubar=0,toolbar=0,status=1,resizable=1";
 var style2 = "dialogWidth=850px; dialogHeight=640px; center: Yes; help: No; resizable: Yes; status: Yes; scrollerable: Yes";
 if (sModalyn == 'N') {
  EncLink(url, encData, target, style1);
 } else {
  EncModal(url, encData, target, style2);
 };
}

 

/* =============================================================================
 Function : setFormParameter(psParameters, pFrm)
 Return   :
 Usage   : parent form의 parameter값을 setting한다.
     form의 elements중에 parameter이름과 같은 element의 값을 세팅한다.
     부모의 form이름은 "frm"으로 고정한다. pFrm이 입력되지 않으면
     document.frm으로 고정시킨다.
============================================================================= */
function setFormParameter(psParameters, pFrm) {
 var encData = "";
 var frm;
 if (pFrm) {
  frm = pFrm;
 } else {
  frm = document.frm;
 }

 // check form 여부
 if (!frm) {
  return frm;
 }

 var len = frm.elements.length;
 var formParameter = psParameters.split(",");
 for (var i=0; i<formParameter.length; i++) {
  var temp = formParameter[i].split("=");
  if (encData == "") encData += temp[0];
  else encData += "&" + temp[0];

  encData += "=" + getParentFormData(frm, len, temp[0]);
 }

 return encData;
}


/* =============================================================================
 Function : getParentFormData(pForm, piLen, psFieldNm)
 Return   :
 Usage   : 주어진 form에 같은 field이름이 있는지 확인하여 있다면 해당 field의
         값을 리턴한다.
============================================================================= */
function getParentFormData(pForm, piLen, psFieldNm) {
 for (var i=0; i<piLen; i++) {
  element = pForm.elements[i];
  // form field name이 같다면
  if(element.name == psFieldNm) {
   return element.value;
  };
 }
 return "";
}


/* =============================================================================
 Function : changeButton(pName, pImgName)
 Return   :
 Usage   : 입력된 param pName에 따른 id를 가진 이미지 객체의 src를 pImgName로 바꾸어준다.
          pName - 입력(insert), 수정(update), 삭제(delete), 초기화(init), 조회(search), 출력(print)
          pImgName - 이미지명(실제파일명, 확장자.gif를 제외한 파일명을 입력하면 된다.)
          check_role1 = 10 [조회-출력]
          check_role2 = 1010 [입력-수정-삭제-초기화]
          check_btrole = 101010[조회-입력-삭제-수정-출력-초기화]
============================================================================= */
var check_role1 = null;
var check_role2 = null;
var check_btrole = null;
function changeButton(pName, pImgName) {
 if (!check_role1) check_role1 = '00';
 if (!check_role2) check_role2 = '0000';
 if (!check_btrole) check_btrole = '000000';
 if (pName && pImgName) {
  var imgsrc = "/images/" + pImgName;
  var imgObj = eval("document.all.btn_" + pName);
  if (!imgObj) {
   return;
  }

  // 입력권한체크
  if (pName == 'insert' && '1' == check_btrole.charAt(1)) {
   if ('1' == check_role2.charAt(0)) {  // 입력권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {        // 입력권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };

  // 수정권한체크
  } else if (pName == 'update' && '1' == check_btrole.charAt(3)) {
   if ('1' == check_role2.charAt(1)) {  // 수정권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {        // 수정권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };

  // 삭제권한체크
  } else if (pName == 'delete' && '1' == check_btrole.charAt(2)) {
   if ('1' == check_role2.charAt(2)) {  // 삭제권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {        // 삭제권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };

  // 초기화권한체크
  } else if (pName == 'init' && '1' == check_btrole.charAt(5)) {
   if ('1' == check_role2.charAt(3)) {  // 초기화권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {        // 초기화권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };

  // 조회권한체크
  } else if (pName == 'search' && '1' == check_btrole.charAt(0)) {
   if ('1' == check_role1.charAt(0)) {  // 조회권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {          // 조회권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };

  // 출력권한체크
  } else if (pName == 'print' && '1' == check_btrole.charAt(4)) {
   if ('1' == check_role1.charAt(1)) {  // 출력권한 있음.
    imgObj.src = imgsrc + ".gif";
   } else {        // 출력권한 없음
    imgObj.src = imgsrc + "_di.gif";
   };
  };
 };
}

/* =============================================================================
 Function :  moveNext(num, current_form, move_form)
 Return   :
 Usage   : 정해진 자릿수를 채우면 지정된 폼으로 넘어간다.
============================================================================= */
function moveNext(num, current_form, move_form) {

 /*
  2004-01-16 구태영(관리팀)

  move_form 에서 Shift + TAB으로 current_form 으로 이동시
  current_form에 num 만큼의 문자가 있을 경우 자동으로 move_form 으로 이동합니다.
  -> Shift(16), Tab(9), 방향키(38~40)를 제거
 */
 if( event.keyCode == 9 || event.keyCode == 16 || (event.keyCode >= 37 && event.keyCode <= 40) ) {
  current_form.focus();
  return;
 }


 var number = num;
 if (current_form.value.length==number){
  move_form.focus();
  return;
 };
}

/*===================================================================
  Function    : chkTextLength(obj,num)
  Return      :
  Usage    : text 길에 체크 ([안내]태그제한으로등록되지않습니다-xxonKeyUp 이벤트:jsp사용 )
      영문과 한글이 같이 입력될때 byte수를 체크해서 num값을
      넘을시에 경고 메세지와 넘는부분을 제거한다.
      ex)[안내]태그제한으로등록되지않습니다-xxonKeyUp="chkTextLength(this,200);"
  ===================================================================*/
function chkTextLength(obj,num){

 var str     = obj.value;   // 이벤트가 일어난 컨트롤의 value 값
 var leng  = str.length;  // 전체길이

 var i        = 0;  // for문에 사용
 var strByte  = 0;  // 한글일경우는 2 그밗에는 1을 더함
 var totalLeng= 0;  // substring하기 위해서 사용
 var checkChar= ""; // 한글자씩 검사한다
 var limitStr = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.

 for(i=0; i< leng; i++){

  checkChar = str.charAt(i);

  if (escape(checkChar).length > 4){
   strByte += 2;
  }else{
   strByte++;
  }

  if(strByte <= num){
   totalLeng = i + 1;
  };
 }

 if(strByte > num){
  limitStr = str.substr(0, totalLeng);
  document.body.focus();
  obj.value = limitStr;
  obj.focus();
 };

}


/* 텍스트 필드 BackGround 색깔 변경
  disalbed , enabled 에 따라 인자값은 "텍스트 필드면", "true : disalbed / false : enabled"
 */
function setBackColor(objname, bln){
 var disabledColor = "#e1ebf7";   //disabled 되었을때 색깔
 var enabledColor  = "#ffffff";    // enabled 되었을때 색깔.
 var colorObj = objname.style;

 if (bln){ // true 면 disabled
  colorObj.backgroundColor = disabledColor;
 } else {// false 면 disabled
  colorObj.backgroundColor = enabledColor;
 };
}
//색깔과 disabled여부를 모두 처리
function setDisabled(objname, bln){
 var disabledColor = "#e1ebf7";   //disabled 되었을때 색깔
 var enabledColor  = "#ffffff";    // enabled 되었을때 색깔.
 var colorObj = objname.style;

 if (bln){ // true 면 disabled
  objname.disabled = true;
  colorObj.backgroundColor = disabledColor;
 } else {// false 면 disabled
  objname.disabled = false;
  colorObj.backgroundColor = enabledColor;
 };
}
/*===================================================================
  Function    : fDisabledInit(obj)
  Return      :
  Usage    : Form 필드 (Disabled, Readonly) Color('#e1ebf7') 변경 처리
====================================================================*/
function fDisabledInit(obj){
 if(obj){
  for(var i=0;i<obj.elements.length;i++){
   if(obj.elements[i].disabled){
    obj.elements[i].style.backgroundColor = "#e1ebf7";
   }//end if
   if(obj.elements[i].readOnly){
    obj.elements[i].style.backgroundColor = "#e1ebf7";
   };//end if
  };//end for
 };//end if
}//end fun

/*===================================================================
  Function    : fDisabledInit2(obj, String)
  Return      :
  Usage      : Form 필드 (Disabled) Color('#e1ebf7') 변경 처리

====================================================================*/
function fDisabledInit2(obj, exObjname){
 if(obj){
  for(var i=0;i<obj.elements.length;i++){
   /*if(obj.elements[i].disabled || obj.elements[i].readOnly){
    if (obj.elements[i].name != exObjname){
     obj.elements[i].style.backgroundColor = "#e1ebf7";
    }
    else {
     obj.elements[i].style.backgroundColor = "white";
    }
   }//end if
   else {
    obj.elements[i].style.backgroundColor = "white";
   }*/

   if(obj.elements[i].disabled){
    if (obj.elements[i].name != exObjname){
     obj.elements[i].style.backgroundColor = "#e1ebf7";
    } else {
     obj.elements[i].style.backgroundColor = "";
    };
   } else if (obj.elements[i].readOnly){
    if (obj.elements[i].name != exObjname){
     obj.elements[i].style.backgroundColor = "#e1ebf7";
    } else {
     obj.elements[i].style.backgroundColor = "";
    };
   } else {
    obj.elements[i].style.backgroundColor = "";
   };

  };//end for
 };//end if
}//end fun


/*===================================================================
  Function    : setBackColor2(obj)
  Return      :
  Usage    : Form 필드 (Disabled, Readonly) Color('#e1ebf7') 변경 처리
      텍스트 필드 BackGround 색깔 변경
      obj : 인풋 객체
====================================================================*/
function setBackColor2(objname){
 var disabledColor = "#e1ebf7";   //disabled 되었을때 색깔
 var enabledColor  = "#ffffff";    // enabled 되었을때 색깔.
 var colorObj = objname.style;

 if (objname.disabled || objname.readonly){ // true 면 disabled
  colorObj.backgroundColor = disabledColor;
 } else {// false 면 disabled
  colorObj.backgroundColor = enabledColor;
 };
}

/*===================================================================
  Function    : fSetBackColor(obj)
  Return      :
  Usage    : Form 필드 (Disabled) Color('#e1ebf7') 변경 처리
====================================================================*/
function fSetBackColor(obj){
 if(obj){
  for(var i=0;i<obj.elements.length;i++){
   if(obj.elements[i].disabled){

    if (obj.elements[i].type == "text") {
     obj.elements[i].style.backgroundColor = "#e1ebf7";
    };

   } else if(!obj.elements[i].disabled){

    if (obj.elements[i].type == "text") {
     obj.elements[i].style.backgroundColor = "white";
    };

   } else if (obj.elements[i].readOnly) {

    if (obj.elements[i].type == "text") {
     obj.elements[i].style.backgroundColor = "#e1ebf7";
    };

   } else {

    if (obj.elements[i].type == "text") {
     obj.elements[i].style.backgroundColor = "white";
    };

   };
  };
 };
}

/*===================================================================
 Function    : fCheckByte(obj, byteNum)
 Return      :
 Usage       : 한글, 영문, 숫자등 Byte단위로 체크한다.
====================================================================*/
function fCheckByte(obj, byteNum){

 var tmpStr;

 tmpStr = obj.value;

 var temp = 0;
 var onechar;
 var tcount;
 tcount      = 0;

 temp = tmpStr.length;

 for (var k = 0 ; k < obj.value.length ; k++){

   onechar = obj.value.charAt(k);
   if (escape(onechar) =='%0D') { } else if (escape(onechar).length > 4) { tcount += 2; } else { tcount++; };
 }


 if(tcount>byteNum) {
  reserve = tcount-byteNum;
  alert(!byteNum+" 자 이상 입력하실 수 없습니다.");
  fCutText(obj, byteNum);
  return false;
 }

 return true;
}

function fCutText(obj, byteNum){
 var tmpStr;
 var temp=0;
 var onechar;
 var tcount;
 tcount = 0;

 tmpStr = obj.value;
 temp = tmpStr.length;

 for(var k = 0 ; k < obj.value.length ; k++){

   onechar = obj.value.charAt(k);

   if(escape(onechar).length > 4) {
     tcount += 2;
   } else {
     // 엔터값이 들어왔을때 값(\r\n)이 두번실행되는데 첫번째 값(\n)이 들어왔을때 tcount를 증가시키지 않는다.
     if(escape(onechar)=='%0A') {
     } else {
       tcount++;
     };
   }

   if(tcount>byteNum) {
     tmpStr = tmpStr.substring(0,k);
     break;
   };

 }
 obj.value = tmpStr;
 fCheckByte(obj, byteNum);
}

/*===================================================================
 Function    : fNull2Zero()
 Return      :
 Usage       : 해당 값이 Null이거나 공백일 경우 0 을 리턴하여 준다.
====================================================================*/
function fNull2Zero(numVal){

 if (trim(numVal) == "" || trim(numVal) == "0"){
  return "0";
 }
 else {
  return numVal;
 }
}

// 길치체크시에 쓰임니당 이게 모지?
var TOG_WORD = '%0D';

/**
 * 한글 길이체크
 */
function fRbOnMaxkeydown(obj) {
 // 2004-01-29 한글(2byte) 문자 길이체크하여 입력 못하도록 막는다.
 if (obj.getAttribute("jsxlength") != null ) {
  chMsgLenho (obj);
  return;
 } else if (obj.getAttribute("maxLength") ) {
  obj.setAttribute("jsxlength", eval(obj.getAttribute("maxLength")));
  chMsgLenho (obj);
  return;
 }
}
//2004-01-29
// 길이 체크
function chMsgLenho(obj) {

 var keyVal=escape(event.keyCode);

 var iCounts = new Array();
 iCounts = getBLen(obj); //변수의 길이를 구하는 함수

 var iCur = obj.value.length; // 현재 문자열길이 - 2byte 고려 안함
 var curLength = iCounts[0];  // 현재 문자열길이 - 2byte 고려
 var addLength = iCounts[1];  // 입력후 문자열 길이 - 2byte 고려
 var maxLen = eval(obj.getAttribute("jsxlength")); // 입력받고자 하는 최대 문자열 길이

 var tmpMaxLen = maxLen - (curLength-iCur) ;
 var tmpAddLen = maxLen - (addLength-iCur) ;

 if (keyVal>128 && (addLength > tmpMaxLen && addLength <= tmpMaxLen+2)) {
  tmpMaxLen--;
  if (keyVal==229) {
      tmpMaxLen--;
  };
 }

  if (tmpAddLen+1 == iCur ) {
   event.returnVal = false;
   return;
  }

  obj.setAttribute("maxLength", tmpMaxLen);

}

/**
 * 2004-01-29
 * 한글일 경우에는 2byte를 그외의 문자는 1byte로 계산하여  iCounts에 저장하여 return 해준다.
 *  return iCounts[0] - 입력되기 전 글
 *     iCounts[1] - 입력받은 키가 있는 글
 */
function getBLen(obj,sMsgLng) {

 var keyVal=escape(event.keyCode);
 var sKey=String.fromCharCode(event.keyCode);
//alert(!keyVal);

//alert(!sKey);
 var sCurrMsg  = obj.value;
 var sAddMsg   = null;
 if (!(keyVal == 8||keyVal==9||keyVal==46||keyVal==32||keyVal==37||keyVal==39)) {
  if (keyVal>128) {
   sAddMsg = obj.value+'00';
  }else {
   sAddMsg = obj.value+'0';
  };
 } else {
  sAddMsg = obj.value;
 }

 var sTmpMsg    = '';    //메시지를 임시로 저장하는 변수
 var sTmpMsgLen = 0;     //임시로 저장된 메시지의 길이를 저장하는 변수
 var sOneChar   = '';    //한문자를 저장하는 변수
 var iCounts    = new Array();   //총 바이트와 페이지당 바이트 수를 저장하는 배열

 iCounts[0]=0;   //총 바이트를 저장 하는 변수

 if (sMsgLng != null) {
  sTmpMsg = new String(sMsgLng);
 } else
  sTmpMsg = new String(sCurrMsg);
 sTmpMsgLen = sTmpMsg.length;

 for (var k = 0 ;k < sTmpMsgLen ;k++) {
  sOneChar = sTmpMsg.charAt(k);
  if (escape(sOneChar) == TOG_WORD) {
   iCounts[0]++;
  } else if (escape(sOneChar).length > 4) {
   iCounts[0] += 2;
  } else  {
   iCounts[0]++;
  };
 }


 sTmpMsg    = '';    //메시지를 임시로 저장하는 변수
 sTmpMsgLen = 0;     //임시로 저장된 메시지의 길이를 저장하는 변수
 sOneChar   = '';    //한문자를 저장하는 변수

 iCounts[1]=0;   //총 바이트를 저장 하는 변수

 sTmpMsg = new String(sAddMsg);

 sTmpMsgLen = sTmpMsg.length;

 for (k = 0 ;k < sTmpMsgLen ;k++) {
  sOneChar = sTmpMsg.charAt(k);
  if (escape(sOneChar) == TOG_WORD) {
   iCounts[1]++;
  } else if (escape(sOneChar).length > 4) {
   iCounts[1] += 2;
  } else  {
   iCounts[1]++;
  };
 }
 return iCounts;
}

/* ===================================================================
 Function : moveJNext(num, move_form, Sysid)
 Return :
 Usage : 조합원 번호를 지우면 초기화 . event 발생후 move_form으로 이동.
=================================================================== */
function fMoveJNext(num, move_form, Sysid){
 var frm =document.frm;


 if(frm.JOHAPNO.value.length==num){
  moveNext(num, frm.JOHAPNO, move_form);

  if(Sysid == "MN"){     //관리용
   fKWJohapInfo('2');
  }else{
   fJohapInfo('2');
  };
 }

 if(frm.JOHAPNO.value.length<num && isEmpty(frm.SANGHO)==false){
  var johapno = frm.JOHAPNO.value;
  fInit();
  frm.JOHAPNO.value= johapno;
 };
}

/* ===================================================================
Function : cellphoneForm()
Return : 휴대폰 형식으로 바꾼다.
작성자 :
Usage : 0113214321  -> 011-321-4321
        01012345432 -> 010-1234-5432
=================================================================== */
function cellphoneForm(psData) {

 if (psData == null || psData == "") {
  return "";
 } // 일자가 없거나 "" 인경우 값을 "" 를 리턴한다.

 // 일자가 자릿수가 틀리면 틀린 날짜를 그대로 리턴한다.
 if (trim(psData) == "" ||  trim(psData).length < 10) {
  return psData;
 }

 var phone1 = psData.substr(0, 3);

 // 4번째 부터 뒤에서 5번째까지 의 앞번호
 var phone2 = psData.substr(3, (trim(psData).length - 4) -3);

 // 뒤에서 4개의 숫자를 자른다.
    var phone3 = psData.substr(trim(psData).length - 4, 4);

   return phone1 + "-" + phone2 + "-" + phone3;
}

/* ===================================================================
Function : phoneToData()
Return : 숫자형식으로 바꾼다.
작성자 : 변지하(whitedawn@hanmail.net) (2004-02-25)
Usage : 011-321-4321  -> 0113214321
        010-1234-5432 -> 01012345432
=================================================================== */
function phoneToData(psData) {

 if (psData == null || trim(psData) == "") {
  return "";
 } // 자료가 없거나 "" 인경우 값을 "" 를 리턴한다.

 return psData.split("-").join("");
};