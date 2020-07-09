// Returns a random DNA base with values A, T, C and G
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//creating pAequor object which returns specimen number and DNA sequence for the specimen.
//Compare DNA compares the object along with external data to check how many sequences have common dna
//willLikelySurvive() - returns ture if C and G constitute 60% or more of DNA sequence in protein synthesis
const pAequorFactory = (num, mockUpStrand) => {
  return {
    specimenNum : num,
    dna : mockUpStrand,
    print(){
      console.log(this.dna);
    },
    mutate(){
      let idx = Math.floor(Math.random()*15);
      console.log("index is" + idx);
      let x = this.dna[idx];
      let y = ' ';
      do {
        y = returnRandBase();
      }while(x===y);
      this.dna[idx] = y;
      return this.dna;
    },
    compareDNA(obj){
      let count = 0;
      for(let i=0; i< this.dna.length; i++){
        if(this.dna[i] === obj[i])
          count++;
      }
      let percent = count/obj.length * 100;
      console.log("Both specimens have "+ percent.toFixed(2) + " DNA in common")
    },
    willLikelySurvive(){
      let chance = 0;
      for(let i=0; i< this.dna.length; i++){
        if((this.dna[i] === 'C') || (this.dna[i] ==='G'))
          chance++;
      }
      if(((chance/this.dna.length) * 100) >= 60)
        return true;
      else
        return false;
    }
  }
}

// Calling respective factory methods to create an instance and test the functions
let x = pAequorFactory(1,mockUpStrand());
console.log(x);
console.log(x.print());
console.log(x.mutate());
let y = [ 'G', 'C', 'C', 'T', 'A', 'T', 'G', 'T', 'T', 'C', 'A', 'C', 'G', 'A', 'A' ];
console.log(x.compareDNA(y));
console.log(x.willLikelySurvive());

//creating 30 instances of the random DNA sequence and decoding those only which can survive the life
let arr = [];
let count = 0
let match = 0;
let counter = 1
let counters = 0
do {
  let test10 = pAequorFactory(counter, mockUpStrand());
  let test11 = test10.willLikelySurvive();
  counter++
  if (test11) {
    match++;
    counters++;
    arr.push({Test: test10.specimenNum, Completed: counters, DNA: test10.dna})
  }
} while (match < 30);
console.log(arr);
