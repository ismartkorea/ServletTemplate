package net.hibiznet.common;

import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.apache.log4j.Logger;

public class StringUtil {
	
	public StringUtil() {
	}
	
    static Logger logger = Logger.getLogger( StringUtil.class );
    
		/**
		 * String�� Null üũ �޼ҵ�.
		 * @param str
		 * @return
		 */
		public static String strCheckNull(String str) {
			try {
				if(str == null) {
					str = "";
					return str;
				}
			} catch(Exception ex) {
				ex.printStackTrace();
			}
			return str;
		}
		/**
		 * Int�� Null üũ �޼ҵ�.
		 * @param str
		 * @return
		 */
		public static int intCheckNull(String str) {
			int number = 0;
			try {

				if(str.equals(null) || str.equals("")) {
					return number;
				} else {
					number = Integer.parseInt(str);
					//logger.debug(">>>> number is " + number);
					
				}
				
			} catch(Exception ex) {
				ex.printStackTrace();
			}
			
			return number;
		}
		
		/**
		 * String To Date Convet �޼ҵ�.
		 * @param str
		 * @return
		 */
		public static Date strToDate(String str) {
			Date date = new Date();
			try {
				
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				date = sdf.parse(str);
				
				return date;
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return date;
			
		}
		/**
		 * Date To String Convert �޼ҵ�.
		 * @param date
		 * @return
		 */
		public static String dateToString(Date date) {
			
			String strDate = null;
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			strDate = sdf.format(date);
			
			return strDate;
		}
		/**
		 * Date To String Convert �޼ҵ�.
		 * @param date
		 * @return
		 */
		public static String timeStampToStr(Timestamp date) {
			
			String strDate = null;
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			strDate = sdf.format(date);
			
			return strDate;
		}
		/**
		 * 
		 * @param date
		 * @return
		 */
		public static String timeStampToStr(Timestamp date, String exp) {
			
			String strDate = null;
			
			if(exp == null || exp.equals("")) {
				exp = "yyyy-MM-dd";
			}
			
			SimpleDateFormat sdf = new SimpleDateFormat(exp);
			strDate = sdf.format(date);
			
			return strDate;
		}
		/**
		 * SQL Timestamp ���� To String ������.
		 * @param date
		 * @param exp
		 * @return
		 */
		public static String timesToString(Timestamp date, String exp) {
			
			String strDate = new String();
			
			if(exp == null || exp.equals("")) {
				exp = "yyyy-MM-dd";
			}
			
			SimpleDateFormat sdf = new SimpleDateFormat(exp);
			//SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
			 
//			if(date == null) {
//				Date convDate = new Date();
//				try {
//					convDate = sdformat.parse("1900-01-01 24:00");
//				} catch (ParseException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//				 date = new java.sql.Timestamp(convDate.getTime());
//			}
			
			if(date == null) {
				strDate = "0000/00/00 ���� 00:00";
			} else {
				strDate = sdf.format(date);
			}
			
			return strDate;
		}		
		/**
		 * String To java.sql.Date Convert �޼ҵ�.
		 * @param str
		 * @return
		 */
		public static java.sql.Date strToSDate(String str) {
			java.util.Date utilDate = new Date();
			java.sql.Date sqlDate = null;
			try {
				
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				utilDate = sdf.parse(str);
				sqlDate = new java.sql.Date(utilDate.getTime());
				
				return sqlDate;
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return sqlDate;			
		}
		
		/**
		 * 
		 * @return
		 */
		public static String getCurrentDate() {
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd",Locale.KOREA);
			Date currentDate = new Date();
			String sDate = sdf.format(currentDate);
			
			return sDate;
			
		}
		/**
		 * �ֹ� �����ڵ� ��ȯ.
		 * @param state
		 * @return
		 */
		public static String getOrderState(String param) {
			String result = new String();
			
			String state = StringUtil.strCheckNull(param);
			if(state.equals("0")) {
				result = "�ֹ����";
			} else if(state.equals("1")) {
				result = "�ֹ��Ϸ�";
			} else {
				result = "";
			}
			return result;
		}
		/**
		 * ���� �����ڵ� ��ȯ.
		 * @param state
		 * @return
		 */
		public static String getPayState(String param) {
			String result = new String();
			
			String state = StringUtil.strCheckNull(param);
			if(state.equals("0")) {
				result = "���ҿ���";
			} else if(state.equals("1")) {
				result = "�������";
			} else if(state.equals("2")){
				result = "���ҿϷ�";
			} else {
				result = "";
			}
			return result;			
		}
		/**
		 * ��ǰī�װ� �����ڵ� ��ȯ.
		 */
		public static String getProdCateState(String param) {
			String result = new String();
			
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("C")) {
				result = "���̽�";
			} else if(state.equals("E")) {
				result = "�̾�ĸ";
			} else if(state.equals("M")){
				result = "����Ͼ׼�����";
			} else if(state.equals("F")){
				result = "�мǾ׼�����";				
			} else {
				result = "";
			}
			return result;			
		}

		/**
		 * ������ �����ڵ� ��ȯ.
		 * @param state
		 * @return
		 */
		public static String getPhoneState(String param) {
			String result = new String();
			
			// null üũ.
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("03")) {
				result = "iPhone 5";				
		    } else if(state.equals("02")) {
				result = "iPhone 4/4s";
			} else if(state.equals("01")) {
				result = "iPhone 3g/3gs";
			} else if(state.equals("13")) {
				result = "Galaxy Note2";
			} else if(state.equals("12")){
				result = "Galaxy S3";
			} else if(state.equals("11")) {
				result = "Galaxy S2";
			} else if(state.equals("21")) {
				result = "iPad";
			} else if(state.equals("22")) {
				result = "iPad2";
			} else if(state.equals("23")) {
				result = "New iPad(iPad3)";	
			} else if(state.equals("24")) {
				result = "iPad mini";					
			} else if(state.equals("90")) {
				result = "etc";
			} else {
				result = "����";
			}
			
			return result;
		}
		/**
		 * �ǸŻ��� �ڵ� ��ȯ.
		 * @param param
		 * @return
		 */
		public static String getSaleState(String param) {
			String result = new String();
			
			// null üũ.
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("01")) {
				result = "�Ǹ���.";
			} else if(state.equals("02")) {
				result = "�ǸſϷ�.";
			} else if(state.equals("03")){
				result = "���ǹٶ�.";
			} else {
				result = "����";
			}
			
