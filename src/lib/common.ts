type coordinates = {
	x: number,
	y: number
}

/**
 * 
 * @param {number} containerWidth Container width
 * @param {number} containerHeight Container height
 * @returns Object with x and y as key value pairs
 */
export const getRandomCoordinates = (containerWidth: number, containerHeight: number): coordinates => {
	const x = Math.floor(Math.random() * (containerWidth - 20));
	const y = Math.floor(Math.random() * (containerHeight - 20));
	return { x, y };
}

/**
 * 
 * @param limit Upper limit for random number
 * @returns 
 */
export const getRandomDigits = (limit: number): number => {
	return Math.floor(Math.random() * 10);
}