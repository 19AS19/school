function validateInput(x) {
	x = x.toString().split('');
	removecheck = x.slice(-4,0);
	return x.slice(0,-4).reverse();
	}