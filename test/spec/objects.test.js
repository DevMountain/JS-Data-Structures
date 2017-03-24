describe( "objects", () => {
	describe( "keys", () => {
		it( "console logs each of an object's keys", () => {
			spyOn( console, "log" );

			keys( { foo: 1, bar: 2 } );

			expect( console.log.calls.count() ).toBe( 2 );

			keys( {} );

			expect( console.log.calls.count() ).toBe( 2 );

			keys( { foo: 1, bar: 1, baz: 1 } );

			expect( console.log.calls.count() ).toBe( 5 );

			console.log.calls.reset();
		} );

		it( "console logs the correct information", () => {
			spyOn( console, "log" );

			const randomOne = Math.random();
			const randomTwo = Math.random();

			keys( { [ randomOne ]: 1, [ randomTwo ]: 2 } );

			const logArgs = [ ...console.log.calls.first().args, ...console.log.calls.mostRecent().args ];

			expect( logArgs ).toContain( randomOne.toString() );
			expect( logArgs ).toContain( randomTwo.toString() );

			console.log.calls.reset();
		} );
	} );

	describe( "values", () => {
		it( "console logs each of an objects values", () => {
			spyOn( console, "log" );

			values( { foo: 1, bar: 2 } );

			expect( console.log.calls.count() ).toBe( 2 );

			values( {} );

			expect( console.log.calls.count() ).toBe( 2 );

			values( { foo: 1, bar: 1, baz: 1 } );

			expect( console.log.calls.count() ).toBe( 5 );

			console.log.calls.reset();
		} );

		it( "console logs the correct information", () => {
			spyOn( console, "log" );

			const randomOne = Math.random();
			const randomTwo = Math.random();

			values( { randomOne, randomTwo } );

			const logArgs = [ ...console.log.calls.first().args, ...console.log.calls.mostRecent().args ];

			expect( logArgs ).toContain( randomOne );
			expect( logArgs ).toContain( randomTwo );

			console.log.calls.reset();
		} );
	} );

	describe( "fry", () => {
		it( "has the correct information", () => {
			expect( fry ).toEqual( {
			     bestFriend: "bender"
			   , deltaBrainwave
			   , name
			} )
		} );
	} );

	describe( "phone destructuring", () => {
		it( "has been destructured", () => {
			expect( make ).toBe( phone.make );
			expect( model ).toBe( phone.model );
			expect( year ).toBe( phone.year );
		} );
	} );

	describe( "merge", () => {
		it( "merges two objects", () => {
			expect( merge( { foo: 1 }, { bar: 2 } ) ).toEqual( { foo: 1, bar: 2 } );
			expect( merge( {}, { foo: 1 } ) ).toEqual( { foo: 1 } );
			expect( merge( { foo: 1, bar: 2 }, { baz: 3 } ) ).toEqual( { foo: 1, bar: 2, baz: 3 } );
		} );

		it( "does not mutate the given objects", () => {
			const originalOne = { foo: 1, bar: 2 };
			const originalTwo = { baz: 1 };

			merge( originalOne, originalTwo );

			expect( originalOne ).toEqual( { foo: 1, bar: 2 } );
			expect( originalTwo ).toEqual( { baz: 1 } );
		} );
	} );

	describe( "Character", () => {
		it( "sets instance properties correctly", () => {
			const foogirl = new Character( "foogirl", 100, 500 );
			const barman = new Character( "barman", 50, 250 );

			expect( foogirl.name ).toBe( "foogirl" );
			expect( foogirl.level ).toBe( 100 );
			expect( foogirl.health ).toBe( 500 );
			expect( barman.name ).toBe( "barman" );
			expect( barman.level ).toBe( 50 );
			expect( barman.health ).toBe( 250 );
		} );

		describe( "takeDamage", () => {
			it( "decrements health based on the amount parameter", () => {
				const bazdude = new Character( "bazdude", 20, 100 );

				expect( bazdude.health ).toBe( 100 );

				bazdude.takeDamage( 20 );

				expect( bazdude.health ).toBe( 80 );

				const randomDamage = Math.random();

				bazdude.takeDamage( randomDamage );

				expect( bazdude.health ).toBe( 80 - randomDamage );
			});
		} );

		describe( "dealDamage", () => {
			it( "calls Math.random", () => {
				spyOn( Math, "random" );
				const fooboy = new Character( "quxboy", 10, 50 );

				fooboy.dealDamage();

				expect( Math.random.calls.count() ).toBe( 1 );

				Math.random.calls.reset();
			} );

			it( "returns a number based on level and Math.random", () => {
				const bazwoman = new Character( "bazwoman", 150, 1000 );

				const damage = bazwoman.dealDamage();

				expect( damage ).toBeLessThan( 150 );
				expect( damage ).toBeGreaterThan( -1 );
			} );
		} );
	} );

	describe( "Player", () => {
		it( "extends Character", () => {
			const fooman = new Player( "fooman", 100, 500, 100 );

			expect( fooman ).toEqual( jasmine.any( Character ) );
		} );

		it( "places mana on the instance", () => {
			const fooman = new Player( "fooman", 100, 500, 100 );

			expect( fooman.mana ).toBe( 100 );
		} );

		it( "calls super to place name, level, and health on the instance", () => {
			const fooman = new Player( "fooman", 100, 500, 100 );

			expect( fooman.name ).toBe( "fooman" );
			expect( fooman.level ).toBe( 100 );
			expect( fooman.health ).toBe( 500 );
		} );

		describe( "cast spell", () => {
			it( "invokes takeDamage if mana < 10", () => {
				const fooman = new Player( "fooman", 100, 500, 0 );

				spyOn( fooman, "takeDamage" );

				fooman.castSpell();

				expect( fooman.takeDamage.calls.count() ).toBe( 1 );
				expect( fooman.takeDamage.calls.mostRecent().args[ 0 ] ).toBe( 10 );

				fooman.takeDamage.calls.reset();
			} );

			it( "returns 0 if mana < 10", () => {
				const fooman = new Player( "fooman", 100, 500, 0 );

				expect( fooman.castSpell() ).toBe( 0 );
			} );

			it( "returns 10 if mana >= 10", () => {
				const fooman = new Player( "fooman", 100, 500, 10 );
				const bazwoman = new Player( "bazwoman", 150, 1000, 150 );

				expect( fooman.castSpell() ).toBe( 10 );
				expect( bazwoman.castSpell() ).toBe( 10 );
			} );

			it( "decrements mana by 10 if mana >= 10", () => {
				const fooman = new Player( "fooman", 100, 500, 10 );
				const bazwoman = new Player( "bazwoman", 150, 1000, 150 );

				fooman.castSpell();
				bazwoman.castSpell();

				expect( fooman.mana ).toBe( 0 );
				expect( bazwoman.mana ).toBe( 140 );
			} );
		} );
	} );
} );