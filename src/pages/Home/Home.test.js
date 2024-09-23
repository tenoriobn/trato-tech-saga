import { render, screen } from 'test-utils';
import Home from '.';

jest.mock('services/categorias');

describe('Testando página Home', () => {
  test('Deve renderizar com categorias', async () => {
    render(
      <Home />
    );

    const categorias = await screen.findAllByTestId('home-categorias');

    expect(categorias).toHaveLength(2);

    expect(true).toBeTruthy();
  })
})