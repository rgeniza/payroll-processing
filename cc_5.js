let employees = [{
    name: "Joe B",
    hourlyRate: 25,
    hoursWorked: 40
}, 
{
     name: "Vince W",
    hourlyRate: 35, 
    hoursWorked: 30
},
{
     name: "Emma H",
    hourlyRate: 30,
    hoursWorked: 50
}
]
console.log(`Employee Array`);
console.log(employees);
console.log(`-------------------`);

// Creation of basePay function  
function calculateBasePay(hourlyRate, hoursWorked) {
    return employees.map(employee => {
        const hours = Math.min(employee.hoursWorked, 40);
        const basePay = hours * employee.hourlyRate;
        return{
            name: employee.name,
            basePay: basePay
        };
    });
}
 const basePays = calculateBasePay(employees);
 console.log(`Base Pay calculation`)
 console.log(basePays);
 console.log(`--------------------`);
 

// Overtime pay function 
function calculateOvertimePay(hourlyRate, hoursWorked) {
    return employees.map(employee =>{
        const overtimeHours = Math.max(employee.hoursWorked - 40, 0);
        const overtimePay = overtimeHours * employee.hourlyRate * 1.5;
        return{
            name: employee.name,
            overtimePay: overtimePay
        }
    })
    
}

const overtimePays = calculateOvertimePay(employees);
console.log(`Overtime Pay Calculation`);
console.log(overtimePays);
console.log(`---------------------`);


// 15% tax on income 
function calculateTaxes(grossPays) {
    return grossPays.map(employee =>{
        const gross = employee.grossPay;
        const netPay = gross * 0.85; 
        return {
            name: employee.name,
            grossPay: gross.toFixed(2),
            netPay: netPay.toFixed(2),
         };
    });
}

const grossPays = [
    {name: "Joe B", grossPay: 1000},
    {name: "Vince W", grossPay: 1050},
    {name: "Emma H", grossPay: 1650}
];

const netPay = calculateTaxes(grossPays);
console.log(`Gross and Net Pay`);
console.log(netPay);
console.log(`----------------------`);

// process payroll function 
function processPayroll(employee) {
        const baseHours = Math.min(employee.hoursWorked, 40);
        const overtimeHours = Math.max(employee.hoursWorked - 40, 0);
        const basePay = baseHours * employee.hourlyRate
        const overtimePay = overtimeHours * employee.hourlyRate * 1.5;
        const grossPay = basePay + overtimePay;
        const netPay = grossPay * 0.85;

        return{
            name: employee.name,
            overtimePay: overtimePay.toFixed(2),
            basePay: basePay.toFixed(2),
            grossPay: grossPay.toFixed(2),
            netPay: netPay.toFixed(2)
        };

    };

const payroll = employees.map(processPayroll)
console.log(`Return from processPayroll function`);
console.log(payroll);
console.log(`----------------------`);


// for..of loop to process each employee
console.log(`for of loop to return results from processPayroll()`);

for (const employee of employees) {
    const finalPays = processPayroll(employee);
    console.log(finalPays)
}









