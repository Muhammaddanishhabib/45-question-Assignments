/*Assignment 06
6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
 and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
  Print the name once, so the whitespace around the name is displayed. Then print the name after 
  striping the white spaces.*/ 

  //  \t = tab 4 word space 
  //  \n = next line
 //   trim() = white space

  let personName:string = `\n\t MUHAMMAD DANISH\t\n`;
  console.log(personName);
  let stripped: string = personName.trim();
  console.log(stripped);