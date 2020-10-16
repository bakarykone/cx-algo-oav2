const SortbyInsertion = (number) => {
    for (let x = 1; x < number.length; x++) {
      let y = x - 1
      let tmp = number[x]
      while (y >= 0 && number[y] > tmp) {
        number[y + 1] = number[y]
        y-- //y = y - 1
      }
      number[y+1] = tmp
    }
    return number
  }
  console.log(SortbyInsertion([13, 78, 1000, 2, -100, 67, 12]));
  