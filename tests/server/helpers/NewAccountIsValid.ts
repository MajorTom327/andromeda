import { NewAccountIsValid } from '/server/helpers/NewAccountIsValid';
import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';


const generateUser = (email: any): Meteor.User => (
  {
    "createdAt": new Date(),
    "_id": "BvojqQAmC43qYzAYo",
    "services": {
      "password": {
        "bcrypt": "$2b$10$A5e/kmmZcFJXVuB8oqXwpeaAyRUeRSUBWPaY24mcLAXOlM.AtLGNS"
      }
    },
    "username": "jconnor2",
    "emails": [
      {
        "address": email,
        "verified": false
      }
    ]
  })

describe("Helpers - NewAccountIsValid", function () {

  it('Should return true if no rule specified', function () {
    const settings = {
      users: [],
      domains: [],
    }

    const user = generateUser("jconnor@sky.net");

    let result = NewAccountIsValid(settings)(user);
    expect(result).to.be.true;
  });

  it("Should return false if the email is not set", function () {
    const settings = {
      users: [],
      domains: [],
    }

    const user = generateUser(null);

    let result = NewAccountIsValid(settings)(user);
    expect(result).to.be.false;

  })

  describe("users filter", function () {

    it("Should return true if the email is in the users list", function () {

      const settings = {
        users: ["jconnor@sky.net"],
        domains: [],
      }

      const user = generateUser("jconnor@sky.net");

      let result = NewAccountIsValid(settings)(user);
      expect(result).to.be.true;
    })

    it("Should return false if the email is not the users list", function () {
      const settings = {
        users: ["jconnor@sky.net"],
        domains: [],
      }

      const user = generateUser("jconnor2@sky.net");

      let result = NewAccountIsValid(settings)(user);
      expect(result).to.be.false;
    })
  })

  describe("domain filter", function () {

    it("Should return true if the email is in the domain list", function () {
      const settings = {
        users: [],
        domains: ['sky.net'],
      }

      const user = generateUser("jconnor@sky.net");

      let result = NewAccountIsValid(settings)(user);
      expect(result).to.be.true;
    })

    it("Should return false if the email is not the users list", function () {
      const settings = {
        users: [],
        domains: ["sky.org"],
      }

      const user = generateUser("jconnor@sky.net");

      let result = NewAccountIsValid(settings)(user);
      expect(result).to.be.false;
    })
  })
})