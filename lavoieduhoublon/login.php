<?php
require("config.php")
?>


<!Doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>

<body>
    <h1>Connection</h1>
    <a href="https://assos.utc.fr/oauth/authorize?client_id=<?= PDA_ID ?>&response_type=code&redirect_uri=<?= urlencode('https://assos.utc.fr/lavoieduhoublon/') ?>& scopes[]=user-manage-groups&state=''">

        go<a />
</body>

</html>
