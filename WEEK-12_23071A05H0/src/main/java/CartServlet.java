import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

public class CartServlet extends HttpServlet {

protected void doPost(HttpServletRequest request,
HttpServletResponse response)
throws ServletException, IOException {

String product = request.getParameter("productId");
String action = request.getParameter("action");
int price = Integer.parseInt(request.getParameter("price"));

HttpSession session = request.getSession();

Map<String,Integer> cart =
(Map<String,Integer>) session.getAttribute("cart");

Map<String,Integer> prices =
(Map<String,Integer>) session.getAttribute("prices");

if(cart == null){
cart = new HashMap<>();
prices = new HashMap<>();
}

int qty = cart.getOrDefault(product,0);

if("add".equals(action)){
cart.put(product, qty+1);
prices.put(product, price);
}

else if("remove".equals(action)){

if(qty > 1)
cart.put(product, qty-1);
else{
cart.remove(product);
prices.remove(product);
}

}

session.setAttribute("cart", cart);
session.setAttribute("prices", prices);

sendCart(response,cart,prices);
}


protected void doGet(HttpServletRequest request,
HttpServletResponse response)
throws ServletException, IOException {

HttpSession session = request.getSession();

Map<String,Integer> cart =
(Map<String,Integer>) session.getAttribute("cart");

Map<String,Integer> prices =
(Map<String,Integer>) session.getAttribute("prices");

if(cart == null){
cart = new HashMap<>();
prices = new HashMap<>();
}

sendCart(response,cart,prices);

}


private void sendCart(HttpServletResponse response,
Map<String,Integer> cart,
Map<String,Integer> prices) throws IOException{

response.setContentType("application/json");

PrintWriter out = response.getWriter();

StringBuilder json = new StringBuilder();
json.append("{\"items\":[");

int i=0;

for(String p:cart.keySet()){

if(i>0) json.append(",");

json.append("{\"name\":\""+p+"\",\"qty\":"+cart.get(p)+",\"price\":"+prices.get(p)+"}");

i++;

}

json.append("]}");

out.print(json.toString());
}

}