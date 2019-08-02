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

let getNDate = "1 March 2042";
let getNAge = "67";

module.exports = {

  // Dates
  "getEDate": "1 March 2028",
  "getNDate": getNDate,
  "getLDate": "1 March 2050",

  // need to set this as NDate
  "getDate": getNDate,

  // ages
  "getEAge": "55",
  "getNAge": getNAge,
  "getLAge": "75",


  "estimateAge": getNAge,

  // "get2015Age": "67",
  // "get2008Age": "65",
  // "get1995Age": "60",

  // amounts
  "hasLump": false,
  "maxLump": false,
  "noLump": true,
  "getLump": "0",
  "getMaxLump": "114,740",
  "getMonthly": "2,231",
  "getYearly": "26,773",

  // scheme
  "schemeReference": "2015"

}
