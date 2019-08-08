function generatePascalTriangle(number){
  var pascalTriangle = [];
  for(var i=0;i<number;i++){
      pascalTriangle[i] = new Array(i+1);
      for(var j=0;j<i+1;j++){
        if(i==j || j==0){
          pascalTriangle[i][j] = 1;
        }else{
          pascalTriangle[i][j] = pascalTriangle[i-1][j-1]+pascalTriangle[i-1][j];
        }
      }
    }
  return pascalTriangle;
}

console.log(generatePascalTriangle(4));
