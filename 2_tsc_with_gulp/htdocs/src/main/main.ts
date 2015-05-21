/// <reference path="_main_refs.ts" />

module main {
	export class Main {
		constructor() {
			console.log('hello, here is entry point!');
			console.log('jQuery', $);

			// ここでAngularJSのrun()が実行されるイメージ
		}
	}
}

