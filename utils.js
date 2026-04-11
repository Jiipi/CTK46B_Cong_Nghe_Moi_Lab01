function add(a, b) {
	return Number(a) + Number(b);
}

function buildGreeting(name) {
	const trimmedName = String(name ?? "").trim();
	const displayName = trimmedName.length > 0 ? trimmedName : "ban";
	return `Xin chao, ${displayName}!`;
}
