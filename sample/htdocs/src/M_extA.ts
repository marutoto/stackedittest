module kk{
	export class M_extA extends A{
		constructor(){
			super();

			console.log('M extends A');
			
			new B();

			new q.Q();
		}
	}
}
