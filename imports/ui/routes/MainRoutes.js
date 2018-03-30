import { Router } from 'meteor/iron:router';
import '../components/layout/main.html';
import '../components/Home/HomeComponent';

Router.route('/', {
	name: 'Home',
	layoutTemplate: 'mainLayout',
	template: 'Home',
	action: function() {
		this.render();
	},
	onAfterAction() {
		SEO.set({
			title: 'Home'
		});
	}
});
