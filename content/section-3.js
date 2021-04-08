var section3 = [
  {
    "isQuestion": false,
    "id":"q26",
    "title": "Final section: Remediation",
    "paragraph":["There has to be consequences otherwise the Code of Conduct is useless.", "Be aware that calling the police can end up making the situation much worse, in particular for black or brown folks."]
  },
  {
    "isQuestion": true,
    "id":"q27",
    "q":"What are the potential remedies for Code of Conduct violations?",
    "required": false,
    "policyEntry":"Depending on the nature of the Code of Conduct violation and the immediate risks to the victim, reportee and other attendees, [[name]] may take a range of actions against the perpetrator including, but not limited to: [consequences]",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Ejection without refund",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"- we reserve the right to eject without refund from [[name]]",
      },
      {
        "type":"checkbox",
        "answerText":"Ban from future events",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"- if necessary, we will take steps enforce a ban from future [[name]] events",
      },
      {
        "type":"checkbox",
        "answerText":"Call police",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"- in extreme cases where a crime has been committed, and if the victim consents, then it may be appropriate to involve the police",
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"another action",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"",
      }
    ],
    "tips":[
      {"meaning":"Make it clear the penalty for creating a hostile environment."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q28",
    "q":"What are the potential remedies for Code of Conduct violations?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Temporary removal",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"- being temporarily removed from the space",
      },
      {
        "type":"checkbox",
        "answerText":"Future ban",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"- being permanently banned from the space",
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"another action",
        "storeAs":"[consequences]",
        "excludes":[],
        "policyEntry":"",
      }
    ],
    "tips":[
      {"meaning":"Make it clear the penalty for creating a hostile environment."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q29",
    "q":"What are the alternative forms of help for attendees in distress?",
    "required":false,
    "policyEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Emergency services",
        "storeAs":"[emergency]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Venue security",
        "storeAs":"[emergency]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Local taxi",
        "storeAs":"[emergency]",
        "excludes":[],
        "policyEntry":"",
      },
      {
        "type":"checkbox",
        "answerText":"Ride-sharing services",
        "storeAs":"[emergency]",
        "excludes":[],
        "policyEntry":"",
      }
    ],
    "tips":[
      {"meaning":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q30",
    "q":"Where can people send questions (not reports) about this Code of Conduct?",
    "required":false,
    "policyEntry":"If you have questions about this Code of Conduct, you can email: [questions-to]",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Email address for questions",
        "storeAs":"[questions-to]",
        "excludes":[],
        "policyEntry":"",
      }
    ],
    "tips":[
      {"meaning":"If people have questions about your Code of Conduct policy, for example if they need clarification or want to help with translation, then they should be able to send an email somewhere."},
      {"more": [""]}
    ]
  }
]
