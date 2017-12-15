var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
	if (isScrolling == false) {
		window.requestAnimationFrame(function() {
			scrolling(e);
			isScrolling = false;
		});
	}
	isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll(".team_card");
var teamCard = document.querySelector(".team_card");


function scrolling(e) {

	if (isPartiallyVisible(teamCard)) {
		firstBox.classList.add("active");
	}

	for (var i = 0; i < listItems.length; i++) {
		var listItem = listItems[i];

		if (isPartiallyVisible(listItem)) {
			listItem.add("active");
		} else {
			listItem.remove("active");
		}
	}
}

function isPartiallyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;
	var height = elementBoundary.height;

	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;

	return ((top >= 0) && (bottom <= window.innerHeight));
}