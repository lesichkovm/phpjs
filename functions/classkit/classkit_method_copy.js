function classkit_method_copy (dClass, dMethod, sClass, sMethod) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: classkit_method_copy('newClass', 'newMethod', 'someClass', 'someMethod');
    // *     returns 1: true
    
	/*
	function A(){}
	function C(){}
	C.d = function () {alert('inside d');}
	classkit_method_copy('A', 'b', 'C', 'd');
	A.b(); // 'inside d'
	*/
	
	if (typeof dClass === 'string') {
		dClass = window[dClass];
	}
	if (typeof sClass === 'string') {
		sClass = window[sClass];
	}
	
	//dClass[dMethod] = sClass[sMethod]; // Copy from static to static method (as per PHP example)
	dClass.prototype[dMethod] = sClass.prototype[sMethod]; // To copy from instance to instance
    return true;
}