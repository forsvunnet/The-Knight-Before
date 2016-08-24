#pragma strict
var speed = 1;
function Start () {

}

function Update () {
	transform.Translate( speed * Vector3.right * Time.deltaTime);
}