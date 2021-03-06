const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/medisource"
);

const userSeed = [
    {
        name: "admin",
        username: "admin",
        password: "password",
        date: new Date(Date.now())
    }
];

const entitySeed = [
    {
        name: "St. Louis",
        location: "444 Park St."
    },
    {
        name: "St. Peter",
        location: "555 Lonk Stronk"
    }
];

const postSeed = [
    {
        userpic:"data:image/jpeg;base64,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",
        image: "https://picsum.photos/350/350",
        user: "Dr. John Doe",
        title: "Information Regarding Mask Donations",
        body:"First of all, thank you all very much for your kind donations! Your masks have helped keep the PPE for our workers stable in the wake of this crisis. If you wish to further donate, please bring masks to 111 1st St., Houston, TX, 77817. Ask for Sheila, she'll know who to bring them to. God Bless!"
    },
    {
        userpic:"https://www.ncast.com/images/leaning-doctor.jpg",
        image: "https://picsum.photos/500/500",
        user: "Dr. Cloud Strife",
        title: "Join us for our Annual Blood Drive!",
        body:"About one in seven people entering a hospital need blood. One pint of blood can save up to three lives. Healthy adults who are at least 17 years old, and at least 110 pounds may donate about a pint of blood - the most common form of donation - every 56 days, or every two months. "
    },
    {
        userpic:"data:image/jpeg;base64,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",
        image: "https://picsum.photos/250/300",
        user: "Dr.Advir T.S. Mint",
        title: "10 EASY STEPS TO BECOME A FAMOUS DOCTOR! NUMBER 9 WILL SHOCK YOU!",
        body:"Publicity in medical science most commonly comes in the form of research contribution. A high volume of high quality research in a given field usually has the ability to shape the way medicine is practiced and encourages the researching physician or scientist to continue on the research path, repeating the cycle. Combining curiosity with an innovative outlook capable of producing novel ideas is a great start to contribute something truly original to whichever field one chooses to enter. From this, understanding the problems faced in the field currently may inspire a novel solution. Attempts made to solve a given problem successfully often become very popular. Fame, however, should not be the inspiration for research. If medicine is calling an individual to create solutions for new problems, the inspiration should come from the desire to defend a patient's well-being and life- to act benevolently in their care, while doing no harm."
    },
    //--------------------
    {
        userpic:"https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736607/facf3967a07b23061ebc646d0b30cb45/579x579-Q90_facf3967a07b23061ebc646d0b30cb45.jpg",
        image: "https://picsum.photos/350/350",
        user: "Dr. Meredith Grey",
        title: "Why Romance in the Workplace is Inappropriate",
        body:"First of all, thank you all very much for your kind donations! Your masks have helped keep the PPE for our workers stable in the wake of this crisis. If you wish to further donate, please bring masks to 111 1st St., Houston, TX, 77817. Ask for Sheila, she'll know who to bring them to. God Bless!"
    },
    {
        userpic:"https://www.frontlinegenomics.com/wp-content/uploads/Dr-House--640x400.jpeg",
        image: "https://picsum.photos/500/500",
        user: "Dr. Gregory House",
        title: "How I became a Doctor:",
        body:"About one in seven people entering a hospital need blood. One pint of blood can save up to three lives. Healthy adults who are at least 17 years old, and at least 110 pounds may donate about a pint of blood - the most common form of donation - every 56 days, or every two months. "
    },
    {
        userpic:"https://thenypost.files.wordpress.com/2020/03/dr-oz-sex-coronavirus.jpg?quality=90&strip=all",
        image: "https://picsum.photos/250/300",
        user: "Dr. Mehmet Oz",
        title: "Do Avocados cause CANCER?",
        body:"Publicity in medical science most commonly comes in the form of research contribution. A high volume of high quality research in a given field usually has the ability to shape the way medicine is practiced and encourages the researching physician or scientist to continue on the research path, repeating the cycle. Combining curiosity with an innovative outlook capable of producing novel ideas is a great start to contribute something truly original to whichever field one chooses to enter. From this, understanding the problems faced in the field currently may inspire a novel solution. Attempts made to solve a given problem successfully often become very popular. Fame, however, should not be the inspiration for research. If medicine is calling an individual to create solutions for new problems, the inspiration should come from the desire to defend a patient's well-being and life- to act benevolently in their care, while doing no harm."
    },
     //--------------------
    {
        userpic:"https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/09/phil_a.jpg",
        image: "https://picsum.photos/350/350",
        user: "Dr. Phillip Calvin McGraw",
        title: "Why it's Important to Discipline your Kids",
        body:"First of all, thank you all very much for your kind donations! Your masks have helped keep the PPE for our workers stable in the wake of this crisis. If you wish to further donate, please bring masks to 111 1st St., Houston, TX, 77817. Ask for Sheila, she'll know who to bring them to. God Bless!"
    },
    {
        userpic:"https://upload.wikimedia.org/wikipedia/commons/8/89/Anthony_S._Fauci%2C_M.D.%2C_NIAID_Director_%2826759498706%29.jpg",
        image: "https://picsum.photos/500/500",
        user: "Dr. Anthony Fauci",
        title: "Important Coronavirus Information",
        body:"About one in seven people entering a hospital need blood. One pint of blood can save up to three lives. Healthy adults who are at least 17 years old, and at least 110 pounds may donate about a pint of blood - the most common form of donation - every 56 days, or every two months. "
    },
    {
        userpic:"https://vignette.wikia.nocookie.net/scrubs/images/6/6f/JD_S5.jpg/revision/latest?cb=20111026062354",
        image: "https://picsum.photos/250/300",
        user: "Dr.John Michael Dorian",
        title: "Test Post",
        body:"Siri post to MediSource. Hey Siri. Ugh it's not working. Man I want an avocado right now."
    },
    //--------------------
    {
        userpic:"https://www.writeups.org/wp-content/uploads/Leonard-Bones-McCoy-Star-Trek-DeForest-Kelley.jpg",
        image: "https://picsum.photos/350/350",
        user: "Dr. Leonard McCoy",
        title: "I'm a Doctor not a Physicist!",
        body:"First of all, thank you all very much for your kind donations! Your masks have helped keep the PPE for our workers stable in the wake of this crisis. If you wish to further donate, please bring masks to 111 1st St., Houston, TX, 77817. Ask for Sheila, she'll know who to bring them to. God Bless!"
    },
    {
        userpic:"https://images-na.ssl-images-amazon.com/images/I/412opk5n9YL._AC_.jpg",
        image: "https://picsum.photos/500/500",
        user: "Dr. Douglas Howser",
        title: "How to Become a Doctor at 11",
        body:"About one in seven people entering a hospital need blood. One pint of blood can save up to three lives. Healthy adults who are at least 17 years old, and at least 110 pounds may donate about a pint of blood - the most common form of donation - every 56 days, or every two months. "
    },
    {
        userpic:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Addison_image.jpg/250px-Addison_image.jpg",
        image: "https://picsum.photos/250/300",
        user: "Dr.Addison Montgomery",
        title: "Leaving your Hospital for a Private Practice: Do's and Don'ts.",
        body:"Publicity in medical science most commonly comes in the form of research contribution. A high volume of high quality research in a given field usually has the ability to shape the way medicine is practiced and encourages the researching physician or scientist to continue on the research path, repeating the cycle. Combining curiosity with an innovative outlook capable of producing novel ideas is a great start to contribute something truly original to whichever field one chooses to enter. From this, understanding the problems faced in the field currently may inspire a novel solution. Attempts made to solve a given problem successfully often become very popular. Fame, however, should not be the inspiration for research. If medicine is calling an individual to create solutions for new problems, the inspiration should come from the desire to defend a patient's well-being and life- to act benevolently in their care, while doing no harm."
    },
    //--------------------
    {
        userpic:"https://assets.bonappetit.com/photos/57bf2c726a6acdf3485df6a8/master/pass/claire-saffitz.jpg",
        image: "https://picsum.photos/350/350",
        user: "Dr. Claire Saffitz",
        title: "Healthy Recipes for you and your family",
        body:"First of all, thank you all very much for your kind donations! Your masks have helped keep the PPE for our workers stable in the wake of this crisis. If you wish to further donate, please bring masks to 111 1st St., Houston, TX, 77817. Ask for Sheila, she'll know who to bring them to. God Bless!"
    },
    {
        userpic:"https://vignette.wikia.nocookie.net/friends/images/c/c9/Dr_drake_ramoray_joey_friends-1-.jpg/revision/latest/top-crop/width/720/height/900?cb=20120916092442",
        image: "https://picsum.photos/500/500",
        user: "Dr. Drake Ramoray",
        title: "How you doin'??",
        body:"About one in seven people entering a hospital need blood. One pint of blood can save up to three lives. Healthy adults who are at least 17 years old, and at least 110 pounds may donate about a pint of blood - the most common form of donation - every 56 days, or every two months. "
    },
    {
        userpic:"https://i.insider.com/5b100a745e48ec4c008b462d?width=1100&format=jpeg&auto=webp",
        image: "https://picsum.photos/250/300",
        user: "Dr.Sandra Lee",
        title: "Dermatology Tips for the Quarantine",
        body:"Publicity in medical science most commonly comes in the form of research contribution. A high volume of high quality research in a given field usually has the ability to shape the way medicine is practiced and encourages the researching physician or scientist to continue on the research path, repeating the cycle. Combining curiosity with an innovative outlook capable of producing novel ideas is a great start to contribute something truly original to whichever field one chooses to enter. From this, understanding the problems faced in the field currently may inspire a novel solution. Attempts made to solve a given problem successfully often become very popular. Fame, however, should not be the inspiration for research. If medicine is calling an individual to create solutions for new problems, the inspiration should come from the desire to defend a patient's well-being and life- to act benevolently in their care, while doing no harm."
    },
];

let seed = {
seedUser: function(){
    db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
      console.log(data.result.n + " records inserted.");
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
},

seedEntity: function(){
    db.Entity
  .remove({})
  .then(() => db.Entity.collection.insertMany(entitySeed))
  .then(data => {
      console.log(data.result.n + " records inserted.");
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
},
seedPost: function(){
    db.Post
.remove({})
.then(() => db.Post.collection.insertMany(postSeed))
.then(data => {
    console.log(data.result.n + " records inserted.");
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
}
}

module.exports = seed;