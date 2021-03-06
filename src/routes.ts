export default [
	{
		path: 'home',
		outlet: 'home',
		defaultRoute: true
	},
	{
		path: 'blog',
		outlet: 'blog'
	},
	{
		path: 'examples',
		outlet: 'examples'
	},
	{
		path: 'playground',
		outlet: 'playground'
	},
	{
		path: 'community',
		outlet: 'community'
	},
	{
		path: 'tutorials',
		outlet: 'tutorials'
	},
	{
		path: 'tutorials/{page}',
		outlet: 'tutorials-page'
	},
	{
		path: 'reference-guides',
		outlet: 'reference-guides'
	},
	{
		path: 'reference-guides/{page}',
		outlet: 'reference-guides-page'
	}
];
