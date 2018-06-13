// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
   	view: {
		xhrCache: false,
		pushState: true,
		uniqueHistory: true,
	},
	panel: {
		swipe: 'left',
	},
	dialog: {
    	title: 'Grand Hotel',
  	},
	popup: {
		closeByBackdropClick: false,
	},
	toolbar: {
		hideOnPageScroll: true,
	},
	routes: [
		{
			path: '/info/',
    		url: 'info.html',
    		name: 'info',
  		}
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

