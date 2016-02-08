
// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
	passport: {
		google : {
		    name: 'Google',
		    protocol: 'oauth2',
		    strategy: require('passport-google-oauth').OAuth2Strategy,
		    options: {
		      clientID: '23012441381-ngqbmso2llsk8trvka41u6ri250nd498.apps.googleusercontent.com',
		      clientSecret: '0vCJrMPsdg_FAq_bxvh47kqm',
		      scope: ['profile', 'email'],
		      hd: 'murciaeduca.es'
		    }
	  }
	}
});