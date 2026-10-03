import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Insurance & Savings Services", description: "Learn about life, mortgage, travel, health, disability and savings options with Kamaljit Kaur in British Columbia and Manitoba." };

const details = [
  {
    id: "life-insurance", number: "01", category: "Protecting what matters", title: "Life insurance", intro: "Consider how the people close to you would be supported.",
    body: "Life insurance can help provide financial support for people who rely on you. Depending on availability and your circumstances, options may include term coverage or permanent coverage such as whole life or universal life. Policy duration, premiums, features and eligibility vary, so I’ll help you compare the details that matter to your situation.",
    consider: "You have family members or others who depend on your income, or you’d like to review the coverage you already have.",
    review: ["Who would receive a benefit and how it is paid", "How price and eligibility are determined", "How new coverage fits with your existing plans and budget"],
  },
  {
    id: "mortgage-insurance", number: "02", category: "Protecting what matters", title: "Mortgage insurance", intro: "Understand the options connected to your home and mortgage.",
    body: "Mortgage protection may be offered through a lender or arranged as an individual policy. The structure, ownership, beneficiary and portability can differ. I can help explain the available approaches and compare how they may fit your mortgage, household needs and preferences. The policy contract sets out when a benefit is payable.",
    consider: "You’re buying a home, reviewing your mortgage protection, or wondering how coverage through a lender compares with other options.",
    review: ["How the coverage is structured and who receives a benefit", "How a change to your mortgage may affect the coverage", "Costs, eligibility and how the option fits your existing protection"],
  },
  {
    id: "disability-insurance", number: "03", category: "Protecting what matters", title: "Disability insurance", intro: "Think ahead about income if illness or injury affects your ability to work.",
    body: "Disability insurance is designed to help protect income if illness or injury prevents you from working, as defined by the policy. Plans differ in how disability is defined, the benefit amount, waiting period and benefit period. I can help you compare these details with any workplace benefits and your priorities.",
    consider: "Your household relies on your income, you’re self-employed, or you’d like to understand what support may be available if you can’t work for a time.",
    review: ["How the policy defines disability and eligibility", "Waiting periods, benefit amount and duration", "How individual coverage may work alongside workplace benefits"],
  },
  {
    id: "critical-illness", number: "04", category: "Protecting what matters", title: "Critical illness insurance", intro: "Learn how a policy may respond to a covered diagnosis.",
    body: "Critical illness insurance may pay a lump-sum benefit after a diagnosis that meets the policy’s definition of a covered illness. Covered conditions, exclusions and other requirements vary by plan. We can review the contract together so you understand what it may provide and where its limits are.",
    consider: "You’re thinking about the financial impact or added expenses that could come with a serious illness.",
    review: ["Conditions and definitions in the policy", "Any waiting periods, survival periods or exclusions", "Premiums and how a plan fits with your other coverage"],
  },
  {
    id: "super-visa", number: "05", category: "Coverage for life’s changes", title: "Super Visa insurance", intro: "Explore coverage options for a family member’s visit to Canada.",
    body: "Super Visa plans are intended to help with unexpected medical expenses during a family member’s stay and to address applicable insurance requirements for the visa. Plan terms and eligibility vary. Since government requirements can change, check current details with the Government of Canada before applying; I can help you compare available plan documents.",
    consider: "You’re helping a parent or grandparent prepare for a visit to Canada and want to understand available insurance options.",
    review: ["Applicant eligibility and information required", "Coverage dates, benefits, exclusions and costs", "The policy documents and any current program requirements"],
  },
  {
    id: "visitor-insurance", number: "06", category: "Coverage for life’s changes", title: "Visitor insurance", intro: "Help visitors understand options for unexpected medical costs.",
    body: "Visitor plans can help with eligible emergency medical expenses during a stay in Canada. Coverage, eligibility, exclusions and price vary by plan. Some plans may offer options related to stable pre-existing conditions, subject to the insurer’s questions and definitions. We can review the wording and dates that apply to your situation.",
    consider: "You’re hosting family or friends from outside Canada and want to compare insurance options for their stay.",
    review: ["Who is eligible and what information is required", "Coverage dates, benefits and exclusions", "How the policy treats existing health conditions"],
  },
  {
    id: "travel-insurance", number: "07", category: "Coverage for life’s changes", title: "Travel insurance", intro: "Plan for the unexpected while you’re away from home.",
    body: "Travel plans may include emergency medical coverage and, depending on the plan selected, benefits related to trip interruption or baggage. What is included depends on the policy, destination, dates and traveller’s circumstances. I can help you compare the available benefits, exclusions and costs before you choose.",
    consider: "You’re planning a trip outside your home province or country and want to understand the insurance options before you go.",
    review: ["Trip details and who will be travelling", "Emergency benefits and any exclusions", "Eligibility, existing-condition provisions and cost"],
  },
  {
    id: "student-insurance", number: "08", category: "Coverage for life’s changes", title: "International student insurance", intro: "Look at insurance options for a period of study in Canada.",
    body: "International students may need to consider medical coverage while studying in Canada. Available private plans differ, and provincial coverage or school requirements depend on the student’s circumstances and location. I can help review plan options; confirm current requirements with the school and relevant provincial authorities.",
    consider: "You or a family member is preparing to study in Canada and wants to understand available insurance options.",
    review: ["Study dates, location and eligibility", "Benefits, exclusions and policy conditions", "Any current school or provincial requirements to confirm"],
  },
  {
    id: "health-plans", number: "09", category: "Coverage for life’s changes", title: "Health plans", intro: "Compare options for health expenses that matter in your household.",
    body: "Private health plans can help with eligible expenses such as prescription drugs and vision care; some plans also include dental benefits. Services, reimbursement amounts, limits, waiting periods and exclusions vary. We can start with the expenses important to you and compare the actual plan details.",
    consider: "You’re self-employed, between workplace plans, changing jobs, or reviewing benefits for your household.",
    review: ["Services included and reimbursement limits", "Waiting periods, exclusions and eligibility", "Premiums compared with the benefits you expect to use"],
  },
  {
    id: "dental-plans", number: "10", category: "Coverage for life’s changes", title: "Dental plans", intro: "Understand plan options for routine and unexpected dental expenses.",
    body: "Dental benefits may be included in a broader health plan or offered separately. Plans can differ in eligible services, reimbursement levels, limits, timing rules and cost. I can help compare the plan documents against the dental care you want to plan for.",
    consider: "You don’t have dental benefits through work, expect a change in coverage, or want to compare plans for your family.",
    review: ["Services and reimbursement levels", "Limits, waiting periods and exclusions", "Eligibility and total cost compared with your needs"],
  },
  {
    id: "resp", number: "11", category: "Planning for the future", title: "RESP", intro: "Explore ways to save toward a child’s post-secondary education.",
    body: "A Registered Education Savings Plan (RESP) helps families save toward a child’s post-secondary education. Government assistance may be available for eligible beneficiaries, subject to current program rules. We can discuss your savings goal, timeline, plan costs and investment choices; check current grant rules with official government sources.",
    consider: "You’re saving for a child’s future education or want to review an RESP you already have.",
    review: ["Plan rules and who can contribute or benefit", "Investment choices, costs and time horizon", "How the plan fits your budget and savings goals"],
  },
  {
    id: "rrsp", number: "12", category: "Planning for the future", title: "RRSP", intro: "Consider how registered savings may fit into retirement planning.",
    body: "A Registered Retirement Savings Plan (RRSP) is a registered savings option commonly used for retirement planning. Available investments, costs and tax implications depend on the plan and your circumstances. We can review options in light of your goals; for advice about your tax situation, consult a qualified tax professional.",
    consider: "You’re building retirement savings, reviewing an existing plan, or comparing savings options for the years ahead.",
    review: ["Your goals, timeline and comfort with investment risk", "Plan choices, investment options and fees", "Questions to take to a qualified tax professional"],
  },
  {
    id: "tfsa", number: "13", category: "Planning for the future", title: "TFSA", intro: "Make sense of the account and the investments it can hold.",
    body: "A Tax-Free Savings Account (TFSA) is a registered account that can hold eligible savings or investments; it is not itself an investment. The options available depend on the provider. We can look at how an account may fit your goals, while you confirm contribution room and tax questions with current Canada Revenue Agency information or a qualified tax professional.",
    consider: "You’re opening or reviewing a TFSA and want to compare eligible savings and investment options.",
    review: ["Available account and investment choices", "Fees, access and how each choice may fluctuate in value", "Your goals, timeline and contribution room"],
  },
];

