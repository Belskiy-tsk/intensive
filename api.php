<?

	$name = $_POST['name'];
	$email = $_POST['email'];

	$dbh = new PDO('mysql:host=localhost;dbname=cn77000_db', 'cn77000_db', 'M199o2nstro');
	$stmt = $dbh->prepare("INSERT INTO `order`(`time`, name, email)
		VALUES (NOW(), :name, :email)");
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':email', $email);
	$stmt->execute();

	echo '1';
