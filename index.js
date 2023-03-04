import {summaries} from './data.js'
const rightContainer = document.getElementById('right-section')

let text =''
for(let summary of summaries){
     text += `   
            <div class='summary'>
            <div class='subjects'>
                <div >
                    <img src='${summary.image}' alt=${summary.subject} />
                </div>
                <div class='subject'>
                    <h4> ${summary.subject} </h4>
                </div>
            </div>
            <div class='score'>
                <p> <span class='student-score'>  ${summary.score}</span> / 100 </p>
            </div>
        </div>
    `
    const summaryElement = document.querySelector(`.summary[data-id='${summary.id}']`);
    summaryElement.style.backgroundColor = summary.backgroundColor;
}



rightContainer.innerHTML = text;

