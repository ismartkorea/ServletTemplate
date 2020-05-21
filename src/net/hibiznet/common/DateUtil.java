package net.hibiznet.common;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
 /** 
 * <pre>
 * DateTime 클래스는 Java API 에서 제공하는 java.text.SimpleDateFormat 을 이용하여 
 * 우리가 사용하기 편하도록 변형시킨 것이다. 
 *
 * 
   Format Pattern                         Result
   --------------                         -------<font color="CC1133"> 
   "yyyy.MM.dd G 'at' hh:mm:ss z"    ->>  1996.07.10 AD at 15:08:56 PDT
   "EEE, MMM d, ''yy"                ->>  Wed, July 10, '96
   "h:mm a"                          ->>  12:08 PM
   "hh 'o''clock' a, zzzz"           ->>  12 o'clock PM, Pacific Daylight Time
   "K:mm a, z"                       ->>  0:00 PM, PST
   "yyyyy.MMMMM.dd GGG hh:mm aaa"    ->>  1996.July.10 AD 12:08 PM
   </font>
 * 위 포맷형은 Java API 에 나와있는 포맷형식이다. 
 * 더 자세한 사항은 Java API 의 java.text 패키지를 살펴보기 바란다. 
 * <br>
 * 참고로 DateTime 클래스는 default 로 Locale 을 한국으로 설정하였다. 
    * 
 * </pre>
 */
public final class DateUtil {
 /**
  * Don't let anyone instantiate this class
  */
 private DateUtil() {}

 public final static int MONTH=0; 
 public final static int MONTH_SLASH=1; 
 public final static int DAY=2; 
 public final static int DAY_SLASH=3;
   
 private static String format[]={"yyyyMM","yyyy/MM","yyyyMMdd","yyyy/MM/dd"}; 
 
 /**
  * Convert Date to String
  * @param strDate
  * @return
  * @throws Exception
  */
 public static Date toDate(String strDate) throws Exception {     
   SimpleDateFormat formatter = new SimpleDateFormat ("yyyy/MM/dd");
   Date date = formatter.parse(strDate);
   
   return date;
 }
 /**
  * 
  * @param strDate
  * @param index
  * @return
  * @throws Exception
  */
 public static Date toDate(String strDate,int index) throws Exception {     
   SimpleDateFormat formatter = new SimpleDateFormat(format[index]);
   Date date = formatter.parse(strDate);
   
   return date;
 }
 /**
  * Convert String to Timestamp
  * @param strDate
  * @return
  * @throws Exception
  */
 public static Timestamp toTimestamp(String strDate) throws Exception {     

    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy/MM/dd");
    Date date = formatter.parse(strDate);
        
    return (new Timestamp(date.getTime()));      

 }
 /**
  * 
  * @param strDate
  * @param index
  * @return
  * @throws Exception
  */
 public static Timestamp toTimestamp(String strDate,int index) throws Exception {     
   SimpleDateFormat formatter = new SimpleDateFormat (format[index]);
   Date date = formatter.parse(strDate);
   
   return (new Timestamp(date.getTime()));
 }
 /**
  * Convert Timestamp to String
  * @param curDate
  * @return
  * @throws Exception
  */
 public static String toStr(Timestamp curDate) throws Exception {
   SimpleDateFormat formatter= new SimpleDateFormat ("yyyy/MM/dd");
   String strDate= new String(formatter.format(new Date(curDate.getTime())));  
       
   return strDate;
 }
 /**
  * 
  * @param curDate
  * @param format
  * @return
  * @throws Exception
  */
 public static String toStr(Timestamp curDate, String format) throws Exception {
   SimpleDateFormat formatter= new SimpleDateFormat (format);
   String strDate= new String(formatter.format(new Date(curDate.getTime())));  
       
   return strDate;
 }
 /**
  * 
  * @param curDate
  * @param index
  * @return
  * @throws Exception
  */
 public static String toStr(Timestamp curDate,int index) throws Exception {
   SimpleDateFormat formatter= new SimpleDateFormat (format[index]);
   String strDate= new String(formatter.format(new Date(curDate.getTime())));  
       
   return strDate;
 }
 /**
  * Convert Date to String
  * @param curDate
  * @return
  * @throws Exception
  */
 public static String toStr(Date curDate) throws Exception {
   SimpleDateFormat formatter= new SimpleDateFormat ("yyyy/MM/dd");
   String strDate= new String(formatter.format(curDate));  
       
   return strDate;
 }
 /**
  * 
  * @param curDate
  * @param index
  * @return
  * @throws Exception
  */
 public static String toStr(Date curDate,int index) throws Exception {
   SimpleDateFormat formatter= new SimpleDateFormat(format[index]);
   String strDate= new String(formatter.format(curDate));  
       
   return strDate;
 }
 /**
  * Convert String(yyyymmdd) to String(yyyy/mm/dd)
  * @param str
  * @return
  * @throws Exception
  */
 public static String toStr(String str) throws Exception {
   return str.substring(0,4)+"/"+str.substring(4,6)+"/"+str.substring(6,8);
 }  
 /**
  * 
  * @param curDate
  * @return
  * @throws Exception
  */
 public static Date toLastDayOfMonth(Date curDate) throws Exception  {
    curDate=DateUtil.toDate(DateUtil.toStr(curDate,DateUtil.MONTH),DateUtil.MONTH);
    Calendar cld= Calendar.getInstance();
    cld.setTime(curDate);
    cld.add(Calendar.MONTH, 1);
    cld.add(Calendar.DATE, -1);
     
    return cld.getTime();     
 } 
 /**
  * 
  * @param args
  * @throws Exception
  */
 public static void main(String args[]) throws Exception {
	   String strDate="2000/02/04";  
	   System.out.println(DateUtil.toStr(DateUtil.toDate(strDate)));
	   System.out.println(DateUtil.toLastDayOfMonth(DateUtil.toDate(strDate)));        
 }
 
