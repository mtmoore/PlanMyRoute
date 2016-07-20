App.info({
  name: 'PlanMyRoute',
  description: 'Plan your route with style'
});

App.accessRule('https://*.googleapis.com/*');
App.accessRule('https://*.google.com/*');
App.accessRule('https://*.gstatic.com/*');
App.accessRule('http://*.emptymoore.com/*');
App.accessRule('http://*', {type: 'intent'});
App.accessRule('https://*', {type: 'intent'});
