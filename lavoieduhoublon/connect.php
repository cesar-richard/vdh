<?php

use GuzzleHttp\Client;

$code = $_GET["code"];
$client = new Client();
$res = $client->request('POST', 'https://assos.utc.fr/auth/token', [
    'query' => ['test' => 'bar']
]);

if (isset($code)) {
} else {
    return "erreur de connexion";
}
