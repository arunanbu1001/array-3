const a = [[15, 6], [250, 2], [35, 51]];

const x = a.reduceRight((b, c) => b.concat(c));
console.log(x);