 /**
  * <pre>
  * check date string validation with the default format "yyyy-MM-dd" <br>
  * 인자로 받은 String 형 s 가 "yyyy-MM-dd"(년-월-일) 형인지 체크한다. 
  * </pre>
  *@param s date string you want to check with default format "yyyy-MM-dd".
  */
 public static void check(String s) throws Exception {
	  DateUtil.check(s, "yyyy-MM-dd");
 }

 /**
  * <pre>
  * check date string validation with an user defined format <br>
  * 인자로 받은 String s 가 사용자가 정의한 포맷형과 일치하는지 체크한다 예를 들어 
  * 사용자가 정의한 포맷형이 "yyyy-MM-dd" 인데 String s = "20020205" 라면 
  * java.text.ParseException 이 발생한다. 
  * </pre>
  *@param s date string you want to check.
  * @param format string representation of the date format. For example, "yyyy-MM-dd".
  */
 public static void check(String s, String format) throws java.text.ParseException {
	  if ( s == null )
	   throw new NullPointerException("date string to check is null");
	  if ( format == null ) 
	   throw new NullPointerException("format string to check date is null");

	  java.text.SimpleDateFormat formatter = 
	      new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
	  java.util.Date date = null;
	  try {
	   date = formatter.parse(s);
	  }
	  catch(java.text.ParseException e) {
	   throw new java.text.ParseException(
	    e.getMessage() + " with format \"" + format + "\"",
	    e.getErrorOffset()
	   );
	  }
  
	  if ( ! formatter.format(date).equals(s) )
	   throw new java.text.ParseException(
	    "Out of bound date:\"" + s + "\" with format \"" + format + "\"",
	    0
	   );
 }

 /**
  * <pre>
  * check date string validation with the default format "yyyyMMdd" <br>
  * 정해진 포맷형이 없을 때 인자로 받은 String s 가 "yyyyMMdd" 형태인지 체크한다. 
  * </pre> 
  *@param s date string you want to check with default format "yyyyMMdd"
  *
  * @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때
  *                 false 날짜 형식이 맞지 않거나, 존재하지 않는 날짜일 때
  */
 public static boolean isValid(String s) throws Exception {
	  return DateUtil.isValid(s, "yyyyMMdd");
 }

