const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate deductions and net salary
function calculateSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE based on the new rates
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = (grossSalary - 0) * 0.1; // 10% for up to Ksh 24,000
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25); // 10% for first Ksh 24,000 and 25% on the excess
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3); // 10%, 25%, and 30% on excess
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + (176667 * 0.3) + ((grossSalary - 500000) * 0.325); // Add 32.5% on excess
    } else {
        paye = (24000 * 0.1) + (8333 * 0.25) + (176667 * 0.3) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35); // 35% on excess
    }

    // Calculate NHIF Deduction based on provided rates
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculate NSSF Deduction based on Tier I and Tier II
    let nssfTierI = 0;
    let nssfTierII = 0;
    if (grossSalary <= 7000) {
        nssfTierI = grossSalary * 0.06; // 6% for Tier I
    } else if (grossSalary <= 36000) {
        nssfTierI = 7000 * 0.06; // Max for Tier I
        nssfTierII = (grossSalary - 7000) * 0.06; // 6% for Tier II
    } else {
        nssfTierI = 7000 * 0.06; // Max for Tier I
        nssfTierII = (36000 - 7000) * 0.06; // Max for Tier II
    }

    const nssf = nssfTierI + nssfTierII; // Total NSSF deduction

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}

// Prompt user for basic salary and benefits
rl.question("Enter Basic Salary: ", function(basicInput) {
    const basicSalary = parseFloat(basicInput);

    rl.question("Enter Benefits: ", function(benefitsInput) {
        const benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
            console.log('Please enter valid positive numbers for salary and benefits.');
        } else {
            const salaryDetails = calculateSalary(basicSalary, benefits);
            console.log(`Gross Salary: KSh ${salaryDetails.grossSalary.toFixed(2)}`);
            console.log(`PAYE: KSh ${salaryDetails.paye.toFixed(2)}`);
            console.log(`NHIF Deduction: KSh ${salaryDetails.nhif.toFixed(2)}`);
            console.log(`NSSF Deduction: KSh ${salaryDetails.nssf.toFixed(2)}`);
            console.log(`Net Salary: KSh ${salaryDetails.netSalary.toFixed(2)}`);
        }

        // Close the readline interface
        rl.close();
    });
});
