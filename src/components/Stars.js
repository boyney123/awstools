const Stars = ({ numberOfStars = 3 } = {}) => {
	const stars = []

	for (let i = 0; i < numberOfStars; i++) {
		stars.push(<svg
			class="w-5 h-5 inline-block text-orange-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"

				stroke-linejoin="round"
				stroke-width="2"
				d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
			></path>
			<path
				fill="orange"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
			></path>
		</svg>)
	}

	return <div>{stars}</div>
}

export default Stars
