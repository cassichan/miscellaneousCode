function DNAStrand(dna){
  let arrayOfDNA = dna.split("");
  let compDNAStrand = [];
  for (i = 0; i < arrayOfDNA.length; i++) {
    if (arrayOfDNA[i] === "A") {
      compDNAStrand.push("T")
    } else if (arrayOfDNA[i] === "T") {
      compDNAStrand.push("A")
    } else if (arrayOfDNA[i] === "C") {
      compDNAStrand.push("G")
   } else if (arrayOfDNA[i] === "G") {
      compDNAStrand.push("C")
  }
    }
  return compDNAStrand.join("");
}