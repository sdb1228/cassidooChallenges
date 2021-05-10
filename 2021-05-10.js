function sameDigits (input) {
  return areSetEqual(new Set(Math.pow(input, 3).toString()), new Set(input.toString()))
}

function areSetEqual(seta, setb) {
    if (seta.size !== setb.size) return false;
    for (var a of seta) if (!setb.has(a)) return false;
    return true;
}


console.log(sameDigits(1))
console.log(sameDigits(10))
console.log(sameDigits(251894))
console.log(sameDigits(251895))
