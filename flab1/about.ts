// Define a class for the company
class BatteryManagementCompany {
    private companyName: string;
    private companyMission: string;
    private teamMembers: string[];
    private products: string[];
    private testimonials: string[];
    private partnerships: string[];
    private companyValues: string[];
    private contactInfo: { address: string; phone: string; email: string; };

    constructor(companyName: string, companyMission: string, teamMembers: string[], products: string[], testimonials: string[], partnerships: string[], companyValues: string[], contactInfo: { address: string; phone: string; email: string; }) {
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
generateAboutPage(): void {
    const companyMissionElement = document.getElementById('companyMission')!;
    companyMissionElement.innerText = this.companyMission;

    const teamListElement = document.getElementById('teamList')!;
    teamListElement.innerHTML = this.teamMembers.map(member => `<li>${member}</li>`).join('');
    
    const productsListElement = document.getElementById('productsList')!;
    productsListElement.innerHTML = this.products.map(product => `<li>${product}</li>`).join('');
    
    const testimonialsListElement = document.getElementById('testimonialsList')!;
    testimonialsListElement.innerHTML = this.testimonials.map(testimonial => `<li>${testimonial}</li>`).join('');
    
    const partnershipsListElement = document.getElementById('partnershipsList')!;
    partnershipsListElement.innerHTML = this.partnerships.map(partnership => `<li>${partnership}</li>`).join('');
    
    const valuesListElement = document.getElementById('valuesList')!;
    valuesListElement.innerHTML = this.companyValues.map(value => `<li>${value}</li>`).join('');

    const addressElement = document.getElementById('address')!;
    addressElement.innerText = `Address: ${this.contactInfo.address}`;
    
    const phoneElement = document.getElementById('phone')!;
    phoneElement.innerText = `Phone: ${this.contactInfo.phone}`;
    
    const emailElement = document.getElementById('email')!;
    emailElement.innerText = `Email: ${this.contactInfo.email}`;
}

}

// Create an instance of the company
const myCompany = new BatteryManagementCompany(
    "ABC Battery Solutions",
    "We strive to provide innovative battery management solutions that optimize performance and efficiency.",
    ["John Doe", "Jane Smith", "Mike Johnson"],
    ["Battery Monitoring System", "Battery Charging Solutions", "Battery Testing Equipment"],
    ["Our products have helped us achieve 99% customer satisfaction.", "Great experience working with ABC Battery Solutions!"],
    ["We believe in sustainability and environmental responsibility.", "Customer satisfaction is our top priority."],
    ["Our partnerships with leading industry players enable us to deliver cutting-edge solutions."], // Add an additional partnership value
    { address: "123 Main St, Anytown, USA", phone: "555-1234", email: "info@abcbatterysolutions.com" }
);

// Generate the HTML for the About page
myCompany.generateAboutPage();
