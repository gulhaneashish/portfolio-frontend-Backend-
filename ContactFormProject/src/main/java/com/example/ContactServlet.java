// package com.example;

// import java.io.BufferedReader;
// import java.io.IOException;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;

// import jakarta.servlet.annotation.WebServlet;
// import jakarta.servlet.http.HttpServlet;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.json.JSONObject;

// @WebServlet("/contact")
// public class ContactServlet extends HttpServlet {
//     @Override
//     protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
//         // Read the JSON payload from request body
//         BufferedReader reader = request.getReader();
//         StringBuilder sb = new StringBuilder();
//         String line;
//         while ((line = reader.readLine()) != null) {
//             sb.append(line);
//         }

//         // Convert to JSON Object
//         JSONObject obj = new JSONObject(sb.toString());

//         String name = obj.getString("name");
//         String email = obj.getString("email");
//         String contact = obj.getString("contact");
//         String message = obj.getString("message");

//         try {
//             // Load MySQL Driver
//             Class.forName("com.mysql.cj.jdbc.Driver");

//             // Connect to DB
//             Connection conn = DriverManager.getConnection(
//                 "jdbc:mysql://localhost:3306/contact_db", "root", "Root@7666"
//             );

//             // Prepare SQL statement
//             String sql = "INSERT INTO contact_form (name, email, contact, message) VALUES (?, ?, ?, ?)";
//             PreparedStatement stmt = conn.prepareStatement(sql);
//             stmt.setString(1, name);
//             stmt.setString(2, email);
//             stmt.setString(3, contact);
//             stmt.setString(4, message);
//             stmt.executeUpdate();

//             // Close
//             stmt.close();
//             conn.close();

//             // Success response
//             response.setStatus(HttpServletResponse.SC_OK);
//         } catch (Exception e) {
//             e.printStackTrace();
//             response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
//         }
//     }
// }


package com.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.json.JSONObject;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        try {
            // Read the JSON payload from request body
            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }

            // Convert to JSON Object
            JSONObject obj = new JSONObject(sb.toString());

            String name = obj.getString("name");
            String email = obj.getString("email");
            String contact = obj.getString("contact");
            String message = obj.getString("message");

            // Load MySQL Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to DB
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/contact_db", "root", "Root@7666"
            );

            // Prepare SQL statement
            String sql = "INSERT INTO contact_form (name, email, contact, message) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, contact);
            stmt.setString(4, message);
            stmt.executeUpdate();

            // Close
            stmt.close();
            conn.close();

            // Success response
            response.setStatus(HttpServletResponse.SC_OK);
            out.write("{\"status\":\"success\"}");
        } catch (Exception e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.write("{\"status\":\"error\", \"message\": \"" + e.getMessage().replace("\"", "'") + "\"}");
        } finally {
            out.close();
        }
    }
}
