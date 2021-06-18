const seatsContainer = document.querySelector(".seatsContainer");
const bookedCount = document.querySelector("#bookedCount");
const remainingCount = document.querySelector("#remainingCount");
let booked = 0;
let remaining = 36;
let marked = false;
function makeBlock() {
	const div = document.createElement("div");
	div.className = "seat";
	return div;
}

for (let i = 0; i < 36; i++) {
	seatsContainer.appendChild(makeBlock());
}

const allSeats = document.querySelectorAll(".seat");

function bookSeat() {
	booked++;
	remaining--;
	bookedCount.innerHTML = booked;
	console.log("ran");
	remainingCount.innerHTML = remaining;
}
function removeSeat() {
	booked--;
	remaining++;
	bookedCount.innerHTML = booked;
	remainingCount.innerHTML = remaining;
}

allSeats.forEach((seat) => {
	seat.addEventListener("mousedown", () => {
		marked = true;
		seat.classList.toggle("booked");
		if (seat.classList.contains("booked")) {
			bookSeat();
		} else {
			removeSeat();
		}
	});
	seat.addEventListener("mouseup", () => {
		marked = false;
	});
	seat.addEventListener("mouseover", () => {
		if (marked) {
			seat.classList.toggle("booked");
			if (seat.classList.contains("booked")) {
				bookSeat();
			} else {
				removeSeat();
			}
		}
	});
});
