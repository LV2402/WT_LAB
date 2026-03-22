import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class RegisterServlet extends HttpServlet {

protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
throws ServletException, IOException {

String name = request.getParameter("name");
String email = request.getParameter("email");
String password = request.getParameter("password");

HttpSession session = request.getSession();

session.setAttribute("userEmail", email);
session.setAttribute("userPassword", password);

response.setContentType("text/html");

PrintWriter out = response.getWriter();

out.println("<h2>Registration Successful</h2>");
out.println("<a href='login.html'>Click here to login</a>");

}
}