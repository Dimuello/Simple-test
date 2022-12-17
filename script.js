"use strict"

const btnShowResult = document.querySelectorAll('.btn-show-result');

btnShowResult.forEach((item) => {

    // Geography test
    item.addEventListener('click', () => {
    let result = 0;

    let answerGeo1 = document.getElementById('question-geo1').value;
    if(answerGeo1 === 'London') {
        result++;
    }

    let answerGeo2 = document.getElementById('question-geo2').value;
    if(answerGeo2 === 'Kyiv') {
        result++;
    }

    let answerGeo3 = document.getElementById('question-geo3').value;
    if(answerGeo3 === 'Madrid') {
        result++;
    }

    let answerGeo4 = document.getElementById('question-geo4').value;
    if(answerGeo4 === 'Ottava') {
        result++;
    }

    alert('Try answers: ' + result);
    })

    // Mathematics test
    item.addEventListener('click', () => {
    let result = 0;

    let answerMat1 = document.getElementById('question-mat1').value;
    if(answerMat1 === '2') {
        result++;
    }
    
    let answerMat2 = document.getElementById('question-mat2').value;
    if(answerMat2 === '6') {
        result++;
    }
    
    let answerMat3 = document.getElementById('question-mat3').value;
    if(answerMat3 === '5') {
        result++;
    }
    
    let answerMat4 = document.getElementById('question-mat4').value;
    if(answerMat4 === '4') {
        result++;
    }

    alert('Try answers: ' + result);
    })
});




// btnGeography.addEventListener('click', () => {
//     let result = 0;

//     let answer1 = document.getElementById('question1').value;
//     if(answer1 === 'London') {
//         result++;
//     }

//     let answer2 = document.getElementById('question2').value;
//     if(answer2 === 'Kyiv') {
//         result++;
//     }

//     let answer3 = document.getElementById('question3').value;
//     if(answer3 === 'Madrid') {
//         result++;
//     }

//     let answer4 = document.getElementById('question4').value;
//     if(answer4 === 'Ottava') {
//         result++;
//     }

//     alert('Try answers: ' + result);
// });


// Mathematics test
// const btnMathematics = document.getElementById('show-result--mathematics');

// btnMathematics.addEventListener('click', () => {
//     let result = 0;

    // let answer1 = document.getElementById('question1').value;
    // if(answer1 === '2') {
    //     result++;
    // }

    // let answer2 = document.getElementById('question2').value;
    // if(answer2 === '6') {
    //     result++;
    // }

    // let answer3 = document.getElementById('question3').value;
    // if(answer3 === '5') {
    //     result++;
    // }

    // let answer4 = document.getElementById('question4').value;
    // if(answer4 === '4') {
    //     result++;
    // }

    // alert('Try answers: ' + result);
// });








// Geography test

// const btnGeography = document.getElementById('show-result--geography');

// btnGeography.addEventListener('click', () => {
//     let result = 0;

//     let answer1 = document.getElementById('question1').value;
//     if(answer1 === 'London') {
//         result++;
//     }

//     let answer2 = document.getElementById('question2').value;
//     if(answer2 === 'Kyiv') {
//         result++;
//     }

//     let answer3 = document.getElementById('question3').value;
//     if(answer3 === 'Madrid') {
//         result++;
//     }

//     let answer4 = document.getElementById('question4').value;
//     if(answer4 === 'Ottava') {
//         result++;
//     }

//     alert('Try answers: ' + result);
// });


// Mathematics test
// const btnMathematics = document.getElementById('show-result--mathematics');

// btnMathematics.addEventListener('click', () => {
//     let result = 0;

//     let answer1 = document.getElementById('question1').value;
//     if(answer1 === '2') {
//         result++;
//     }

//     let answer2 = document.getElementById('question2').value;
//     if(answer2 === '6') {
//         result++;
//     }

//     let answer3 = document.getElementById('question3').value;
//     if(answer3 === '5') {
//         result++;
//     }

//     let answer4 = document.getElementById('question4').value;
//     if(answer4 === '4') {
//         result++;
//     }

//     alert('Try answers: ' + result);
// });