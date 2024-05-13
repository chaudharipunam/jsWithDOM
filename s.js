const p=[
    { name: 'punam', score:20 },
    { name: 'Rutu', score:40 },
    { name: 'Sonam', score:90 },
    { name: 'Rinky', score:80 },
    { name: 'seema', score:70},
    { name: 'khushi',score:30 }
  ]
 let s= p.reduce((accumulator,currentValue)=>{
    let t= accumulator +currentValue.score;
    return t/p.length;
  },0);
  console.log(s);