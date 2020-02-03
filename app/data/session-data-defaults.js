/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/
let firstName = "Sam";
let middleName = "Curtis";
let lastName = "Jones";

let getNDate = "1 March 2042";
let getNAge = "67";

let getEAge = "55";
let nino = "QQ 12 34 56 C";

let sd1 = "SD12345678";
let sd2 = "SD98765432"
let sd = sd1;

// 2015 defaults
let estimateMonthly = "2,231";
let estimateYearly = "26,773";
let estimateDate = getNDate;
let estimateMax = "114,740";
let estimateLump = "0";
let normal2015 = "67";
let early2015 = "55";
let late2015 = "75";

let estimateResult2015 = {
  scheme: "2015",
  normal: normal2015,
  age: normal2015,
  date: estimateDate,
  max: estimateMax,
  min: "0",
  lump: "0",
  estimate: {
    monthly: estimateMonthly,
    yearly: estimateYearly
  }
};

// 2008 defaults
let estimateMonthly2008 = "116";
let estimateYearly2008 = "1,394";
let estimateDate2008 = "1 March 2040";
let estimateMax2008 = "999";
let estimateLump2008 = "0";
let normal2008 = "65";
let early2008 = "55";
let late2008 = "75";

let estimateResult2008 = {
  scheme: "2008",
  normal: normal2008,
  age: normal2008,
  date: estimateDate2008,
  max: estimateMax2008,
  min: "0",
  lump: estimateLump2008,
  estimate: {
    monthly: estimateMonthly2008,
    yearly: estimateYearly2008
  }
};

// 1995 defaults
let estimateMonthly1995 = "1,234";
let estimateYearly1995 = "14,808";
let estimateDate1995 = "1 March 2035";
let estimateMax1995 = "130,284";
let estimateLump1995 = "44,424";
let normal1995 = "60";
let early1995 = "50";
let late1995 = "75";

let estimateResult1995 = {
  scheme: "1995",
  normal: normal1995,
  age: normal1995,
  date: estimateDate1995,
  max: estimateMax1995,
  min: estimateLump1995,
  lump: estimateLump1995,
  estimate: {
    monthly: estimateMonthly1995,
    yearly: estimateYearly1995
  }
};

