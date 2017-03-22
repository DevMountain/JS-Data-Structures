describe( 'arrays', function () {
	describe( "first", () => {
		it( "returns the first element of an array", () => {
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];

			expect( first( [ 12 ] ) ).toBe( 12 );
			expect( first( [ 1, 2, 3 ] ) ).toBe( 1 );
			expect( first( randomArray ) ).toBe( randomArray[ 0 ] );
		} );
	} );

	describe( "last", () => {
		it ( "returns the last element of an array", () => {
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];

			expect( last( [ 5 ] ) ).toBe( 5 );
			expect( last( [ 3, 7, 9 ] ) ).toBe( 9 );
			expect( last( randomArray ) ).toBe( randomArray[ randomArray.length - 1 ] );
		} );
	} );

	describe( "looper", () => {
		it( "logs the correct value", () => {
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];
			spyOn( console, "log" );

			looper( randomArray );

			expect( console.log.calls.argsFor( 0 )[ 0 ] ).toBe( randomArray[ 0 ] );
			expect( console.log.calls.argsFor( 1 )[ 0 ] ).toBe( randomArray[ 1 ] );
			expect( console.log.calls.argsFor( 2 )[ 0 ] ).toBe( randomArray[ 2 ] );
			expect( console.log.calls.argsFor( 3 )[ 0 ] ).toBe( randomArray[ 3 ] );

			console.log.calls.reset();
		} );

		it( "works for arrays of any length", () => {
			const randomLengthArray = new Array( Math.floor( ( Math.random() * 100 ) + 1 ) ).fill( 0 );
			spyOn( console, "log" );

			looper( randomLengthArray );

			expect( console.log.calls.count() ).toBe( randomLengthArray.length );

			console.log.calls.reset();
		} );
	} );

	describe( "reversedLooper", () => {
		it( "logs the correct value", () => {
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];
			spyOn( console, "log" );

			reversedLooper( randomArray );

			expect( console.log.calls.argsFor( 0 )[ 0 ] ).toBe( randomArray[ 3 ] );
			expect( console.log.calls.argsFor( 1 )[ 0 ] ).toBe( randomArray[ 2 ] );
			expect( console.log.calls.argsFor( 2 )[ 0 ] ).toBe( randomArray[ 1 ] );
			expect( console.log.calls.argsFor( 3 )[ 0 ] ).toBe( randomArray[ 0 ] );

			console.log.calls.reset();
		} );

		it( "works for arrays of any length", () => {
			const randomLengthArray = new Array( Math.floor( ( Math.random() * 100 ) + 1 ) ).fill( 0 );
			spyOn( console, "log" );

			reversedLooper( randomLengthArray );

			expect( console.log.calls.count() ).toBe( randomLengthArray.length );

			console.log.calls.reset();
		} );
	} );

	describe( "evenFinder", () => {
		it( "returns an array of all even numbers within the given array", () => {
			expect( evenFinder( [ 1, 2, 3, 4, 5, 6 ] ) ).toEqual( [ 2, 4, 6 ] );
			expect( evenFinder( [ 1, 3, 5, 7 ] ) ).toEqual( [] );
			expect( evenFinder( [ 2, 4, 6 ] ) ).toEqual( [ 2, 4, 6 ] );
			expect( evenFinder( [ 2 ] ) ).toEqual( [ 2 ] );
		} );
	} );

	describe( "divider", () => {
		it( "returns a 2 dimensional array of odds and evens", () => {
			expect( divider( [ 1, 2, 3, 4, 5, 6 ] ) ).toEqual( [ [ 2, 4, 6 ], [ 1, 3, 5 ] ] );
			expect( divider( [ 1, 3, 5, 7 ] ) ).toEqual( [ [], [ 1, 3, 5, 7 ] ] );
			expect( divider( [ 2, 4, 6, 8, 10 ] ) ).toEqual( [ [ 2, 4, 6, 8, 10 ], [] ] );
			expect( divider( [] ) ).toEqual( [ [], [] ] );
		} );
	} );

	describe( "contains", () => {
		it( "determines whether or not an element is in an array", () => {
			expect( contains( [ 1, 4, 9 ], 4 ) ).toBe( true );
			expect( contains( [ 1, 4, 9 ], 9999 ) ).toBe( false );
			expect( contains( [], 1 ) ).toBe( false );
		} );
	} );

	describe( "combine", () => {
		it( "combines two arrays", () => {
			expect( combine( [ 1, 2 ], [ 3, 4 ] ) ).toEqual( [ 1, 2, 3, 4 ] );
			expect( combine( [], [] ) ).toEqual( [] );
			expect( combine( [ 1 ], [] ) ).toEqual( [ 1 ] );
			expect( combine( [], [ 1 ] ) ).toEqual( [ 1 ] );
		} );
	} );

	describe( "spreadInvoke", () => {
		it( "calls the provided function passing in all of the arguments contained in the array", () => {
			const spy = jasmine.createSpy();
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];

			spreadInvoke( [ 1, 99, 303 ], spy );

			expect( spy.calls.count() ).toBe( 1 );
			expect( spy.calls.mostRecent().args ).toEqual( [ 1, 99, 303 ] );

			spreadInvoke(  randomArray, spy );

			expect( spy.calls.count() ).toBe( 2 );
			expect( spy.calls.mostRecent().args ).toEqual( randomArray );
		} );
	} );

	describe( "reverse", () => {
		it( "reverses a string", () => {
			expect( reverse( "abcdefg" ) ).toBe( "gfedcba" );
			expect( reverse( "" ) ).toBe( "" );
			expect( reverse( "racecar" ) ).toBe( "racecar" );
			expect( reverse( "hello" ) ).toBe( "olleh" );
		} );
	} );

	describe( "map", () => {
		function double( num ) {
			return num * 2;
		}
		it( "returns a new array, created from looping over the given array and applying a function to each element", () => {
			const randomArray = [ Math.random(), Math.random(), Math.random(), Math.random() ];
			expect( map( [ 1, 2, 3, 4 ], double ) ).toEqual( [ 2, 4, 6, 8 ] );
			expect( map( randomArray, double) ).toEqual( randomArray.map( double ) );
		} );

		it( "does not mutate the passed in array", () => {
			const testArray = [ 10, 99, 12, 14 ];

			map( testArray, double );

			expect( testArray ).toEqual( [ 10, 99, 12, 14 ] );
		} );

		it( "does not use the built in .map", () => {
			spyOn( Array.prototype, "map" );

			map( [ 1, 2, 3 ], double );

			expect( Array.prototype.map.calls.count() ).toBe( 0 );
		} );
	} );

	describe( "both", () => {
		it( "returns a new array of all elements that are in both passed arrays", () => {
			expect( both( [ 1, 2, 3 ], [ 1, 2, 3 ] ) ).toEqual( [ 1, 2, 3 ] );
			expect( both( [ 1, 2 ], [ 3, 4 ] ) ).toEqual( [] );
			expect( both( [], [ 1, 2, 3, 3 ] ) ).toEqual( [] );
			expect( both( [ 1, 2, 3, 4 ], [] ) ).toEqual( [] );
		} );

		it( "does not have duplicates in the return value", () => {
			expect( both( [ 1, 2, 1 ], [ 1, 2, 2, 1, 3 ] ) ).toEqual( [ 1, 2 ] );
			expect( both( [ 1, 1 ], [] ) ).toEqual( [] );
		} );
	} );

	describe( "devMountainEmployees", () => {
		it( "has a length of 4", () => expect( devMountainEmployees.length ).toBe( 4 ) );
		it( "has the expected location property on each object", () => {
			devMountainEmployees.forEach( ( { location, name } ) => {
				if ( name === "Dallin" ) {
					expect( location ).toBe( "Dallas" );
				} else {
					expect( location ).toBe( "Provo" );
				}
			} );
		} );
	} );
} );