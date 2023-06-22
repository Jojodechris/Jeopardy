// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...

//  ]

function getRandomNumbers(arr, count) {
    const results = [];
    const uniqueNumbers = new Set();
  
    // Generate unique random numbers
    while (uniqueNumbers.size < count) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      uniqueNumbers.add(arr[randomIndex]);
    }
  
    // Convert the set to an array
    results.push(...uniqueNumbers);
  
    return results;
  }



async function getit(res1) {
    try {
        const validId= [150,842,476,450,451,452,453,454,455,580,581,582,583,584,585,604,605,606,607,608,609,633];
        getRandomNumbers(validId,6);
        const randomId=getRandomNumbers(validId,6);
        const res0 = await axios.get(`http://jservice.io/api/category?id=${randomId[0]}`);
        const res1 = await axios.get(`http://jservice.io/api/category?id=${randomId[1]}`);
        const res2 = await axios.get(`http://jservice.io/api/category?id=${randomId[2]}`);
        const res3 = await axios.get(`http://jservice.io/api/category?id=${randomId[3]}`);
        const res4 = await axios.get(`http://jservice.io/api/category?id=${randomId[4]}`);
        const res5 = await axios.get(`http://jservice.io/api/category?id=${randomId[5]}`);
        

      
    console.log(res1.data)


        console.log(res1.data);
      // Create a single table row for the <thead>
      const rowThead = document.createElement('tr');
      const thArray = [
        res0.data.title,
        res1.data.title,
        res2.data.title,
        res3.data.title,
        res4.data.title,
        res5.data.title,
      ];   

     
      for (let i = 0; i < 6; i++) {
        const th = document.createElement('th');
        th.textContent = thArray[i];
        rowThead.appendChild(th);
      }
  
      // Create 5 table rows for the <tbody>
      const tbody = document.createElement('tbody');

      for (let i = 0; i < 5; i++) {
        const rowTbody = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
          const cellTbody = document.createElement('td');
          cellTbody.id = `cell-${i}-${j}`; // Set the id using a unique pattern
          cellTbody.textContent = "?";
          rowTbody.appendChild(cellTbody);
        }
        tbody.appendChild(rowTbody);
      }
  
      // Append the <thead> and <tbody> to the <table>
      const table = document.createElement('table');
      table.appendChild(rowThead);
      table.appendChild(tbody);
      
  
      // Append the <table> to the <body>
      $("body").append(table);




      //FIRST ROW 
      let count1 = 0;
      $("#cell-0-0").on('click',function () {
        count1++;
        if (count1===1){
            $("#cell-0-0").text(res0.data.clues[0].question);
        }else if(count1===2) {
            $("#cell-0-0").text(res0.data.clues[0].answer);
        }
});
    let count2 =0;
      $("#cell-1-0").on('click',function () {
        count2++;
        if (count2===1){
            $("#cell-1-0").text(res0.data.clues[1].question);
        }else if(count2===2) {
            $("#cell-1-0").text(res0.data.clues[1].answer);
        }

});
    let count3 = 0;
      $("#cell-2-0").on('click',function () {
        count3++;
        if (count3===1){
            $("#cell-2-0").text(res0.data.clues[2].question);
        }else if(count3===2) {
            $("#cell-2-0").text(res0.data.clues[2].answer);
        }

});
    let count4 = 0;
      $("#cell-3-0").on('click',function () {
        count4++;
        if (count4===1){
            $("#cell-3-0").text(res0.data.clues[3].question);
        }else if(count4===2) {
            $("#cell-3-0").text(res0.data.clues[3].answer);
        }

});
    let count5 = 0;
      $("#cell-4-0").on('click',function () {
        count5++;
        if (count5===1){
            $("#cell-4-0").text(res0.data.clues[4].question);
        }else if(count5===2) {
            $("#cell-4-0").text(res0.data.clues[4].answer);
        }

});
    let count6 = 0;
      $("#cell-5-0").on('click',function () {
        count6++;
        if (count6===1){
            $("#cell-5-0").text(res0.data.clues[5].question);
        }else if(count6===2) {
            $("#cell-5-0").text(res0.data.clues[5].answer);
        }

});

// SECOND ROW 
let count7 = 0;
      $("#cell-0-1").on('click',function () {
        count7++;
        if (count7===1){
            $("#cell-0-1").text(res1.data.clues[0].question);
        }else if(count7===2) {
            $("#cell-0-1").text(res1.data.clues[0].answer);
        }
});
    let count8 =0;
      $("#cell-1-1").on('click',function () {
        count8++;
        if (count8===1){
            $("#cell-1-1").text(res1.data.clues[1].question);
        }else if(count8===2) {
            $("#cell-1-1").text(res1.data.clues[1].answer);
        }

});
    let count9 = 0;
      $("#cell-2-1").on('click',function () {
        count9++;
        if (count9===1){
            $("#cell-2-1").text(res1.data.clues[2].question);
        }else if(count9===2) {
            $("#cell-2-1").text(res1.data.clues[2].answer);
        }

});
    let count10 = 0;
      $("#cell-3-1").on('click',function () {
        count10++;
        if (count10===1){
            $("#cell-3-1").text(res1.data.clues[3].question);
        }else if(count10===2) {
            $("#cell-3-1").text(res1.data.clues[3].answer);
        }

});
    let count11 = 0;
      $("#cell-4-1").on('click',function () {
        count11++;
        if (count11===1){
            $("#cell-4-1").text(res1.data.clues[4].question);
        }else if(count11===2) {
            $("#cell-4-1").text(res1.data.clues[4].answer);
        }

});
    let count12 = 0;
      $("#cell-5-1").on('click',function () {
        count12++;
        if (count12===1){
            $("#cell-5-1").text(res1.data.clues[5].question);
        }else if(count12===2) {
            $("#cell-5-1").text(res1.data.clues[5].answer);
        }

});


// THIRD ROW 
let count13 = 0;
      $("#cell-0-2").on('click',function () {
        count13++;
        if (count13===1){
            $("#cell-0-2").text(res2.data.clues[0].question);
        }else if(count13===2) {
            $("#cell-0-2").text(res2.data.clues[0].answer);
        }
});
    let count14 =0;
      $("#cell-1-2").on('click',function () {
        count14++;
        if (count14===1){
            $("#cell-1-2").text(res2.data.clues[1].question);
        }else if(count14===2) {
            $("#cell-1-2").text(res2.data.clues[1].answer);
        }

});
    let count15 = 0;
      $("#cell-2-2").on('click',function () {
        count15++;
        if (count15===1){
            $("#cell-2-2").text(res2.data.clues[2].question);
        }else if(count15===2) {
            $("#cell-2-2").text(res2.data.clues[2].answer);
        }

});
    let count16 = 0;
      $("#cell-3-2").on('click',function () {
        count16++;
        if (count16===1){
            $("#cell-3-2").text(res2.data.clues[3].question);
        }else if(count16===2) {
            $("#cell-3-2").text(res2.data.clues[3].answer);
        }

});
    let count17 = 0;
      $("#cell-4-2").on('click',function () {
        count17++;
        if (count17===1){
            $("#cell-4-2").text(res2.data.clues[4].question);
        }else if(count17===2) {
            $("#cell-4-2").text(res2.data.clues[4].answer);
        }

});
    let count18 = 0;
      $("#cell-5-2").on('click',function () {
        count18++;
        if (count18===1){
            $("#cell-5-2").text(res2.data.clues[5].question);
        }else if(count18===2) {
            $("#cell-5-2").text(res2.data.clues[5].answer);
        }

});


//FOURTH ROW 

let count19 = 0;
      $("#cell-0-3").on('click',function () {
        count19++;
        if (count19===1){
            $("#cell-0-3").text(res3.data.clues[0].question);
        }else if(count19===2) {
            $("#cell-0-3").text(res3.data.clues[0].answer);
        }
});
    let count20 =0;
      $("#cell-1-3").on('click',function () {
        count20++;
        if (count20===1){
            $("#cell-1-3").text(res3.data.clues[1].question);
        }else if(count20===2) {
            $("#cell-1-3").text(res3.data.clues[1].answer);
        }

});
    let count21 = 0;
      $("#cell-2-3").on('click',function () {
        count21++;
        if (count21===1){
            $("#cell-2-3").text(res3.data.clues[2].question);
        }else if(count21===2) {
            $("#cell-2-3").text(res3.data.clues[2].answer);
        }

});
    let count22 = 0;
      $("#cell-3-3").on('click',function () {
        count22++;
        if (count22===1){
            $("#cell-3-3").text(res3.data.clues[3].question);
        }else if(count22===2) {
            $("#cell-3-3").text(res3.data.clues[3].answer);
        }

});
    let count23 = 0;
      $("#cell-4-3").on('click',function () {
        count23++;
        if (count23===1){
            $("#cell-4-3").text(res3.data.clues[4].question);
        }else if(count23===2) {
            $("#cell-4-3").text(res3.data.clues[4].answer);
        }

});
    let count24 = 0;
      $("#cell-5-3").on('click',function () {
        count24++;
        if (count24===1){
            $("#cell-5-3").text(res3.data.clues[5].question);
        }else if(count24===2) {
            $("#cell-5-3").text(res3.data.clues[5].answer);
        }

});

//FIVE ROW 
let count25 = 0;
      $("#cell-0-4").on('click',function () {
        count25++;
        if (count25===1){
            $("#cell-0-4").text(res4.data.clues[0].question);
        }else if(count25===2) {
            $("#cell-0-4").text(res4.data.clues[0].answer);
        }
});
    let count26 =0;
      $("#cell-1-4").on('click',function () {
        count26++;
        if (count26===1){
            $("#cell-1-4").text(res4.data.clues[1].question);
        }else if(count26===2) {
            $("#cell-1-4").text(res4.data.clues[1].answer);
        }

});
    let count27 = 0;
      $("#cell-2-4").on('click',function () {
        count27++;
        if (count27===1){
            $("#cell-2-4").text(res4.data.clues[2].question);
        }else if(count27===2) {
            $("#cell-2-4").text(res4.data.clues[2].answer);
        }

});
    let count28 = 0;
      $("#cell-3-4").on('click',function () {
        count28++;
        if (count28===1){
            $("#cell-3-4").text(res4.data.clues[3].question);
        }else if(count28===2) {
            $("#cell-3-4").text(res4.data.clues[3].answer);
        }

});
    let count29 = 0;
      $("#cell-4-4").on('click',function () {
        count29++;
        if (count29===1){
            $("#cell-4-4").text(res4.data.clues[4].question);
        }else if(count29===2) {
            $("#cell-4-4").text(res4.data.clues[4].answer);
        }

});
    let count30 = 0;
      $("#cell-5-4").on('click',function () {
        count30++;
        if (count30===1){
            $("#cell-5-4").text(res4.data.clues[5].question);
        }else if(count30===2) {
            $("#cell-5-4").text(res4.data.clues[5].answer);
        }

});
// SIXTH ROW 

let count31 = 0;
      $("#cell-0-5").on('click',function () {
        count31++;
        if (count31===1){
            $("#cell-0-5").text(res5.data.clues[0].question);
        }else if(count31===2) {
            $("#cell-0-5").text(res5.data.clues[0].answer);
        }
});
    let count32 =0;
      $("#cell-1-5").on('click',function () {
        count32++;
        if (count32===1){
            $("#cell-1-5").text(res5.data.clues[1].question);
        }else if(count32===2) {
            $("#cell-1-5").text(res5.data.clues[1].answer);
        }

});
    let count33 = 0;
      $("#cell-2-5").on('click',function () {
        count33++;
        if (count33===1){
            $("#cell-2-5").text(res5.data.clues[2].question);
        }else if(count33===2) {
            $("#cell-2-5").text(res5.data.clues[2].answer);
        }

});
    let count34 = 0;
      $("#cell-3-5").on('click',function () {
        count34++;
        if (count34===1){
            $("#cell-3-5").text(res5.data.clues[3].question);
        }else if(count34===2) {
            $("#cell-3-5").text(res5.data.clues[3].answer);
        }

});
    let count35 = 0;
      $("#cell-4-5").on('click',function () {
        count35++;
        if (count35===1){
            $("#cell-4-5").text(res5.data.clues[4].question);
        }else if(count35===2) {
            $("#cell-4-5").text(res5.data.clues[4].answer);
        }

});
    let count36 = 0;
      $("#cell-5-5").on('click',function () {
        count36++;
        if (count36===1){
            $("#cell-5-5").text(res5.data.clues[5].question);
        }else if(count36===2) {
            $("#cell-5-5").text(res5.data.clues[5].answer);
        }

});

    } catch (error) {
      console.error('Error:', error);
    }
  }
  





