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
let getMonthly = "2,231";
let getYearly = "26,773";
let lump = "0";

let getEAge = "55";

let nino = "QQ 12 34 56 C";

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

  // Dates
  "getEDate": "1 March 2028",
  "getNDate": getNDate,
  "getLDate": "1 March 2050",

  // need to set this as NDate
  "getDate": getNDate,

  // ages
  "getEAge": getEAge,
  "getNAge": getNAge,
  "getLAge": "75",


  "estimateAge": getNAge,

  // "get2015Age": "67",
  // "get2008Age": "65",
  // "get1995Age": "60",

  // amounts
  "hasLump": false,
  "maxLump": false,
  "minLump": true,
  "noLump": true,
  "getLump": lump,
  "getMaxLump": "114,740",
  "getMinLump": "15,192",
  "getMonthly": getMonthly,
  "getYearly": getYearly,

  // scheme
  "schemeReference": "2015",

  "defaultAge": getNAge,
  "defaultMonthly": getMonthly,
  "defaultYearly": getYearly,
  "defaultLump": lump,
  "defaultDate": getNDate,

  // 2008 scheme
  "get2008Monthly": "422",
  "get2008Yearly": "5,064",
  "get2008NAge": "65",
  "get2008Lump": "15,192",
  "get2008NDate": "1 March 2040",

  // 1995 scheme
  "get1995Monthly": "2,104",
  "get1995Yearly": "26,773",
  "get1995NAge": "60",
  "get1995Lump": "80,319",
  "get1995NDate": "1 March 2035",
}