export default function ServicesPage() { return <>
  <section className="section services-intro"><div className="container"><SectionHeading title="Explore our services" text="Your priorities are personal. Explore each area below, then we can focus on what fits your circumstances, comfort and budget."/><nav className="service-index" aria-label="Services">{details.map((service) => <a href={`#${service.id}`} key={service.id}><span>{service.number}</span>{service.title}<ArrowDown size={15}/></a>)}</nav></div></section>
  <div className="service-detail-list">{details.map((service, index) => <section id={service.id} className={`service-detail-section${index % 2 ? " service-detail-tint" : ""}`} key={service.id}><div className="container service-detail-grid"><div className="service-detail-heading"><span className="service-number">{service.number}</span><span className="eyebrow">{service.category}</span><h2>{service.title}</h2><p className="service-detail-intro">{service.intro}</p><Link href="/contact" className="button button-outline">Ask me about this <ArrowRight size={16}/></Link></div><div className="service-detail-copy"><p>{service.body}</p><div className="service-audience"><h3>This may be worth discussing if…</h3><p>{service.consider}</p></div><h3>We can look at</h3><ul className="check-list">{service.review.map((item) => <li key={item}><Check/>{item}</li>)}</ul></div></div></section>)}</div>
  <section className="section section-tint"><div className="container two-col"><div><span className="eyebrow">Thoughtful, not rushed</span><h2>Understand the details before you decide.</h2></div><div><p>Information on this website is general in nature. Eligibility, terms, costs and availability vary by product and provider. I’ll help you consider the options, ask questions and understand the trade-offs. Coverage decisions remain yours. This website does not issue or bind insurance coverage.</p><Link href="/contact" className="text-link">Talk with Kamaljit <ArrowRight size={16}/></Link></div></div></section>
  <section className="service-contact-bar"><div className="container"><p>Find out what options may fit you.</p><div><Link href="/contact#contact-form">Get a free quote <ArrowRight size={16}/></Link><a href={`tel:${site.phoneLink}`}>Call {site.phone}</a></div></div></section>
</> }
