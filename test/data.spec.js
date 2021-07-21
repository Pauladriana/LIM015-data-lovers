import { filterByDirector, filterByProducer, charactersSum, malesSum, femalesSum, unknowSum } from '../src/data.js';

describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns peliculas de Hiroyuki Morita', () => {
    const arrayToFilter = [{title: "My Neighbor Totoro", director: "Hayao Miyazaki"}, {title: "The Cat Returns", director: "Hiroyuki Morita"}, {title: "Tales from Earthsea", director: "Gorō Miyazaki"}, {title: "The Secret World of Arrietty", director: "Hiromasa Yonebayashi"}]
    expect(filterByDirector(arrayToFilter, "Hiroyuki Morita")).toEqual([{title: "The Cat Returns", director: "Hiroyuki Morita"}]);
  });

  it('returns peliculas de Hiromasa Yonebayashi', () => {
    const arrayToFilter = [{title: "My Neighbor Totoro", director: "Hayao Miyazaki"}, {title: "The Cat Returns", director: "Hiroyuki Morita"}, {title: "Tales from Earthsea", director: "Gorō Miyazaki"}, {title: "The Secret World of Arrietty", director: "Hiromasa Yonebayashi"}]
    expect(filterByDirector(arrayToFilter, "Hiromasa Yonebayashi")).toEqual([{title: "The Secret World of Arrietty", director: "Hiromasa Yonebayashi"}]);
  });
});


describe('filterByProducer', () => {
  it('is a function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('returns `peliculas de Isao Takahata`', () => {
    const arrayToFilter = [{title: "The Secret World of Arrietty", producer: "Toshio Suzuki"}, {title: "The Tale of the Princess Kaguya", producer: "Yoshiaki Nishimura"}, {title: "Castle in the Sky", producer: "Isao Takahata"}, {title: "My Neighbor Totoro", producer: "Hayao Miyazaki"}, {title: "Grave of the Fireflies", producer: "Toru Hara"}];
    expect(filterByProducer(arrayToFilter, "Isao Takahata")).toEqual([{title: "Castle in the Sky", producer: "Isao Takahata"}]);
  });

  it('returns `peliculas de Toru Hara`', () => {
    const arrayToFilter = [{title: "The Secret World of Arrietty", producer: "Toshio Suzuki"}, {title: "The Tale of the Princess Kaguya", producer: "Yoshiaki Nishimura"}, {title: "Castle in the Sky", producer: "Isao Takahata"}, {title: "My Neighbor Totoro", producer: "Hayao Miyazaki"}, {title: "Grave of the Fireflies", producer: "Toru Hara"}];
    expect(filterByProducer(arrayToFilter, "Toru Hara")).toEqual([{title: "Grave of the Fireflies", producer: "Toru Hara"}]);
  });
});

describe('Sum of characters', () => {
  it('is a function', () => {
    expect(typeof charactersSum).toBe('function');
  });

  it('returns total of characters', () => {
    const arrayToFilter = [{name: "Chihiro Ogino/Sen", gender: "Female"}, {name: "Nigihayami Kohakunushi/Haku", gender: "Male"}, {name: "Yubaba", gender: "Female",}, {name: "No-Face", gender: "NA"}, {name: "Kamajī", gender: "Male"}];
    expect(charactersSum(arrayToFilter)).toBe(5);
  });
});

describe('Sum of male gender characters', () => {
  it('is a function', () => {
    expect(typeof malesSum).toBe('function');
  });

  it('returns total of male characters', () => {
    const arrayToFilter = [{name: "Chihiro Ogino/Sen", gender: "Female"}, {name: "Nigihayami Kohakunushi/Haku", gender: "Male"}, {name: "Yubaba", gender: "Female",}, {name: "No-Face", gender: "NA"}, {name: "Kamajī", gender: "Male"}];
    expect(malesSum(arrayToFilter)).toBe(2);
  });
});

describe('Sum of female gender characters', () => {
  it('is a function', () => {
    expect(typeof femalesSum).toBe('function');
  });

  it('returns total of female characters', () => {
    const arrayToFilter = [{name: "Chihiro Ogino/Sen", gender: "Female"}, {name: "Nigihayami Kohakunushi/Haku", gender: "Male"}, {name: "Yubaba", gender: "Female",}, {name: "No-Face", gender: "NA"}, {name: "Kamajī", gender: "Male"}];
    expect(femalesSum(arrayToFilter)).toBe(2);
  });
});

describe('Sum of unknow gender characters', () => {
  it('is a function', () => {
    expect(typeof unknowSum).toBe('function');
  });

  it('returns total of unknow gender characters', () => {
    const arrayToFilter = [{name: "Chihiro Ogino/Sen", gender: "Female"}, {name: "Nigihayami Kohakunushi/Haku", gender: "Male"}, {name: "Yubaba", gender: "Female",}, {name: "No-Face", gender: "NA"}, {name: "Kamajī", gender: "Male"}];
    expect(unknowSum(arrayToFilter)).toBe(1);
  });
});
