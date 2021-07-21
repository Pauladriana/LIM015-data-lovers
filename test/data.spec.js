import { filterByDirector, filterByProducer} from '../src/data.js';
const allFilms = require('../src/data.js')

describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns `peliculas de Hiroyuki Morita`', () => {
    expect(filterByDirector(allFilms, "Hiroyuki Morita")).toContain('The Cat Returns');
  });

  it('returns `peliculas de Hiromasa Yonebayashi`', () => {
    expect(filterByDirector(allFilms, "Hiromasa Yonebayashi")).toContain('When Marnie Was There');
  });
});


describe('filterByProducer', () => {
  it('is a function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('returns `peliculas de Isao Takahata`', () => {
    expect(filterByProducer(allFilms, "Isao Takahata")[0].title).toBe('Castle in the Sky');
  });

  it('returns `peliculas de Toru Hara`', () => {
    expect(filterByProducer(allFilms, "Toru Hara")).toBe('Grave of the Fireflies');
  });
});

describe('ordenAlfaAtoZ ', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaAtoZ).toBe('function');
  });

  it('returns `peliculas de Isao Takahata`', () => {
    expect(filterByProducer(allFilms, "Isao Takahata")[0].title).toBe('Castle in the Sky');
  });

  it('returns `peliculas de Toru Hara`', () => {
    expect(filterByProducer(allFilms, "Toru Hara")).toBe('Grave of the Fireflies');
  });
});
