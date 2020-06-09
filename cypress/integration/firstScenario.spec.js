describe('My First Test', function() {
    it('should open movie page and return to home page', function() {
        cy.visit('http://localhost:9000');
        // Following line breaks the test
        // cy.get('div.movie-card');
        cy.get('ul.results-list').children().as('films');
        cy.get('@films').should('have.length', 9);
        cy.get('@films').first().as('firstFilm');
        cy.get('@firstFilm').click();
        cy.get('div.movie-card');
        cy.get('button.home-page-btn').first().click();
        cy.get('div.search-header');
    });
});
