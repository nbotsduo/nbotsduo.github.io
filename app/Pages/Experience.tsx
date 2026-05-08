export default function Experience() {
  const value = [
    {
      comName: "AppFuxion Consulting",
      roles:"Software Developer",
      year: "2025 - Present",
      techStack: ["C#","VB.NET",".NET Core","Razor","SQL Server","SSRS","Javascript","jQuery","Agile Framework"],
      explanation: [
        "Originally hired via Ethereal Digital, transitioned to AppFuxion Consulting (sister agency) in 2025 and continued development of the same projects across both entities.",
        "Partnered with a team of 4 developers to upgrade the existing banking system from VB to VB.NET based on the Agile Framework. The upgrade also includes migrating the Crystal View Report to SQL Server Reporting Services (SSRS), reducing load time for the existing SQL stored procedure and converting most of the JavaScript to jQuery to reduce complexity and redundancy in the front-end code. Also, provide support and change requests for the system after the system is in production.",
        "Collaborate with a team of 3 developers to create a new product website for an insurance company using .NET Core, Razor web page and SQL Server. "
      ],
    },
    {
      comName: "Ethereal Digital ",
       roles:"Software Developer",
      year: "2024-2025",
      techStack: ["C#",".NET Core","SQL Server","SSRS","Node.js","Javascript","jQuery","Agile Framework","Postman"],
      explanation: [
        "Developed the eInvoice feature for the existing Insurance Product Portal that contains up to 30 products based on C#,SQL Server, jQuery and Postman to send the eInvoice data to their in-house eInvoice Gateway.",
        "Led a team of 3 to enhance the existing Insurance Portal to adhere to the latest requirements from LHDN and requests from the client for the eInvoice implementation. ",
        "Developed a dummy API endpoint to mimic the LHDN eInvoice API before the official release using Node.js. ",
        "Provided end support for the Insurance Portal after the portal was published to production."
        
      ],
    },
    {
      comName: "ALAMI Technologies ",
       roles:"Web Developer",
      year: "2022-2024",
      techStack: ["React Native","PHP","MySQL",".NET Core","MSSQL","GIS Technology","Laravel PHP","PostgreSQL","Java Servlet Page","Esri ArcGIS Enterprise"],
      explanation: [
        "Developed an Asset Management System for the company’s in-house product to sell to potential customers targeted at Government Agencies and construction companies. Build upon .NET Core and MSSQL, integrating with GIS technology for asset tagging based on current asset location. ",
        "Provide maintenance and updates for the existing system owned by one of the government agencies based on Laravel PHP and PostgreSQL. ",
        "Developed an online web-based system for a government agency based on MSSQL, Java Servlet Page and Esri ArcGIS Enterprise."
      ],
    },
     {
      comName: "Inter XS Sdn Bhd ",
       roles:"Mobile Developer Internship",
      year: "2022",
      techStack:  ["React Native","PHP","MySQL"],
      explanation: [
        "Developed a mobile app targeted towards the community. React Native was used for the development of the mobile app. PHP and MySQL are the mobile app’s backend for conducting the service. ",
        
      ],
    },
     {
      comName: "Universiti Putra Malaysia ",
       roles:"Web Developer",
      year: "2019",
      techStack: ["PHP","PostgreSQL","HTML","CSS","JavaScript","Bootstrap"],
      explanation: [
        "Tasked with collaborating with an IT team in the IT Department to design a facility booking system using the PHP Seashell Framework from UPM and PostgreSQL.  ",
        
      ],
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Experiences
      </h2>
      <div>
        {value.map((item, index) => (
          <div
            key={index}
            className="bg-white pl-10 pt-4 pb-8 pr-8 mb-8 mt-8 mr-8 rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {item.roles}
              </h3>
              <h4 className="text-sm font-semibold text-gray-600 mb-1 ">
                {item.comName}
              </h4>
              <h4 className="text-sm font-semibold text-gray-600 mb-1">
                {item.year}
              </h4>
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Tech Stack: {item.techStack.join(", ")}
            </h4>
            </div>

            

            <ul className="list-disc">
              {item.explanation.map((text, i) => (
                <li key={i} className="text-gray-600 justify-normal p-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
