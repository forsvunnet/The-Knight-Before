#pragma strict
var enemy : Transform;
var spawn_time = 1;
function Start () {
	// Load 
}

function Update () {
	if ( Time.time < spawn_time ) {
		return;
	}
	spawn_time += 1;
	var _enemy = Instantiate(
		enemy,
		new Vector3( (spawn_time*15), -2.5, 0),
		Quaternion.identity
	);
	
}