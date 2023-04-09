export default async function handler(request, res) {
  const search = request.query.search || '';
    var badges = [
      { "name": "Amazon Cognito",
      "badge": "https://www.drupal.org/files/project-images/553dbabbd287c26ca83aef42.jpg",
      "description": "You can learn Amazon Cognito with this one",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Alec Martinez",
      "time": "4 hours"
      },
      { "name": "Amazon I AM",
      "badge": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
      "description": "You can learn Amazon I AM with this one",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Frank Kewitt",
      "time": "4 hours"
      },
      { "name": "Signing up for AWS Web Services",
      "badge": "https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg",
      "description": "Sign up for AWS Web Services with this",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Bryan Ollendyke",
      "time": "4 hours"
      },
      { "name": "AWS- LAMBDA Phase 1",
      "badge": "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg",
      "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as part of Amazon Web Services.  It is a computing services that runs code in response to events and automatically manages the computing resources required by that code.",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "AWS Lambda Info Link",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Parker Strauss",
      "time": "4 hours"
      },
      { "name": "Amazon S3 Phase 1",
      "badge": "https://fathomtech.io/blog/using-aws-s3-and-cloudfront-for-fast-static-web-sites/amazon-s3.png",
      "description": "This is Amazon S3 Phase 1",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "James Bond",
      "time": "4 hours"
      },
      { "name": "Star Wars",
      "badge": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/450px-Star_wars2.svg.png",
      "description": "Watch the Star Wars Movies",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "George Lucas",
      "time": "A long time"
      },
      { "name": "Cedar Point",
      "badge": "https://ohio.org/static/uploads/068t0000006u5nDAAQ.jpg",
      "description": "Ride some roller coasters",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Tony Clark",
      "time": "All day"
      },
      { "name": "The College of IST",
      "badge": "https://ist.psu.edu/sites/default/files/tiles/appointments.jpg",
      "description": "Get a degree at the College of IST",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Something",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Andrew Sears",
      "time": "4 years"
      }
    ];
    badges.map((badge) => {
      badge.index = badge.name.toLowerCase() + " " + badge.author.toLowerCase();
    });
    badges = badges.filter((badge) => {
      return badge.index.indexOf(search.toLowerCase()) > -1;
    });
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badges);
  }