$("body").append("<div>");
$("div").append("<button><h1>Click here to start your JEOPARDY Game!😜<h1></button>");


// Add event listener to the button
$("button").on("click", function () {
$(this).fadeOut(3000, function () {
    $(this).remove()
  }) 
    getit();
//    $("button").remove()     
});


// function select() {
//     const CategoriesId =[150,842,450,480,863,864,865,866,867,868,886,887,888,889,890];
//     let Selectedcategories = [];
    
//     // Loop to select 6 random numbers
//     while (Selectedcategories.length < 6) {
//       let randomIndex = Math.floor(Math.random() * CategoriesId.length);
//        randomNumber = CategoriesId[randomIndex];
      
//       // Check if the selected number is not already in the selectedNumbers array
//       if (!Selectedcategories.includes(randomNumber)) {
//         Selectedcategories.push(randomNumber);
//       }
//     }
    
//     return Selectedcategories;
//   }
  
// /** Get NUM_CATEGORIES random category from API.
//  *
//  * Returns array of category ids
//  */

// function getCategoryIds() {

//     async function getUsers() {
//         const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users');
//         console.log(res);
//       }
// }


// /** Return object with data about a category:
//  *
//  *  Returns { title: "Math", clues: clue-array }
//  *
//  * Where clue-array is:
//  *   [
//  *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//  *      {question: "Bell Jar Author", answer: "Plath", showing: null},
//  *      ...
//  *   ]
//  */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO