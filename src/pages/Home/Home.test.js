import { render } from 'test-utils';
import Home from '.';

describe('Testando página Home', () => {
  test('testando', () => {
    render(
      <Home />
    );
    expect(true).toBeTruthy();
  })
})