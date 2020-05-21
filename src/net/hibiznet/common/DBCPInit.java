package net.hibiznet.common;

import java.util.StringTokenizer;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

@SuppressWarnings("serial")
public class DBCPInit extends HttpServlet {

	public void init(ServletConfig config) throws ServletException {
		try {
			String drivers = config.getInitParameter("jdbcdriver");
			StringTokenizer st = new StringTokenizer(drivers,",");
			while (st.hasMoreTokens()) {
				String jdbcDriver = st.nextToken();
				Class.forName(jdbcDriver);
			}
			
			Class.forName("org.apache.commons.dbcp.PoolingDriver");
			
			//System.setProperty("org.xml.sax.driver","org.apache.crimson.parser.XMLReaderImpl");
			//System.setProperty("org.xml.sax.driver", "org.apache.xerces.parsers.SAXParser");
			
		} catch(Exception ex) {
			throw new ServletException(ex);
		}
	}
}
