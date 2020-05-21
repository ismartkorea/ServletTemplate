package net.hibiznet.common;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
 /** 
 * <pre>
 * DateTime Ŭ������ Java API ���� �����ϴ� java.text.SimpleDateFormat �� �̿��Ͽ� 
 * �츮�� ����ϱ� ���ϵ��� ������Ų ���̴�. 
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
 * �� �������� Java API �� �����ִ� ���������̴�. 
 * �� �ڼ��� ������ Java API �� java.text ��Ű���� ���캸�� �ٶ���. 
 * <br>
 * ����� DateTime Ŭ������ default �� Locale �� �ѱ����� �����Ͽ���. 
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
  * ���ڷ� ���� String �� s �� "yyyy-MM-dd"(��-��-��) ������ üũ�Ѵ�. 
  * </pre>
  *@param s date string you want to check with default format "yyyy-MM-dd".
  */
 public static void check(String s) throws Exception {
	  DateUtil.check(s, "yyyy-MM-dd");
 }

 /**
  * <pre>
  * check date string validation with an user defined format <br>
  * ���ڷ� ���� String s �� ����ڰ� ������ �������� ��ġ�ϴ��� üũ�Ѵ� ���� ��� 
  * ����ڰ� ������ �������� "yyyy-MM-dd" �ε� String s = "20020205" ��� 
  * java.text.ParseException �� �߻��Ѵ�. 
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
  * ������ �������� ���� �� ���ڷ� ���� String s �� "yyyyMMdd" �������� üũ�Ѵ�. 
  * </pre> 
  *@param s date string you want to check with default format "yyyyMMdd"
  *
  * @return boolean true ��¥ ������ �°�, �����ϴ� ��¥�� ��
  *                 false ��¥ ������ ���� �ʰų�, �������� �ʴ� ��¥�� ��
  */
 public static boolean isValid(String s) throws Exception {
	  return DateUtil.isValid(s, "yyyyMMdd");
 }

 /**
  * <pre>
  * check date string validation with an user defined format <br>
  * ���ڷ� ���� String s �� ����ڰ� ������ ������ String format �� ������ üũ�Ѵ�.
  * </pre>
  * @param s date string you want to check.
  * @param format string representation of the date format. For example, "yyyy-MM-dd".
  * @return boolean true ��¥ ������ �°�, �����ϴ� ��¥�� ��
  *                 false ��¥ ������ ���� �ʰų�, �������� �ʴ� ��¥�� ��
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
  * ���� �ð��� "yyyy-MM-dd" ���·� ��ȯ�Ѵ�. 
  * @return formatted string representation of current day with  "yyyy-MM-dd".
  */
 public static String getDateString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * <pre>
 * ���ڷ� ���� Date Ŭ���� ��ü d �� "yyyy-MM-dd" ���·� ��ȯ�Ѵ�. 
 * </pre>
 */
 public static String getDateString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd", java.util.Locale.KOREA);
	  return formatter.format(d);
 }
 /**
  *
  * <pre>
  * ������ �ð��� ����ڰ� ������  String pattern ���·� ��ȯ�Ѵ� .<br>
  * </pre>
  * For example, String time = DateTime.getFormatString("yyyy-MM-dd HH:mm:ss"); <br>
  * <pre>
  * ���� ���, "yyyy-MM-dd HH:mm:ss" �� ���ڰ����� getFormatString() �� �ѱ�� 
  * ���� �ð��� 2002�� 02�� 05�� 05�� 17�� 52�� �� �� 
  * "2002-02-05 05:17:52" �� ��ȯ�Ѵ�. 
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
 * ����ڰ� ������ ������ String pattern �� �°� ���ڷ� ���� Date Ŭ���� ��ü d �� ��ȯ�Ͽ� ��ȯ�Ѵ�. <br>
 * ����ڰ� ������ ������ String pattern = "yyyy-mm-dd" �� ���
 * ���ڷ� �ѱ� Date d �� ��¥�� 2002�� 02�� 05�� �̶�� 
 * ��ȯ�Ǵ� ���� "2002-02-05" �� �ȴ�. 
 * </pre>
 */
 public static String getFormatString(String pattern, Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat (pattern, java.util.Locale.KOREA);
	  String dateString = formatter.format(d);
	  return dateString;
 }

 /**
  * "yyyyMMdd" ���·� ��° ��¥�� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
  * @return formatted string representation of current day with  "yyyyMMdd".
  */
 public static String getShortDateString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyyMMdd", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * ���ڷ� ���� Date d �� "yyyyMMdd" ���·� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
 */
 public static String getShortDateString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyyMMdd", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * "HHmmss" ���·� ���� �ð��� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
  * @return formatted string representation of current time with  "HHmmss".
  */
 public static String getShortTimeString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HHmmss", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /** 
 * ���ڷ� ���� Date d �� "HHmmss" ���·� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
 */
 public static String getShortTimeString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HHmmss", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * ���� ��¥�� "yyyy-MM-dd-HH:mm:ss:SSS" ���·� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
  * @return formatted string representation of current time with  "yyyy-MM-dd-HH:mm:ss".
  */
 public static String getTimeStampString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * ���ڷ� ���� Date d �� "yyyy-MM-dd-HH:mm:ss:SSS" ���·� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
 */
 public static String getTimeStampString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("yyyy-MM-dd-HH:mm:ss:SSS", java.util.Locale.KOREA);
	  return formatter.format(d);
 }

 /**
  * ���� ��¥�� "HH:mm:ss" ���·� ��ȯ�Ͽ� �����Ѵ�. 
  * @return formatted string representation of current time with  "HH:mm:ss".
  */
 public static String getTimeString() {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HH:mm:ss", java.util.Locale.KOREA);
	  return formatter.format(new java.util.Date());
 }

 /**
 * ���ڷ� ���� Date d �� "HH:mm:ss" ���·� ��ȯ�Ͽ� ��ȯ�Ѵ�. 
 */
 public static String getTimeString(Date d) {
	  java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat ("HH:mm:ss", java.util.Locale.KOREA);
	  return formatter.format(d);
 }
 
}
