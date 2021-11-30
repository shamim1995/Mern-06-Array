
const clubMember = [

[ 'Malek', 'Sherpur', '17' ],
[ 'Khalek', 'Mymenshing', '20' ],
[ 'Jolil', 'Dhaka', '45' ],
[ 'Rakib', 'Khulna', '23' ],

]

for(let i=0; i < clubMember.length; i++ ){

    let name =clubMember [i][0];
    
    if(clubMember[i][2] <= 17){

        console.log(`${name} You are not permited at my club because you are not adult`);
    }else if( clubMember[i][2] > 17 && clubMember [i][2] <= 40 ){

        console.log(`${name} Welcome to my club`);

    }else if( clubMember[i][2] >40){

        console.log(`${name} We are Proud of you Because You are old member of my club`);
    }else{

        console.log(`Please register my Club`);
    }

}