module.exports = {

  // member data
  "nino": nino,
  "ninoSafe": nino,
  "firstName": firstName,
  "lastName": lastName,
  "middleName": middleName,
  "fullName": firstName + ' ' + middleName + ' ' + lastName,
  "dateOfBirth": "1 December 1987",
  "gender": "Male",
  "homeAddress": "29 Larkholme Lane, Fleetwood, FY7 8AU",
  "emailAddress": "sam.jones@madeupaddress.net",
  "mobileNumber": "07777 123 4567",
  "lastUpdatedDate": "5 April 2019",
  "sd": sd,
  "age": 0,

  "npaLabel": "NHS pension age",
  "npdLabel": "NHS pension date",

  // estimates
  "lump-amount": "Min",
  "pension-start": "normal",

  // retirement window
  "normal2015": normal2015,
  "early2015": early2015,
  "late2015": late2015,

  // Dates
  "getEDate": "1 March 2028",
  "getNDate": getNDate,
  "getLDate": "1 March 2050",
  "getDate": getNDate,

  // // ages
  "getEAge": getEAge,
  "getNAge": getNAge,
  "getLAge": late2015,

  // // scheme
  "schemeReference": "2015",

  // used as first compare item for 2015
  "estimateAge": getNAge,
  "estimateMonthly": estimateMonthly,
  "estimateYearly": estimateYearly,
  "estimateLump": estimateLump,
  "estimateDate": getNDate,

  // estimate results arrays
  "estimateResult": estimateResult2015,
  "estimateResult2015": estimateResult2015,
  "estimateResult2008": estimateResult2008,
  "estimateResult1995": estimateResult1995,

  "normalAgeMinLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "2,231",
      "yearly": "26,773",
    }
  },

  "normalAgeMaxLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "114,740",
    "estimate": {
      "monthly": "1,434",
      "yearly": "17,211",
    }
  },

  "normalAgeGivenLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "2,106",
      "yearly": "25,273",
    }
  },

  "givenAgeGivenLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "1,294",
      "yearly": "15,524",
    }
  },

  "earlyAgeGivenLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "425",
      "yearly": "5,102",
    }
  },

  "lateAgeGivenLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "4,338",
      "yearly": "52,054",
    }
  },

  "dateAgeGivenLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "882",
      "yearly": "10,585",
    }
  },

  "givenAgeMaxLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "72,960",
    "estimate": {
      "monthly": "912",
      "yearly": "10,994",
    }
  },
  
  "earlyAgeMaxLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "28,296",
    "estimate": {
      "monthly": "354",
      "yearly": "4,244",
    }
  },

  "lateAgeMaxLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "229,515",
    "estimate": {
      "monthly": "2,869",
      "yearly": "34,428",
    }
  },

  "dateAgeMaxLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "51,792",
    "estimate": {
      "monthly": "647",
      "yearly": "7,769",
    }
  },

  "givenAgeMinLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,419",
      "yearly": "17,024",
    }
  },
  
  "earlyAgeMinLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "550",
      "yearly": "6,602",
    }
  },

  "lateAgeMinLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "4,463",
      "yearly": "53,554",
    }
  },

  "dateAgeMinLump2015": {
    "scheme": "2015",
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,007",
      "yearly": "12,085",
    }
  },

  // end 2015 scenarios
  
  // 2008 scenarios
  "normalAgeMinLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": normal2008,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "2,231",
      "yearly": "26,773",
    }
  },

  "normalAgeMaxLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": normal2008,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "114,740",
    "estimate": {
      "monthly": "1,434",
      "yearly": "17,211",
    }
  },

  "normalAgeGivenLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": normal2008,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "2,106",
      "yearly": "25,273",
    }
  },

  "givenAgeGivenLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "1,294",
      "yearly": "15,524",
    }
  },

  "earlyAgeGivenLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": early2008,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "425",
      "yearly": "5,102",
    }
  },

  "lateAgeGivenLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": late2008,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "4,338",
      "yearly": "52,054",
    }
  },

  "dateAgeGivenLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "882",
      "yearly": "10,585",
    }
  },

  "givenAgeMaxLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "72,960",
    "estimate": {
      "monthly": "912",
      "yearly": "10,994",
    }
  },
  
  "earlyAgeMaxLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": early2008,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "28,296",
    "estimate": {
      "monthly": "354",
      "yearly": "4,244",
    }
  },

  "lateAgeMaxLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": late2008,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "229,515",
    "estimate": {
      "monthly": "2,869",
      "yearly": "34,428",
    }
  },

  "dateAgeMaxLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "51,792",
    "estimate": {
      "monthly": "647",
      "yearly": "7,769",
    }
  },

  "givenAgeMinLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,419",
      "yearly": "17,024",
    }
  },
  
  "earlyAgeMinLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": early2008,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "550",
      "yearly": "6,602",
    }
  },

  "lateAgeMinLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": late2008,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "4,463",
      "yearly": "53,554",
    }
  },

  "dateAgeMinLump2008": {
    "scheme": "2008",
    "normal": normal2008,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,007",
      "yearly": "12,085",
    }
  },
  // end 2008 scenarios

   // 1995 scenarios
   "normalAgeMinLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": normal1995,
    "date": "1 March 2042",
    "max": "130,284",
    "min": "32,571",
    "lump": "32,571",
    "estimate": {
      "monthly": "407",
      "yearly": "4,885",
    }
  },

  "normalAgeMaxLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": normal1995,
    "date": "1 March 2042",
    "max": "130,284",
    "min": "32,571",
    "lump": "130,284",
    "estimate": {
      "monthly": "1,434",
      "yearly": "17,211",
    }
  },

  "normalAgeGivenLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": normal1995,
    "date": "1 March 2042",
    "max": "114,740",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "2,106",
      "yearly": "25,273",
    }
  },

  "givenAgeGivenLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "1,294",
      "yearly": "15,524",
    }
  },

  "earlyAgeGivenLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": early1995,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "425",
      "yearly": "5,102",
    }
  },

  "lateAgeGivenLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": late1995,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "4,338",
      "yearly": "52,054",
    }
  },

  "dateAgeGivenLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "18,000",
    "estimate": {
      "monthly": "882",
      "yearly": "10,585",
    }
  },

  "givenAgeMaxLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "72,960",
    "estimate": {
      "monthly": "912",
      "yearly": "10,994",
    }
  },
  
  "earlyAgeMaxLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": early1995,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "28,296",
    "estimate": {
      "monthly": "354",
      "yearly": "4,244",
    }
  },

  "lateAgeMaxLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": late1995,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "229,515",
    "estimate": {
      "monthly": "2,869",
      "yearly": "34,428",
    }
  },

  "dateAgeMaxLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "51,792",
    "estimate": {
      "monthly": "647",
      "yearly": "7,769",
    }
  },

  "givenAgeMinLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,419",
      "yearly": "17,024",
    }
  },
  
  "earlyAgeMinLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": early1995,
    "date": "1 March 2030",
    "max": "28,296",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "550",
      "yearly": "6,602",
    }
  },

  "lateAgeMinLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": late1995,
    "date": "1 March 2050",
    "max": "229,515",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "4,463",
      "yearly": "53,554",
    }
  },

  "dateAgeMinLump1995": {
    "scheme": "1995",
    "normal": normal1995,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": "1,007",
      "yearly": "12,085",
    }
  },
  // end 1995 scenarios

  "groupA": {
    "name": "foo",
    "title": "bar"
  },

  "groupB": {
    "name": "baz",
    "title": "yo"
  }

}
