let calculator_button = [
    {
        name: "delete",
        symbol: "Del",
        formula: false,
        type: "key",
    },
    {
        name: "clear",
        symbol: "AC",
        formula: false,
        type: "key"
    },
    {
        name: "percent",
        symbol:"%",
        formula: "/100",
        type:"number"
    },
    {
        name: "division",
        symbol:"÷",
        formula: "/",
        type: "operator"
    },
    {
        name: "7",
        symbol: "7",
        formula: 7,
        type: "number"
    },{
        name: "8",
        symbol: "8",
        formula:8,
        type: "number"
    },{
        name: "9",
        symbol: "9",
        formula: 9,
        type:"number"
    },{
        name: "multiplication",
        symbol: "x",
        formula:"*" ,
        type:"operator"
    },{
        name: "4",
        symbol:"4",
        formula:4,
        type:"number"
    },{
        name: "5",
        symbol:"5",
        formula:5,
        type:"number"
    },{
        name: "6",
        symbol:"6",
        formula:6,
        type:"number"
    },{
        name: "+",
        symbol:"+",
        formula:"+",
        type:"operator"
    },{
        name: "1",
        symbol:"1",
        formula:1,
        type:"number"
    },{
        name: "2",
        symbol:"2",
        formula:2,
        type:"number"
    },{
        name: "3",
        symbol:"3",
        formula:3,
        type:"number"
    },{
        name: "-",
        symbol:"-",
        formula:"-",
        type:"operator"
    },{
        name: "0",
        symbol:"0",
        formula:0,
        type:"number"
    },{
        name: "point ",
        symbol:".",
        formula:"decimal",
        type:"number"
    },{
        name: "calculate",
        symbol:"=",
        formula:"=",
        type:"calculate"
    }
]

//select Element
const input_element = document.querySelector('.input');
const output_result_element = document.querySelector('.result .value');
const output_operation_element = document.querySelector('.operation .value');

 //create calc Button
 function createButtons() {
     const btns_per_row = 4;
     let added_btns = 0;

     calculator_button.forEach((button) =>{
         if(added_btns % btns_per_row === 0) {
             input_element.innerHTML += `<div class="row"></div>`;
         }
         const row = document.querySelector(".row:last-child");

         row.innerHTML+= `<button id="${button.name}" class="${button.type}">
                                 ${button.symbol}
                                 </button>`;

         added_btns++;                        
     })
 }
 createButtons(); 

 //Click Event

 input_element.addEventListener("click", event => {
     const target_btn = event.target;

     calculator_button.forEach(button => {
         if(button.name === target_btn.id) calculator(button);
     })
 })

 //Calc Data
 let data = {
     operation: [],   
     result: []
 }

 

 //Calculator
 function calculator(button) {
     if(button.type === "operator"){
         data.operation.push(button.symbol);
         data.result.push(button.formula);
    }
     
     else if(button.type === "number"){
        data.operation.push(button.symbol);
        data.result.push(button.formula);
     }

     else if(button.type === "key" ){
         if(button.name === "clear") {
            data.operation = []
            data.result = []  
            updateOutputResult(0);
        }
        else if (button.name === "delete"){
            data.operation.pop();
            data.result.pop();
            
        }
    }

     else if(button.type === "calculate") {
         let join_result = data.result.join('');

         let result = eval(join_result);

         updateOutputResult (result)

         data.operation = [];
         data.result = [];

         data.operation.push(result);
         data.result.push(result);

         return;
     }

     updateOutputOperation(data.operation.join(''))
 }

 function updateOutputOperation(operation){
     output_operation_element.innerHTML = operation;
 }

 function updateOutputResult(result){
     output_result_element.innerHTML = result;  
 }

 //Format result
 function formatResult(result){
     const max_output_number_lenght = 10;
     
 }



 // digit counter
 function digitCounter(number){
     return number.toString().lenght;
 }