<?php
header('Content-Type: text/html; charset=UTF-8');
$url = isset($_GET['url']) ? $_GET['url'] : '';
if (!$url && isset($_POST['url'])) {
    $url = $_POST['url'];
}
if (!$url) {
    $b64 = isset($_GET['q']) ? $_GET['q'] : '';
    if ($b64) $url = base64_decode($b64);
}
if (!$url) {
    http_response_code(400);
    exit('Missing url');
}
$proxy_url = 'https://translate.google.com/translate?sl=zh-CN&tl=en&u=' . urlencode($url);
$ctx = stream_context_create([
    'http' => [
        'header' => "User-Agent: Mozilla/5.0\r\n",
        'timeout' => 30,
    ],
    'ssl' => ['verify_peer' => false, 'verify_peer_name' => false],
]);
$response = @file_get_contents($proxy_url, false, $ctx);
if ($response === false || strlen($response) < 200) {
    $direct_ctx = stream_context_create([
        'http' => ['header' => "User-Agent: Mozilla/5.0\r\n", 'timeout' => 20],
        'ssl' => ['verify_peer' => false, 'verify_peer_name' => false],
    ]);
    $response = @file_get_contents($url, false, $direct_ctx);
}
if ($response === false) {
    http_response_code(502);
    exit('Proxy error');
}
echo $response;
