// Первая задача

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';



    function getRow(firstRow, secondRow) {
        let firstCount = 0;
        let secondCount = 0;

        for(let i = 0;i < firstRow.length; i++){
            if(firstRow.charAt(i) == 'а'){
                firstCount++;
            }
        }
        for(let i = 0;i < secondRow.length; i++){
            if(secondRow.charAt(i) == 'а'){
                secondCount++;
            }
        }
        console.log(firstCount);
        console.log(secondCount);
    if(firstCount > secondCount){
        return firstRow;
    }else{
        return secondRow;
    }

    }

    console.log(getRow(firstRow, secondRow)); // мама мыла раму


// Вторая задача

function formattedPhone(phone) {
    let result='';
    for(let i = 0;i < phone.length; i++){
        console.log(phone.charAt(i));
        if(i == 1){
            result += phone.charAt(i) + ' (';
        }else if(i == 4){
            result += phone.charAt(i) + ') ';
        }else if(i == 7 || i ==9){
            result += phone.charAt(i) + '-';
        }else{

            result += phone.charAt(i);
        }

    }
    return result;

}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90