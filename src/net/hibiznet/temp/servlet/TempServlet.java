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
	 * īƮ ó��.
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
		// ���� �ʱ�ȭ.
		//int[] productsCount = null;
		//int[] productPrice = null;
		request.setCharacterEncoding("UTF-8");
		// �Ķ���� ���.
		String[] arrModelNo = request.getParameterValues("modelNo");
		//String[] arrModelName = request.getParameterValues("modelName");
		String[] arrModelType = request.getParameterValues("modelType");
		//String[] phoneType = request.getParameterValues("phoneType");
		String[] productPrice = request.getParameterValues("offlineWholesalePrice");
		String[] productsCount = request.getParameterValues("purchaseCount");
			
	  	// ī��Ʈ �հ�.
	  	int totalCount = 0;
	  	for(int j=0; j < productsCount.length; j++) {
	  		totalCount += Integer.parseInt(productsCount[j]);
	  	}
	  	log.debug(">>> totalCount is " + totalCount);
		//  �� �ֹ� ����
	  	int totalPrice = 0;
	  	for(int q=0; q < productPrice.length; q++) {
	  		//
	  		totalPrice += ( Integer.parseInt(productPrice[q]) *  Integer.parseInt(productsCount[q]));
	  	}
	  	log.debug(">>> totalPrice is " + totalPrice);
	  	
		// �ֹ���ȣ ����.(���糯¥+���̵�)
		String orderNo = new String();
		//Partner member = (Partner) session.getAttribute("PARTNERINFO");
		//String id = StringUtil.strCheckNull(member.getId());
		Random randDom = new Random(System.currentTimeMillis());
		String date = StringUtil.getCurrentDate();
		//String user = StringUtil.strCheckNull(member.getName());
		int randOrder =Math.abs(randDom.nextInt(90)+100);
		// ��¥-���̵�-ī�װ�(c:���̽�,e:�̾�ĸ,m:�����,f:�мǾ�����)-��������
		//orderNo = date + id + Integer.toString(randOrder);
		log.debug("\n orderNo is " + orderNo);
		
		// �ֹ� ó��.
//		Order order = new Order();
//		order.setOrderNo(orderNo); // �ֹ���ȣ
//		order.setOrderUser(user); // �ֹ��ڸ�
//		order.setOrderDate(new Timestamp(System.currentTimeMillis())); // �ֹ���
//		order.setOrderState("1"); // �ֹ� �Ϸ�
//		//order.setProductCategory(category); // ��ǰ ī�װ�
//		order.setPayState("0"); // ��������-���ҿ���
//		order.setTotalCount(totalCount);
//		order.setTotalPrice(totalPrice);
//		order.setCustomerId(id);
//		order.setRegistUser(user);
//		order.setRegistDate(new Timestamp(System.currentTimeMillis()));
//		order.setUpdateUser(user);
//		order.setUpdateDate(new Timestamp(System.currentTimeMillis()));	
		
		try {
			// Order ����ó��.
			//OrderManager om = OrderManager.getInstance();
			// ����.
			//om.insertOrder(order);
						
			// Order ��ǰ ����ó��.
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
//					// ����.
//				opm.insertOrderProduct(orderProduct);
				
				// īƮ ���̺� ����ó��.
		 
			}
		// Order ��ǰ ����ó��. 
		} catch(Exception ex) {
		  ex.printStackTrace();
		}
		
//		OrderManager omResult = OrderManager.getInstance();
		
		// īƮ ���̺� ���� ó��.
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
//		// ��ȸ ���.
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
