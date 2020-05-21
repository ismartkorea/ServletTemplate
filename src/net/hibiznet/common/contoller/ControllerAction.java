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
	
	// ��ɾ�� ��ɾ� ó�� Ŭ������ ������ ����.
	@SuppressWarnings("rawtypes")
	private Map commandMap = new HashMap();
	
	public void init(ServletConfig config) throws ServletException {
		loadProperties("com.ismartkorea.properties.Command");
	}
	
	// properties ����.
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void loadProperties(String path) {
		ResourceBundle rbHome = ResourceBundle.getBundle(path);
		Enumeration<String> actionEnumHome = rbHome.getKeys();
		while(actionEnumHome.hasMoreElements()) {
			String command = actionEnumHome.nextElement();
			String className = rbHome.getString(command);
			try {
				// �ش� ���ڿ��� Ŭ������ �����.
				Class commandClass = Class.forName(className);
				// �ش� Ŭ������ ��ü ����.
				Object commandInstance = commandClass.newInstance();
				// Map ��ü�� commandMap�� ��ü ����.
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
	
	// ������� ��û�� �м��ؼ� �ش� �۾�ó��.
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
