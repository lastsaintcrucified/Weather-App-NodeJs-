var kabjab = (a,callback) => {
  let b = 2*a;
  callback(`the name of our country ${b}`,b^3,'whassup wassup');
}
kabjab(10,(a,b,c) => {
  console.log(a);
  console.log(b);
  console.log(c);
})
