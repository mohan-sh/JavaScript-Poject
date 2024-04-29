// Define a class for the company
var BatteryManagementCompany = /** @class */ (function () {
    function BatteryManagementCompany(companyName, companyMission, teamMembers, products, testimonials, partnerships, companyValues, contactInfo) {
        this.companyName = companyName;
        this.companyMission = companyMission;
        this.teamMembers = teamMembers;
        this.products = products;
        this.testimonials = testimonials;
        this.partnerships = partnerships;
        this.companyValues = companyValues;
        this.contactInfo = contactInfo;
    }
    // Method to generate HTML for the About page
    // Method to generate HTML for the About page
    BatteryManagementCompany.prototype.generateAboutPage = function () {
        var companyMissionElement = document.getElementById('companyMission');
        companyMissionElement.innerText = this.companyMission;
        var teamListElement = document.getElementById('teamList');
        teamListElement.innerHTML = this.teamMembers.map(function (member) { return "<li>".concat(member, "</li>"); }).join('');
        var productsListElement = document.getElementById('productsList');
        productsListElement.innerHTML = this.products.map(function (product) { return "<li>".concat(product, "</li>"); }).join('');
        var testimonialsListElement = document.getElementById('testimonialsList');
        testimonialsListElement.innerHTML = this.testimonials.map(function (testimonial) { return "<li>".concat(testimonial, "</li>"); }).join('');
        var partnershipsListElement = document.getElementById('partnershipsList');
        partnershipsListElement.innerHTML = this.partnerships.map(function (partnership) { return "<li>".concat(partnership, "</li>"); }).join('');
        var valuesListElement = document.getElementById('valuesList');
        valuesListElement.innerHTML = this.companyValues.map(function (value) { return "<li>".concat(value, "</li>"); }).join('');
        var addressElement = document.getElementById('address');
        addressElement.innerText = "Address: ".concat(this.contactInfo.address);
        var phoneElement = document.getElementById('phone');
        phoneElement.innerText = "Phone: ".concat(this.contactInfo.phone);
        var emailElement = document.getElementById('email');
        emailElement.innerText = "Email: ".concat(this.contactInfo.email);
    };
    return BatteryManagementCompany;
}());
// Create an instance of the company
var myCompany = new BatteryManagementCompany("ABC Battery Solutions", "We strive to provide innovative battery management solutions that optimize performance and efficiency.", ["John Doe", "Jane Smith", "Mike Johnson"], ["Battery Monitoring System", "Battery Charging Solutions", "Battery Testing Equipment"], ["Our products have helped us achieve 99% customer satisfaction.", "Great experience working with ABC Battery Solutions!"], ["We believe in sustainability and environmental responsibility.", "Customer satisfaction is our top priority."], ["Our partnerships with leading industry players enable us to deliver cutting-edge solutions."], // Add an additional partnership value
{ address: "123 Main St, Anytown, USA", phone: "555-1234", email: "info@abcbatterysolutions.com" });
// Generate the HTML for the About page
myCompany.generateAboutPage();
