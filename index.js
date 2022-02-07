//Destructuring assignment is a fast way to assign data 
//to variables from objects, arrays, and strings.

const farmAnimals = 'cow horse sheep pig chicken';
//1) String: uses destructuring to declare 5 animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(` `);
//2) String: uses destructuring to declare the 4 traditional animal names
const [bessie, ,dolly, babe, little] = farmAnimals.split(` `);
//3) String: uses destructuring to declare the 3 traditional animal colors
const [blackAndWhite, , black, pink,] = farmAnimals.split(` `);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//4) Array: uses destructuring to declare 7 traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;
//5) Array: uses destructuring to declare 6 rainbow color variables using initials
const [r, o, y, g, b, ,v] = colors;
//6) Array: uses destructuring to declare Indigo using indg 
const [, , , , , indg] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

//7) Object: uses destructuring to assign all appropriate variables using keys as the variable names
const {muppetName, color, song, job, partner} = muppet;
//8) Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const {song2, song4} = nestedMuppet.album.theMuppetMovie;
const {nestedJob, nestedPartner} = nestedMuppet;
