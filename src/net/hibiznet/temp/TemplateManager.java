package net.hibiznet.temp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import net.hibiznet.temp.Template;
import net.hibiznet.temp.TemplateManager;
import net.hibiznet.temp.TemplateManagerException;


/**
 * 
 * @author jeong
 *
 */
public class TemplateManager {
	
	private static TemplateManager instance = new TemplateManager();
	
	/**
	 * 인스턴스 생성.
	 * @return
	 */
	public static TemplateManager getInstance() {
		return instance;
	}
	/**
	 * 
	 */
	private TemplateManager() {
	}
	/**
	 * 
	 * @return
	 * @throws SQLException
	 */
	private Connection getConnection() throws SQLException {
		DataSource ds = null;
		try {
			Context initContext = new InitialContext();
			Context envContext = (Context) initContext.lookup("java:/comp/env");			
			ds = (DataSource) envContext.lookup("jdbc/koreagoodz");
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ds.getConnection();
	}
	
	/**
	 * 조회.
	 * @param id
	 * @return
	 * @throws TemplateManagerException
	 */
	public Template getTemplate(String id) throws TemplateManagerException {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			conn = getConnection();
			
			//pstmt = conn.prepareStatement();
			
			rs = pstmt.executeQuery();
			if(rs.next()) {
				Template template = new Template();
	
				
				return template;
			} else {
				return null;
			}
		} catch(SQLException ex) {
			throw new TemplateManagerException("getTemplate",ex);			
		} finally {
			if (rs !=null) try { rs.close(); } catch(SQLException ex) {}
			if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
			if (conn != null) try { conn.close(); } catch(SQLException ex) {}
		}
	}
	/**
	 *  저장 기능.
	 * @param template
	 * @throws TemplateManagerException
	 */
	public void insertTemplate(Template template) throws TemplateManagerException {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		
		try {
			conn = getConnection();
			
			//pstmt = conn.prepareStatement();

			
			pstmt.executeUpdate();
			
		} catch(SQLException ex) {
			throw new TemplateManagerException("inserttemplate",ex);			
		} finally {
			if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
			if (conn != null) try { conn.close(); } catch(SQLException ex) {}
		}
	}
	/**
	 * 수정 기능.
	 * @param template
	 * @throws TemplateManagerException
	 */
	public void updateTemplate(Template template) throws TemplateManagerException {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		
		try {
			conn = getConnection();
			
			//pstmt = conn.prepareStatement();
			
		    int result = pstmt.executeUpdate();
		    if (result == 0) {
		    	throw new TemplateManagerException("존재하지 않는 ID");
		    }
		} catch(SQLException ex) {
			throw new TemplateManagerException("updatetemplate",ex);			
		} finally {
			if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
			if (conn != null) try { conn.close(); } catch(SQLException ex) {}
		}
	}
	
	/**
	 * 
	 * @param id
	 * @throws TemplateManagerException
	 */
	public int deleteTemplate(String id) throws TemplateManagerException {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		
		try {
			conn = getConnection();
			
			//pstmt = conn.prepareStatement();
			
			int result = pstmt.executeUpdate();
			if (result == 0) {
				throw new TemplateManagerException("존재하지 않는 ID");
			}
			
			return result;
			
		} catch(SQLException ex) {
			throw new TemplateManagerException("deletetemplate",ex);			
		} finally {
			if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
			if (conn != null) try { conn.close(); } catch(SQLException ex) {}
		}
	}
	
	public int checkAuth(String id) throws TemplateManagerException {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			conn = getConnection();
			
			//pstmt = conn.prepareStatement();

				rs = pstmt.executeQuery();
				if (rs.next()) {
					String templateId = rs.getString("id");
					
					if (templateId.compareTo(id) == 0) {
						// 암호가 같으면 1을 리턴
						return 1;
					} else {
						// 암호가 다르면 0을 리턴
						return 0;
					}	
				} else {
					// 아이디가 존재 하지 않음 -1
					return -1;
				}
			
		} catch(SQLException ex) {
			throw new TemplateManagerException("checkAuth",ex);			
		} finally {
			if (rs !=null) try { rs.close(); } catch(SQLException ex) {}
			if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
			if (conn != null) try { conn.close(); } catch(SQLException ex) {}
		}
	}
	
}
