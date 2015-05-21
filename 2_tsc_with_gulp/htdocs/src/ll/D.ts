module ll {

	export class D {
		constructor() {
			console.log('D');

			// _ll_refs.tsでリファレンスを指定しているので
			// tscコンパイル時に「Cannot find name 'qq'」的なコンパイルエラーにならない
			new qq.Qhoge();

			console.log($);
			new kk.Alpha_extA();
		}
	}

}
