const crd2 = document.querySelector('.Card2');
const d2 = document.querySelector('.dc2i2');
const crd3 = document.querySelector('.Card3');
const d3 = document.querySelector('.dc2i3');
const crd4 = document.querySelector('.Card4');
const d4 = document.querySelector('.dc2i4');
const crd5 = document.querySelector('.Card5');
const d5 = document.querySelector('.dc2i5');

function addC2() {
	localStorage.removeItem('c2');
	history.go(0);
	window.alert("Card2 has been added!");
};

function delC2() {
	localStorage.setItem('c2','something')
	history.go(0);
	window.alert("Card2 has been removed!");
};

function addC3() {
	localStorage.removeItem('c3');
	history.go(0);
	window.alert("Card3 has been added!");
};

function delC3() {
	localStorage.setItem('c3','something')
	history.go(0);
	window.alert("Card3 has been removed!");
};

function addC4() {
	localStorage.removeItem('c4');
	history.go(0);
	window.alert("Card4 has been added!");
};

function delC4() {
	localStorage.setItem('c4','something')
	history.go(0);
	window.alert("Card4 has been removed!");
};

function addC5() {
	localStorage.removeItem('c5');
	history.go(0);
	window.alert("Card5 has been added!");
};

function delC5() {
	localStorage.setItem('c5','something')
	history.go(0);
	window.alert("Card5 has been removed!");
};

function cardCheck2() {
  if(localStorage.getItem('c2')) {
    crd2.style.display = 'none';
    d2.style.display = 'block';
	}
	else {
    crd2.style.display = 'inline-block';
    d2.style.display = 'none';
  }
  };

function cardCheck3() {
  if(localStorage.getItem('c3')) {
    crd3.style.display = 'none';
    d3.style.display = 'block';
	}
	else {
    crd3.style.display = 'inline-block';
    d3.style.display = 'none';
  }
  };

function cardCheck4() {
  if(localStorage.getItem('c4')) {
    crd4.style.display = 'none';
    d4.style.display = 'block';
	}
	else {
    crd4.style.display = 'inline-block';
    d4.style.display = 'none';
  }
  };

function cardCheck5() {
  if(localStorage.getItem('c5')) {
    crd5.style.display = 'none';
    d5.style.display = 'block';
	}
	else {
    crd5.style.display = 'inline-block';
    d5.style.display = 'none';
  }
}

document.body.onload = cardCheck2(); cardCheck3(); cardCheck4(); cardCheck5(); checkCookie(); startTime();