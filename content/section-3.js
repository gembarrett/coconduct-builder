var section3 = [
  {
    "isQuestion": false,
    "id":"q21",
    "title": "Final section: More Things",
    "paragraph":["Fusce vitae tellus quis magna molestie cursus in non justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est quis magna dictum laoreet. Sed malesuada commodo quam.", "Phasellus sed magna pellentesque, lacinia velit sed, congue velit. Vivamus consectetur consequat posuere. Praesent et tempor metus, ac mollis ipsum. Cras imperdiet vestibulum sapien nec vestibulum.", "Phasellus ut turpis consequat purus accumsan consectetur. Cras maximus sem ut consectetur laoreet. Quisque condimentum urna nec metus hendrerit, at interdum purus tempor."]
  },
  {
    "isQuestion": true,
    "id":"q22",
    "q":"Pellentesque nunc est, suscipit eu nulla in, imperdiet congue massa?",
    "required":true,
    "policyEntry":"Nullam orci urna, ornare eleifend condimentum sed, euismod sit amet justo [organisation-name] Duis elit magna, facilisis eget venenatis in, lacinia vitae libero. Nunc eu rhoncus elit [biometric-authentication-options].",
    "appendixEntry":"Be aware that touchscreen devices are susceptible to holding fingerprint marks which can be used to guess recently-used key sequences.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"F",
        "storeAs":"[biometric-authentication-options]",
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
        "answerText":"R",
        "storeAs":"[biometric-authentication-options]",
        "excludes":[19],
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
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q23",
    "q":"Duis tincidunt leo at dictum molestie?",
    "required":false,
    "policyEntry":"Aenean suscipit orci porta quam ullamcorper, in tempor neque egestas. Fusce a nisl venenatis neque tincidunt facilisis: [we-use-this-device-manager].",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"F",
        "storeAs":"[we-use-this-device-manager]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Flock Agent for macOS & Linux system 'health checks': https://github.com/firstlookmedia/flock-agent"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"S",
        "storeAs":"[we-use-this-device-manager]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Stethoscope for Windows & macOS systems: https://ragtag.org/stethoscope"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"A",
        "storeAs":"[we-use-this-device-manager]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Apple MDM documentation: https://developer.apple.com/documentation/devicemanagement"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"G",
        "storeAs":"[we-use-this-device-manager]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Google Endpoint Management: https://gsuite.google.com/products/admin/endpoint"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"another",
        "storeAs":"[we-use-this-device-manager]",
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
      {"meaning":"Aenean accumsan lacus malesuada porttitor feugiat. Ut fringilla, magna sit amet molestie vehicula, nunc dui vestibulum eros, a blandit augue neque eget neque. Morbi ullamcorper, lectus ultricies interdum semper, augue tortor semper sem, eu ullamcorper dolor dolor sed dolor."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q24",
    "q":"Curabitur sit amet iaculis nibh?",
    "required":false,
    "policyEntry":"[organisation-name] Cras est enim, feugiat vel pharetra eu, lobortis quis nisi [we-use-this-backup-storage].",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"P",
        "storeAs":"[we-use-this-backup-storage]",
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
        "answerText":"C",
        "storeAs":"[we-use-this-backup-storage]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Does your cloud storage provider still provide the most appropriate package for your data or is it time to migrate?",
            "tipList": "Advise staff on how to recognise a legitimate automatic backup so that suspicious network activity can be flagged quickly.",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"meaning":"Ut porttitor augue mi, eget elementum lacus luctus et. Donec blandit urna libero, et congue tortor tristique eu."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q25",
    "q":"Vestibulum ante ipsum primis in faucibus?",
    "required":true,
    "policyEntry":"Quisque congue diam sed magna placerat fringilla. Phasellus sed commodo dui [how-often-backups-done] basis.",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"H",
        "storeAs":"[how-often-backups-done]",
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
        "answerText":"D",
        "storeAs":"[how-often-backups-done]",
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
        "answerText":"W",
        "storeAs":"[how-often-backups-done]",
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
        "editable":true,
        "answerText":"another",
        "storeAs":"[how-often-backups-done]",
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
      {"meaning":"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q26",
    "q":"Integer interdum, risus vulputate sodales faucibus, nisi lectus feugiat justo, eget fermentum magna metus id enim?",
    "required":false,
    "policyEntry":"[organisation-name] Sed porta ex in justo bibendum accumsan. Vestibulum mattis mauris sed lacus varius, feugiat iaculis dui lacinia. Donec imperdiet ultrices leo quis ornare: ",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"B",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- B",
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
        "answerText":"R",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- R.",
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
        "answerText":"M",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- M.",
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
        "answerText":"D",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- D.",
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
        "editable":true,
        "answerText":"another",
        "storeAs":"[alt-backup-security]",
        "excludes":[],
        "policyEntry":"- [alt-backup-security]",
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
      {"meaning":"Suspendisse pretium quam vestibulum justo vestibulum dapibus. Morbi ultricies lectus id mi lobortis, tristique iaculis nisl volutpat. Etiam ut nisl congue, porttitor est in, ultrices magna. ."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q27",
    "q":"Quisque tempor tortor elementum sem pulvinar, sed consectetur tellus vulputate?",
    "required":false,
    "policyEntry":"Quisque imperdiet ac ligula eget convallis. Duis mattis, justo at iaculis pulvinar, quam lacus vehicula purus, nec condimentum libero odio et ligula. Curabitur et finibus sem. Integer convallis volutpat felis, a fringilla mi pharetra non. Nulla placerat odio vitae tristique ornare:",
    "appendixEntry": "",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"e.g.",
        "storeAs":"[do-this-if-seized]",
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
      {"meaning":"Sed fringilla, nulla eget sagittis consectetur, augue turpis ornare augue, id semper nisi sem et nibh. Donec commodo sollicitudin nulla eget luctus. Praesent a ante id nunc porta euismod non sed est. Fusce aliquet tellus eu ullamcorper cursus. Maecenas id imperdiet ligula. Pellentesque consectetur felis libero."},
      {"more": [""]}
    ]
  }
]
