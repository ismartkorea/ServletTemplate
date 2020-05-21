/**
 *
 * �ڹٽ�ũ��Ʈ �����Լ�
 *
 * ����: �Ʒ��� ��� �޼ҵ�� �Է����� �ʵ��̸�(form1.myfield)��
 *       �Ķ���ͷ� �޴´�. �ʵ��� ��(form1.myfield.value)�� �ƴ���
 *       ������ ��.
 *      ������ ���� �ʿ��� �Լ����� Ȯ���Ͻð� �̿�.
 *       �� ��, �� ������ �����Ͽ� �ʿ��� ��ũ��Ʈ�� �ִٸ� ������.js��
 *        ���·� ������ ����� ���. ���� ���丮�� js ���丮�� ����ȭ.
 *
 * @author  �����(LEE JAE WON, heyjae), heyjae@bcline.com
 * @version 1.0, 2003/02/24
 * @since   1.0
 *
 * Copyright. (c) 2003 by GNB soft co.,ltd
 * All rights followed GNU General Public License's free software policy.
 */

/**
 * �Է°��� NULL���� üũ
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * �Է°��� �����̽� �̿��� �ǹ��ִ� ���� �ִ��� üũ
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}

/**
 * �Է°��� Ư�� ����(chars)�� �ִ��� üũ
 * Ư�� ���ڸ� ������� ������ �� �� ���
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert(!"�̸� �ʵ忡�� Ư�� ���ڸ� ����� �� �����ϴ�.");
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
 * �Է°��� Ư�� ����(chars)������ �Ǿ��ִ��� üũ
 * Ư�� ���ڸ� ����Ϸ� �� �� ���
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert(!"������ �ʵ忡�� A,B,O ���ڸ� ����� �� �ֽ��ϴ�.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/* �ѱ��̿��� ĳ���Ͱ� ������� false
 * ���ڳ� ���� ������ ��� false
*/
function checkKoreanOnly( koreanChar ) {
   koreanChar = koreanChar.split(' ').join('');

   if ( koreanChar == null ) return false ;

   for(var i=0; i < koreanChar.length; i++){

     var c=koreanChar.charCodeAt(i);

     //( 0xAC00 <= c && c <= 0xD7A3 ) ���������� ���� �ѱ���
     //( 0x3131 <= c && c <= 0x318E ) ���� ����

     if( !( ( 0xAC00 <= c && c <= 0xD7A3 ) || ( 0x3131 <= c && c <= 0x318E ) ) ) {
        return false ;
     }
   }
   return true ;
}

/**
 * �Է°��� ���ĺ����� üũ
 * �Ʒ� isAlphabet() ���� isNumComma()������ �޼ҵ尡
 * ���� ���̴� ��쿡�� var chars ������
 * global ������ �����ϰ� ����ϵ��� �Ѵ�.
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
 * ���� �̿��� ĳ���Ͱ� ������� false
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
 * �Է°��� ���ĺ� �빮������ üũ
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ� �ҹ������� üũ
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ڸ� �ִ��� üũ
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/*
 * ���� �̿��� ĳ���Ͱ� ������� false
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
 * ���� �Է� ��, ���ڸ� �Է��ϰ� �ϴ�  script
 * @see isNumber
 * @see onlyNumber
*/
function onlyNumber() {
 if(event.keyCode !=13 && event.keyCode !=8 &&
  (event.keyCode<48)||(event.keyCode>57)) {
  event.returnValue=false;
  alert(!"���ڸ� �Է� �����մϴ�.");
 }
}

/**
 * �Է°��� ���ĺ�,���ڷ� �Ǿ��ִ��� üũ
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ����,���(-)�� �Ǿ��ִ��� üũ
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ����,�޸�(,)�� �Ǿ��ִ��� üũ
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°����� �޸��� ���ش�.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/*
 * �������θ� ���� ���� Ȯ���� ������ ���� ��Ű��script
*/
function del( url ){
 result=confirm! ("�����Ͻðڽ��ϱ�?");

	 if (result) {
	  window.location.href= url;
	 }
}

function getTokenAt(obj, n)
{
 var string = obj;
 var token;   //�ѱ� ��
 var pos = 0; //���� position

 for(var i=0; i<n; i++) {
  pos    = string.indexOf("-");
  if(pos == -1) //�� ������ token�� ����..
   return string;
  token  = string.substring(0, pos); //�ѷ� ������. token <-> string
  string = string.substring(pos+1, string.length);
 }
 return token;
}

/**
 * �Է°��� ����ڰ� ������ ���� �������� üũ
 * �ڼ��� format ������ �ڹٽ�ũ��Ʈ�� 'regular expression!'�� ����
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //�ùٸ� ���� ����
    }
    return false;
}

/**
 * �Է°��� �̸��� �������� üũ
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * �Է°��� ��ȭ��ȣ ����(����-����-����)���� üũ
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * ���õ� ������ư�� �ִ��� üũ
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
 * ���õ� üũ�ڽ��� �ִ��� üũ
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

/*
 * select box�� ���õ� ���·� ����� ���� script
*/
function setSelected(select,value){
 for( var i=0; i<select.options.length; i++) {
	 if(select.options[i].value==value) select.options[i].selected='true';
 };
}

