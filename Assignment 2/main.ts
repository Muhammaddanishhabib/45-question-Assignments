 // Store a person name in Variable

let personName: string= "Danish";

// Printing a person name in Lower Case

console.log("lowercase:", personName.toLowerCase());

// Printing a person name in Upper Case


console.log("uppercase:",personName.toUpperCase());


// Printing a person name in Title Case


console.log("Titlecase:", personName.replace(/\bw/g,c => c. toUpperCase()));
