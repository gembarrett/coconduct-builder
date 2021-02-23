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
        "text":"Once you've built your policy, you can edit and download your Code of Conduct, along with an appendix of complementary resources to help with implementing it."
      }
    ],
  },
  {
    "isQuestion": true,
    "id":"q1",
    "q":"What's the name of the space this Code of Conduct applies to?",
    "required":false,
    "policyEntry":"[space-name] Code of Conduct",
    "appendixEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example",
        "storeAs":"[space-name]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry": [
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
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
    "q":"Which specific spaces does this Code of Conduct apply to?",
    "required":false,
    "policyEntry":"This Code of Conduct applies to all [space-name] spaces, including [where-policy-applies]",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"conferences",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"meetups",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"workshops",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"related social events",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable": true,
        "answerText":"another synchronous space",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"meaning":"Specify where your Code of Conduct applies so people know when professional behaviour is expected."},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"Which specific spaces does this Code of Conduct apply to?",
    "required":false,
    "policyEntry":"This Code of Conduct applies to all [space-name] spaces, including [where-policy-applies]",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"code repository",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
      {
        "type":"checkbox",
        "answerText":"Mailing list",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Slack group",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable": true,
        "answerText":"another asynchronous space",
        "storeAs":"[where-policy-applies]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"meaning":"Quis enim ratione esse aliquam itaque cum est cupiditate though."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "q":"Will your event sponsors have stands, booths or merchandise?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Staff representing the sponsors must also adhere to the event's Code of Conduct. Any advertising material, including staff clothing, must be appropriate for a professional, inclusive atmosphere.",
        "appendixEntry":[
          {
            "reviewList":"Do you still have sponsors and are they aware of the Code of Conduct requirements?",
            "tipList": "Review the sponsors advertising material, such as t-shirt and booth designs, before the event if possible.",
            "linksList": ""
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"meaning":"Repudiandae officia vitae corporis accusamus again."},
      {"more":["lorem ipsum"]},
    ]
  },
  {
    "isQuestion": true,
    "id":"q5",
    "q":"Does your event have an online space for attendees to interact?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"[space-name] will have an online aspect to the event, and attendees who use it are asked to respect each other as they would in an offline capacity as the rules of this Code of Conduct still apply.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs": "",
        "excludes":[18],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
    ],
    "tips":[
      {"meaning":"Recusandae alias magnam nihil. Ad nisi et eum."},
      {"more":["lorem ipsum"]}
    ]
  },
]
