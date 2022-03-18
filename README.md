<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2700 - Tech Check

**Value:** 7.5% of overall course mark  

## Bioinformatics 101

### Step 1 - Convert DNA Sequence to corresponding Codon Sequence
DNA code is comprised of four letters: G, T, A, and C. In a strand of DNA, each triplet of these letters is a called a *codon*. Each codon represents an amino acid. Your first task in this tech check is to convert a DNA sequence – stored as a string – into the corresponding sequence of codons. 

So, for example, the following DNA sequence string: GCTCGTAATGATTGT should be converted into the following codon sequence: **["GCT","CGT","AAT","GAT","TGT"]**.

### Step 2 - Convert your codon sequence into an amino acid sequence
Once you've translated the DNA sequence into a codon sequence, your next job is to translate that codon sequence into an amino acid sequence. Imagine doing that by hand using the table below.

There are 21 amino acids. The DNA codons that represent them and their abbreviations are specified in the table below. 

Your job is to programatically perform the conversion using JSON data from an API representing the table below. You will use the JSON data to lookup the correct amino acid that corresponds to each codon. This JSON data is available at https://prog2700.netlify.app/json/dnaMap.json

Abbr.| DNA Codons | Amino Acid
--- |--- | ---
|Ala |GCT, GCC, GCA, GCG | Alanine |
|Arg |CGT, CGC, CGA, CGG, AGA, AGG | Arginine |
|Asn |AAT, AAC | Asparagine |
|Asp |GAT, GAC | Aspartic Acid |
|Cys |TGT, TGC | Cysteine |
|Gln |CAA, CAG | Glutamine |
|Glu |GAA, GAG | Glutamic acid |
|Gly |GGT, GGC, GGA, GGG | Glycine |
|His |CAT, CAC | Histidine |
|Ile |ATT, ATC, ATA | Isoleucine |
|Leu |CTT, CTC, CTA, CTG, TTA, TTG | Leucine |
|Lys |AAA, AAG | Lysine |
|Met |ATG | Methionine |
|Phe |TTT, TTC | Phenylalanine |
|Pro |CCT, CCC, CCA, CCG | Proline |
|Pyl |UAG | Pyrrolysine |
|Ser |TCT, TCC, TCA, TCG, AGT, AGC | Serine |
|Sec |UGA | Selenocysteine |
|Thr |ACT, ACC, ACA, ACG | Threonine |
|Trp |TGG | Tryptophan |
|Tyr |TAT, TAC | Tyrosine |
|Val |GTT, GTC, GTA, GTG | Valine |


#### Submission Instructions

Once your program is complete, or if you run out of in-class time to complete the Tech Check, commit and push your code to GitHub with the commit message "End of Class"

If you complete the Tech Check outside of class time, commit and push your subsequent code additions and changes with a message or "Ready for Marking"


#### Marking Scheme
Final Grade | Requirement
:---: | ---
|**10/10** | Tech check is correct (passes all tests) and is completed within the allotted class time.
|**9/10** | Tech check is correct (passes all tests) and is completed within 12 hours of the start of the Tech Check (this includes the allotted in-class time.)
|**8/10** | Tech check is correct (passes all tests) and is completed between 13 and 36 hours from when the Tech Check began.
|**6/10** | Tech check is correct (passes all tests) and is completed and submitted after 36 hours from when the Tech Check began.
|**0/10** | Tech check is not submitted or is submitted but does not pass all tests.
