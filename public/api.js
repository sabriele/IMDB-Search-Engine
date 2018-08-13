$('.ui.search').search({
	apiSettings: {
		url: 'https://www.omdbapi.com/?s={query}&apikey=thewdb'
	},
	fields: {
		results: 'Search',
		title: 'Title',
	}
});
