package net.hibiznet.common;

import java.text.DecimalFormat;
import java.util.Vector;

/**
 * Comment : Êπ≤ÎçâÎ∏∏Ê?®ÔøΩ?ÑøÔøΩÏ†¥ÔøΩÔøΩÔøΩÍ≥óÍ∂õÔøΩÔøΩÔøΩ?Ñé?íó ÔøΩÎ??òí
 *  1.
 *  2.
 *  doubleÔøΩÔøΩÔøΩÎ©∏ÍºçÔøΩÔøΩÔøΩ?â„éé ÔßûÔøΩ?†ôÔøΩÎÜÅ?î† ?ï∞?íï?†∞ÔøΩÔøΩÔøΩÔøΩÔøΩÎ?Î£ÑÊø°ÔøΩoverload ÔøΩ‚ë•?ãî ?è¥?ãÏÅΩ
 * @author 
 * @version 
 * @since 
 */
public class MoneyUtil {

 /**
  * 
  * @param d
  * @return
  */
 public static String format(double d) {
  if (d  == 0) {
   return "0";
  }
  else {
   String sTotalLenth = Integer.toString(String.valueOf(d).length()) ; // 0.002 ÔøΩÔøΩÂØÉÏéå?ä¶ 5
   String sDotLenth = Integer.toString(String.valueOf(d).length()-2) ; // 0.002 ÔøΩÔøΩÂØÉÏéå?ä¶ 3
   return format("%"+ sTotalLenth + "." + sDotLenth + "f", d); // 0.002 ÔøΩÔøΩÂØÉÏéå?ä¶ (%5.2,0002) ÔøΩÎ∫•Íπ?
  }
 }
 /**
  * 
  * @param count
  * @return
  */
 public static String spaces(int count) {
  StringBuffer sb = new StringBuffer();
  for (int i = 0; i < count; i++) {
   sb.append(' ');
  }
  return sb.toString();
 }
 /**
  * 
  * @param count
  * @return
  */
 public static String sharps(int count) {
  StringBuffer sb = new StringBuffer();
  for (int i = 0; i < count; i++) {
   sb.append('#');
  }
  return sb.toString();
 }

