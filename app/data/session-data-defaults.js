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
// let getMonthly = "2,231";
// let getYearly = "26,773";

let getEAge = "55";
let nino = "QQ 12 34 56 C";

// default estimates
let estimateMonthly = "2,231";
let estimateYearly = "26,773";
let estimateDate = getNDate;
let estimateMax = "114,740";
let estimateLump = "0";
let normal2015 = "67";
let early2015 = "55";
let late2015 = "75";

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

  // // need to set this as NDate
  "getDate": getNDate,

  // // ages
  "getEAge": getEAge,
  "getNAge": getNAge,
  "getLAge": late2015,


  // "estimateAge": getNAge,

  // // "get2015Age": "67",
  // // "get2008Age": "65",
  // // "get1995Age": "60",

  // // amounts
  // "hasLump": false,
  // "maxLump": false,
  // "minLump": true,
  // "noLump": true,
  // "getLump": lump,
  // "getMaxLump": estimateMax,
  // "getMinLump": "15,192",
  // "getMonthly": getMonthly,
  // "getYearly": getYearly,

  // // scheme
  "schemeReference": "2015",

  // used as first compare item for 2015
  "estimateAge": getNAge,
  "estimateMonthly": estimateMonthly,
  "estimateYearly": estimateYearly,
  "estimateLump": estimateLump,
  "estimateDate": getNDate,

  // // 2008 scheme
  // "get2008Monthly": "422",
  // "get2008Yearly": "5,064",
  // "get2008NAge": "65",
  // "get2008Lump": "15,192",
  // "get2008NDate": "1 March 2040",

  // // 1995 scheme
  // "get1995Monthly": "2,104",
  // "get1995Yearly": "26,773",
  // "get1995NAge": "60",
  // "get1995Lump": "80,319",
  // "get1995NDate": "1 March 2035",


  "estimateResult": {
    "normal": normal2015,
    "age": normal2015,
    "date": estimateDate,
    "max": estimateMax,
    "min": "0",
    "lump": "0",
    "estimate": {
      "monthly": estimateMonthly,
      "yearly": estimateYearly,
    }
  },

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
  
  "groupA": {
    "name": "foo",
    "title": "bar"
  },

  "groupB": {
    "name": "baz",
    "title": "yo"
  }

}
