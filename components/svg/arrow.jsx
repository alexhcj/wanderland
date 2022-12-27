export const ArrowIcon = ({ width, height, stroke }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 512 512'>
			<title>ionicons-v5-a</title>
			<polyline
				points='268 112 412 256 268 400'
				style={{
					fill: 'none',
					stroke: `${stroke}`,
					strokeLinecap: 'square',
					strokeMiterlimit: 10,
					strokeWidth: '48px',
				}}
			/>{' '}
			<line
				x1={392}
				y1={256}
				x2={100}
				y2={256}
				style={{
					fill: 'none',
					stroke: `${stroke}`,
					strokeLinecap: 'square',
					strokeMiterlimit: 10,
					strokeWidth: '48px',
				}}
			/>
		</svg>
	)
}
