
export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
};

export const filterByProducer = (arraytoFilter, filterValue) => {
  const filterResult = arraytoFilter.filter((film) => film.producer === filterValue);
  return filterResult;
};

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function compareRade(a, b) {
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export const ordenAlfaAtoZ = (arraytosort) => {
  arraytosort.sort(function(a, b) {
    return compareStrings(a.title, b.title);
})
};

export const ordenAlfaZtoA = (arraytosort) => {
  arraytosort.sort(function(a, b) {
    return compareStrings(b.title, a.title);
})
};

export const yearMovie = (arraytosort) => {
  arraytosort.sort(function(a, b) {
    return compareStrings(a.release_date, b.release_date);
})
};

export const scoreMovie = (arraytosort) => {
  arraytosort.sort(function(a, b) {
    return compareRade(Number(b.rt_score), Number(a.rt_score));
});
};

export const charactersSum = (allCharacters) => {
  let sumOfCharacters = 0;
  for (let i=0; i < allCharacters.length; i++) {
      sumOfCharacters += 1;
  }
  return sumOfCharacters
}

export const malesSum = (allCharacters) => {
  let sumOfCharacters = 0;
  for (let i=0; i < allCharacters.length; i++) {
    if (allCharacters[i].gender === "Male") {
      sumOfCharacters += 1;
    }
  }
  return sumOfCharacters;
}

export const femalesSum = (allCharacters) => {
  let sumOfCharacters = 0;
  for (let i=0; i < allCharacters.length; i++) {
    if (allCharacters[i].gender === "Female" ) {
      sumOfCharacters += 1;
    }
}
  return sumOfCharacters
}

export const unknowSum = (allCharacters) => {
  let sumOfCharacters = 0;
  for (let i=0; i < allCharacters.length; i++) {
    if (allCharacters[i].gender.includes("NA"))
    sumOfCharacters += 1;
}
  return sumOfCharacters
}