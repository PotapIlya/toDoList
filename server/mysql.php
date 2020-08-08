<?

$localhost = 'localhost';
$name = 'root';
$pass = '';
$db_name = 'todolist';
try{
    $mysql = new PDO('mysql:dbname='.$db_name.'; host='.$localhost.'', $name, $pass,
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e){
    exit($e->getMessage());
}
