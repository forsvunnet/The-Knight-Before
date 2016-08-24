#pragma strict
var max_speed = 15;
var speed = 1.00;
var x_velocity = 0.00;
var use_velocity = true;
function Start () {

}

function Update () {
	if ( Time.time < 3 ) {
		return;
	}
	if ( x_velocity < max_speed ) {
		x_velocity += Time.deltaTime * speed;
	}
	transform.Translate( x_velocity * Vector3.right * Time.deltaTime);
}