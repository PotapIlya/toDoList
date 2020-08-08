<?

require_once 'mysql.php';

$text = $_POST['text'];

if (isset($text))
{
    $sth = $mysql->prepare("INSERT INTO listitem SET text = :text");
    $sth->execute([
        'text' => $text
    ]);

    $insert_id = $mysql->lastInsertId();
    $result = [
        'id'=>$insert_id,
        'text'=> $text
    ];
}
else
{
    $result = 'Строка пуста';
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);