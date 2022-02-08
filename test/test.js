const expect = require("chai").expect;
const request = require("request");

describe("Checking our test API...", () => {
    const url = "http://localhost:8080/test";

    it("returns status 200 to check if  our 'test' api works", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200,"OK");
            done();
        });
    });
});

describe("Checking our add API...", () => {
    const url = "http://localhost:8080/add/5/5";

    it("returns status 200 to check if  our 'add' api works", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200, "OK");
            done();
        });
    });

    it("returns the result as number", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done();
        });
    });

    it("returns the sum as 10", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.equal(10, "Optional test is not working");
            done();
        });
    });
});

describe("Checking our projects API...", () => {
    const url = "http://localhost:8080/projects";

    it("returns status 200 to check if  our 'projects' api works", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200,"OK");
            done();
        });
    });

    it("check if the Project List is an array", (done) => {
        request(url, (err, res, body) => {
            //console.log(body);
            body = JSON.parse(body)
            expect(body).to.be.an("array");
            done();
        });
    });
});







