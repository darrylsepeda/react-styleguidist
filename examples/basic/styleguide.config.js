const fs = require('fs');
const path = require('path');
const schema = require('./components.json');

function resolve(...paths) {
	return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'lib/StyleGuide/Wrapper'),
		// StyleGuideRenderer: path.join(__dirname, 'lib/StyleGuide/StyleGuideRenderer'),
	},
	theme: {
		color: {
			link: '#fff',
			linkHover: 'salmon',
		},
		fontFamily: {
			base: '"Comic Sans MS", "Comic Sans", cursive',
		},
	},
	styles: {
		Logo: {
			logo: {
				color: '#fff'
			},
		}
	},
	serverPort: 8888,
	highlightTheme: 'dracula',
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	showUsage: true,
	sections: schema.map(({ name, content, components }) => {
		// console.log('==============================')
		// console.log(name)
		// console.log(content)
		// console.log(components)
		// console.log('==============================')
		return {
			name,
			content: content ? resolve('docs', content + '.md') : null,
			components() {
				return components.map((componentName) => {
					return resolve(
						'src/components',
						componentName,
						componentName + '.js'
					);
				});
			}
		};
	}),
	// webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] = path.join(__dirname, 'source/styleguide/assets/StyleGuide.jsx'),
	webpackConfig: {
		resolve: {
			alias: {
				// 'rsg-components/Wrapper': resolve('src/styleguide/Wrapper.js')
				'rsg-components/Wrapper': resolve('Wrapper.js')
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};
