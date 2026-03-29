<!DOCTYPE html>
<html>
<head>
<title>Error</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
<h2 class="error">
<%= request.getAttribute("msg") != null ? request.getAttribute("msg") : "Access Denied" %>
</h2>

<a href="login.jsp">Go to Login</a>
</div>

</body>
</html>