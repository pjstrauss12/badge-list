export default async function handler(request, res) {

    const badges = [
       { "name": "Amazon",
      "badge": "save",
      "description": "sample description",
      "link": "https://www.psu.edu",
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