			return result;
		}
		/**
		 * ��ۻ��� �ڵ� ��ȯ.
		 * @param param
		 * @return
		 */
		public static String getShippingType(String param) {
			String result = new String();
			
			// null üũ.
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("01")) {
				result = "���� ���.";
			} else if(state.equals("02")) {
				result = "��ü�����.";
			} else if(state.equals("03")){
				result = "�ù� ���.";
			} else {
				result = "����";
			}
			
			return result;
		}
		/**
		 * ���� ȭ�� ��ǰ���� ���� ���ó��.
		 * @param param
		 * @return
		 */
		public static String getMDState(String param) {
			String result = new String();
			
			// null üũ.
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("01")) {
				result = "������.";
			} else if(state.equals("02")) {
				result = "���þ���.";
			} else {
				result = "����";
			}
			
			return result;			
		}
		/**
		 * ��ǰ ���� ���� ���.
		 * @param param
		 * @return
		 */
		public static String getPDState(String param) {
			String result = new String();
			
			// null üũ.
			String state = StringUtil.strCheckNull(param);
			
			if(state.equals("01")) {
				result = "������.";
			} else if(state.equals("02")) {
				result = "���þ���.";
			} else {
				result = "����";
			}
			
			return result;			
		}
		 /**
		  *
		  */
		    public final static String translateJS(String s) {
		        if ( s == null ) return null;

		        StringBuffer buf = new StringBuffer();
		        char[] c = s.toCharArray();
		        int len = c.length;
		        for ( int i=0; i < len; i++) {
		            if ( c[i] == '&' )
		    buf.append("\"+&amp;+\"");
		            else if ( c[i] == '<' )
		    buf.append("\"+&lt;+\"");
		            else if ( c[i] == '>' )
		    buf.append("\"+&gt;+\"");
		            else if ( c[i] == '"' )
		    buf.append("\"+&quot;+\"");
		            else if ( c[i] == '\'')
		    buf.append("\"+&#039;+\"");
		            else buf.append(c[i]);
		        }
		        return buf.toString();
		 }
		    
		    /**
		     * String�� ���Ե� ��� newline����(\n)�� ��ȯ�Ͽ� ��
		     * ����Ʈ�� "<BR>\n" �� ��ȯ��
		     * @return the translated string.
		     * @param source String ��ȯ�� string
		     */
		 public static String translateNewline(String source) {
			 
			 String DEFAULT_STRING = "<BR>\n";
			 return translateNewline(source, DEFAULT_STRING);
		  	
		 }

		    /**
		     * String�� ���Ե� ��� newline����(\n)�� Ư��String���� ��ȯ�Ͽ� ��
		     * @return the translated string.
		     * @param source String ��ȯ�� string
		     * @param specialString newline���ڸ� ��ü�� string
		     */
		 public static String translateNewline(String source, String specialString) {

		  String result = "";
		  java.util.StringTokenizer st = new java.util.StringTokenizer(source, "\n");
		  while(st.hasMoreTokens())
		   result += st.nextToken() + specialString;
		  return result;
		 }
		    /**
		     * ���ڿ��� 15�� ��ŭ�� �����ְ�
		     * �� ���̿� �ʰ��Ǵ� ���ڿ��� ��� "..."�� ���ٿ� �����ش�.
		     * @return the translated string.
		     * @param s String ��ȯ�� ���ڿ�
		     */
		 public static String fixLength(String input) {
			 return fixLength(input, 15, "...");
		 }

		    /**
		     * ���ڿ��� �������� ��ŭ�� �����ְ�
		     * �� ���̿� �ʰ��Ǵ� ���ڿ��� ��� "..."�� ���ٿ� �����ش�.
		     * @return the translated string.
		     * @param s String ��ȯ�� ���ڿ�
		     * @param limitLength int ���ڿ��� ���� ����
		     */
		 public static String fixLength(String input, int limit) {
			 return fixLength(input, limit, "...");
		 }

		/**
	     * ���ڿ��� �������� ��ŭ�� �����ְ�
	     * �� ���̿� �ʰ��Ǵ� ���ڿ��� ��� Ư�����ڸ� ���ٿ� �����ش�.
	     * @return the translated string.
	     * @param s String ��ȯ�� ���ڿ�
	     * @param limitLength int ���ڿ��� ���� ����
	     * @param postfix String ������ ���ڿ�
	     */
		 public static String fixLength(String input, int limit, String postfix) {
			  char[] charArray = input.toCharArray();
			  if (limit >= charArray.length)
			   return input;
			  return new String( charArray, 0, limit ).concat( postfix );
		 }

		 /**
		  * ���ڿ��� �������� ��ŭ�� �����ְ�
		  * �� ���̿� �ʰ��Ǵ� ���ڿ��� ��� Ư�����ڸ� ���ٿ� �����ش�.
		  *
		  * �� fixLength���� ���̴� ���ѱ����� ������ char�� �ƴ϶� byte��
		  * ó���������ؼ� �ѱ۹����� �ذ��Ҽ� �ִ�.
		  *
		  * @return the translated string.
		  * @param input String ��ȯ�� ���ڿ�
		  * @param limitByte int ���ڿ��� ���� ����(byte)
		  * @param postfix String ������ ���ڿ�
		  *
		  * @author Jangho Hwang 
		  */
		 public static String fixUnicodeLength(String input, int limitByte) {
		  return fixLength(input, limitByte, "...");
		 }
		 /**
		  *  �߰��� -1�� ���ִ� ����. 21����Ʈ¥�� �ѱ� ��Ʈ����.
		  *  20���� ©�� String�� �����ϸ�, �����ڸ� ©���°��� �ƴ϶�.
		  *  ��Ʈ����ü�� ���� ������ ���� �ʱ� ����. �׷��Ƿ� ���̰� 0�̸�
		  *  -1�Ѹ�ŭ ��Ʈ���� �����ϴ� ���̴�.
		  * 
		  * @param input
		  * @param limitByte
		  * @param postfix
		  * @return
		  */
		 public static String fixUnicodeLength( String input, int limitByte, String postfix ) {
			  byte[] outputBytes = input.getBytes();
	
			  String output = outputBytes.length <= limitByte ? 
			   input : (new String( outputBytes, 0, limitByte ).length()==0 ? 
			    new String( outputBytes, 0, limitByte-1 ).concat( postfix ) : 
			    new String( outputBytes, 0, limitByte ) ).concat( postfix );
	
			  return output;
		 }

	    /**
	     * ���ڿ����� Ư�� ���ڿ��� ġȯ�Ѵ�.
	     * @return the translated string.
	     * @param source String ��ȯ�� ���ڿ�
	     * @param keyStr String ġȯ ��� ���ڿ�
	     * @param toStr String ġȯ�� ���ڿ�
	     */
	    public static String replaceStr(String source, String keyStr, String toStr) {
	     int startIndex = 0;
	     int curIndex = 0;
	     StringBuffer result = new StringBuffer();

	     while ( ( curIndex = source.indexOf(keyStr, startIndex) ) >= 0) {
	      result.append(source.substring(startIndex, curIndex))
	            .append(toStr);
	      startIndex = curIndex + keyStr.length();
	     }

	     if (startIndex <= source.length() )
	      result.append(source.substring(startIndex, source.length()));

	     return result.toString();

	    }

	    /**
	     * ���ڿ����� Ư�� ���ڿ��� ġȯ�Ѵ�.
	     * ���ڿ� �迭�� ���ʴ�� ġȯ�ϵ�
	     * �� �̻� �迭 ���� ������ space 1ĭ���� ġȯ�Ѵ�.
	     * @return the translated string.
	     * @param source String ��ȯ�� ���ڿ�
	     * @param keyStr String ġȯ ��� ���ڿ�
	     * @param toStr String[] ġȯ�� ���ڿ� �迭
	     */
	    public static String replaceStr(String source, String keyStr, String[] toStr) {
	     int startIndex = 0;
	     int curIndex = 0;
	     int i = 0;
	     StringBuffer result = new StringBuffer();
		 String specialString = null;
	
		     while ( ( curIndex = source.indexOf(keyStr, startIndex) ) >= 0) {
		      if (i < toStr.length )
		          specialString = toStr[i++];
		      else
		          specialString = " ";
		      result.append(source.substring(startIndex, curIndex))
		            .append(specialString);
		      startIndex = curIndex + keyStr.length();
		     }
	
		     if (startIndex <= source.length() )
		      result.append(source.substring(startIndex, source.length()));
	
		     return result.toString();
	    }


	    /**
	     * ��¥ ���ڿ����� delimiter�� ǥ��� ���·� �����ش�.
	     * @return the translated string.
	     * @param date String ��ȯ�� ���ڿ�
	     */
	    public static String printDate(String date) {
	    	if (date == null) return "";
	    	return date.substring(0,10).replace('-','/');
	    }

	    /**
	     * ��¥ ���ڿ����� delimiter�� ǥ��� ���·� �����ش�.
	     * @return the translated string.
	     * @param date String ��ȯ�� ���ڿ�
	     * @param seperator char delimiter
	     */
	    public static String printDate(String date, char seperator) {
	    	if (date == null) return "";
	    	return date.substring(0,10).replace('-', seperator);
	    }

	    /**
	     * ��¥�ð� ���ڿ����� delimiter�� ǥ��� ���·� �����ش�.
	     * @return the translated string.
	     * @param date String ��ȯ�� ���ڿ�
	     */
	    public static String printDateTime(String date) {
	    	if (date == null) return "";
	 		return date.substring(0,16).replace('-','/');
	    }
		/**
		 * �ݾ� ���� ǥ��.
		 * @param str
		 * @return
		 */
		public static String setStrComma(String str) {
			String result = "";
			DecimalFormat df = new DecimalFormat("###,###"); 
			if(str != null || str != "") {
				result = df.format(str);
			}
			return result;
		}
		/**
		 * �ݾ� ���� ǥ��.
		 * @param num
		 * @return
		 */
		public static String setIntComma(int num) {
			String strNum = String.valueOf(num);
			DecimalFormat df = new DecimalFormat("###,###"); 
			return df.format(Integer.parseInt(strNum));
		}
}
