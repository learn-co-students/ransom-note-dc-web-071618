function buildHistogram(arr) {
  let histogram = {};

  arr.forEach(letter => {
    if (!histogram[letter]) {
      histogram[letter] = 1;
    } else {
      histogram[letter] += 1;
    }
  });

  return histogram;
}

function canBuildNote(magazine, note) {
  const magazineLetters = buildHistogram(magazine);

  for (let i = 0; i < note.length; i++) {
    const currentLetter = note[i];

    if (!!magazineLetters[currentLetter]) {
      magazineLetters[currentLetter] -= 1;
    } else {
      return false;
    }
  }

  return true;
}
