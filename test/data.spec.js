import { filterByDirector, filterByProducer} from '../src/data.js';


describe('filterMovies', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns `peliculas de Hiroyuki Morita`', () => {
    expect(filterByDirector()).toBe('example');
  });

  it('returns `peliculas de Hiromasa Yonebayashi`', () => {
    expect(filterByDirector()).toBe('example');
  });
});


describe('filterByProducer', () => {
  it('is a function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('returns `peliculas de Isao Takahata`', () => {
    expect(filterByProducer()).toBe('OMG');
  });

  it('returns `peliculas de Toru Hara`', () => {
    expect(filterByProducer()).toBe('OMG');
  });
});
