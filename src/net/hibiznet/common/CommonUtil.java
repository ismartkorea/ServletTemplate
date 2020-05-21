package net.hibiznet.common;

import java.util.*;
//import signgate.crypto.util.*;

/**
 * <p>Title: </p>
 * <p>Description: </p>
 * <p>Copyright: Copyright (c) 200x</p>
 * <p>Company: </p>
 * @author not attributable
 * @version 1.0
 */

public class CommonUtil {
//  //DB입력자료 암호화
//  public static String getEnc(String strInput){
//    String encData = null;
//    CipherUtil cu = new CipherUtil();
//    encData = cu.encryptString(strInput); // DB 필드 암호화
//    if (encData == null)
//      return "";
//    else
//      return encData;
//  }
//
//  //DB입력자료복호화
//  public static String getDec(String strInput){
//    String decData = null;
//    CipherUtil cu = new CipherUtil();
//    decData = cu.decryptString(strInput); // 암호화된 필드 복호화
//    if (decData == null)
//      return "";
//    else
//      return decData;
//  }

//  public static String getFileSaveRoot(){
//    return "/attach/";
//  }
//
//  //임시파일을 저장할 디렉토리
//  public static String getFileTmpRoot(){
//    return "/attach/temp/";
//  }
//
//  // 테이블 유형코드를 받아 테이블을 만들어 줄 것
//  public static String getTabNm(String strTabCd){
//    return "EHP"+strTabCd+"T";
//  }
//
  /**
   * 
   * @param inDate
   * @return
   */
  public static String getDateType(String inDate){
    if(inDate == null || inDate.equals("")) return "";
    if(inDate.length()<8) return inDate;
    else{
      inDate = inDate.substring(0,4)+"/"+inDate.substring(4,6)+"/"+inDate.substring(6,8);
      return inDate;
    }
  }
  /**
   * 중간자 제거
   * @param strIn
   * @param strDelimeter
   * @return
   */
  public static String strRmChar(String strIn, String strDelimeter){
    String strResult = "";
    if(strIn == null || strIn.equals("")) return "";
    StringTokenizer st = new StringTokenizer(strIn, strDelimeter);
    while(st.hasMoreElements()){
      strResult += st.nextToken();
    }
    return strResult;
  }
	/**
	 *  Null 체크.
	 * @param strInData
	 * @param strChData
	 * @return
	 */
	public static String strChkNull(String strInData, String strChData) {
	    return (strInData == null || strInData.equals("") || strInData.equals("null")) ? strChData : strInData;
	}
	  /**
	   * 페이지 관련.
	   * @param strThisPage
	   * @param strLastPage
	   * @return
	   */
	  public static HashMap<String, String> hmpPageCnt(String strThisPage, String strLastPage) {
	    HashMap<String, String> oHmap = new HashMap<String, String>();
	    int iThisPage = 0;
	    int iPrePage = 0;
	    int iNextPage = 0;
	    iThisPage = Integer.parseInt(strThisPage);
	    if (iThisPage == 1) {
	      iPrePage = 1;
	      if (Integer.parseInt(strThisPage) / 10 == Integer.parseInt(strLastPage) / 10) {
	        iNextPage = Integer.parseInt(strLastPage);
	      } else {
	        iNextPage = 11;
	      }
	    } else {
	      if (iThisPage > 11) {
	        iPrePage = (iThisPage / 10 - 1) * 10 + 1;
	      } else {
	        iPrePage = 1;
	      }
	      if (Integer.parseInt(strThisPage) / 10 == Integer.parseInt(strLastPage) / 10 &&
	          (Integer.parseInt(strThisPage) % 10) != 0) {
	        iNextPage = Integer.parseInt(strLastPage);
	      } else if (Integer.parseInt(strThisPage) / 10 == Integer.parseInt(strLastPage) / 10 &&
	                 (Integer.parseInt(strThisPage) % 10) == 0) {
	        iNextPage = (iThisPage / 10) * 10 + 1;
	      } else {
	        iNextPage = (iThisPage / 10 + 1) * 10 + 1;
	      }
	    }
	    oHmap.put("strPrePage", String.valueOf(iPrePage));
	    oHmap.put("strNextPage", String.valueOf(iNextPage));
	    return oHmap;
	  }
	  /**
	   * 페이지 관련.
	   * @param strThisPage
	   * @return
	   */
	  public static String getStartNum(String strThisPage) {
	    if (strThisPage.equals("1")) {
	  return "1";
	    } else {
	      return String.valueOf((Integer.parseInt(strThisPage) - 1) * 10 + 1);
	    }
	  }
	 /**
	  * 페이지 관련.
	  * @param strStartNum
	  * @param strCntAll
	  * @return
	  */
	  public static String getEndNum(String strStartNum, String strCntAll){
	    return String.valueOf(Integer.parseInt(strStartNum) + 10);
	  }
	  /**
	   * 페이지 관련.
	   * @param strThisPage
	   * @return
	   */
	  public static int getPageStartNum(String strThisPage) {
	//    System.out.println(" comutil strThisPage => " + strThisPage);
	if (strThisPage == null || strThisPage.equals("")) {
	      return 1;
	    } else if (Integer.parseInt(strThisPage) % 10 == 0) {
	      return (Integer.parseInt(strThisPage) / 10 - 1) * 10 + 1;
	    } else {
	      return (Integer.parseInt(strThisPage) / 10) * 10 + 1;
	    }
	  }
	  /**
	   * 페이지 관련.
	   * @param strThisPage
	   * @param strLastPage
	   * @return
	   */
	  public static int getPageEndNum(String strThisPage, String strLastPage) {
	    if ((Integer.parseInt(strThisPage) / 10 == Integer.parseInt(strLastPage) / 10) &&
	        (Integer.parseInt(strThisPage) % 10) != 0) {
	      return Integer.parseInt(strLastPage);
	    } else {
	      return Integer.parseInt(strThisPage)+9;
	    }
	  }
	  /**
	   * 페이지 관련.
	   * @param strCntAll
	   * @return
	   */
	  public static String getStrLastPage(String strCntAll) {
	    int iPage1 = 0;
	    int iPage2 = 0;
	    iPage1 = Integer.parseInt(strCntAll) / 10;
	    iPage2 = Integer.parseInt(strCntAll) % 10;
	    if(strCntAll==null){
	      return "1";
	}else if (strCntAll.equals("0")) {
	  return "1";
	    } else if (iPage2 == 0) {
	      return String.valueOf(iPage1);
	    } else {
	      return String.valueOf(iPage1 + 1);
	    }
	  }
	  /**
	   * strIn을 읽어 들여 '\' 문자를 strCh 변환해주는 method
	   * @param strIn
	   * @param strBackSlash
	   * @param strCh
	   * @return
	   */
	 public static String strChBackSlashDir(String strIn, String strBackSlash, String strCh){
	   String strTmp = "";
	   String strResult = "";
	   ArrayList<String> strList = new ArrayList<String>();
	   StringTokenizer st = new StringTokenizer(strIn, strBackSlash);
	   while(st.hasMoreElements()){
	     strTmp = st.nextToken();
	     strList.add(strTmp);
	   }
	   int iLen =  strList.size();
	   for(int iLoop = 0; iLoop < iLen ; iLoop++){
	     strTmp = strList.get(iLoop).toString();
	     strResult  = strResult+strTmp + strCh;
	   }
	   return strResult;
	 }
	 /**
	  * 스트링에 특정 int 값을 더해주는 method
	  * @param strIn
	  * @param iIn
	  * @return
	  */
	 public static String strAddNum(String strIn, int iIn){
	   if(strIn==null || strIn.equals("")){
	     return String.valueOf(iIn);
	   }else{
	     return String.valueOf(Integer.parseInt(strIn)+iIn);
	   }
	 }
	 /**
	  * 
	  * @param inDate
	  * @param strExp
	  * @return
	  */
	 public static String getDateType2(String inDate, String strExp){
	    if(inDate == null || inDate.equals("")) return "";
	    if(inDate.length()<8) return inDate;
	    else{
	      inDate = inDate.substring(0,4)+strExp+inDate.substring(4,6)+strExp+inDate.substring(6,8);
	      return inDate;
	    }
	  }

} 

