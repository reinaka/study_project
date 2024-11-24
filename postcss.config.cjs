module.exports = {
    plugins: {
        'postcss-font-magician': {
			variants: {
				'Ubuntu': {
					'400': [],
				}
			},
			foundries: ['google']
		},
        autoprefixer: {}
    },
};