 public static String zeros(int count) {
  StringBuffer sb = new StringBuffer();
  for (int i = 0; i < count; i++) {
   sb.append('0');
  }
  return sb.toString();
 }
 /**
  * 
  * @param s
  * @return
  */
 public static int byteLength(String s) {
  return s.getBytes().length;
 }
 /**
  * 
  * @param fmt
  * @param b
  * @return
  */
 public static String format(String fmt, boolean b) {
  return format(fmt, "" + b);
 }
 /**
  * 
  * @param fmt
  * @param b
  * @param t
  * @param f
  * @return
  */
 public static String format(String fmt, boolean b, String t, String f) {
  return b ? format(fmt, t) : format(fmt, f);
 }
 /**
  * 
  * @param fmt
  * @param o
  * @return
  */
 public static String format(String fmt, Object o) {
  return format(fmt, o.toString());
 }
 /**
  * 
  * @param fmt
  * @param s
  * @return
  */
 public static String format(String fmt, String s) {
  StringBuffer sb = new StringBuffer();
  char[] chars = new char[fmt.length()];
  fmt.getChars(0, fmt.length(), chars, 0);
  final int NORMAL_STATE = 0;
  final int PERCENT_STATE = 1;
  final int L_STATE = 2;
  final int WIDTH_DIGIT_STATE = 3;
  final int POINT_DIGIT_STATE = 4;
  int state = NORMAL_STATE;
  int width = 0;
  int pwidth = 0;
  int blen = 0;
  boolean alignRight = true;
  int pos = 0;
  DecimalFormat df = null;
  Object obj = null;
  String str = "";
  char a;
  for (int i = 0; i < chars.length; i++) {
   a = chars[i];
   switch (state) {
    case NORMAL_STATE:
       if (a != '%')
        sb.append(a);
       else {
        width = 0;
        pwidth = 0;
        alignRight = true;
        state = PERCENT_STATE;
       }
       break;
    case PERCENT_STATE:
       if (a == '%') {
        sb.append(a);
        state = NORMAL_STATE;
       }
       else if (a == '+') {
        alignRight = true;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '-') {
        alignRight = false;
        width = 0;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        alignRight = true;
        width = (int)(a - '0');
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '.') {
        alignRight = true;
        width = 0;
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a == 's' || a == 'S') {
        str = "" + s;
        blen = byteLength(str);    //
        if (width >= blen) {           //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case WIDTH_DIGIT_STATE:
       if (a == '.') {
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        width = 10*width + (int)(a - '0');
       }
       else if (a == 's' || a == 'S') {
        str = "" + s;
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case POINT_DIGIT_STATE:
       if (a >= '0' && a <= '9') {
        pwidth = 10*pwidth + (int)(a - '0');
       }
       else if (a == 's' || a == 'S') {
        str = "" + s;
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
   }
  }
  return sb.toString();
 }
 /**
  * 
  * @param fmt
  * @param c
  * @return
  */
 public static String format(String fmt, char c) {
  return format(fmt, (long)(c & 0xFFFF));
 }
 /**
  * 
  * @param fmt
  * @param b
  * @return
  */
 public static String format(String fmt, byte b) {
  return format(fmt, (long)b);
 }
 /**
  * 
  * @param fmt
  * @param n
  * @return
  */
 public static String format(String fmt, short n) {
  return format(fmt, (long)n);
 }
 /**
  * 
  * @param fmt
  * @param n
  * @return
  */
 public static String format(String fmt, int n) {
  return format(fmt, (long)n);
 }
 /**
  * 
  * @param fmt
  * @param n
  * @return
  */
 public static String format(String fmt, long n) {
  StringBuffer sb = new StringBuffer();
  char[] chars = new char[fmt.length()];
  fmt.getChars(0, fmt.length(), chars, 0);
  final int NORMAL_STATE = 0;
  final int PERCENT_STATE = 1;
  final int L_STATE = 2;
  final int WIDTH_DIGIT_STATE = 3;
  final int POINT_DIGIT_STATE = 4;
  int state = NORMAL_STATE;
  int width = 0;
  int pwidth = 0;
  int blen = 0;
  boolean alignRight = true;
  int pos = 0;
  DecimalFormat df = null;
  Object obj = null;
  String str = "";
  boolean leadZero = false;
  char a;
  for (int i = 0; i < chars.length; i++) {
   a = chars[i];
   switch (state) {
    case NORMAL_STATE:
       if (a != '%')
        sb.append(a);
       else {
        width = 0;
        pwidth = 0;
        alignRight = true;
        leadZero = false;
        state = PERCENT_STATE;
       }
       break;
    case PERCENT_STATE:
       if (a == '%') {
        sb.append(a);
        state = NORMAL_STATE;
       }
       else if (a == '+') {
        alignRight = true;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '-') {
        alignRight = false;
        width = 0;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        if (a == '0')
         leadZero = true;
        alignRight = true;
        width = (int)(a - '0');
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '.') {
        alignRight = true;
        width = 0;
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a == 'c' || a == 'C') {
        str = "" + (char) n;
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'x' || a == 'X') {
        str = "" + n;
        if (a == 'X')
         str = str.toUpperCase();
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'o' || a == 'O') {
        str = "" + Long.toOctalString(n);
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'd' || a == 'D') {
        str = "" + n;
        sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case L_STATE:
       if (a == 'x' || a == 'X') {
        str = "" + Long.toHexString(n);
        if (a == 'X')
         str = str.toUpperCase();
        blen = byteLength(str);    //
        if (width >= blen) {          //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        str = "" + n;
        blen = byteLength(str);
        if (width >= blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case WIDTH_DIGIT_STATE:
       if (a == '.') {
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        if (a == '0' && width == 0)
         leadZero = true;
        width = 10*width + (int)(a - '0');
       }
       else if (a == 'c' || a == 'C') {
        str = "" + (char)(n & 0xFFFFL);
        blen = byteLength(str);
        if (width >= blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else {
         sb.append(str);
        }
        state = NORMAL_STATE;
       }
       else if (a == 'x' || a == 'X') {
        str = "" + Long.toHexString(n);
        if (a == 'X')
         str = str.toUpperCase();
        blen = byteLength(str);
        if (width >= blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'o' || a == 'O') {
        str = "" + Long.toOctalString(n);
        blen = byteLength(str);
        if (width >= blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        str = "" + n;
        blen = byteLength(str);
        if (width > blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case POINT_DIGIT_STATE:
       if (a >= '0' && a <= '9') {
        pwidth = 10*pwidth + (int)(a - '0');
       }
       else if (a == 'c' || a == 'C') {
        str = "" + (char) (n & 0xFFFFL);
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        str = "" + n;
        blen = byteLength(str);
        if (width >= blen) {    //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
   }
  }
  return sb.toString();
 }
 /**
  * 
  * @param fmt
  * @param n
  * @return
  */
 public static String format(String fmt, float n) {
  return format(fmt, (double)n);
 }
 /**
  * 
  * @param fmt
  * @param d
  * @return
  */
 public static String format(String fmt, double d) {
  StringBuffer sb = new StringBuffer();
  char[] chars = new char[fmt.length()];
  fmt.getChars(0, fmt.length(), chars, 0);
  final int NORMAL_STATE = 0;
  final int PERCENT_STATE = 1;
  final int L_STATE = 2;
  final int WIDTH_DIGIT_STATE = 3;
  final int POINT_DIGIT_STATE = 4;
  int state = NORMAL_STATE;
  int width = 0;
  int pwidth = 0;
  int blen = 0;
  boolean alignRight = true;
  int pos = 0;
  DecimalFormat df = null;
  Object obj = null;
  String str = "";
  char a;
  for (int i = 0; i < chars.length; i++) {
   a = chars[i];
   switch (state) {
    case NORMAL_STATE:
       if (a != '%')
        sb.append(a);
       else {
        width = 0;
        pwidth = 0;
        alignRight = true;
        state = PERCENT_STATE;
       }
       break;
    case PERCENT_STATE:
       if (a == '%') {
        sb.append(a);
        state = NORMAL_STATE;
       }
       else if (a == '+') {
        alignRight = true;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '-') {
        alignRight = false;
        width = 0;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        alignRight = true;
        width = (int)(a - '0');
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '.') {
        alignRight = true;
        width = 0;
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a == 'x' || a == 'X') {
        str = "" + Long.toHexString(Double.doubleToLongBits(d));
        if (a == 'X')
         str = str.toUpperCase();
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'o' || a == 'O') {
        str = "" + Long.toOctalString(Double.doubleToLongBits(d));
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(d);
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
        str = "" + d;
        blen = byteLength(str);   //
        if (width >= blen) {           //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case L_STATE:
       if (a == 'x' || a == 'X') {
        str = "" + Long.toHexString(Double.doubleToLongBits(d));
        if (a == 'X')
         str = str.toUpperCase();
        if (width > str.length()) {
         if (alignRight)
          sb.append(spaces(width - str.length()) + str);
         else
          sb.append(str + spaces(width - str.length()));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
        str = "" + (long) Math.floor(d);
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case WIDTH_DIGIT_STATE:
       if (a == '.') {
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        width = 10*width + (int)(a - '0');
       }
       else if (a == 'x' || a == 'X') {
        str = "" + Long.toHexString(Double.doubleToLongBits(d));
        if (a == 'X')
         str = str.toUpperCase();
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'o' || a == 'O') {
        str = "" + Long.toOctalString(Double.doubleToLongBits(d));
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(d);
        blen = byteLength(str);
        if (width > blen) {
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
        str = "" + d;
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case POINT_DIGIT_STATE:
       if (a >= '0' && a <= '9') {
        pwidth = 10*pwidth + (int)(a - '0');
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(d);
        blen = byteLength(str);
        if (width >= blen) {    //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
        if (pwidth > 0) {
         df = new DecimalFormat("0." + zeros(pwidth));
         str = df.format(d);
         blen = byteLength(str);
         if (width >= blen) {   // Fix a bug of 1.1
          if (alignRight)
           sb.append(spaces(width - blen) + str);
          else
           sb.append(str + spaces(width - blen));
         }
        }
        else {
         str = "" + d;
         blen = byteLength(str);
         if (width >= blen) {    //
          if (alignRight)
           sb.append(spaces(width - blen) + str);
          else
           sb.append(str + spaces(width - blen));
         }
        }
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
   }
  }
  return sb.toString();
 }
 /**
  * 
  * @param fmt
  * @param v
  * @return
  */
 public static String format(String fmt, Vector v) {
  StringBuffer sb = new StringBuffer();
  char[] chars = new char[fmt.length()];
  fmt.getChars(0, fmt.length(), chars, 0);
  final int NORMAL_STATE = 0;
  final int PERCENT_STATE = 1;
  final int L_STATE = 2;
  final int WIDTH_DIGIT_STATE = 3;
  final int POINT_DIGIT_STATE = 4;
  int state = NORMAL_STATE;
  int width = 0;
  int pwidth = 0;
  int blen = 0;
  boolean alignRight = true;
  int pos = 0;
  DecimalFormat df = null;
  Object obj = null;
  String str = "";
  boolean leadZero = false;
  char a;
  for (int i = 0; i < chars.length; i++) {
   a = chars[i];
   switch (state) {
    case NORMAL_STATE:
       if (a != '%')
        sb.append(a);
       else {
        width = 0;
        pwidth = 0;
        alignRight = true;
        leadZero = false;
        state = PERCENT_STATE;
       }
       break;
    case PERCENT_STATE:
       if (a == '%') {
        sb.append(a);
        state = NORMAL_STATE;
       }
       else if (a == '+') {
        alignRight = true;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '-') {
        alignRight = false;
        width = 0;
        state = WIDTH_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        if (a == '0')
         leadZero = true;
        alignRight = true;
        width = (int)(a - '0');
        state = WIDTH_DIGIT_STATE;
       }
       else if (a == '.') {
        alignRight = true;
        width = 0;
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a == 'c' || a == 'C') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + (char) (((Character)obj).charValue());
        else
         str = "" + (char) (((Integer)obj).intValue());
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'x' || a == 'X') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + Integer.toHexString((int) (((Character)obj).charValue()));
        else
         str = "" + Integer.toHexString((int) (((Integer)obj).intValue()));

        if (a == 'X')
         str = str.toUpperCase();
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'o' || a == 'O') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + Integer.toOctalString((int) (((Character)obj).charValue()));
        else
         str = "" + Integer.toOctalString((int) (((Integer)obj).intValue()));
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(((Double)v.elementAt(pos++)).doubleValue());
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        str = "" + v.elementAt(pos++);
        sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 's' ||a == 'f' || a == 'g' || a == 'S' || a == 'F' || a == 'G') {
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);    //
        if (width >= blen) {          //
         if (alignRight)
          sb.append(spaces(width - str.length()) + str);
         else
          sb.append(str + spaces(width - str.length()));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case L_STATE:
       if (a == 'x' || a == 'X') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + Long.toHexString((long) (((Character) obj).charValue()));
        else if (obj instanceof Long)
         str = "" + Long.toHexString(((Long) obj).longValue());
        else
         str = "" + Integer.toHexString(((Integer) obj).intValue());

        if (a == 'X')
         str = str.toUpperCase();

        blen = byteLength(str);
        if (width >= blen) {  //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - str.length()) + str);
         else
          sb.append(str + spaces(width - str.length()));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);
        if (width >= blen) {  //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case WIDTH_DIGIT_STATE:
       if (a == '.') {
        pwidth = 0;
        state = POINT_DIGIT_STATE;
       }
       else if (a >= '0' && a <= '9') {
        if (a == '0' && width == 0)
         leadZero = true;
        width = 10*width + (int)(a - '0');
       }
       else if (a == 'c' || a == 'C') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + (char) (((Character)obj).charValue());
        else
         str = "" + (char) (((Integer)obj).intValue());
        blen = byteLength(str);
        if (width >= blen) {  //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else {
         sb.append(str);
        }
        state = NORMAL_STATE;
       }
       else if (a == 'x' || a == 'X') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + Integer.toHexString((int) (((Character)obj).charValue()));
        else
         str = "" + Integer.toHexString((int) (((Integer)obj).intValue()));

        if (a == 'X')
         str = str.toUpperCase();
        blen = byteLength(str);
        if (width >= blen) {   //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'o' || a == 'O') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + Integer.toOctalString((int) (((Character)obj).charValue()));
        else
         str = "" + Integer.toOctalString((int) (((Integer)obj).intValue()));

        blen = byteLength(str);
        if (width >= blen) {   //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(((Double)v.elementAt(pos++)).doubleValue());
        blen = byteLength(str);
        if (width >= blen) {   //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        // str = "" + leadZero + " " + alignRight + v.elementAt(pos++);
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);
        if (width >= blen) {   //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 's' || a == 'f' || a == 'g' || a == 'S' || a == 'F' || a == 'G') {
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);
        if (width > str.length()) {
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
    case POINT_DIGIT_STATE:
       if (a >= '0' && a <= '9') {
        pwidth = 10*pwidth + (int)(a - '0');
       }
       else if (a == 'c' || a == 'C') {
        obj = v.elementAt(pos++);
        if (obj instanceof Character)
         str = "" + (char) (((Character)obj).charValue());
        else
         str = "" + (char) (((Integer)obj).intValue());
        blen = byteLength(str);
        if (width > blen) {
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        state = NORMAL_STATE;
       }
       else if (a == 'l' || a == 'L') {
        state = L_STATE;
       }
       else if (a == 'd' || a == 'D' || a == 'u' || a == 'U') {
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);
        if (width >= blen) {  //
         if (leadZero && alignRight)
          sb.append(zeros(width - blen) + str);
         else if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 's' || a == 'S') {
        str = "" + v.elementAt(pos++);
        blen = byteLength(str);
        if (width > blen) {
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'e' || a == 'E') {
        df = new DecimalFormat("##0.###E0");
        str = df.format(((Double)v.elementAt(pos++)).doubleValue());
        blen = byteLength(str);
        if (width >= blen) {  //
         if (alignRight)
          sb.append(spaces(width - blen) + str);
         else
          sb.append(str + spaces(width - blen));
        }
        else
         sb.append(str);
        state = NORMAL_STATE;
       }
       else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
        if (pwidth > 0) {
         df = new DecimalFormat("0." + zeros(pwidth));
         str = df.format(((Double)v.elementAt(pos++)).doubleValue());
         blen = byteLength(str);
         if (width >= blen) {  //
          if (alignRight)
           sb.append(spaces(width - blen) + str);
          else
           sb.append(str + spaces(width - blen));
         }
        }
        else {
         str = "" + v.elementAt(pos++);
         blen = byteLength(str);
         if (width > blen) {
          if (alignRight)
           sb.append(spaces(width - blen) + str);
          else
           sb.append(str + spaces(width - blen));
         }
        }
        state = NORMAL_STATE;
       }
       else {
        sb.append(a);
        state = NORMAL_STATE;
       }
       break;
   }
  }
  return sb.toString();
 }
 /**
  * 
  * @param args
  */
 public static void main(String[] args) {
  Vector vect = new Vector();
  vect.add("ÔøΩÎçà???");
  vect.add(new Integer(2030));
  vect.add(new Double(Math.PI));
  vect.add(new Character('A'));
  vect.add(new Integer(97));
  String str;
  str = format("%s Java!", vect);
  System.out.println(str);

  str = format("%10s Java!", vect);
  System.out.println(str);

  str = format("%-10s Java!", vect);
  System.out.println(str);

  str = format("%-10s %%Java!", vect);
  System.out.println(str);

  str = format("%-10s: %5d%%Java!", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!  pi = %g", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!  pi = %12.3g", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!  pi = %-10.4g", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!  pi = %-10.4g %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %-8d%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %X%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %6X%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %-6X%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %O%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %8o%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %-8O%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  str = format("%-10s: %10ld%% Java!  pi = %e %c%-3c", vect);
  System.out.println(str);

  System.out.println(MoneyUtil.format(" %7s :", true));
  System.out.println(MoneyUtil.format(" %7s :", false));
  System.out.println(MoneyUtil.format(" %7s :", true, "Male", "Female"));
  System.out.println(MoneyUtil.format(" %7s :", false, "Male", "Female"));
  System.out.println(MoneyUtil.format(" %7c :", 65));
  System.out.println(MoneyUtil.format(" %-7c :", 97));
  System.out.println(MoneyUtil.format(" %7c :", 0xAC00));
  //System.out.println(MoneyUtil.format(" %7s :%% ", "Â™õÔøΩÍµπÔøΩÔø?"));
  System.out.println(MoneyUtil.format(" %+07X :%% ", 123));
  System.out.println(MoneyUtil.format("(%7s):%% ", new StringBuffer("Â™õÔøΩÍµ?")));
  
 }
}
