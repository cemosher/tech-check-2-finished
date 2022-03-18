(function(tests){

    //MAKE SURE YOU FOLLOW THE STEPS BELOW AND DO THE FOUR(4) STEPS IN THE CORRECT ORDER

    const DATA_URL = "https://prog2700.netlify.app/json/dnaMap.json";
    const DNA_SEQUENCE = "GTGCCAATGTTACTGCTAAATCTCTATATACAGTGGCTTAAGGATGGGGGGCCCAGCAGCGGCCGACCCCCCCCCTCAGTGTGGAATCAACCGGAATTGAGG";
    
    // Function to extract Codons as a JavaScript Array from the DNA Sequence String.
    const extractCodonsFromDNA = function(dnaSequence)
    {
      var codons = []; //DO NOT MODIFY THIS LINE
      // STEP #1: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // You'll get an error notification in the console until 
      // the function is completed correctly. Be sure to check 
      // what the expected result should be and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V

      //turn this string into an array of strings
      var notCodon = []
      for (let i = 0; i < dnaSequence.length; i++) {
        var newDNA = DNA_SEQUENCE.slice([i], [i+3])
        notCodon.push(newDNA)
        }
      console.log(notCodon)

      var codons = []
        for (let i = 0; i < notCodon.length; i = i + 3) {
          codons.push(notCodon[i])
        }
        console.log(codons)
        //now i have an array but i need to remove every 2nd and 3rd string

      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return codons; //DO NOT MODIFY THIS LINE
    }
    
    
    const translateCodonsToAminos = function(codons, jsonData) 
    {
      let aminos = []; //DO NOT MODIFY THIS LINE
      // STEP #4: ADD CODE TO COMPLETE THE FUNCTION HERE...
      // For each codon in the 'codons' array, find a match in the 'jsonData'
      // When you've found a match, add the corresponding amino abbreviation to the 'aminos' array.
      // Be sure to check what the expected result is and write the function 
      // so that it returns that expected result.
      // The console will notify you when the function is working as expected.
      // Once you have this step completed, you've completed the Tech Check.
      // |    |     |     |     |      |      |      |      |      |      |
      // V    V     V     V     V      V      V      V      V      V      V
      

      //if GTG is in the array somewhere, return the abbr associated with it
      codons.forEach(function(codon) {
        jsonData.forEach(function(item) {
          if (item.codons.includes(codon)) {
            aminos.push(item.abbr)
          }
        });
      });


      // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
      // |    |     |     |     |      |      |      |      |      |      |
      return aminos; //DO NOT MODIFY THIS LINE
    }

    const codons = extractCodonsFromDNA(DNA_SEQUENCE); //DO NOT MODIFY THIS LINE
    let aminos = []; //DO NOT MODIFY THIS LINE
      
    // STEP #2: WRITE CODE TO FETCH DATA USING THE PROVIDED JSON DATA URL.
    // YOU CAN CONFIRM THAT YOU'VE SUCCESSFULLY FETCHED THE DATA BY LOGGING IT TO THE CONSOLE
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V

    function convert() {
      fetch('https://prog2700.netlify.app/json/dnaMap.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json)
        aminos = translateCodonsToAminos(codons, json); 
        tests.runTests(codons, aminos)
      })
    }
    convert()

  

    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

 
    // STEP #3: 
    // ONCE YOU HAVE YOUR API CALL WORKING, LOOK AT THE TWO LINES OF CODE BELOW. 
    // ONE LINE IS COMMENTED OUT (aminos = ...) AND THE OTHER ISN'T (test.runTests...). 
    // UNCOMMENT THE FIRST LINE AND MOVE BOTH LINES INTO THE BODY OF THE
    // CALLBACK FUNCTION YOU WROTE ABOVE IN STEP #2 WHERE YOU'RE ABLE
    // TO ACCESS YOUR JSON DATA FROM YOUR API CALL...
    // |    |     |     |     |      |      |      |      |      |      |
    // V    V     V     V     V      V      V      V      V      V      V

    // aminos = translateCodonsToAminos(codons, json); //DO NOT MODIFY THIS LINE...but you can uncomment and move it when directed to.
    // tests.runTests(codons, aminos) //DO NOT MODIFY THIS LINE...but you can move it when directed to.

    // ^    ^     ^     ^     ^      ^      ^      ^      ^      ^      ^
    // |    |     |     |     |      |      |      |      |      |      |

  })(tests);
