module.exports = {
  difference: function(a,b){
    return a - b;
  },
  isEqual: function(a,b){
    return a === b;
  },
  isEven: function(a){
    return !(!!(a % 2));
  },
  isDivisible: function(a,b){
    return !(!!(a % b));
  },
  discountPercentage: function(orig, disc){
    if(disc < 0 || disc > 100) return "please enter a number between 0 and 100";
    return orig*(disc/100)
  },
  isVowel: function(a){
    return /[aeiouy]/i.test(a);
  },
  celsiusToFahrenheit: function(temp){
    return temp*1.8+32;
  },
  biggestOfThree: function(){
    return Array.from(arguments).reduce((p,c)=>{return c > p ? c : p})
  },
  // Bonus
  federalIncomeTaxCalculator: function(taxable){
    var tax = 0;
    if(taxable >= 413201)
    {
      tax += 39.6*(taxable-413201);
      taxable-=(taxable-413201);
    }
    if(taxable >= 411501)
    {
      tax += 35*(taxable-411501);
      taxable-=(taxable-411501);
    }
    if(taxable >= 189301)
    {
      tax += 33*(taxable-189301);
      taxable-=(taxable-189301);
    }
    if(taxable >= 90751)
    {
      tax += 28*(taxable-90751);
      taxable-=(taxable-90751);
    }
    if(taxable >= 37451)
    {
      tax += 25*(taxable-37451);
      taxable-=(taxable-37451);
    }
    if(taxable >= 9226)
    {
      tax += 15*(taxable-9226);
      taxable-=(taxable-9226);
    }
    if(taxable >= 1)
    {
      tax += 10*(taxable-1);
      taxable-=(taxable-1);
    }
    return tax;
  },
  letterCount: function(str){
    var arr = str.split('');
    var obj = arr.reduce((prev,cur)=>{
      if(prev[cur]) prev[cur]+='|';
      else prev[cur] = '|';
      return prev;
    },{});
    for(var key in obj)
    {
        console.log(key +' : '+ obj[key]+'\n')
    }
  },
  prefixNotation: function(){
    switch(arguments[0])
    {
      case '+': return Array.from(arguments).slice(1).reduce((p,c)=>p+c);
      case '-': return Array.from(arguments).slice(1).reduce((p,c)=>p-c);
      case '/': return Array.from(arguments).slice(1).reduce((p,c)=>p/c);
      case '*': return Array.from(arguments).slice(1).reduce((p,c)=>p*c);
    }
  }
};
