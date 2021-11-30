

const devs = [
    
    ['shamim', 'Mern Stack', 25, 25000 ],

    ['Shaker', 'Laravel', 28, 28000 ],
    
    ['Roton', 'Mern Stack', 30, 30000 ],
    
    ['Saro', 'Laravel', 3, 35000 ],
    
    ['Alamin', 'Java', 35, 40000 ],

    ['Alamin', 'Wordpress', 35, 40000 ],
    ['Alamin', 'Wordpress', 35, 40000 ],
    
    ['Asad', 'Java', 40, 48000 ],

]


let totalAmount=0;
for( let i=0; i < devs.length; i++ ){
    
  console.log(`
  Name:${ devs[i] [0] }
  Skill: ${ devs[i][1] }
  Age: ${ devs[i][2] }
  Sallery: ${ devs[i][3] }
  
  `);

  totalAmount = totalAmount+ devs[i][3]

}

console.log(` Total Taka = ${totalAmount} `);