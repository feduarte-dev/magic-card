const { getMagicCard } = require('../magic');
require('../../startest/mockSetup');

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    const getMagicCardMock = jest.spyOn(global, 'fetch');
    await getMagicCard('130550');
    expect(getMagicCardMock).toHaveBeenCalled();
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    const getMagicCardMock = jest.spyOn(global, 'fetch');
    await getMagicCard('130550');
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    const mockCall = getMagicCardMock.mock.calls[0];
    expect(mockCall[0]).toBe(endpoint);
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    const response = await getMagicCard('130550');
    const { name } = response;
    expect(name).toContain('Ancestor\'s Chosen');
  });
});
