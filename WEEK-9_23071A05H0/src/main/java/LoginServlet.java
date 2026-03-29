import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        HttpSession session = request.getSession();

        String savedEmail = (String) session.getAttribute("userEmail");
        String savedPassword = (String) session.getAttribute("userPassword");

        if(savedEmail != null && savedPassword != null &&
           email.equals(savedEmail) && password.equals(savedPassword)) {

            session.setAttribute("user", email);

            response.sendRedirect("home.jsp");

        } else {
            request.setAttribute("error", "Invalid Credentials - 23071A05H0");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }
    }
}