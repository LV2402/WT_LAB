<!DOCTYPE html>
<html>
<head>
<title>Register</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
<h2>Register</h2>

<form action="register" method="post">

<input type="text" name="email" placeholder="Enter Email" required>

<input type="password" name="password" placeholder="Enter Password" required>

<input type="submit" value="Register">

</form>

<p class="success">
<%= request.getAttribute("msg") != null ? request.getAttribute("msg") : "" %>
</p>

<a href="login.jsp">Back to Login</a>
</div>

</body>
</html>