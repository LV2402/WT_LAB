<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
<h2>Login</h2>

<form action="login" method="post">

<input type="text" name="email" placeholder="Enter Email" required>

<input type="password" name="password" placeholder="Enter Password" required>

<input type="submit" value="Login">

</form>

<p class="error">
<%= request.getAttribute("error") != null ? request.getAttribute("error") : "" %>
</p>

<a href="register.jsp">Register</a>
</div>

</body>
</html>