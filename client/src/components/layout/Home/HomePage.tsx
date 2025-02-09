import TextHelper from "@/components/text/TextHelper";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <TextHelper className="text-4xl text-center tracking-wider">
        Hi User
      </TextHelper>
      {/* Sub heading */}
      <TextHelper className="text-2xl text-center font-medium">
        Empowering Businesses with Tailored Services at Affordable Costs
      </TextHelper>
      {/* Body */}
      <TextHelper className="text-xl text-center font-light ">
        In today’s fast-paced business landscape, having the right technology
        and services can make all the difference. We are a dedicated team of
        developers and strategists committed to building high-quality solutions
        that cater to your unique business needs. Our approach is simple yet
        highly effective—we listen to your requirements, analyze them, and
        develop scalable services that not only benefit your organization but
        also help other businesses facing similar challenges.
      </TextHelper>
      {/* Sub heading */}
      <TextHelper className="text-2xl text-center font-medium">
        A Cost-Effective Approach to Business Solutions{" "}
      </TextHelper>
      {/* Body */}
      <TextHelper className="text-xl text-center font-light ">
        One of the major hurdles businesses face is the high cost of
        custom-built solutions. Often, companies invest heavily in software
        development to address their specific needs, only to realize that
        similar solutions could have been developed at a fraction of the cost.
        Our approach ensures that you receive the exact service you need while
        significantly reducing expenses.{" "}
      </TextHelper>
      {/* Body */}
      <TextHelper className="text-xl text-left font-light ">
        Here’s how it works:
      </TextHelper>
      {/* List */}
      <ol className="list-decimal text-blackColor ml-16">
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            You Share Your Needs:
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            We start by understanding your specific business challenges and the
            type of service you require. Whether it’s CRM, automation, data
            management, or any other operational necessity, we analyze your
            exact needs.
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Identifying Common Needs:
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            If your requirements align with what other businesses also need, we
            take a collaborative approach to build a solution that caters to
            multiple organizations.
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Building the Service at a Lower Cost:
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Since the service is designed for broader usage, the cost is
            distributed, allowing you to get a top-quality product at a much
            lower investment than traditional custom development.
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Helping Other Businesses:
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Once the service is built, it can be offered to other organizations,
            helping them streamline their operations while generating additional
            value for the ecosystem.
          </TextHelper>
        </li>
      </ol>

      {/* Sub heading */}
      <TextHelper className="text-2xl text-center font-medium my-8">
        Why Choose Our Model?
      </TextHelper>
      {/* unordered list */}
      <ul className="list-disc text-blackColor ml-16">
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Affordable & Scalable Solutions:{" "}
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Instead of paying for an expensive custom solution, you get a
            tailored service at a fraction of the cost.
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Collaborative Innovation:{" "}
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Many businesses face similar challenges. By working together, we can
            create services that are robust, scalable, and beneficial for
            multiple organizations.
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            High-Quality Development:{" "}
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Our team specializes in building production-ready, scalable, and
            secure solutions that align with industry standards.{" "}
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Continuous Improvements:{" "}
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            Since the service is being used by multiple businesses, we ensure
            regular updates, security enhancements, and feature improvements to
            keep it relevant{" "}
          </TextHelper>
        </li>
        <li>
          <TextHelper className="text-xl text-left font-medium my-1 ">
            Win-Win for Everyone:{" "}
          </TextHelper>
          <TextHelper className="text-xl text-left font-light ">
            You get an affordable solution, we build a valuable service, and
            other businesses benefit from the same innovation.
          </TextHelper>
        </li>
      </ul>
      {/* Sub heading */}
      <TextHelper className="text-2xl text-center font-medium my-8">
        Let’s Build Together{" "}
      </TextHelper>
      {/* Body */}
      <TextHelper className="text-xl text-center font-light ">
        Every business has unique needs, but many challenges are shared across
        industries. Instead of investing in one-time solutions that are
        expensive and hard to maintain, why not be part of a smarter,
        cost-effective model? By collaborating with us, you not only receive a
        tailor-made service at an affordable cost but also contribute to a
        solution that can help countless other organizations thrive. If you have
        a requirement, let’s discuss it. If it aligns with other businesses’
        needs, we will build it together—at a fraction of the usual cost while
        ensuring the highest standards of quality.
      </TextHelper>
      {/* Sub heading */}

      <TextHelper className="text-2xl text-center font-medium my-8">
        Let’s innovate, collaborate, and grow together!{" "}
      </TextHelper>
      {/* Body */}
      <TextHelper className="text-xl text-center font-light ">
        We are a dedicated team focused on developing services tailored to your
        business requirements. Share your needs with us—if they align with what
        others require, we can build the solution at a significantly lower cost
        for you while making it available for other organizations to purchase.
        This way, you get a cost-effective, high-quality service while
        contributing to a broader solution that benefits multiple businesses.
      </TextHelper>
    </div>
  );
};

export default HomePage;
