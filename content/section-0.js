var section0 = [
  {
    "isQuestion": false,
    "id":"q0",
    "title": "",
    "steps":[
      {
        "title":"Get informed",
        "text":"Click on the question to learn more about the topic and useful search terms for doing your own research."
      },
      {
        "title":"Build your Code of Conduct",
        "text":"Each question offers multiple answers, and if you don't see the one that covers your situation you can enter into the editable buttons (the ones with a dotted border)."
      },
      {
        "title":"Use your Code of Conduct",
        "text":"Once you've built your policy, you can edit and download your Code of Conduct at the end."
      }
    ],
  },
  {
    "isQuestion": true,
    "id":"q1",
    "q":"What's the name of the space this Code of Conduct applies to?",
    "required":false,
    "policyEntry":"[name] Code of Conduct",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example",
        "storeAs":"[name]",
        "excludes":[],
        "policyEntry":"",
      }
    ],
    "tips":[
      {"meaning":"Put the name on the Code of Conduct to make it specific to that space. If it's generic or used across multiple different spaces then it shows a lack of effort and motivation to create a safe space."},
      {"more":["why should I have a code of conduct"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q2",
    "q":"Where will your event be held?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"online",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"offline",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Choose both if it’s online and offline."},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"What type of space is this Code of Conduct being built for?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Mailing list",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Forum",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Code repository",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "editable": true,
        "answerText":"another asynchronous space",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Select multiple spaces if that’s appropriate"},
      {"more":[""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "q":"Is it appropriate for sponsors and exhibitors to use sexualised images, activities or clothing at your event?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"All exhibitors in the venue, sponsor booths, or similar activities are also subject to this Code of Conduct. Unless it is relevant to their product or otherwise appropriate for the context of the [[name]] event, exhibitors should not use sexualized images, activities, or other material and booth staff (including volunteers) should not use sexualized uniforms, or otherwise create a sexualized environment.",
      }
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]},
    ]
  },
  {
    "isQuestion": true,
    "id":"q5",
    "q":"Does your event have an online space for attendees to interact?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[18],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Recusandae alias magnam nihil. Ad nisi et eum."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "q":"Will there be photography or filming at your event?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[11],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Recusandae alias magnam nihil. Ad nisi et eum."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "q":"Does your event employ the Chatham House rule?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
]
