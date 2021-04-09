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
    "area":"e-p",
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
    "area": "e",
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
    "area":"p",
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
        "answerText":"another project space",
        "storeAs":"[type]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Select multiple spaces if that’s appropriate."},
      {"more":[""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "area":"e-p",
    "q":"Choose three words to describe the environment you’re committing to creating:",
    "required":false,
    "policyEntry":"This Code of Conduct is meant to support a [values] space where participants are treated with dignity and are free to be themselves.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"respectful",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"friendly",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"professional",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"inclusive",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"collaborative",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"safe",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"productive",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"welcoming",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"happy",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"harassment-free",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs":"[values]",
        "excludes":[],
        "policyEntry":"",
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
    "area":"e-p",
    "q":'Complete the sentence: This environment is for everyone regardless of their ___“',
    "required":false,
    "policyEntry":"[name] is committed to providing a [values] environment for everyone, regardless of their [identities]",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"gender & expression",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"race",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"ethnicity",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"socioeconomic status",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"religion (or lack thereof)",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"sexual orientation",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"sexual characteristics",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"physical appearance",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"ability",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"age",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[identities]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Each of these are important. Consider each as you add them manually."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "area":"p-f",
    "q":"Where can people find this Code of Conduct?",
    "required":false,
    "policyEntry":"This Code of Conduct will be available in the following ways: ",
    "answers":[
      {
        "type":"text",
        "answerText":"web address",
        "storeAs": "[url]",
        "excludes":[],
        "policyEntry":"- online at [url]",
      },
      {
        "type":"checkbox",
        "answerText":"will be emailed",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- it will be emailed (send us an email if you haven't received it!)",
      },
      {
        "type":"checkbox",
        "answerText":"pinned post",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- shared in a pinned post",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[outlet]",
        "excludes":[],
        "policyEntry":"- [outlet]",
      },
    ],
    "tips":[
      {"meaning":"Don't make people hunt for your Code of Conduct."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "area":"p-r",
    "q":"Where can people find this Code of Conduct?",
    "required":false,
    "policyEntry":"This Code of Conduct will be available in the following ways: ",
    "answers":[
      {
        "type":"text",
        "answerText":"web address",
        "storeAs": "[url]",
        "excludes":[],
        "policyEntry":"- online at [url]",
      },
      {
        "type":"checkbox",
        "answerText":"will be emailed",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- it will be emailed (send us an email if you haven't received it!)",
      },
      {
        "type":"checkbox",
        "answerText":"in repository",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- in the project repository",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[outlet]",
        "excludes":[],
        "policyEntry":"- [outlet]",
      },
    ],
    "tips":[
      {"meaning":"Don't make people hunt for your Code of Conduct."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "area":"e-on",
    "q":"Where can people find this Code of Conduct?",
    "required":false,
    "policyEntry":"This Code of Conduct will be available in the following ways: ",
    "answers":[
      {
        "type":"text",
        "answerText":"web address",
        "storeAs": "[url]",
        "excludes":[],
        "policyEntry":"- online at [url]",
      },
      {
        "type":"checkbox",
        "answerText":"will be emailed",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- it will be emailed (send us an email if you haven't received it!)",
      },
      {
        "type":"checkbox",
        "answerText":"registration process",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- shared during registration process",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[outlet]",
        "excludes":[],
        "policyEntry":"- [outlet]",
      },
    ],
    "tips":[
      {"meaning":"Don't make people hunt for your Code of Conduct."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q9",
    "area":"e-off",
    "q":"Where can people find this Code of Conduct?",
    "required":false,
    "policyEntry":"This Code of Conduct will be available in the following ways: ",
    "answers":[
      {
        "type":"text",
        "answerText":"web address",
        "storeAs": "[url]",
        "excludes":[],
        "policyEntry":"- online at [url]",
      },
      {
        "type":"checkbox",
        "answerText":"will be emailed",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- it will be emailed (send us an email if you haven't received it!)",
      },
      {
        "type":"checkbox",
        "answerText":"registration process",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- shared during registration process",
      },
      {
        "type":"checkbox",
        "answerText":"on venue walls",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- printed copies will be displayed on the walls of the venue",
      },
      {
        "type":"checkbox",
        "answerText":"read upon entry",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- read to you by event staff upon entry",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[outlet]",
        "excludes":[],
        "policyEntry":"- [outlet]",
      },
    ],
    "tips":[
      {"meaning":"Don't make people hunt for your Code of Conduct."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q10",
    "area":"e-p",
    "q":"Do you want to know about and recognise people who make extra efforts to create a safe and welcoming space?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society. If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, we'd love to hear about it so we can recognise their efforts.",
      },
      {
        "type":"radio",
        "answerText":"no",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"It can be nice to know who’s helping make the space a successful one, for a private or public thank you."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q11",
    "area":"e",
    "q":"Who does the Code of Conduct apply to?",
    "required":false,
    "policyEntry":"Individuals are responsible for knowing and abiding by our standards and we encourage everyone to assist in creating a welcoming and safe environment. This Code of Conduct outlines our expectations for [people], and all those who participate in our community.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"service provider",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"attendees",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"speakers",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"organizers",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Everyone who participates should behave according to the Code of Conduct but it’s worth explicitly stating it so no one thinks they're above it."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q12",
    "area":"p",
    "q":"Who does the Code of Conduct apply to?",
    "required":false,
    "policyEntry":"Individuals are responsible for knowing and abiding by our standards and we encourage everyone to assist in creating a welcoming and safe environment. This Code of Conduct outlines our expectations for [people], and all those who participate in our community.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"service provider",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"contributors",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"decision-makers",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Everyone who participates should behave according to the Code of Conduct but it’s worth explicitly stating it so no one thinks they're above it."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q13",
    "area":"e-off",
    "q":"Does this Code of Conduct apply in related social events?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"By agreeing to this Code of Conduct, you are expected to abide by its rules at all venues and related social events to help us realize a safe and positive community experience for everyone.",
      },
      {
        "type":"checkbox",
        "answerText":"attendees",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"speakers",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"organizers",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"text",
        "answerText":"other",
        "storeAs": "[people]",
        "excludes":[],
        "policyEntry":"",
      },
    ],
    "tips":[
      {"meaning":"Everyone who participates should behave according to the Code of Conduct but it’s worth explicitly stating it so no one thinks they're above it."},
      {"more":["lorem ipsum"]}
    ]
  },

]
