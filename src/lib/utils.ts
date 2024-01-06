type Possible = string | number;
type IKey = Possible;

export function traverseObjects(
	obj: Record<Possible, unknown> | unknown | { [key: Possible]: unknown },
	key: IKey
): unknown {
	if (obj === undefined || obj === null) {
		return;
	}
	const keys = Object.getOwnPropertyNames(obj);
	if (keys.length === 0) {
		return;
	}

	let i = 0;
	const currentKey = keys[i++];
	// if (Array.isArray(obj)) {
	// 	if (i < keys.length) {
	// 		return traverseObjects(
	// 			obj[currentKey as keyof typeof obj] as Record<string, string | unknown>,
	// 			key
	// 		);
	// 	}
	// } else
	if (Object.hasOwn(obj as Record<string, unknown>, key as IKey)) {
		return obj[key as keyof typeof obj];
	} else {
		return traverseObjects(obj[currentKey as keyof typeof obj], key);
	}
}


