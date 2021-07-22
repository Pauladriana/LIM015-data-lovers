import { filterByDirector, filterByProducer, charactersSum, malesSum, femalesSum, unknowSum, ordenAlfaAtoZ, ordenAlfaZtoA, yearMovie, scoreMovie, compareStrings, compareRade  } from '../src/data.js';

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

describe('Sort from A to Z', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaAtoZ).toBe('function');
  });

  it('order from A to Z', () => {
    const arrayToSort  = [{title:"Spirited Away"},{title: "Castle in the Sky"}];
    expect(ordenAlfaAtoZ(arrayToSort)).toEqual([{title: "Castle in the Sky"},{title:"Spirited Away"}]);
  }); 
});

describe('Sort from Z to A', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaZtoA).toBe('function');
  });

  it('order from Z to A', () => {
    const arrayToSort  = [{title: "Castle in the Sky"},{title:"Spirited Away"}];
    expect(ordenAlfaZtoA(arrayToSort)).toEqual([{title:"Spirited Away"},{title: "Castle in the Sky"}]);
  }); 
});

describe('Sort from Year of Movie', () => {
  it('is a function', () => {
    expect(typeof yearMovie).toBe('function');
  });

  it('order year movie from lower to higher', () => {
    const arrayToSort  = [{release_date: "2001", title:"Spirited Away"},{release_date: "1988", title:"My Neighbor Totoro"}];
    expect(yearMovie(arrayToSort)).toEqual([{release_date: "1988", title:"My Neighbor Totoro"},{release_date: "2001", title:"Spirited Away"}]);
  }); 
});

describe('Sort from Score of Movie', () => {
  it('is a function', () => {
    expect(typeof scoreMovie).toBe('function');
  });

  it('order score by movie from higher to lower', () => {
    const arrayToSort  = [{rt_score: "93", title:"My Neighbor Totoro"},{rt_score: "97", title:"Spirited Away"},{rt_score: "100", title:"Only Yesterday"},{rt_score: "78", title:"Pon Pork"},{rt_score: "89", title:"The wind    Rises"}];
    expect(scoreMovie(arrayToSort)).toEqual([{rt_score: "100", title:"Only Yesterday"},{rt_score: "97", title:"Spirited Away"},{rt_score: "93", title:"My Neighbor Totoro"},{rt_score: "89", title:"The wind    Rises"},{rt_score: "78", title:"Pon Pork"}]);
  }); 
});

describe('compareStrings', () => {
  it('is a function', () => {
    expect(typeof compareStrings).toBe('function');
  });

  it('it should retun -1', () => {
    expect(compareStrings('a','b')).toBe(-1);
  }); 
  it('it should retun 1', () => {
    expect(compareStrings('b','a')).toBe(1);
  }); 
  it('it should retun 0', () => {
    expect(compareStrings('b','b')).toBe(0);
  }); 
});
describe('compareRade', () => {
    it('is a function', () => {
      expect(typeof compareRade).toBe('function');
    });
    it('it should retun -1', () => {
      expect(compareRade(50,100)).toBe(-1);
    }); 
    it('it should retun 1', () => {
      expect(compareRade(100,50)).toBe(1);
    }); 
    it('it should retun 0', () => {
      expect(compareRade(50,50)).toBe(0);
    }); 
}); 