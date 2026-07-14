<?php
header('Content-Type: text/html; charset=UTF-8');
$v0 = isset($_GET['url']) ? $_GET['url'] : '';
if (!$v0) { $v1 = isset($_GET['q']) ? $_GET['q'] : ''; if ($v1) $v0 = base64_decode($v1); }
if (!$v0) { http_response_code(400); exit('Missing url'); }
$v2 = stream_context_create([
  'http' => ['header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\nAccept: text/html,*/*\r\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8\r\n", 'timeout' => 30, 'follow_location' => 1, 'max_redirects' => 5],
  'ssl' => ['verify_peer' => false, 'verify_peer_name' => false],
]);
$v3 = @file_get_contents($v0, false, $v2);
if ($v3 !== false && strlen($v3) > 200) { echo $v3; exit; }
if (function_exists('curl_init')) {
  $v4 = curl_init();
  curl_setopt_array($v4, [
    CURLOPT_URL => $v0,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_MAXREDIRS => 5,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    CURLOPT_HTTPHEADER => ['Accept: text/html,*/*', 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8'],
  ]);
  $v5 = curl_exec($v4);
  $v6 = curl_getinfo($v4);
  curl_close($v4);
  if ($v5 && strlen($v5) > 200) { echo $v5; exit; }
}
$v7 = [
  'https://corsproxy.io/?' . urlencode($v0),
  'https://translate.google.com/translate?sl=zh-CN&tl=en&u=' . urlencode($v0),
];
foreach ($v7 as $v8) {
  $v9 = stream_context_create([
    'http' => ['header' => "User-Agent: Mozilla/5.0\r\n", 'timeout' => 20],
    'ssl' => ['verify_peer' => false, 'verify_peer_name' => false],
  ]);
  $v10 = @file_get_contents($v8, false, $v9);
  if ($v10 && strlen($v10) > 200) { echo $v10; exit; }
}
http_response_code(502);
exit('error');
