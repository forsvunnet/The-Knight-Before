#pragma strict
var anim : Animator;
function Start () {
	anim = GetComponent("Animator");

}

function Update () {
	if ( Input.GetAxis("Fire1") ) {
		anim.SetTrigger("slash");
	}
}