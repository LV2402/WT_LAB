import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        HttpSession session = request.getSession();

        session.setAttribute("userEmail", email);
        session.setAttribute("userPassword", password);

        request.setAttribute("msg", "Registration Successful! - 23071A05H0");
        request.getRequestDispatcher("login.jsp").forward(request, response);
    }
}