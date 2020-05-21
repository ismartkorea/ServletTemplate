package net.hibiznet.common.contoller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class ControllerAction extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4425738414990205300L;

	Logger log = Logger.getLogger( this.getClass() );
	
	// 명령어와 명령어 처리 클래스를 쌍으로 저장.
	@SuppressWarnings("rawtypes")
	private Map commandMap = new HashMap();
	
	public void init(ServletConfig config) throws ServletException {
		loadProperties("com.ismartkorea.properties.Command");
	}
	
	// properties 설정.
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void loadProperties(String path) {
		ResourceBundle rbHome = ResourceBundle.getBundle(path);
		Enumeration<String> actionEnumHome = rbHome.getKeys();
		while(actionEnumHome.hasMoreElements()) {
			String command = actionEnumHome.nextElement();
			String className = rbHome.getString(command);
			try {
				// 해당 문자열을 클래스로 만든다.
				Class commandClass = Class.forName(className);
				// 해당 클래스의 객체 생성.
				Object commandInstance = commandClass.newInstance();
				// Map 객체인 commandMap에 객체 저장.
				commandMap.put(command, commandInstance);
			} catch(ClassNotFoundException e) {
				// error
				continue;
			} catch(InstantiationException e) {
				e.printStackTrace();
			} catch(IllegalAccessException e) {
				e.printStackTrace();
			}
		}
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		requestPro(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		requestPro(request, response);
	}
	
	// 사용자의 요청을 분석해서 해당 작업처리.
	@SuppressWarnings("unused")
	private void requestPro(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String view = new String();
		CommandAction com = null;
		try {
			String command = request.getRequestURI();
			if(command.indexOf(request.getContextPath())==0) {
				command = command.substring(request.getContextPath().length());
			}
			com = (CommandAction)commandMap.get(command);
			if( com == null) {
				log.debug("Not Found : " + command);
				return;
			}
			view = com.requestPro(request, response);
			if(view == null) {
				return;
			}
		} catch(Throwable e) {
			throw new ServletException(e);
		}
		if(view == null) return;
		
		log.debug("ControllerAction : view = " + view);
		RequestDispatcher dispatcher = request.getRequestDispatcher(view);

		dispatcher.forward(request, response);
	}
}
