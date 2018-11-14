function buildHistogram(magazine) {
  let magazineHistogram = {};
  for (let letter of magazine) {
    if (magazineHistogram[letter]) {
      magazineHistogram[letter] += 1;
    } else {
      magazineHistogram[letter] = 1;
    }
  }
  return magazineHistogram;
}

function canBuildNote(magazine, note) {
  let magazineHistogram = buildHistogram(magazine);
  for (let letter of note) {
    if (magazineHistogram[letter]) {
      magazineHistogram[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
