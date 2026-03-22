import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class LoginServlet extends HttpServlet {

protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
throws ServletException, IOException {

String email = request.getParameter("email");
String password = request.getParameter("password");

HttpSession session = request.getSession();

String savedEmail = (String) session.getAttribute("userEmail");
String savedPassword = (String) session.getAttribute("userPassword");

if(email.equals(savedEmail) && password.equals(savedPassword)){

response.sendRedirect("catalog.html");

}
else{

response.getWriter().println("Invalid Login Credentials");

}

}
}