<?
    require_once 'mysql.php';

    $id = $_POST['id'];

    if (isset($id))
    {
        $sth = $mysql->prepare("DELETE FROM listitem WHERE `listitem`.`id` =".$id);
        $sth->execute();

        header("Location: /");
    }
    else{
        echo 'У тебя id пустой, дЭьил';
    }