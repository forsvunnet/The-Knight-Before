#pragma strict
var target : Transform;
var offset : Vector3;
var damping = 0.5;
var velocity_modifier = 15.0;

private var last_pos : Vector3;
private var target_pos : Vector3;
private var new_pos : Vector3;
private var current_velocity : Vector3;
private var x_velocity = 0.1;

function Start () {
    last_pos = target.position + offset;
    new_pos = last_pos;
    transform.parent = null;
}

function Update () {
    target_pos = target.position + offset;
	x_velocity = Mathf.Lerp( x_velocity, target_pos.x - last_pos.x, 0.5 );
    last_pos = target_pos;
    target_pos.x += x_velocity * velocity_modifier;
    new_pos = Vector3.SmoothDamp(
    	transform.position,
    	target_pos,
    	current_velocity,
    	damping
    );

    transform.position = new_pos;
}
