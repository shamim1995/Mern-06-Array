
let shamim= new Shamim();


const students = [

    [ 1 , 'Saro', 'Abdul Halim', 'Josna', '80', '65', '75', '82', '52','86','75' ],
    [ 2 , 'Shaker', 'Abdul Bokkor', 'Rubi', '50', '65', '85', '74', '68','66','70' ],
    [ 3 , 'Al amin', 'Malek', 'Maisa', '75', '85', '45', '85', '65','66','75' ],
    [ 4 , 'Khokon', 'Koddus', 'Jomela', '81', '69', '73', '31', '72','80','68' ],
    [ 5 , 'Prince', 'kalam', 'shahida', '83', '69', '77', '72', '85','66','45' ],
    [ 6 , 'Mahim', 'Muslem', 'Jusna', '88', '68', '52', '67', '77','81','85' ],
    [ 7 , 'Alom', 'Saidul', 'Rohima', '75', '85', '75', '82', '52','86','75' ],
    [ 8 , 'Rijon', 'Abdul hakim', 'Shafaly', '50', '62', '73', '74', '82','66','95' ],
    [ 9 , 'Sahida', 'jolil', 'Nirala', '80', '65', '75', '82', '52','86','75' ],
    [ 10 , 'Salma', 'sattar', 'Khairun', '20', '85', '50', '42', '85','81','77' ],

];


for(let i=0; i < students.length; i++ ){ 

    let bn = students[i][4];
    let en = students[i][5];
    let math = students[i][6];
    let ict = students[i][7];
    let agre = students[i][8];
    let social = students[i][9];
    let rel = students[i][10];

    console.log(`
    
    Roll : ${ students[i] [0] }
    Name : ${ students[i] [1] }
    Father_Name : ${ students[i] [2] }
    Mother_Name : ${ students[i] [3] }

    Bangla : ${ bn }           =${shamim.gpa(bn)}                = ${ shamim.grade(shamim.gpa(bn)) }
    English : ${ en }          =${shamim.gpa(en)}                = ${ shamim.grade(shamim.gpa(en)) }  
    Math : ${ math }             =${shamim.gpa(math)}                = ${ shamim.grade(shamim.gpa(math)) }        
    Ict : ${ ict }              =${shamim.gpa(ict)}                = ${ shamim.grade(shamim.gpa(ict)) } 
    Agre : ${ agre }             =${shamim.gpa(agre)}                = ${ shamim.grade(shamim.gpa(agre)) }  
    Social : ${ social }           =${shamim.gpa(social)}                = ${ shamim.grade(shamim.gpa(social)) }
    Religion : ${rel }         =${shamim.gpa(rel)}                = ${ shamim.grade(shamim.gpa(rel)) }

   ============================================================================================================

                ${ shamim.cgpa ( shamim.gpa(bn), shamim.gpa(en), shamim.gpa(math), shamim.gpa(ict), shamim.gpa(agre), shamim.gpa(social), shamim.gpa(rel) ) } 
    `);
}