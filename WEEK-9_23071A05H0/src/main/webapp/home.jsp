<%
if(session == null || session.getAttribute("user") == null){
    request.setAttribute("msg","Please login first to access this page");
    request.getRequestDispatcher("errorLogin.jsp").forward(request,response);
    return;
}
String user=(String)session.getAttribute("user");
%>

<!DOCTYPE html>
<html>
<head>
<title>Home</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
<h2>Welcome <%= user %></h2>
<h3>Project: 23071A05H0 WEEK9</h3>

<a href="logout">Logout</a>
</div>

</body>
</html>