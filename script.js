const elizabethSanger = {
    district: "5th Congressional district of Tennessee",
    platforms: {
        taxes: "Read my lips, no new taxes!",
        jobs: "Who needs'em?",
        infrastructure: "Infrared structures are the wave of the future!",
        healthCare: "Nothing a little tylenol won't fix.",
        crimeAndEnforcement: "Do the crime, do the time",
    },
    urlDonationForm: "https://www.gimmemoney.com",
    calendarOfEvents: {
        date: "",
        time: "",
        event: "",
    },
    volunteerInformation: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        availability: "",
        activities: "",
    },
    biography: "Now on A&E",
    imageGallery: {
        headShot: "1.jpg",
        pictureOfFamily: "2.jpg",
        pictureOfConstituents: "3.jpg",
    },
    missionStatement: "Mo Money Mo Problems",
    urlForVoterRegistration: "https://www.rockthevote.com"


    }

// let topic = "gunControl"
// let newPlatformStatement = "Did I do that?"

function addToImageGallery (imageName, newImage) {
    elizabethSanger.imageGallery[imageName] = newImage
}

function changeBiography (newBiography) {
    elizabethSanger.biography = newBiography
}

function changePlatform (topic, newPlatformStatement) {
   elizabethSanger.platforms[topic] = newPlatformStatement
}

// changePlatform ("gunControl", "Did I do That?");
changeBiography("now on comedycentral")
console.log(elizabethSanger.biography)
changePlatform("gunControl", "Did I do that?")
console.table(elizabethSanger.platforms)
addToImageGallery("n00ds", "whoops!")
console.table(elizabethSanger.imageGallery)