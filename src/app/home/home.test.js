import {Home} from './home';

describe('Home', () => {
	let sut;
	
	beforeEach(() => {
		sut = new Home();
	});
	
    describe('#constructor', () => {
        it('should be defined', () => {
            expect(Home).toBeDefined();
        });
    });
	
	it('should difine some data', () => {
		sut.ngOnInit();
		expect(sut.someData).toBeDefined();
	});
});