 /**
  * <pre>
  * check date string validation with an user defined format <br>
  * 인자로 받은 String s 를 사용자가 정의한 포맷형 String format 와 같은지 체크한다.
  * </pre>
  * @param s date string you want to check.
  * @param format string representation of the date format. For example, "yyyy-MM-dd".
  * @return boolean true 날짜 형식이 맞고, 존재하는 날짜일 때
  *                 false 날짜 형식이 맞지 않거나, 존재하지 않는 날짜일 때
  */
 public static boolean isValid(String s, String format) {
  java.text.SimpleDateFormat formatter = 
      new java.text.SimpleDateFormat (format, java.util.Locale.KOREA);
  	java.util.Date date = null;
	  try {
	   date = formatter.parse(s);
	  }
	  catch(java.text.ParseException e) {
	            return false;
	  }
  
	  if ( ! formatter.format(date).equals(s) )
            return false;
  			return true;
 }

 /**
  * 현재 시간을 "yyyy-MM-dd" 형태로 반환한다. 
  * @return formatted string representation of current day with  "yyyy-MM-dd".
  */
 public static String getDateString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * <pre>
 * 인자로 받은 Date 클래스 객체 d 를 "yyyy-MM-dd" 형태로 반환한다. 
 * </pre>
 */
 public static String getDateString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd", java.util.Locale.KOREA);
	  return formatter.format(d);
 }
 /**
  *
  * <pre>
  * 현재의 시간을 사용자가 정의한  String pattern 형태로 반환한다 .<br>
  * </pre>
  * For example, String time = DateTime.getFormatString("yyyy-MM-dd HH:mm:ss"); <br>
  * <pre>
  * 예를 들어, "yyyy-MM-dd HH:mm:ss" 을 인자값으로 getFormatString() 에 넘기면 
  * 현재 시간이 2002년 02월 05일 05시 17분 52초 일 때 
  * "2002-02-05 05:17:52" 를 반환한다. 
  * </pre>   
  * @param java.lang.String pattern  "yyyy, MM, dd, HH, mm, ss and more"
  * @return formatted string representation of current day and time with  your pattern.
  */
 public static String getFormatString(String pattern) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
	  String dateString = formatter.format(new java.util.Date());
	  return dateString;
 }

 /** 
 * <pre>
 * 사용자가 정의한 포맷형 String pattern 에 맞게 인자로 받은 Date 클래스 객체 d 를 변환하여 반환한다. <br>
 * 사용자가 정의한 포맷형 String pattern = "yyyy-mm-dd" 일 경우
 * 인자로 넘긴 Date d 의 날짜가 2002년 02월 05일 이라면 
 * 반환되는 값은 "2002-02-05" 가 된다. 
 * </pre>
 */
 public static String getFormatString(String pattern, Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
	  String dateString = formatter.format(d);
	  return dateString;
 }

 /**
  * "yyyyMMdd" 형태로 현째 날짜를 변환하여 반환한다. 
  * @return formatted string representation of current day with  "yyyyMMdd".
  */
 public static String getShortDateString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyyMMdd", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * 인자로 받은 Date d 를 "yyyyMMdd" 형태로 변환하여 반환한다. 
 */
 public static String getShortDateString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyyMMdd", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * "HHmmss" 형태로 현재 시간을 변환하여 반환한다. 
  * @return formatted string representation of current time with  "HHmmss".
  */
 public static String getShortTimeString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HHmmss", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /** 
 * 인자로 받은 Date d 를 "HHmmss" 형태로 변환하여 반환한다. 
 */
 public static String getShortTimeString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HHmmss", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * 현재 날짜를 "yyyy-MM-dd-HH:mm:ss:SSS" 형태로 변환하여 반환한다. 
  * @return formatted string representation of current time with  "yyyy-MM-dd-HH:mm:ss".
  */
 public static String getTimeStampString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * 인자로 받은 Date d 를 "yyyy-MM-dd-HH:mm:ss:SSS" 형태로 변환하여 반환한다. 
 */
 public static String getTimeStampString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * 현재 날짜를 "HH:mm:ss" 형태로 변환하여 반한한다. 
  * @return formatted string representation of current time with  "HH:mm:ss".
  */
 public static String getTimeString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HH:mm:ss", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * 인자로 받은 Date d 를 "HH:mm:ss" 형태로 변환하여 반환한다. 
 */
 public static String getTimeString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HH:mm:ss", java.util.Locale.KOREA);
	  return formatter.format(d);
 }
 
}
