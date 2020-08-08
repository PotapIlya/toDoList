<?php
require_once 'server/mysql.php';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

    <div class="box">
        <h1>To do list</h1>
        <div class="addToBd">
            <input name="text" type="text">
            <button type="button">Add</button>
        </div>
        <ul>
			<?
				$sth = $mysql->prepare("SELECT id, text FROM listitem");
				$sth->execute();
				$result = $sth->fetchAll(PDO::FETCH_KEY_PAIR);
				if (is_array($result)){
					foreach ($result as $key => $item){ ?>

						<li>
                            <?=$key?> => <?=$item?>
                            <button type="button" value="<?=$key?>" class="delete">&#10006;</button>
						</li>
                    <?}
				}
			?>
        </ul>
    </div>

<script src="/js/ajax.js"></script>
<script src="/js/add_to_list.js"></script>
</body>
</html>