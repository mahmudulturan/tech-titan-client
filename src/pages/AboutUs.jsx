const AboutUs = () => {
  const faq = [
    {
      question: "What products do you offer?",
      answer:
        "We offer a wide range of tech products, including smartphones, laptops, accessories, smart home devices, and more.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes, we have a dedicated team of tech experts to assist you with technical queries and support.",
    },
    {
      question: "What are your shipping and return policies?",
      answer:
        "We offer fast and reliable shipping. For details on shipping and returns, please visit our Shipping and Returns page.",
    },
    {
      question: "Is my personal information secure when shopping with you?",
      answer:
        "Yes, we take data security seriously. Your personal information is protected and used solely for order processing and communication.",
    },
    {
      question: "Are there any ongoing promotions or discounts?",
      answer:
        "We regularly offer promotions and discounts on select products. Be sure to check our homepage and promotions page for the latest deals.",
    },
    {
      question: "Do you offer warranty on your products?",
      answer:
        "Many of our products come with manufacturer warranties. Please refer to the individual product's warranty information.",
    },
  ];
  return (
    <div className="md:w-10/12 mx-auto">
      <div>
        <img
          className="w-full md:h-[60vh] rounded-md"
          src="https://i.ibb.co/XDcqzjb/about-Banner.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row my-5 gap-6 px-2 md:px-0">
        <div className="flex-1">
          <h1 className="font-medium text-3xl my-3 border-b-[3px] pb-2 border-black dark:border-white">Our Tech Titan Journey</h1>
          <p className="text-lg font-medium my-3">
            In 2020, Tech Titan embarked on a remarkable journey, driven by our
            unwavering passion for technology and innovation. We started as a
            small tech store with a big dream – to provide access to
            cutting-edge electronics and empower individuals and businesses with
            the latest tech solutions. Over the years, our commitment to
            excellence and dedication to customer satisfaction have propelled us
            from a humble beginning to becoming a renowned destination for tech
            enthusiasts. Today, as Tech Titan continues to evolve, our mission
            is clear: to redefine and elevate the tech experience for
            individuals and businesses.
          </p>
          <p className="text-lg font-medium my-5">
            At Tech Titan, our mission is to provide access to the latest tech
            innovations, expert guidance, and exceptional service, thereby
            redefining and elevating the tech experience for individuals and
            businesses. We aim to empower our customers by enabling them to
            access cutting-edge technology while delivering the best in customer
            service and expertise.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-3xl my-3 border-b-[3px] pb-2 border-black dark:border-white">
            Frequently Asked Questions
          </h1>
          {faq.map((question, indx) => (
            <div
              key={indx}
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 my-2">
              <div className="collapse-title text-xl font-medium">
                {question.question}
              </div>
              <div className="collapse-content">
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
