export const site = {
  name: "Kamaljit Kaur",
  title: "Insurance Advisor",
  phone: "+1 204-505-7928",
  phoneLink: "+12045057928",
  email: "punjabinsurancekelowna@gmail.com",
  address: "106-975 Academy Way, Kelowna, BC",
  bookingUrl: "https://calendly.com/punjabinsurancekelowna/1hr",
  agency: "Punjab Insurance Agency Inc.",
  regions: "British Columbia and Manitoba",
};

export const services = [
  { title: "Life & mortgage insurance", text: "Explore life insurance and mortgage protection options with an advisor who can help you understand the choices available." },
  { title: "Disability & critical illness", text: "Learn about insurance options intended to support you through unexpected changes to your health or ability to work." },
  { title: "Visitor, travel & student insurance", text: "Explore Super Visa, visitor, travel and international student insurance options for your needs." },
  { title: "Health & dental plans", text: "Compare health and dental plan options for individuals, families and different life stages." },
  { title: "RESP & RRSP", text: "Discuss registered savings plans and the options that may fit your longer-term goals." },
  { title: "TFSA", text: "Learn about tax-free savings account options and consider how they may fit into your savings plans." },
];

export const nav = [
  ["Home", "/"], ["Services", "/services"], ["About", "/about"],
  ["FAQs & resources", "/faqs"], ["Contact", "/contact"],
] as const;
