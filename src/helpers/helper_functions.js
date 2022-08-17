const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const date_to_format = (date, type) => {
	switch (type) {
		case 'date_shortened':
			return `${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;
		default:
			return date;
	}
}