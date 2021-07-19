import { filterMovies, anotherExample } from '../src/data.js';


describe('filterMovies', () => {
  it('is a function', () => {
    expect(typeof filterMovies).toBe('function');
  });

  it('returns `peliculas de Hiroyuki Morita como director`', () => {
    expect(filterMovies()).toBe('example');
  });

  it('returns `peliculas de Isao Takahata como productor`', () => {
    expect(filterMovies()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
