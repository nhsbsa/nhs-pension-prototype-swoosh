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

// 2015 (default)
let estimateMonthly = "2,231";
let estimateYearly = "26,773";
let estimateDate = getNDate;
let estimateMax = "114,740";
let estimateLump = "0";
let normal2015 = "67";
let early2015 = "55";
let late2015 = "75";

let estimateResult2015 = {
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

// 2008
let normal2008 = "65";
let early2008 = "55";
let late2008 = "75";

let estimateResult2008 = {
  normal: normal2008,
  age: normal2008,
  date: "change me 08 date",
  max: "change me 08 max",
  min: "2008 min",
  lump: "2008 lump",
  estimate: {
    monthly: "08 monthly",
    yearly: "08 yearly"
  }
};

// 1995
let normal1995 = "60";
let early1995 = "50";
let late1995 = "75";

let estimateResult1995 = {
  normal: normal1995,
  age: normal1995,
  date: "change me 95 date",
  max: "change me 95 max",
  min: "change me 95 min",
  lump: "change me 95 lump",
  estimate: {
    monthly: "95 monthly",
    yearly: "95 yearly"
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
  "lastUpdatedDate": "31 March 2018",

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
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "lump": "0",
    "estimate": {
      "monthly": "2,231",
      "yearly": "26,773",
    }
  },

  "normalAgeMaxLump2015": {
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "lump": "114,740",
    "estimate": {
      "monthly": "1,434",
      "yearly": "17,211",
    }
  },

  "normalAgeGivenLump2015": {
    "normal": normal2015,
    "age": normal2015,
    "date": "1 March 2042",
    "max": "114,740",
    "lump": "18,000",
    "estimate": {
      "monthly": "2,106",
      "yearly": "25,273",
    }
  },

  "givenAgeGivenLump2015": {
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "lump": "18,000",
    "estimate": {
      "monthly": "1,294",
      "yearly": "15,524",
    }
  },

  "earlyAgeGivenLump2015": {
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "lump": "18,000",
    "estimate": {
      "monthly": "425",
      "yearly": "5,102",
    }
  },

  "lateAgeGivenLump2015": {
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "lump": "18,000",
    "estimate": {
      "monthly": "4,338",
      "yearly": "52,054",
    }
  },

  "dateAgeGivenLump2015": {
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "lump": "18,000",
    "estimate": {
      "monthly": "882",
      "yearly": "10,585",
    }
  },

  "givenAgeMaxLump2015": {
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "lump": "72,960",
    "estimate": {
      "monthly": "912",
      "yearly": "10,994",
    }
  },
  
  "earlyAgeMaxLump2015": {
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "lump": "28,296",
    "estimate": {
      "monthly": "354",
      "yearly": "4,244",
    }
  },

  "lateAgeMaxLump2015": {
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "lump": "229,515",
    "estimate": {
      "monthly": "2,869",
      "yearly": "34,428",
    }
  },

  "dateAgeMaxLump2015": {
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "lump": "51,792",
    "estimate": {
      "monthly": "647",
      "yearly": "7,769",
    }
  },

  "givenAgeMinLump2015": {
    "normal": normal2015,
    "age": "63",
    "date": "1 March 2038",
    "max": "72,960",
    "lump": "0",
    "estimate": {
      "monthly": "1,419",
      "yearly": "17,024",
    }
  },
  
  "earlyAgeMinLump2015": {
    "normal": normal2015,
    "age": early2015,
    "date": "1 March 2030",
    "max": "28,296",
    "lump": "0",
    "estimate": {
      "monthly": "550",
      "yearly": "6,602",
    }
  },

  "lateAgeMinLump2015": {
    "normal": normal2015,
    "age": late2015,
    "date": "1 March 2050",
    "max": "229,515",
    "lump": "0",
    "estimate": {
      "monthly": "4,463",
      "yearly": "53,554",
    }
  },

  "dateAgeMinLump2015": {
    "normal": normal2015,
    "age": "60",
    "date": "1 March 2050",
    "max": "51,792",
    "lump": "0",
    "estimate": {
      "monthly": "1,007",
      "yearly": "12,085",
    }
  },
  
  // 2008
  "normalAgeMinLump2008": {
    "normal": normal2008,
    "age": normal2008,
    "date": "1 March 2040",
    "max": "32,000",
    "lump": "12,000",
    "estimate": {
      "monthly": "987",
      "yearly": "11,844",
    }
  },

  "groupA": {
    "name": "foo",
    "title": "bar"
  },

  "groupB": {
    "name": "baz",
    "title": "yo"
  }

}
