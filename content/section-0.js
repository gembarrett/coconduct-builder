var section0 = [
  {
    "isQuestion": false,
    "id":"q0",
    "title": "",
    "steps":[
      {
        "title":"Part 1",
        "text":"Part 1 is all about the first part. It's the beginning of the process."
      },
      {
        "title":"Part 2",
        "text":"Part 2 is all about the middle bit. It's the second area of the tool."
      },
      {
        "title":"Part 3",
        "text":"Part 3 is where the process wraps up and we all go home. It's the end bit."
      }
    ],
  },
  {
    "isQuestion": true,
    "id":"q1",
    "q":"Animi tenetur dicta et et molestiae eaque quae?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example",
        "storeAs":"[organisation-name]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":"Animi tenetur dicta et et molestiae eaque quae means animi tenetur dicta et et molestiae eaque quae."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q2",
    "q":"Reprehenderit sit iste libero nulla dolores voluptatum quod?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Q",
        "storeAs":"[who-policy-applies-to]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":""},
      {"implementation":"Just do reprehenderit sit iste libero nulla dolores voluptatum quod."},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"Quis enim ratione esse aliquam itaque cum est cupiditate?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes.",
        "storeAs": "",
        "excludes":[41],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":"Quis enim ratione esse aliquam itaque cum est cupiditate though."},
      {"implementation":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "q":"Repudiandae officia vitae corporis accusamus?",
    "required":true,
    "policyEntry":"Repudiandae officia vitae corporis accusamus, please contact: ",
    "appendixEntry":"",
    "routineEntry":"Repudiandae officia vitae corporis accusamus? Ask [security-contact-name], [security-contact-role]!",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder":"e.g. Alice Smith",
        "storeAs":"[security-contact-name]",
        "excludes":[],
        "policyEntry":"[security-contact-name]",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":"Repudiandae officia vitae corporis accusamus again."},
      {"implementation":""},
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
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"annual",
        "storeAs": "[how-often-policy-reviewed]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":"Recusandae alias magnam nihil. Ad nisi et eum."},
      {"implementation":""},
      {"more":["lorem ipsum"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "q":"Ut provident nobis quo consequuntur necessitatibus nulla non iusto?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"R",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":"Ut provident nobis quo consequuntur necessitatibus nulla non iusto."},
      {"implementation":""},
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
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"C",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":""},
      {"meaning":""},
      {"implementation":"Sint maxime id esse aut. Sunt dolorum labore odio facere"},
      {"more":[]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "q":"Fugit dolore non voluptas voluptatem dolor quos?",
    "required":false,
    "policyEntry":"[organisation-name] fugit dolore non voluptas voluptatem dolor quos [privacy-peripherals-provided] to use on your devices.",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"A",
        "storeAs": "[privacy-peripherals-provided]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":"Fugit dolore non voluptas voluptatem dolor quos."},
      {"meaning":""},
      {"implementation":""},
      {"more":[]}
    ]
  }
]
