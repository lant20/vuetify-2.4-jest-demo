import Model from "@/components/Model";
var model = new Model();

it("calls fetch with correct url", () => {
  const fakeFetch = (url) => {
    expect(url).toBe(
      "https://api.openweathermap.org/data/2.5/weather?zip=84102,us&appid=YOURAPICODE"
    );
    return new Promise(function (resolve) {});
  };
  model.fetchResponse(fakeFetch, "84102");
});

jest.mock("@/components/request");

it("test mock module", () => {
  return model.requestResponse("84102").then((result) => {
    expect(result.name).toBe("Salt Lake City");
  });
});

describe("Kelvin to Fahrenheit converter", function () {
  it("should convert Kelvin temperature to Farenhit", function () {
    expect(model.convertToFahrenheit(270)).toBe(26);
  });
});
