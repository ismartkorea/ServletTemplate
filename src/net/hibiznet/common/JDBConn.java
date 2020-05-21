package net.hibiznet.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBConn {
	
	private String dbUrl = "jdbc:mysql://localhost:3306:hibiznet?useUnicode=true&characterEncoding=utf-8";
	private String userName = "hibiznet";
	private String userPw = "hibiznet9123";
	private Connection con;
	private Statement stmt;
	
	public Connection getConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
			return null;
		}
		
		try {
			Connection con = DriverManager.getConnection(dbUrl, userName, userPw);
			Statement stmt = con.createStatement();
			return con;
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}
}
