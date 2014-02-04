<?php
require ("db/db.php");
session_start();
$username = $_SESSION[username];
$queryString = "SELECT p.menu_id menuId FROM User u ";
$queryString .= "INNER JOIN permissions p ON u.group_id = p.group_id ";
$queryString .= "INNER JOIN menu m ON p.menu_id = m.id ";
$queryString .= "WHERE u.username = '$username' ";
$folder = array();

if ($resultdb = $mysqli -> query($queryString)) {
	$in = '(';
	while ($user = $resultdb -> fetch_assoc()) {
		$in .= $user['menuId'] . ",";
	}    $in = substr($in, 0, -1) . ")";
	$resultdb -> free();
	$sql = "SELECT * FROM MENU WHERE parent_id IS NULL ";
	$sql .= "AND id in $in";
	if ($resultdb = $mysqli -> query($sql)) {
		while ($r = $resultdb -> fetch_assoc()) {
			$sqlquery = "SELECT * FROM MENU WHERE parent_id = '";
			$sqlquery .= $r['id'] . "' AND id in $in";
			if ($nodes = $mysqli -> query($sqlquery)) {
				$count = $nodes -> num_rows;
				if ($count > 0) {
					$r['leaf'] = false;
					$r['items'] = array();
					while ($item = $nodes -> fetch_assoc()) {
						$item['leaf'] = true;
						$r['items'][] = $item;
					}
				}
				$folder[] = $r;
			}
		}
	}
	$resultdb -> close();
}
$mysqli -> close();
echo json_encode(array("items" => $folder));
?>