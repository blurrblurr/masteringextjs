<?php
session_start();
$_SESSION = array();
session_destroy();
$result = array();
$result['success'] = true;
$result['msg'] = 'logout';
echo json_encode($result);
?>