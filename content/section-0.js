var section0 = [
  {
    "isQuestion": false,
    "id":"q0",
    "title": "",
    "steps":[
      {
        "title":"Context",
        "text":"Click on the question to learn more about the topic and useful search terms for doing your own research."
      },
      {
        "title":"Definition",
        "text":"Each question offers multiple answers, and if you don't see the one that covers your situation you can enter into the editable buttons (the ones with a dotted border)."
      },
      {
        "title":"Enforcement",
        "text":"Once you've built your policy, you can edit and download your Code of Conduct at the end."
      },
      {
        "title":"Reporting",
        "text": "Methods for reporting Code of Conduct violations."
      }
    ],
  },
  {
    "isQuestion": true,
    "id":"q1",
    "spaces":["e","p"],
    "position":["pu",0],
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
        "includes":[],
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
    "spaces":["e"],
    "position":[],
    "q":"Where will your event be held?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Online",
        "storeAs":"[type]",
        "excludes":[13,20,21,24,28,29,56,65,66,67],
        "includes":[9,29,30,32,34,43,46,55],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Offline",
        "storeAs":"[type]",
        "excludes":[9,29,30,32,34,43,46,55],
        "includes":[13,20,21,24,28,29,56,65,66,67],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Choose both if it’s online and offline."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "spaces":["p"],
    "position": [],
    "q":"What type of space is this Code of Conduct being built for?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Mailing list",
        "storeAs":"[type]",
        "excludes":[5,6,30,33],
        "includes":[4,33],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Forum",
        "storeAs":"[type]",
        "excludes":[4,33],
        "includes":[5,6,30,33],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Repository",
        "storeAs":"[type]",
        "excludes":[4,5,6,30,33],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Another space",
        "placeholder":"",
        "storeAs":"[type]",
        "excludes":[4,33],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Select multiple spaces if that’s appropriate."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "spaces":["m"],
    "position": ["in",2],
    "q":"Link to more info about the mailing list covered by this CoC:",
    "required":false,
    "policyEntry":"For more info or to sign up to the [name] mailing list, go to [list]",
    "answers":[
      {
        "type":"text",
        "answerText":"Mailing list URL",
        "placeholder":"www.yourList.com/signup",
        "storeAs":"[list]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q5",
    "spaces":["c"],
    "position": [],
    "q":"Which platform is your forum on?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Mattermost",
        "storeAs":"[platform]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Slack",
        "storeAs":"[platform]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Another platform",
        "placeholder":"",
        "storeAs":"[platform]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "spaces":["c"],
    "position": ["in",4],
    "q":"Names and descriptions of main channels:",
    "required":false,
    "policyEntry":"Keep it topical. We have channels for a lot of things. Trying to get the attention of everyone at once by posting in the main channel is unkind and out of proportion. Go find the place where people who are actually going to be interested are, and talk to them. If you can’t find such a place, this may not be the community for you. Overview of our main [platform] channels:",
    "answers":[
      {
        "type":"text",
        "answerText":"Main channel",
        "placeholder":"#main",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Another channel",
        "placeholder":"/another",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Another channel",
        "placeholder":"#cats",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "spaces":["e","p"],
    "position": ["in",3],
    "q":"Are there other policies governing this space?",
    "required":false,
    "policyEntry":"All activity in the [name][type] is also governed by the ",
    "answers":[
      {
        "type":"text",
        "answerText":"Another policy",
        "placeholder":"www.yourSpace.com/privacy",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Other rules",
        "placeholder":"www.yourSpace.com/community",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"If your space has a Privacy Policy or Community Guidelines, or some other document that impacts participants, it’s important to share it."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "spaces":["e","p"],
    "position": ["in",5],
    "q":"Are there restrictions around who can join your space?",
    "required":false,
    "policyEntry":"Access to the [name] [type] is restricted.",
    "answers":[
      {
        "type":"radio",
        "answerText":"No under 18s",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"You must be over 18 to access this community space.",
      },
      {
        "type":"radio",
        "answerText":"Invite only",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"You must have an invitation from a current participant to join. ",
      },
      {
        "type":"text",
        "answerText":"Other restriction",
        "placeholder":"e.g. non-binary people only",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"If your space isn’t suitable for kids, or non-students, or another specific group, then make that clear to set expectations"},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q9",
    "spaces":["on"],
    "position": ["ch",0],
    "q":"Will there be a chat facility during the event?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"There will be a chat facility on the platform. Please use the chat function appropriately to contribute to the discussion and not as a means to posting harmful or irrelevant content.",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[30,32,34,43,46],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q10",
    "spaces":["e","p"],
    "position": [],
    "q":"Does this space have sponsors?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[22,39],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Sponsors help keep your space going, but they can also bring a negative influence if their behaviour standards are lower than that of the rest of your community."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q11",
    "spaces":["p"],
    "position": ["in",0],
    "q":"Where can community members access this CoC?",
    "required":false,
    "policyEntry":"This CoC will be available in the following ways: ",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Will be emailed",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"emailed to participants",
      },
      {
        "type":"text",
        "answerText":"Online",
        "placeholder":"www.yourLink.com/conduct",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Other",
        "placeholder":"",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q12",
    "spaces":["e"],
    "position": ["in",0],
    "q":"Where will people be able to find this CoC?",
    "required":false,
    "policyEntry":"You can read this Code of Conduct ",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"During registration",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"in the registration process",
      },
      {
        "type":"text",
        "answerText":"Online",
        "placeholder":"www.yourLink.com/conduct",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"Other",
        "placeholder":"",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q13",
    "spaces":["off"],
    "position": ["in",1],
    "q":"How will you remind attendees at your event of the CoC?",
    "required":false,
    "policyEntry":"This Code of Conduct will also be ",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"On venue wall(s)",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"- pasted up on venue wall(s)",
      },
      {
        "type":"checkbox",
        "answerText":"Read upon entry",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"- read to attendees upon entry",
      },
      {
        "type":"checkbox",
        "answerText":"Read at opening ceremony",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"- read to attendees during opening ceremony",
      },
      {
        "type":"text",
        "answerText":"Other",
        "placeholder":"",
        "storeAs":"[]",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q14",
    "spaces":["e","p"],
    "position": ["pu",5],
    "q":"Do you want to know about and recognise people who make extra efforts to create a safe and welcoming space?",
    "required":false,
    "policyEntry":"Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society. If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, please recognize their efforts.",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"It can be nice to know who’s helping make the space a successful one, for a private or public thank you."},
      {"more":["lorem ipsum"]}
    ]
  },
]
