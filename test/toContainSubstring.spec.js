describe('toContainSubstring', () => {
  describe('when invoked', () => {
    describe('when evaluating anything other than an array or string', () => {
      it('should deny', () => {
        expect({a: 'b'}).not.toContainSubstring('Jamie');
        expect(true).not.toContainSubstring('Jamie');
        expect(false).not.toContainSubstring('Jamie');
        expect(123).not.toContainSubstring('Jamie');
        expect(null).not.toContainSubstring('Jamie');
        expect(undefined).not.toContainSubstring('Jamie');
      });
    });
    describe('when evaluating an array', () => {
      describe('when subject is NOT an array of strings', () => {
        it('should deny', () => {
          expect(['one', 8]).not.toContainSubstring('Jamie');
          expect(['one', {a: 'Jamie'}]).not.toContainSubstring('Jamie');
          expect(['one', true]).not.toContainSubstring('Jamie');
        });
      });
      describe('when subject is an array of strings', () => {
        describe('when subject contains a string containing a match for substring', () => {
          it('should confirm', () => {
            expect(['one', 'two', 'Jamie']).toContainSubstring('Jamie');
          });
        });
        describe('when subject does NOT contain a string containing a match for substring', () => {
          it('should deny', () => {
            expect(['one', 'two', 'James']).not.toContainSubstring('Jamie');
          });
        });
      });
    });
    describe('when evaluating a string', () => {
      describe('when subject is NOT an undefined or empty string', () => {
        describe('when subject is a string whose characters match a subset of the expected string', () => {
          it('should confirm', () => {
            expect('string to match against').toContainSubstring('to match again');
          });
        });
        describe('when subject is a string whose characters DO NOT match a subset of the expected string', () => {
          it('should deny', () => {
            expect('string to match against').not.toContainSubstring('against string');
          });
        });
      });
      describe('when subject IS an undefined or empty string', () => {
        it('should deny', () => {
          let _undefined;
          expect('').not.toContainSubstring('');
          expect(_undefined).not.toContainSubstring('');
          expect(_undefined).not.toContainSubstring('undefined');
          expect('undefined').not.toContainSubstring(_undefined);
        });
      });
    });
  });
});
