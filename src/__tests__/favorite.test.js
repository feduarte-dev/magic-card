// const { saveFavoriteMagicCard } = require('../magic');
// const favoriteCards = require('../data/favoriteCards');

const restoreFavoriteCards = () => {
  // implemente seu código aqui
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    // await saveFavoriteMagicCard('130553');
    // implemente seus testes aqui

  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect(favoriteCards).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    // implemente seus testes aqui

  });
});