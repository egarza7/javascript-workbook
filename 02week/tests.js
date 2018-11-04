if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', () => {
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
            assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
            assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");

            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        });
        it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
            assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
            assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        });
        it('should make sure user inputs a valid entry', () => {
            assert.equal(rockPaperScissors('space', ' paper '), "Please enter rock, paper, or scissors");
            assert.equal(rockPaperScissors('Paper', 'rOCKETS'), "Please enter rock, paper, or scissors");
            assert.equal(rockPaperScissors('octagon ', 'sCiSsOrs'), "Please enter rock, paper, or scissors");
        }); 
    });
} else {

    getPrompt();

}