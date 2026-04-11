function add(a, b) {
	const left = Number(a);
	const right = Number(b);

	if (Number.isNaN(left) || Number.isNaN(right)) {
		return 0;
	}

	return left + right;
}

function buildGreeting(name) {
	const trimmedName = String(name ?? "").trim();
	const displayName = trimmedName.length > 0 ? trimmedName : "ban";
	return `Xin chao, ${displayName}!`;
}
