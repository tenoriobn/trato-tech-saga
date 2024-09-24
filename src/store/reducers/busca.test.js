import buscaReducer,  { mudarBusca, resetarBusca} from './busca';

describe('Testando busca reducer', () => {
  test('Deve mudar busca como esperado', () => {
    expect(buscaReducer('', mudarBusca('fone'))).toEqual('fone');
  });

  test('Deve resetar busca como esperado', () => {
    expect(buscaReducer('outro valor', resetarBusca())).toEqual('');
  })
});
