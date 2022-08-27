var n = 3;
var memo = new Array(n);
function steps(c, n) {
  if (c > n) return 0;
  else if (c == n) return 1;
  else if (memo[c] != undefined) return memo[c];
  else {
    memo[c] = steps(c + 1, n) + steps(c + 2, n);
    return memo[c];
  }
}

console.log(steps(0, n));
