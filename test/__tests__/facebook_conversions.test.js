const integration = "facebook_conversions";
const name = "facebook_conversions";

const fs = require("fs");
const path = require("path");

const version = "v0";
const transformer = require(`../../src/${version}/destinations/${integration}/transform`);

// Processor Test Data
const testDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}.json`)
);
const testData = JSON.parse(testDataFile);

// Router Test Data
const inputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_input.json`)
);
const outputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_output.json`)
);
const inputRouterData = JSON.parse(inputRouterDataFile);
const expectedRouterData = JSON.parse(outputRouterDataFile);

Date.now = jest.fn(() => new Date("2023-11-12T15:46:51.000Z")); // 2023-11-12T15:46:51.693229+05:30

describe(`${name} Tests`, () => {
  describe("Processor", () => {
    testData.forEach((dataPoint, index) => {
      it(`${index}. ${integration} - ${dataPoint.description}`, async () => {
        try {
          const output = await transformer.process(dataPoint.input);
          expect(output).toEqual(dataPoint.output);
        } catch (error) {
          expect(error.message).toEqual(dataPoint.output.error);
        }
      });
    });
  });

  describe("Router Tests", () => {
    it("Payload", async () => {
      const routerOutput = await transformer.processRouterDest(inputRouterData);
      expect(routerOutput).toEqual(expectedRouterData);
    });
  });
});