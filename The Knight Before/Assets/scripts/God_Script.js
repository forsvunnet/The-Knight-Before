#pragma strict
var knight : Transform;
var background : Transform;
var ground : Transform;

private var last_x = 0;
private var _knight : Transform;
function Start () {

	// Create the knight
	_knight = Instantiate(
		knight,
		new Vector3(0, 0, 0),
		Quaternion.identity
	);

	// set up the camera to follow the knight
	var camera  = GameObject.Find('Main Camera');
	var follower = camera.GetComponent( UnityStandardAssets._2D.Camera2DFollow );
	follower.target = _knight;

	// Create the first ground and the first landscape
	Instantiate(
		ground,
		new Vector3(last_x, -3.5, 0),
		Quaternion.identity
	);


	Instantiate(
		background,
		new Vector3(-500, -10, 0),
		Quaternion.identity
	);
	Debug.Log( _knight.position );
	Debug.Log( _knight );
	Debug.Log( last_x + 20 );
}

function Update () {
	if ( last_x < _knight.position.x ) {
		//Debug.Log( _knight.position.x );
		last_x += 20;
		Instantiate(
			ground,
			new Vector3(last_x, -3.5, 0),
			Quaternion.identity
		);
	}

//	Time.deltaTime

}