/*
 * checkbox�� radio button�� ���õ� ���·� ����� ���� script
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
 Usage   : Radio���� ���õ� �� ���� �����Ѵ�.
=================================================================== */
function getRadioValue(field){
 if(field == null){
  return "";
 }
 if(field[0] == null){ //radio�� �ϳ��϶�
  if(field.checked == true){
   return field.value;
  }
  return "";
 }
 else{ //radio�� �ϳ��̻��϶�
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
 Usage   : checkbox���� ���õ� �� ���� �迭�� �����Ѵ�.
=================================================================== */
function getCheckBoxValue(field){
 var arr = new Array();
 var arr_idx = 0;

 if(field == null){
  return arr;
 }

 if(field[0] == null){//checkbox�� �ϳ��϶�
  if(field.checked == true){
   arr[arr_idx] = field.value;
  }
  return arr;
 } else {
  //checkbox �� �ϳ��̻��϶�
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
 Usage   : select���� ���õ� �� ���� �迭�� �����Ѵ�.
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

 if(field.options[0] == null){//option�� �ϳ��϶�
  if(field.options.selected == true){
   arr[arr_idx] = field.options.value;
  }
  return arr;
 } else{//option�� �ϳ��̻��϶�
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
 Usage   : select���� ���õ� �� label�� �迭�� �����Ѵ�.
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

 if(field.options[0] == null){//option�� �ϳ��϶�
  if(field.options.selected == true){
   arr[arr_idx] = field.options.text;
  }
  return arr;
 } else {
  //option�� �ϳ��̻��϶�
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
 Usage   : radio�� ���õǰ� ������ش�.
             radioChecked(document.frm.radiofield,"���õ� ��");
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
 Usage   : checkbox�� ���õǰ� ������ش�.
             checkboxChecked(document.frm.checkboxfield,"���õ� ��");
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
 * �Է°��� ����Ʈ ���̸� ����
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
 * �Է� ���ڿ��� ����Ʈ ���̸� ����
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
 * �ʼ� �Է»����� �� �Է�â�� �ɷ����� script
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
     alert(!"�ʼ� �׸��� �Է����� �ʾҽ��ϴ�.");
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
 * formName :�Է����̸�,
 * inputList : click�ÿ� ����Ÿ�� ���� �Է�â(�������� ��� ^ �� �����Ѵ�)
 * sql : property���Ͽ� ������ property name,
 * display : �˾�â���� ������ �÷� �� query���� ��� �ִ� �÷��̾�� �Ѵ�.
 * query : ������Ƽ���� query�� ���� �ʰ� �ٷ� �Ѱ� �ٶ� ����Ѵ�.
*/
function openDataWin(formName,inputList,sql,display,query){
 var urlWithParam = "/openDataWin?formName="+formName+
  "&inputList="+inputList+"&sql="+sql+"&display="+display;
 if(query !=null) urlWithParam  += "&query="+query;
 win = /*window.open*/(urlWithParam,'win','toolbar=yes,width=300,height=300');
 return false;
}

/*
 * �����ȣ ã�� �˾� â ����
 * ���� �����ȣ ������ ������ �Ʒ� zipcode.jsp�� �˾� â ���������� ����.
*/
function findZipCode(formName){
 /*window.open*/("/util/zipcode.jsp?formName="+formName,"test","toolbar=no,width=350,height=250");
 return false;
}

/* Ȥ�� �� submit�ÿ� http request�� �� �� ���޾� ���ٸ�,
�Ʒ��� ���� ���·� �ϴ� ���� ���

sub_flag = false;
function Js_submit() {
    if ( !sub_flag ) {
        sub_flag = true;
        form1.action='/ȣ�� ������';
        form1.target = "HiddenFrm";
        form1.submit();
    }else {
        alert(!"�̹� �������Դϴ�.");
    }
}
*/

/********************************************************************
*  Function Name : trim()                                           *
*  Description   : Input Data �� ó��,������  Space�� �����Ѵ�.      *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  ��� Function : None                                             *
********************************************************************/
function trim(str)
{
  return endTrim(startTrim(str));
}

 

/********************************************************************
*  Function Name : startTrim()                                      *
*  Description   : Input Data �� ó�� Space�� �����Ѵ�.              *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  ��� Function : None                                             *
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
*  Description   : Input Data �� �������� Space�� �����Ѵ�.          *
*  Input Data    : str                                              *
*  Output Data   : str's substring                                  *
*  ��� Function : None                                             *
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

 

// ������ �߰���
// �����
// <input size="14" type="text" name="jumin" maxLength="14" [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyDown="onlyNumberInput();" [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp="juminFormat(this)">

/* ===================================================================
 Function : onlyNumberInput()
 Return   :
 Usage   : ���ڸ� �Է� ���� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyDown �̺�Ʈ)
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

// ������ �߰���
// ���ڿ� �����¸� �Է� ����
/* ===================================================================
 Function : onlyNumDashInput()
 Return   :
 Usage   : ���ڸ� �Է� ���� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyDown �̺�Ʈ)
=================================================================== */
function onlyNumDashInput(){
 var code = window.event.keyCode;
 if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105) || code == 109 || code == 189 || code == 8 || code == 9 || code == 13 || code == 46){
  window.event.returnValue = true;
  return;
 }
 window.event.returnValue = false;
}

// ������ �߰���
// ���ڿ� �Ҽ����� �Է� ����
/* ===================================================================
 Function : onlyNumDecimalInput(obj, number, maxDecimal)
 Return   :
 Usage   : ���ڸ� �Է� ���� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyDown �̺�Ʈ)
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
 Usage   : ���ڸ� ����
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
 Usage   : �ֹε�Ϲ�ȣ ���� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp �̺�Ʈ)
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
 Usage   : �ֹι�ȣ
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
   alert(!"�ùٸ� �ֹι�ȣ�� �ƴմϴ�.");
   return false;
  };
 }
 return true;
}

/* ===================================================================
 Function : juminnoCheck(ssn)
 Return   : true(���� �ֹι�ȣ), false(������ �ֹι�ȣ)
 Usage   : �ֹι�ȣ üũ
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
   // ����
   return false;
  }

  // ����
  return true;

 } else {
  // ����
  return false;
 };
}

/* ===================================================================
 Function : dashCut(juminStr)
 Return   :
 Usage   : �Է��� �ֹι�ȣ�� '-'�� �� ���ڿ��� �����Ѵ�.
=================================================================== */
function dashCut(juminStr){
 var jumin_temp = juminStr;
 jumin_temp = jumin_temp.substring(0, 6) + jumin_temp.substring(7, 14);
 return jumin_temp;
}

/* ===================================================================
 Function : dashAdd(juminStr)
 Return   :
 Usage   : �Է��� �ֹι�ȣ�� '-'�� �־��� ���ڿ��� �����Ѵ�.
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
 Usage   : form�� �Ѱܹ޾� form�� ��ȯ�� ���� setting�Ѵ�.
=================================================================== */
function moneyForm(obj){
    var num = obj.value;
 if(obj.value.length >= 4){
  // "$" and "," �Է� ����
  re = /^\$|,/g;
  num = num.replace(re, "");

  fl = "";
  if(isNaN(num)){
   alert(!"���ڴ� ����� �� �����ϴ�.");
   obj.value = "";
   return 0;
  }
  if(num==0) return num;

  if(num<0){
   num = num * (-1);
   fl = "-";
  }else{
   num = num * 1; //ó�� �Է°��� 0���� �����Ҷ� �̰��� �����Ѵ�.
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
 Usage   : form�� �Ѱܹ޾� �Ҽ��� ó�� �� Setting�Ѵ�.
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
  // "$" and "," �Է� ����
  re = /^\$|,/g;
  num = num.replace(re, "");

  fl = "";
  if(isNaN(num)){
   alert(!"���ڴ� ����� �� �����ϴ�.");
   obj.value = "";
   return 0;
  }
  if(num==0) return num;

  if(num<0){
   num = num * (-1);
   fl = "-";
  }else{
   num = num * 1; //ó�� �Է°��� 0���� �����Ҷ� �̰��� �����Ѵ�.
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

// ������ �߰���
// ������ �Ҽ����� ���� �ִ�ġ�� ������ �Է¹��� �ʴ´�
// moneyFormTwo �� �����ϳ� �μ��� �ΰ� �� ������ �߰��Ǵ� �Ҽ����� ������ ���� ����κ��߰�
//
/* ===================================================================
 Function : moneyFormThree(obj, number, maxDecimal)
 Return   :
 Usage   : form�� �Ѱܹ޾� �Ҽ��� ó�� �� Setting�Ѵ�.
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
 // "$" and "," �Է� ����
 re = /^\$|,/g;
 num = num.replace(re, "");

 fl = "";
 if(isNaN(num)){
  alert(!"���ڴ� ����� �� �����ϴ�.");
  obj.value = "";
  return 0;
 }

 //if(num==0) return num;

 if(num<0){
  num = num * (-1);
  fl = "-";
 }else{
  num = num * 1; //ó�� �Է°��� 0���� �����Ҷ� �̰��� �����Ѵ�.
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
  if( parseInt(maxDecimal) + 1 >= jjum.length ){ // �߰��� ����
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
 Usage   : ���ڿ��� �Է��� �޾� ��ȯ�� ���ڿ��� �Ѱ��ش�.
=================================================================== */
function moneyStrForm(str){
 str = ""+str+"";
 var retValue = "";
 var number = new Number(str);

 // ������ ��� "-" �����ϰ� "," ó��
 if( number < 0 ) str = str.substring(1);

 for(var i=0; i<str.length; i++){
  if(i > 0 && (i%3)==0){
   retValue = str.charAt(str.length - i -1) + "," + retValue;
  }else{
   retValue = str.charAt(str.length - i -1) + retValue;
  };
 }

 // ������ ��� "-"�� �����ش�.
 if( number < 0 ) retValue = "-" + retValue;

 return retValue;
}

/* ===================================================================
 Function : selectList()
 Return :
 �ۼ���   : ������(whitedawn@hanmail.net) (2003-07-21)
 Parameter : controlToPopulate(form ��ü select),
    ItemArray(�� �迭), ItemCodeArray(Code �迭)
 Usage : select box�� ����â�� ��Ÿ���� �ϱ����� function
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
 Usage   : �Էµ� ���ڿ��� ','�� ���� ���ڿ��� �����Ѵ�.
=================================================================== */
function commaCut(money){
 if(money == '') return '';
 return money.split(",").join("");
}

/* ===================================================================
 Function : slashCut(date)
 Return   :
 Usage   : �Էµ� ��¥�� '/'�� ���� ���ڿ��� �����Ѵ�.
=================================================================== */
function slashCut(date){
 return date.split("/").join("");
}


/* =============================================================================
 Function : fSearch()
 Return   :
 Usage   : ��ȸ ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fSearch() {

}


/* =============================================================================
 Function : fInsert()
 Return   :
 Usage   : �Է� ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fInsert() {

}


/* =============================================================================
 Function : fUpdate()
 Return   :
 Usage   : ���� ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fUpdate() {

}


/* =============================================================================
 Function : fDelete()
 Return   :
 Usage   : ���� ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fDelete() {

}


/* =============================================================================
 Function : fInit()
 Return   :
 Usage   : �ʱ�ȭ ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fInit() {

}


/* =============================================================================
 Function : fPrint()
 Return   :
 Usage   : ��� ��ư�� Ŭ���Ǿ����� ȣ��Ǵ� �Լ�
============================================================================= */
function fPrint() {

}


/* =============================================================================
 Function : fEnd()
 Return   :
 Usage   : ����� ���α׷��� �����Ѵ�.
   body frame�� ����� ���α׷��� index.html�� �̵��ϰ�,
   �˾�â���� ����� ���α׷��� open�� �˾�â�� close ��Ų��.
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
 Usage   : ����Ʈ SUBMIT
 �ۼ���   :
=============================================================================*/
function reportSendForm(pFrm) {
      if(EncForm(pFrm)) {
        pFrm.target = "report";
        pFrm.submit();
        return true;
    } else {
        alert(!"����Ÿ ��ȣȭ ���߿� ������ �߻��߽��ϴ�.");
        return false();
    }
}

/*=============================================================================
 Function : fJohapno()
 Return   :
 Usage   : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����, ���տ���ȣ 5�ڸ��� �����.
            �ѱ� �Է½� ���â!
 �ۼ���   :
=============================================================================*/
function fJohapno(str) {
 var frm = document.frm ;
 var johapno = frm.JOHAPNO.value;
 var johapLg = eval(johapno.length);

 if(!fKoreanCheck(johapno)){
  alert(!"���տ���ȣ�� ��Ȯ�����ʽ��ϴ�.");
  frm.JOHAPNO.value = "";
  return;
 }
 if(str == "1") {
  if(eval(johapLg) < 5) {
   /* ���տ� ��ȣ ���� */
   fJohapProc('JO');
  };
 }else{
  if(event.keyCode == "9") {
   /* ���տ� ��ȣ ���� */
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
 Usage   : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����, ��Ʈ���� ���տ���ȣ 5�ڸ��� �����.
            �ѱ� �Է½� ���â!
 ����   : ������(�����  fJohapno �� ����. ������ �߻��ϸ� true�� �����Ѵ�.)
=============================================================================*/
function fJohapnoGrdSS(grdSS, col, row) {

 // �ش� row�� col�� ����
 grdSS.Row = row;
 grdSS.Col = col;

 var johapno = trim(grdSS.text); // ���տ���ȣ ����
 var johapLg = eval(johapno.length);

 if(!fKoreanCheck(johapno)){
  alert(!"���տ���ȣ�� ��Ȯ�����ʽ��ϴ�.");
  grdSS.text = "";
  return true;
 }

 if(eval(johapLg) < 5) {
  /* ���տ� ��ȣ ���� */
  johapno = fJohapProcGrdSS(johapno);

  if (johapno == "") {
   alert(!"���տ���ȣ ������ ����!!");
   grdSS.text = "";
   return true;
  };
 }

 if(eval(johapLg) == 5) {
  johapno = johapno.toUpperCase();
 }

 grdSS.text = johapno;

 // ����
 return false;
}


/*=============================================================================
 Function : fJohapProcGrdSS()
 Return   :
 Usage   : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����, ���տ���ȣ 5�ڸ��� �����.
 ������   : ������(���տ���ȣ�� ���� �ϰ� ������ ��ȣ�� �����Ѵ�.
                   ��Ʈ���� ��� �Ѵ�. fJohapProc�� ����� ����.)
=============================================================================*/
function fJohapProcGrdSS(str) {

 var pJohapno = str; // ���տ���ȣ
 var vJohapnoLength = eval(pJohapno.length);
 var zero = "";
 var vJohapno = "";

 /* Mouse key Click.. */
 if(eval(vJohapnoLength) < 5) {

  if(eval(vJohapnoLength) <= 0 || eval(vJohapnoLength) > 4 ) {
   return ""; // ����
  }

  /* ���տ� ��ȣ ����
   * '0'�� �ٿ� ���տ� ��ȣ�� �ϼ��Ѵ�.
   */
  for(var i = 0; i < (5-vJohapnoLength); i++) {
   zero += "0";
  }

  if(isNumber2(pJohapno, '0123456789') == true){

   // ������ �ڸ�����ŭ ���ڸ��� '0' �� �ٿ��ش�.
   vJohapno = zero + pJohapno;

  } else {

	   //���տ���ȣ ��ü�� ���� �ƴѰ��(�����տ��ΰ��)
	
	   // ���ڸ��� '0' �� �ٿ��ش�.
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
 Usage   : �Է¹��� ���� ��������üũ
 �ۼ���   :
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
 Usage   : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����, ���տ���ȣ 5�ڸ��� �����.
            �ѱ� �Է½� ���â!
 �ۼ���   :
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
  alert(!"���տ���ȣ�� ��Ȯ�����ʽ��ϴ�.");
  johap.value = "";
  return;
 }
 if(str == "1") {
  if(eval(johapLg) < 5) {
   /* ���տ� ��ȣ ���� */
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
   /* ���տ� ��ȣ ���� */
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
 Usage   : [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����, ���տ���ȣ 5�ڸ��� �����.
 �ۼ���    :
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

  /* ���տ� ��ȣ ����
   * '0'�� �ٿ� ���տ� ��ȣ�� �ϼ��Ѵ�.
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
 Return   : ���տ�����
 Usage   : ���տ� ã�� Auto Commit..
       [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����. �ѱ� �Է½� ���â!
 �ۼ���  :
=============================================================================*/
function fJohapInfo(str) {
 // Shift + Tab ����Ű ���� ���Ұ� ó��..
 if(event.keyCode == 9 || event.keyCode == 16) {
  return;
 }
 fJohapInfoTwo('JO'+str);
}

/*=============================================================================
 Function : johapnoKeyup()
 Return   : ���տ�����
 Usage   : ���տ� ã�� Auto Commit..
       [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!, [�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup Event�� ����. �ѱ� �Է½� ���â!
 �ۼ���  :
=============================================================================*/
function fJohapInfoTwo(str) {

 var frm = document.frm;
 var johapno = "";
 var sangho  = "";
 var jijumnm = "";

 var strTwo  = str.substring(2,3);
 var strGB  = str.substring(0,2);

 // Shift + Tab ����Ű ���� ���Ұ� ó��..
 if(event.keyCode == 9 || event.keyCode == 16) {
  return;
 }

 if(strGB == 'JO' || strGB == 'MN') {
  johapno = frm.JOHAPNO.value;
  sangho  = frm.SANGHO.value;
  jijumnm = frm.JIJUMNM.value;
  /* �ѱ� �Է½� */
  if (!fKoreanCheck(johapno)) {
   frm.JOHAPNO.value = "";
   alert(!"���տ���ȣ�� ���ڸ� �����մϴ�.");
   return;
  };
 }else if (strGB == 'YS') {
  johapno = frm.YSJOHAPNO.value;
  sangho  = frm.YSSANGHO.value;
  jijumnm = frm.YSJIJUMNM.value;
  /* �ѱ� �Է½� */
  if (!fKoreanCheck(johapno)) {
   alert(!"���տ���ȣ�� ���ڸ� �����մϴ�.");
   frm.YSJOHAPNO.value = "";
   return;
  };
 }else if (strGB == 'YD') {
  johapno = frm.YDJOHAPNO.value;
  sangho  = frm.YDSANGHO.value;
  jijumnm = frm.YDJIJUMNM.value;
  /* �ѱ� �Է½� */
  if (!fKoreanCheck(johapno)) {
   alert(!" ���տ���ȣ�� ���ڸ� �����մϴ�.");
   frm.YDJOHAPNO.value = "";
   return;
  };
 }else if (strGB == 'SC') {
  johapno = frm.SCJOHAPNO.value;
  sangho  = frm.SCSANGHO.value;
  jijumnm = frm.SCJIJUMNM.value;
  /* �ѱ� �Է½� */
  if (!fKoreanCheck(johapno)) {
   alert(!"���տ���ȣ�� ���ڸ� �����մϴ�.");
   frm.SCJOHAPNO.value = "";
   return;
  };
 }

 var johapLg = eval(johapno.length);
 var vChkVL = false;

 if(strTwo == "1" ) {//[�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonblur!
  if(eval(johapLg) == 5) {
   vChkVL = true;
  }else{
   /* ���տ� ��ȣ ���� */
   vChkVL = fJohapProc(strGB);
  };
 }else {//[�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonkeyup
  /* Tab Ű �۵� */
  if(eval(johapLg) == 5) {
   /* ���տ� ��ȣ ���� */
   vChkVL = true;
   johapno.toUpperCase();
  }else if(event.keyCode == "9") {
   /* ���տ� ��ȣ ���� */
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

   // ������ �̺�Ʈ �߻��� �����Ѵ�.
   //setLoading(true);
   if( strGB == 'MN' ) { // ���������� ���

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
 Usage   : ���տ� ã��, issueError �޽��� ���� ó��..
 �ۼ���   :
=============================================================================*/
/** call back event
 ���� �̸� �ٲ��� ����.
function OnJohapError(){
 frm.JOHAPNO.disabled = false;
}
*/

/*=============================================================================
 Function : setJohap(inputName)  inputName - input box ��(NAME)
 Return   : ���տ�����
 Usage   : disabled, background ó��
 �ۼ���    :
=============================================================================*/
function setJohap(inputName) {
 inputName.disabled = true;
 //inputName.style.background = "#e2e2e2";
}

/*=============================================================================
 Function : resetJohap() - input box ��(NAME)
 Return   :
 Usage   : disabled, background �ʱ�ȭ
 �ۼ���   :
=============================================================================*/
function resetJohap(inputName) {

 if(!inputName) {
  inputName = document.frm.JOHAPNO;
 }

 inputName.disabled = false;
 //inputName.style.background = "#ffffff";
}

/*=============================================================================
 Function : jahapPopup() - ���տ� �˻��˾�â�� ȣ���ϴ� �Լ�
 Return   :
 Usage   : disabled, background �ʱ�ȭ
 �ۼ���   :
=============================================================================*/
function johapPopup() {
 var frm = document.frm;
 fGubunJohap('JO');
}
/*=============================================================================
 Function : jahapPopup() - ���տ� �˻��˾�â�� ȣ���ϴ� �Լ�
 Return   :
 Usage   : ���տ������� �˾�â���� ȣ���Ѵ�.
 �ۼ���   :
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
// LeftPosition = (screen.width - 800)/2;  // �˾�â�� �����ʿ��� -20px ��ŭ ����
 TopPosition  = (screen.height - 600); // �˾�â�� �ϴܿ��� -57px ��ŭ ����

 vReturnArray = window.showModalDialog("/view/contribution/cbz_johapinfo_popup.jsp", "popup",
 "dialogWidth=800px; dialogHeight=507px; dialogleft=200; dialogtop="+TopPosition+"; center: No; help: No; resizable: No; status: No; scrollerable: No ");

 if (vReturnArray == null){
  return;
 }

 if(str == 'JO') {
  frm.JOHAPNO.value = vReturnArray[0]; //���տ���ȣ
  frm.SANGHO.value  = vReturnArray[1]; //��ȣ
  frm.JIJUMNM.value = vReturnArray[2]; //����������
  frm.HBUSEO.value  = vReturnArray[3]; //�����ڵ�
 }else if(str == 'YS') {
  frm.YSJOHAPNO.value = vReturnArray[0]; //���տ���ȣ
  frm.YSSANGHO.value  = vReturnArray[1]; //��ȣ
  frm.YSJIJUMNM.value = vReturnArray[2]; //����������
  frm.YSHBUSEO.value  = vReturnArray[3]; //�����ڵ�
 }else if(str == 'YD') {
  frm.YDJOHAPNO.value = vReturnArray[0]; //���տ���ȣ
  frm.YDSANGHO.value  = vReturnArray[1]; //��ȣ
  frm.YDJIJUMNM.value = vReturnArray[2]; //����������
  frm.YDHBUSEO.value  = vReturnArray[3]; //�����ڵ�
 }else if(str == 'SC') {
  frm.SCJOHAPNO.value = vReturnArray[0]; //���տ���ȣ
  frm.SCSANGHO.value  = vReturnArray[1]; //��ȣ
  frm.SCJIJUMNM.value = vReturnArray[2]; //����������
  frm.SCHBUSEO.value  = vReturnArray[3]; //�����ڵ�
 }else if(str == 'MN') {
  frm.JOHAPNO.value = vReturnArray[0]; //���տ���ȣ
  fJohapInfoTwo('MN2'); // ���տ� ������ȸ
 };
}

/*=============================================================================
 Function : bjsnoPopup() - ��������ȣ �˻��˾�â�� ȣ���ϴ� �Լ�
 Return   :
 �ۼ���   :
=============================================================================*/
function bjsnoPopup(p_bgyear,p_bjsno) {
    var frm = document.frm;
 var ret,obj = new Object();
 //��Ȳ�� �߰�
 //�����⵵ ��������ȣ �ʵ���� ����ڰ� �������Ҽ� �ְ�
 // �Ѿ���� �÷����� ����ϰ��Ѵ�.
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
   frm.JOHAPNO.value = ret[0]; //���տ���ȣ

  if(frm.SANGHO)
   frm.SANGHO.value = ret[7]; //��ȣ

  if(frm.JIJUMNM)
   frm.JIJUMNM.value = ret[8]; //����

  if(frm.elements[p_bjsno])
   frm.elements[p_bjsno].value = ret[1]; //��������ȣ

  if(frm.elements[p_bgyear])
   frm.elements[p_bgyear].value = ret[2]; //�߱޳⵵

  if(frm.BJJONG)
   frm.BJJONG.value = ret[3]; //��������


  if(frm.BJGUM)
   frm.BJGUM.value = ret[4]; //�����ݾ�


//  if(frm.HJGUM)
//   frm.HJGUM.value = ret[5]; //�����ݾ�

//  if(frm.SSRYO)
//   frm.SSRYO.value = ret[6]; //������

//SS_BGYEAR SS_BJJONG SS_BJAMT SS_HJAMT SS_SSRYO
 }

 /*
  * ���� ���������� ���տ��� �������� �ʿ��ϱ� ������
  * �߰��۾�(���տ���������ȸ)�� �ʿ��ϴ�.
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
 Function : �Ķ������ String ���� �ѱ��� �ִ��� �������� �˻�
 Return   :
 Usage   : �ѱ��� �����ϸ� false, �ѱ��� �������� ������ true
 �ۼ���    : �念��
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
Return   : ����ڹ�ȣ(XXX-XX-XXXXX)
�ۼ���   : �ڼ��� (gatayozzang@naver.com) (2003-10-07)
Usage    : ����ڹ�ȣ ���� ��ȯ(XXX-XX-XXXXX)
=================================================================== */
function getSaupNo( str ) {

 if (str == null || trim(str) == "") {
  return "";
 } // ���ڰ� ���ų� "" �ΰ�� ���� "" �� �����Ѵ�.

 str = str.replace("/", "");
 var sa = str.substr(0, 3);
 var up = str.substr(3, 2);
 var no = str.substr(5, 5);

 return sa + "-" + up + "-" + no;
}
/* ===================================================================
 Function : bubinFormat(obj)
 Return   :
 Usage   : ���ι�ȣ ���� �Է� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp �̺�Ʈ)
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
 Usage   : ����� ��ȣ ���� �Է� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp �̺�Ʈ) - obj�� HTML�� maxlength="12" ������
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
 Usage   : ����� ��ȣ ���� �Է� ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp �̺�Ʈ)
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
 Usage   : ��ũ���α׷��� ����� ��ư������ üũ�Ѵ�.
          psPgmid - ����üũ��� ���α׷�, psUrl - ȣ��� ������,
          psGubun(Y/N) �˾�����, psTarget - �˾�target,
          psStyle - �˾���Ÿ��, psModalyn - �˾���޿���,
          psPostParam - Post������� �Ѱܾ��� �Ķ����
          psGetParam - Get������� �Ѱܾ��� �Ķ����.
           ex) 'SABUN=value1,NAME=value2,...'
============================================================================= */
var _GETPARAM;//get��Ŀ��� ����ϴ� ��������(�������浹�� �������� _�ν����Ѵ�)
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

 // Post�� �Ѱܾ��� �Ķ���� ���� �����Ѵٸ�
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

 //Get ������� �Ѱܾ��� ��.
 _GETPARAM = psGetParam;

 AuthCheckForm.target = "iframe";
 AuthCheckForm.action.value = "PgmAclInfo";
 AuthCheckForm.worker.value = "common.linkAuth.CMPgmAclBean";

 sendForm(AuthCheckForm);
}

/* =============================================================================
 Function : aftLinkAuthCheck()
 Return   :
 Usage   : üũ�� ������ ���� ������ �������� ȣ���Ѵ�.
============================================================================= */
function aftLinkAuthCheck() {
 var sUrl = AuthCheckForm.LINKURL.value + '/' + AuthCheckForm.PGMID.value;
 //get /post����� �����ؼ� ����ϱ����� �߰�.
 if(_GETPARAM) sUrl += "?"+_GETPARAM;
 //AuthCheckForm2.MENUID.value = AuthCheckForm.MENUID.value;
 AuthCheckForm2.PGMID.value = AuthCheckForm.PGMID.value;
 AuthCheckForm2.MENULOCATION.value = AuthCheckForm.MENULOCATION.value;
 AuthCheckForm2.POPUPYN.value = AuthCheckForm.POPUPYN.value;
 AuthCheckForm2.action = sUrl;

 if (AuthCheckForm.POPUPYN.value == 'Y') {  // �˾�â���� ȣ��
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
 Usage   : psParameters�� ex) 'SABUN=V1,NAME=V2,JCCD=V3,....&Y&formname' �������� �Է��� ���̴�.
     ������ Y���� modal(Y), modaless(N) �����̴�.
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
  alert(!" �� �����Ͱ� �´� ���� �����ϴ�. form name�� Ȯ���Ͽ� �ֽʽÿ�.");
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
 Usage   : parent form�� parameter���� setting�Ѵ�.
     form�� elements�߿� parameter�̸��� ���� element�� ���� �����Ѵ�.
     �θ��� form�̸��� "frm"���� �����Ѵ�. pFrm�� �Էµ��� ������
     document.frm���� ������Ų��.
============================================================================= */
function setFormParameter(psParameters, pFrm) {
 var encData = "";
 var frm;
 if (pFrm) {
  frm = pFrm;
 } else {
  frm = document.frm;
 }

 // check form ����
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
 Usage   : �־��� form�� ���� field�̸��� �ִ��� Ȯ���Ͽ� �ִٸ� �ش� field��
         ���� �����Ѵ�.
============================================================================= */
function getParentFormData(pForm, piLen, psFieldNm) {
 for (var i=0; i<piLen; i++) {
  element = pForm.elements[i];
  // form field name�� ���ٸ�
  if(element.name == psFieldNm) {
   return element.value;
  };
 }
 return "";
}


/* =============================================================================
 Function : changeButton(pName, pImgName)
 Return   :
 Usage   : �Էµ� param pName�� ���� id�� ���� �̹��� ��ü�� src�� pImgName�� �ٲپ��ش�.
          pName - �Է�(insert), ����(update), ����(delete), �ʱ�ȭ(init), ��ȸ(search), ���(print)
          pImgName - �̹�����(�������ϸ�, Ȯ����.gif�� ������ ���ϸ��� �Է��ϸ� �ȴ�.)
          check_role1 = 10 [��ȸ-���]
          check_role2 = 1010 [�Է�-����-����-�ʱ�ȭ]
          check_btrole = 101010[��ȸ-�Է�-����-����-���-�ʱ�ȭ]
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

  // �Է±���üũ
  if (pName == 'insert' && '1' == check_btrole.charAt(1)) {
   if ('1' == check_role2.charAt(0)) {  // �Է±��� ����.
    imgObj.src = imgsrc + ".gif";
   } else {        // �Է±��� ����
    imgObj.src = imgsrc + "_di.gif";
   };

  // ��������üũ
  } else if (pName == 'update' && '1' == check_btrole.charAt(3)) {
   if ('1' == check_role2.charAt(1)) {  // �������� ����.
    imgObj.src = imgsrc + ".gif";
   } else {        // �������� ����
    imgObj.src = imgsrc + "_di.gif";
   };

  // ��������üũ
  } else if (pName == 'delete' && '1' == check_btrole.charAt(2)) {
   if ('1' == check_role2.charAt(2)) {  // �������� ����.
    imgObj.src = imgsrc + ".gif";
   } else {        // �������� ����
    imgObj.src = imgsrc + "_di.gif";
   };

  // �ʱ�ȭ����üũ
  } else if (pName == 'init' && '1' == check_btrole.charAt(5)) {
   if ('1' == check_role2.charAt(3)) {  // �ʱ�ȭ���� ����.
    imgObj.src = imgsrc + ".gif";
   } else {        // �ʱ�ȭ���� ����
    imgObj.src = imgsrc + "_di.gif";
   };

  // ��ȸ����üũ
  } else if (pName == 'search' && '1' == check_btrole.charAt(0)) {
   if ('1' == check_role1.charAt(0)) {  // ��ȸ���� ����.
    imgObj.src = imgsrc + ".gif";
   } else {          // ��ȸ���� ����
    imgObj.src = imgsrc + "_di.gif";
   };

  // ��±���üũ
  } else if (pName == 'print' && '1' == check_btrole.charAt(4)) {
   if ('1' == check_role1.charAt(1)) {  // ��±��� ����.
    imgObj.src = imgsrc + ".gif";
   } else {        // ��±��� ����
    imgObj.src = imgsrc + "_di.gif";
   };
  };
 };
}

/* =============================================================================
 Function :  moveNext(num, current_form, move_form)
 Return   :
 Usage   : ������ �ڸ����� ä��� ������ ������ �Ѿ��.
============================================================================= */
function moveNext(num, current_form, move_form) {

 /*
  2004-01-16 ���¿�(������)

  move_form ���� Shift + TAB���� current_form ���� �̵���
  current_form�� num ��ŭ�� ���ڰ� ���� ��� �ڵ����� move_form ���� �̵��մϴ�.
  -> Shift(16), Tab(9), ����Ű(38~40)�� ����
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
  Usage    : text �濡 üũ ([�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp �̺�Ʈ:jsp��� )
      ������ �ѱ��� ���� �Էµɶ� byte���� üũ�ؼ� num����
      �����ÿ� ��� �޼����� �Ѵºκ��� �����Ѵ�.
      ex)[�ȳ�]�±��������ε�ϵ����ʽ��ϴ�-xxonKeyUp="chkTextLength(this,200);"
  ===================================================================*/
function chkTextLength(obj,num){

 var str     = obj.value;   // �̺�Ʈ�� �Ͼ ��Ʈ���� value ��
 var leng  = str.length;  // ��ü����

 var i        = 0;  // for���� ���
 var strByte  = 0;  // �ѱ��ϰ��� 2 �׹ܿ��� 1�� ����
 var totalLeng= 0;  // substring�ϱ� ���ؼ� ���
 var checkChar= ""; // �ѱ��ھ� �˻��Ѵ�
 var limitStr = ""; // ���ڼ��� �ʰ��ϸ� �����Ҽ� ������������ �����ش�.

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


/* �ؽ�Ʈ �ʵ� BackGround ���� ����
  disalbed , enabled �� ���� ���ڰ��� "�ؽ�Ʈ �ʵ��", "true : disalbed / false : enabled"
 */
function setBackColor(objname, bln){
 var disabledColor = "#e1ebf7";   //disabled �Ǿ����� ����
 var enabledColor  = "#ffffff";    // enabled �Ǿ����� ����.
 var colorObj = objname.style;

 if (bln){ // true �� disabled
  colorObj.backgroundColor = disabledColor;
 } else {// false �� disabled
  colorObj.backgroundColor = enabledColor;
 };
}
//����� disabled���θ� ��� ó��
function setDisabled(objname, bln){
 var disabledColor = "#e1ebf7";   //disabled �Ǿ����� ����
 var enabledColor  = "#ffffff";    // enabled �Ǿ����� ����.
 var colorObj = objname.style;

 if (bln){ // true �� disabled
  objname.disabled = true;
  colorObj.backgroundColor = disabledColor;
 } else {// false �� disabled
  objname.disabled = false;
  colorObj.backgroundColor = enabledColor;
 };
}
/*===================================================================
  Function    : fDisabledInit(obj)
  Return      :
  Usage    : Form �ʵ� (Disabled, Readonly) Color('#e1ebf7') ���� ó��
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
  Usage      : Form �ʵ� (Disabled) Color('#e1ebf7') ���� ó��

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
  Usage    : Form �ʵ� (Disabled, Readonly) Color('#e1ebf7') ���� ó��
      �ؽ�Ʈ �ʵ� BackGround ���� ����
      obj : ��ǲ ��ü
====================================================================*/
function setBackColor2(objname){
 var disabledColor = "#e1ebf7";   //disabled �Ǿ����� ����
 var enabledColor  = "#ffffff";    // enabled �Ǿ����� ����.
 var colorObj = objname.style;

 if (objname.disabled || objname.readonly){ // true �� disabled
  colorObj.backgroundColor = disabledColor;
 } else {// false �� disabled
  colorObj.backgroundColor = enabledColor;
 };
}

/*===================================================================
  Function    : fSetBackColor(obj)
  Return      :
  Usage    : Form �ʵ� (Disabled) Color('#e1ebf7') ���� ó��
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
 Usage       : �ѱ�, ����, ���ڵ� Byte������ üũ�Ѵ�.
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
  alert(!byteNum+" �� �̻� �Է��Ͻ� �� �����ϴ�.");
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
     // ���Ͱ��� �������� ��(\r\n)�� �ι�����Ǵµ� ù��° ��(\n)�� �������� tcount�� ������Ű�� �ʴ´�.
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
 Usage       : �ش� ���� Null�̰ų� ������ ��� 0 �� �����Ͽ� �ش�.
====================================================================*/
function fNull2Zero(numVal){

 if (trim(numVal) == "" || trim(numVal) == "0"){
  return "0";
 }
 else {
  return numVal;
 }
}

// ��ġüũ�ÿ� ���Ӵϴ� �̰� ����?
var TOG_WORD = '%0D';

/**
 * �ѱ� ����üũ
 */
function fRbOnMaxkeydown(obj) {
 // 2004-01-29 �ѱ�(2byte) ���� ����üũ�Ͽ� �Է� ���ϵ��� ���´�.
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
// ���� üũ
function chMsgLenho(obj) {

 var keyVal=escape(event.keyCode);

 var iCounts = new Array();
 iCounts = getBLen(obj); //������ ���̸� ���ϴ� �Լ�

 var iCur = obj.value.length; // ���� ���ڿ����� - 2byte ��� ����
 var curLength = iCounts[0];  // ���� ���ڿ����� - 2byte ���
 var addLength = iCounts[1];  // �Է��� ���ڿ� ���� - 2byte ���
 var maxLen = eval(obj.getAttribute("jsxlength")); // �Է¹ް��� �ϴ� �ִ� ���ڿ� ����

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
 * �ѱ��� ��쿡�� 2byte�� �׿��� ���ڴ� 1byte�� ����Ͽ�  iCounts�� �����Ͽ� return ���ش�.
 *  return iCounts[0] - �ԷµǱ� �� ��
 *     iCounts[1] - �Է¹��� Ű�� �ִ� ��
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

 var sTmpMsg    = '';    //�޽����� �ӽ÷� �����ϴ� ����
 var sTmpMsgLen = 0;     //�ӽ÷� ����� �޽����� ���̸� �����ϴ� ����
 var sOneChar   = '';    //�ѹ��ڸ� �����ϴ� ����
 var iCounts    = new Array();   //�� ����Ʈ�� �������� ����Ʈ ���� �����ϴ� �迭

 iCounts[0]=0;   //�� ����Ʈ�� ���� �ϴ� ����

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


 sTmpMsg    = '';    //�޽����� �ӽ÷� �����ϴ� ����
 sTmpMsgLen = 0;     //�ӽ÷� ����� �޽����� ���̸� �����ϴ� ����
 sOneChar   = '';    //�ѹ��ڸ� �����ϴ� ����

 iCounts[1]=0;   //�� ����Ʈ�� ���� �ϴ� ����

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
 Usage : ���տ� ��ȣ�� ����� �ʱ�ȭ . event �߻��� move_form���� �̵�.
=================================================================== */
function fMoveJNext(num, move_form, Sysid){
 var frm =document.frm;


 if(frm.JOHAPNO.value.length==num){
  moveNext(num, frm.JOHAPNO, move_form);

  if(Sysid == "MN"){     //������
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
Return : �޴��� �������� �ٲ۴�.
�ۼ��� :
Usage : 0113214321  -> 011-321-4321
        01012345432 -> 010-1234-5432
=================================================================== */
function cellphoneForm(psData) {

 if (psData == null || psData == "") {
  return "";
 } // ���ڰ� ���ų� "" �ΰ�� ���� "" �� �����Ѵ�.

 // ���ڰ� �ڸ����� Ʋ���� Ʋ�� ��¥�� �״�� �����Ѵ�.
 if (trim(psData) == "" ||  trim(psData).length < 10) {
  return psData;
 }

 var phone1 = psData.substr(0, 3);

 // 4��° ���� �ڿ��� 5��°���� �� �չ�ȣ
 var phone2 = psData.substr(3, (trim(psData).length - 4) -3);

 // �ڿ��� 4���� ���ڸ� �ڸ���.
    var phone3 = psData.substr(trim(psData).length - 4, 4);

   return phone1 + "-" + phone2 + "-" + phone3;
}

/* ===================================================================
Function : phoneToData()
Return : ������������ �ٲ۴�.
�ۼ��� : ������(whitedawn@hanmail.net) (2004-02-25)
Usage : 011-321-4321  -> 0113214321
        010-1234-5432 -> 01012345432
=================================================================== */
function phoneToData(psData) {

 if (psData == null || trim(psData) == "") {
  return "";
 } // �ڷᰡ ���ų� "" �ΰ�� ���� "" �� �����Ѵ�.

 return psData.split("-").join("");
};