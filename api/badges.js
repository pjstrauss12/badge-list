export default async function handler(request, res) {

    const badges = [
      { "name": "Amazon Cognito",
      "badge": "save",
      "description": "sample description",
      "link": "https://www.psu.edu",
      "linkName": "Something",
      "author": "james bond",
      "time": "4 hours",
      "steps": "[1,2,3]"
      },
      { "name": "Amazon I AM",
      "badge": "save",
      "description": "sample description",
      "link": "https://www.psu.edu",
      "linkName": "Something",
      "author": "james bond",
      "time": "4 hours",
      "steps": "[1,2,3]"
      },
      { "name": "Signing up for AWS Web Services",
      "badge": "save",
      "description": "sample description",
      "link": "https://www.psu.edu",
      "linkName": "Something",
      "author": "james bond",
      "time": "4 hours",
      "steps": "[1,2,3]"
      },
      { "name": "AWS- LAMBDA Phase 1",
      "badge": "save",
      "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as part of Amazon Web Services.  It is a computing services that runs code in response to events and automatically manages the computing resources required by that code.",
      "link": "https://www.psu.edu",
      "linkName": "AWS Lambda Info Link",
      "author": "Parker Strauss",
      "time": "4 hours",
      "steps": "[1,2,3]"
      },
      { "name": "Amazon S3 Phase 1",
      "badge": "save",
      "description": "sample description",
      "link": "https://www.psu.edu",
      "linkName": "Something",
      "author": "james bond",
      "time": "4 hours",
      "steps": "[1,2,3]"
      }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badges);
  }