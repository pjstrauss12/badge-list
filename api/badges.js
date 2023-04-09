export default async function handler(request, res) {
  const search = request.query.search || '';
    var badges = [
      { "name": "Amazon Cognito",
      "badge": "https://www.drupal.org/files/project-images/553dbabbd287c26ca83aef42.jpg",
      "description": "You can learn Amazon Cognito with this one",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQXXhWIGMlpn_8qDCz-yi4lwGD2SdAtcBGzIx9ny15M8B3U4B1VND6YiENxIPQAZCBqB6Zk6nhhuu-vbMA",
      "author": "Alec Martinez",
      "time": "4 hours"
      },
      { "name": "Amazon I AM",
      "badge": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
      "description": "You can learn Amazon I AM with this one",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Frank Kewitt",
      "time": "4 hours"
      },
      { "name": "Signing up for AWS Web Services",
      "badge": "https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg",
      "description": "Sign up for AWS Web Services with this",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://pbs.twimg.com/profile_images/1605284457602338822/xISpy4TU_400x400.jpg",
      "author": "Bryan Ollendyke",
      "time": "4 hours"
      },
      { "name": "AWS- LAMBDA Phase 1",
      "badge": "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg",
      "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as part of Amazon Web Services.  It is a computing services that runs code in response to events and automatically manages the computing resources required by that code.",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "AWS Lambda Info Link",
      "time": "4.0 hours",
      "authorImage": "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
      "author": "Parker Strauss",
      "time": "4 hours"
      },
      { "name": "Amazon S3 Phase 1",
      "badge": "https://fathomtech.io/blog/using-aws-s3-and-cloudfront-for-fast-static-web-sites/amazon-s3.png",
      "description": "This is Amazon S3 Phase 1",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://www.gbnews.com/media-library/next-james-bond-announcement-2023.png?id=33437127&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C2",
      "author": "James Bond",
      "time": "4 hours"
      },
      { "name": "Star Wars",
      "badge": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/450px-Star_wars2.svg.png",
      "description": "Watch the Star Wars Movies",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQWsPbjFzWxaMFjonwGbywZBrL00n32qNNbo79f2dePA-chyhHVVBysz1J79Sw1nNTZUTQbdl81IOutekE",
      "author": "George Lucas",
      "time": "A long time"
      },
      { "name": "Cedar Point",
      "badge": "https://ohio.org/static/uploads/068t0000006u5nDAAQ.jpg",
      "description": "Ride some roller coasters",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://pbs.twimg.com/media/EFaXrUwWwAAYlnh.jpg",
      "author": "Tony Clark",
      "time": "All day"
      },
      { "name": "The College of IST",
      "badge": "https://ist.psu.edu/sites/default/files/tiles/appointments.jpg",
      "description": "Get a degree at the College of IST",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://ist.psu.edu/sites/default/files/directory/Sears-Andrew.jpg",
      "author": "Andrew Sears",
      "time": "4 years"
      },
      { "name": "Penn State University",
      "badge": "https://b.fssta.com/uploads/application/college/team-logos/PennState.vresize.350.350.medium.0.png",
      "description": "We Are!",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Penn_State_Nittany_Lion.jpg/800px-Penn_State_Nittany_Lion.jpg",
      "author": "Nittany Lion",
      "time": "4 years"
      },
      { "name": "Patrick Star",
      "badge": "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
      "description": "Is mayonnaise an instrument?",
      "link": "https://youtu.be/C4SVih8Rn5Y?t=3",
      "linkName": "Video",
      "time": "4.0 hours",
      "authorImage": "https://deadline.com/wp-content/uploads/2023/02/nickelodeon.jpg?w=1024",
      "author": "Nickelodeon",
      "time": "Eternity"
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