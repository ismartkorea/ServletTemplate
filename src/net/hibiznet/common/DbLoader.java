package net.hibiznet.common;

import java.util.StringTokenizer;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

@SuppressWarnings("serial")
public class DbLoader extends HttpServlet {
	// web.xml �� �����Ǿ� �ִ� web �Ӽ��� ����Ʈ�Ѵ�.
	public void init(ServletConfig config) throws ServletException {
		try {
			String drivers = config.getInitParameter("jdbcdriver");
			StringTokenizer st = new StringTokenizer(drivers,",");
			while (st.hasMoreTokens()) {
				String jdbcDriver = st.nextToken();
				Class.forName(jdbcDriver);
			}
		} catch(Exception ex) {
			throw new ServletException(ex);
		}
	}
}

