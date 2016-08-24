#pragma strict
var knight : Transform;
var background : Transform;
var ground : Transform;
function Start () {

	// Create the knight
	Instantiate(
		knight,
		new Vector3(0, 0, 0),
		Quaternion.identity
	);

	// Create the first ground and the first landscape
	Instantiate(
		ground,
		new Vector3(0, 0, 0),
		Quaternion.identity
	);
	Instantiate(
		background,
		new Vector3(0, 0, 0),
		Quaternion.identity
	);
}

function Update () {

}