function minDate(dates) {
	if (dates.length === 0) {
	    throw new Error("minDate: array must contain at least one date");
	}

	return dates.reduce((min, d) => (d < min ? d : min));
}

// Do not change the code
 
var dates = [
  "2023/01/01", "2023/02/02", "2022/12/31"
];

alert(minDate(dates));
