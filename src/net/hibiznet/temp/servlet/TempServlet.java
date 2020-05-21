package net.hibiznet.temp.servlet;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import net.hibiznet.common.StringUtil;

public class TempServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8665265295960001326L;
	/**
	 * 
	 */
	public void doGet(HttpServletRequest request, 
			HttpServletResponse response) throws IOException, ServletException {
		
		processRequest(request, response);
		
	}
	/**
	 * 
	 */
	public void doPost(HttpServletRequest request, 
			HttpServletResponse response) throws IOException, ServletException {
		
		processRequest(request, response);
		
	}
	/**
	 * 카트 처리.
	 * @param request
	 * @param response
	 * @throws IOException
	 * @throws ServletException
	 */
	@SuppressWarnings({ "null", "null", "null", "rawtypes" })
	private void processRequest(HttpServletRequest request, 
			HttpServletResponse response) throws IOException, ServletException {
		
		Logger log = Logger.getLogger( this.getClass() );
		HttpSession session = request.getSession();
		// 변수 초기화.
		//int[] productsCount = null;
		//int[] productPrice = null;
		request.setCharacterEncoding("UTF-8");
		// 파라미터 취득.
		String[] arrModelNo = request.getParameterValues("modelNo");
		//String[] arrModelName = request.getParameterValues("modelName");
		String[] arrModelType = request.getParameterValues("modelType");
		//String[] phoneType = request.getParameterValues("phoneType");
		String[] productPrice = request.getParameterValues("offlineWholesalePrice");
		String[] productsCount = request.getParameterValues("purchaseCount");
			
	  	// 카운트 합계.
	  	int totalCount = 0;
	  	for(int j=0; j < productsCount.length; j++) {
	  		totalCount += Integer.parseInt(productsCount[j]);
	  	}
	  	log.debug(">>> totalCount is " + totalCount);
		//  총 주문 가격
	  	int totalPrice = 0;
	  	for(int q=0; q < productPrice.length; q++) {
	  		//
	  		totalPrice += ( Integer.parseInt(productPrice[q]) *  Integer.parseInt(productsCount[q]));
	  	}
	  	log.debug(">>> totalPrice is " + totalPrice);
	  	
		// 주문번호 생성.(현재날짜+아이디)
		String orderNo = new String();
		//Partner member = (Partner) session.getAttribute("PARTNERINFO");
		//String id = StringUtil.strCheckNull(member.getId());
		Random randDom = new Random(System.currentTimeMillis());
		String date = StringUtil.getCurrentDate();
		//String user = StringUtil.strCheckNull(member.getName());
		int randOrder =Math.abs(randDom.nextInt(90)+100);
		// 날짜-아이디-카테고리(c:케이스,e:이어캡,m:모바일,f:패션아이템)-랜덤숫자
		//orderNo = date + id + Integer.toString(randOrder);
		log.debug("\n orderNo is " + orderNo);
		
		// 주문 처리.
//		Order order = new Order();
//		order.setOrderNo(orderNo); // 주문번호
//		order.setOrderUser(user); // 주문자명
//		order.setOrderDate(new Timestamp(System.currentTimeMillis())); // 주문일
//		order.setOrderState("1"); // 주문 완료
//		//order.setProductCategory(category); // 상품 카테고리
//		order.setPayState("0"); // 결제상태-지불예정
//		order.setTotalCount(totalCount);
//		order.setTotalPrice(totalPrice);
//		order.setCustomerId(id);
//		order.setRegistUser(user);
//		order.setRegistDate(new Timestamp(System.currentTimeMillis()));
//		order.setUpdateUser(user);
//		order.setUpdateDate(new Timestamp(System.currentTimeMillis()));	
		
		try {
			// Order 저장처리.
			//OrderManager om = OrderManager.getInstance();
			// 저장.
			//om.insertOrder(order);
						
			// Order 상품 저장처리.
			//OrderProductManager opm = OrderProductManager.getInstance();
			for(int i=0; i < arrModelNo.length; i++) {
				//OrderProduct orderProduct = new OrderProduct();
//				orderProduct.setOrderNo(orderNo);
//				orderProduct.setModelNo(arrModelNo[i]);
//				orderProduct.setModelType(arrModelType[i]);
//				orderProduct.setPrice( Integer.parseInt(productPrice[i]));
//				orderProduct.setOrderCount( Integer.parseInt(productsCount[i]));
//				orderProduct.setOrderPrice( Integer.parseInt(productPrice[i]) *  Integer.parseInt(productsCount[i]));
//				orderProduct.setRegistUser(user);
//				orderProduct.setRegistDate(new Timestamp(System.currentTimeMillis()));
//				orderProduct.setUpdateUser(user);
//				orderProduct.setUpdateDate(new Timestamp(System.currentTimeMillis()));
//					// 저장.
//				opm.insertOrderProduct(orderProduct);
				
				// 카트 테이블 삭제처리.
		 
			}
		// Order 상품 저장처리. 
		} catch(Exception ex) {
		  ex.printStackTrace();
		}
		
//		OrderManager omResult = OrderManager.getInstance();
		
		// 카트 테이블 삭제 처리.
//		try {
//			omResult.deleteCart(id);
//		} catch (OrderManagerException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
		
//		Order orderResult = new Order();
//		try {
//			orderResult = (Order) omResult.getOrder(orderNo);
//		} catch (OrderManagerException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		// 조회 취득.
//		OrderProductManager opmResult = OrderProductManager.getInstance();
//		@SuppressWarnings("rawtypes")
//		ArrayList resultList = new ArrayList();
//		try {
//			resultList = (ArrayList)opmResult.getOrderProduct(orderNo);
//		} catch (OrderProductManagerException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
//		request.setAttribute("orderResult", orderResult);
//		request.setAttribute("orderProductResult", resultList);
		
		//
		RequestDispatcher rd = this.getServletContext().getRequestDispatcher("/partners/partnerOrderResult.jsp");
		rd.forward(request, response);
	}	

}
