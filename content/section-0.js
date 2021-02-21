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
    "q":"Let's double-check the name of the space this Code of Conduct applies to:",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example",
        "storeAs":"[organisation-name]",
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
      {"more":"why should I have a code of conduct"}
    ]
  },
  {
    "isQuestion": true,
    "id":"q2",
    "q":"EVENT: Reprehenderit sit iste libero nulla dolores voluptatum quod?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Q",
        "storeAs":"[who-policy-applies-to]",
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
        "answerText":"W",
        "storeAs":"[who-policy-applies-to]",
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
        "answerText":"E",
        "storeAs": "[who-policy-applies-to]",
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
        "answerText":"another",
        "storeAs": "[who-policy-applies-to]",
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
      {"meaning":"y tho"},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"PROJECT: Quis enim ratione esse aliquam itaque cum est cupiditate?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes.",
        "storeAs": "",
        "excludes":[41],
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
        "type":"radio",
        "answerText":"Some.",
        "storeAs": "",
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
        "type":"radio",
        "answerText":"No.",
        "storeAs": "",
        "excludes":[18,24],
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
    "q":"EVENT: Repudiandae officia vitae corporis accusamus?",
    "required":true,
    "policyEntry":"Repudiandae officia vitae corporis accusamus, please contact: ",
    "appendixEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder":"e.g. Alice Smith",
        "storeAs":"[security-contact-name]",
        "excludes":[],
        "policyEntry":"[security-contact-name]",
        "appendixEntry":[
          {
            "reviewList":"Is [security-contact-name] still responsible?",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
      {
        "type":"text",
        "answerText":"Job title or department",
        "placeholder":"e.g. Security Officer",
        "storeAs":"[security-contact-role]",
        "excludes":[],
        "policyEntry":"([security-contact-role]).",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Pronouns",
        "placeholder": "e.g. they/them",
        "storeAs":"[security-contact-pronouns]",
        "excludes":[],
        "policyEntry":"Their pronouns are [security-contact-pronouns].",
        "appendixEntry":[
          {
            "reviewList":"Does [security-contact-name] still use [security-contact-pronouns] pronouns?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Email",
        "placeholder": "e.g. example@organization.com",
        "storeAs":"[security-contact-email]",
        "excludes":[],
        "policyEntry":"Email: [security-contact-email]",
        "appendixEntry":[
          {
            "reviewList":"Is [security-contact-name]'s email address up-to-date?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Phone",
        "placeholder": "e.g. +1 (234) 567-890",
        "storeAs":"[security-contact-phone]",
        "excludes":[],
        "policyEntry":"Phone: [security-contact-phone]",
        "appendixEntry":[
          {
            "reviewList":"Is [security-contact-name]'s phone number correct?",
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
    "q":"Saepe molestias at rerum commodi officiis quo quidem?",
    "required":true,
    "policyEntry":"Saepe molestias at rerum commodi officiis quo quidem by [security-contact-name] ([security-contact-role]) on a [how-often-policy-reviewed] basis.",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"annual",
        "storeAs": "[how-often-policy-reviewed]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Recusandae alias magnam nihil. Ad nisi et eum. [date+12], [date+24], [date+36]",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"6-monthly",
        "storeAs": "[how-often-policy-reviewed]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Recusandae alias magnam nihil. Ad nisi et eum. [date+6], [date+12], [date+18]",
            "linksList": ""
          }
        ],
      },
      {
        "type":"checkbox",
        "answerText":"quarterly",
        "storeAs": "[how-often-policy-reviewed]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Recusandae alias magnam nihil. Ad nisi et eum. [date+3], [date+6], [date+9]",
            "linksList": ""
          }
        ],
      },
      {
        "type":"checkbox",
        "answerText":'"as threats arise"',
        "storeAs": "[how-often-policy-reviewed]",
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
      {"meaning":"Recusandae alias magnam nihil. Ad nisi et eum."},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "q":"EVENT: Ut provident nobis quo consequuntur necessitatibus nulla non iusto?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"R",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Windows 10: https://spreadprivacy.com/windows-10-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"T",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "OS X: https://spreadprivacy.com/mac-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Y",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Linux: https://spreadprivacy.com/linux-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"U",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Chrome OS: https://www.makeuseof.com/tag/privacy-settings-chrome-os-google-chrome"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"I",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Android: https://spreadprivacy.com/android-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"O",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "iOS: https://spreadprivacy.com/iphone-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable": true,
        "answerText":"another system",
        "storeAs": "",
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
      {"meaning":"Ut provident nobis quo consequuntur necessitatibus nulla non iusto."},
      {"more":[]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "q":"Sint maxime id esse aut. Sunt dolorum labore odio facere?",
    "required":true,
    "policyEntry":"[organisation-name] sint maxime id esse aut. Sunt dolorum labore odio facere:",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"C",
        "storeAs": "",
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
        "answerText":"V",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- Sint maxime id esse aut. Sunt dolorum labore odio facere [organisation-name] devices: [organisation-name] staff sint maxime id esse aut. Sunt dolorum labore odio facere.",
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
        "answerText":"B",
        "storeAs": "",
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
        "answerText":"N",
        "storeAs": "",
        "excludes":[7],
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
      {"meaning":""},
      {"more":[]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "q":"PROJECT: Fugit dolore non voluptas voluptatem dolor quos?",
    "required":false,
    "policyEntry":"[organisation-name] fugit dolore non voluptas voluptatem dolor quos [privacy-peripherals-provided] to use on your devices.",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"A",
        "storeAs": "[privacy-peripherals-provided]",
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
        "answerText":"S",
        "storeAs": "[privacy-peripherals-provided]",
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
      {"meaning":"y tho"},
      {"more":[]}
    ]
  }
]
