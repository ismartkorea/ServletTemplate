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
//  //DB�Է��ڷ� ��ȣȭ
//  public static String getEnc(String strInput){
//    String encData = null;
//    CipherUtil cu = new CipherUtil();
//    encData = cu.encryptString(strInput); // DB �ʵ� ��ȣȭ
//    if (encData == null)
//      return "";
//    else
//      return encData;
//  }
//
//  //DB�Է��ڷẹȣȭ
//  public static String getDec(String strInput){
//    String decData = null;
//    CipherUtil cu = new CipherUtil();
//    decData = cu.decryptString(strInput); // ��ȣȭ�� �ʵ� ��ȣȭ
//    if (decData == null)
//      return "";
//    else
//      return decData;
//  }

//  public static String getFileSaveRoot(){
//    return "/attach/";
//  }
//
//  //�ӽ������� ������ ���丮
//  public static String getFileTmpRoot(){
//    return "/attach/temp/";
//  }
//
//  // ���̺� �����ڵ带 �޾� ���̺��� ����� �� ��
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
   * �߰��� ����
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
	 *  Null üũ.
	 * @param strInData
	 * @param strChData
	 * @return
	 */
	public static String strChkNull(String strInData, String strChData) {
	    return (strInData == null || strInData.equals("") || strInData.equals("null")) ? strChData : strInData;
	}
	  /**
	   * ������ ����.
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
	   * ������ ����.
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
	  * ������ ����.
	  * @param strStartNum
	  * @param strCntAll
	  * @return
	  */
	  public static String getEndNum(String strStartNum, String strCntAll){
	    return String.valueOf(Integer.parseInt(strStartNum) + 10);
	  }
	  /**
	   * ������ ����.
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
	   * ������ ����.
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
	   * ������ ����.
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
	   * strIn�� �о� �鿩 '\' ���ڸ� strCh ��ȯ���ִ� method
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
	  * ��Ʈ���� Ư�� int ���� �����ִ� method
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

