'use strict';

var chalk = require('chalk');
var path = require('path');
var yo = require('yeoman-generator');

module.exports = yo.Base.extend({
	constructor: function () {
		yo.Base.apply(this, arguments);
	},

	//initializing: function () {
	//	console.log('index.js..initializing()');
	//},

	prompting: function () {
		var done = this.async();
		var prompts = [
			{
				type: 'text',
				name: 'appname',
				message: 'What is your app name?',
				default: path.basename(process.cwd())
			},
			{
				type: 'checkbox',
				name: 'includeModules',
				message: 'Choose include modules.',
				choices: [
					{
						name: 'RxJs',
						value: 'rxjs',
						checked: true
					},
					{
						name: 'Lodash',
						value: 'lodash',
						checked: true
					}
				]
			}
		];

		this.prompt(prompts, (answers) => {
			this.appname = answers.appname;
			this.includeModules = answers.includeModules;
			done();
		});
	},

	writing: {
		app: function () {
			this.directory('src', 'src', null);
			this.copy('_gitignore', '.gitignore');
			this.copy('package.json', 'package.json');
			this.copy('tsd.json', 'tsd.json');
		}
	},

	install: function () {
		if (this.includeModules && this.includeModules.length > 0) {
			var tsdFilter = pkg => ['lodash'].indexOf(pkg) > -1;

			var npm = this.includeModules;
			var tsd = this.includeModules.filter(tsdFilter);

			this.npmInstall(npm, {save: true});
			this.spawnCommand('tsd', ['install', 'node'].concat(tsd, ['--resolve', '--save']));
		}
	}

	//end: function () {
	//	console.log('index.js..end()', this.testPrompts1, this.testPrompts2);
	//}
});