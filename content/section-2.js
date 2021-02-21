var section2 = [
  {
    "isQuestion": false,
    "id":"q14",
    "title": "Next section: Other Things",
    "paragraph":["In quis lacus imperdiet justo euismod vulputate eu a leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer blandit mauris vel est euismod, vitae rhoncus nisi tincidunt. Sed non sagittis orci, in varius sem.", "Phasellus et elit ac felis egestas semper. Nullam porttitor lorem sodales volutpat iaculis. Duis facilisis maximus lorem eget laoreet. Curabitur dignissim varius quam sed bibendum. Cras placerat, augue eget lobortis fermentum, neque mi fermentum nisl, non porta magna tellus at ipsum. Quisque fringilla aliquam erat a aliquam.", "Ut malesuada imperdiet lorem, sit amet semper velit commodo ac. Nam interdum gravida nunc, id consequat ex faucibus ultrices. Cras et sem eros. Proin erat sapien, lobortis vitae metus vel, viverra lacinia lorem."]
  },
  {
    "isQuestion": true,
    "id":"q15",
    "q":"Fusce volutpat scelerisque arcu, eget euismod erat imperdiet ut?",
    "required":true,
    "policyEntry":"Nunc in nisi quis erat placerat porta eget ut nibh [organisation-name].",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"K",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"Mauris molestie, arcu sed auctor faucibus, lorem erat ultrices erat, quis volutpat eros urna scelerisque urna [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "KeePass website: https://keepass.info"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"B",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"Maecenas sit amet risus velit. Vestibulum eget velit justo. Curabitur dolor ligula, interdum vel suscipit aliquam, lacinia id lorem [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Bitwarden website: https://bitwarden.com"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"P",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"Sed consequat augue vel nibh mollis pretium. Cras ligula ex, iaculis et consectetur quis, accumsan eget nisl [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "PasswordSafe website: https://www.pwsafe.org"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"L",
        "storeAs":"",
        "excludes":[16], // no browser storage
        "policyEntry":"Curabitur dolor ligula, interdum vel suscipit aliquam, lacinia id lorem [security-contact-name].",
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
        "answerText":"1",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"Curabitur dolor ligula, interdum vel suscipit aliquam, lacinia id lorem [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "1Password website: https://1password.com"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"S",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Mauris molestie, arcu sed auctor faucibus, lorem erat ultrices erat, quis volutpat eros urna scelerisque urna [security-contact-name].",
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
        "editable": true,
        "answerText":"another",
        "storeAs": "[use-this-for-password-storage]",
        "excludes":[],
        "policyEntry":"Maecenas sit amet risus velit. Vestibulum eget velit justo. Curabitur dolor ligula, interdum vel suscipit aliquam, lacinia id lorem [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ],
      }
    ],
    "tips":[
      {"meaning":"Sed consequat augue vel nibh mollis pretium. Cras ligula ex, iaculis et consectetur quis, accumsan eget nisl. Curabitur commodo ultrices erat, in interdum elit sodales in. Etiam porttitor, ante hendrerit pulvinar sodales, erat lorem faucibus arcu, nec mattis purus nulla vel dolor. Donec ullamcorper rhoncus urna sit amet gravida. Etiam non odio quis magna fringilla efficitur nec id libero. Mauris sed facilisis orci, vitae viverra metus."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q16",
    "q":"Quisque venenatis metus vitae dolor placerat, id euismod nibh blandit?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Suspendisse bibendum lobortis odio, pellentesque semper massa posuere varius [browser-password-exceptions].",
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
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Cras blandit lectus non suscipit dictum. Etiam nec tortor eget urna auctor ornare. Aenean vel dapibus purus. Nam eu mattis nulla, [browser-password-exceptions].",
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
        "answerText":"When",
        "storeAs":"[browser-password-exceptions]",
        "excludes":[],
        "policyEntry":"Cras blandit lectus non suscipit dictum. Etiam nec tortor eget urna auctor ornare. Aenean vel dapibus purus. Nam eu mattis nulla, [browser-password-exceptions]",
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
      {"meaning":"Donec quis arcu commodo, congue nibh ut, placerat ex."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q17",
    "q":"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos?",
    "required":true,
    "policyEntry":"Vivamus a faucibus nibh. Sed pretium vitae nulla nec rutrum.",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"N",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Vestibulum venenatis metus eget laoreet molestie, [organisation-name]. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras scelerisque odio at nulla sollicitudin, quis auctor nunc tempus [security-contact-name].",
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
        "answerText":"T",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Aenean pretium lacus tincidunt porttitor sollicitudin, [organisation-name] Aliquam non ullamcorper nisi, a tincidunt quam [security-contact-name].",
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
        "answerText":"S",
        "storeAs":"",
        "excludes":[18],
        "policyEntry":"Quisque sit amet ligula ligula. Morbi ultrices est magna, ac faucibus est suscipit eget [organisation-name]. Quisque nisl risus, tincidunt quis diam ac, facilisis viverra lorem. Nunc eget augue bibendum, tristique nunc ultricies, mollis velit, [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ],
      }
    ],
    "tips":[
      {"meaning":"Quisque venenatis metus vitae dolor placerat, id euismod nibh blandit."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q18",
    "q":"Vivamus eu quam a est dictum aliquam ut non ligula?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"G",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Quisque sit amet ligula ligula. Morbi ultrices est magna, ac faucibus est suscipit eget [organisation-name]. Quisque nisl risus, tincidunt quis diam ac, facilisis viverra lorem. Nunc eget augue bibendum, tristique nunc ultricies, mollis velit, [security-contact-name].",
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
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Nam sagittis vitae erat sit amet auctor. Aenean malesuada laoreet ullamcorper [security-contact-name].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Duo Mobile website: https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"A",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Vivamus commodo tincidunt risus, sagittis vulputate urna blandit in [security-contact-name] to discuss.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Authy website: https://authy.com"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"N",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Quisque sit amet ligula ligula. Morbi ultrices est magna, ac faucibus est suscipit eget [organisation-name]. Quisque nisl risus, tincidunt quis diam ac, facilisis viverra lorem. Nunc eget augue bibendum, tristique nunc ultricies, mollis velit, [security-contact-name].",
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
        "editable": true,
        "answerText":"another",
        "storeAs": "[use-this-for-authentication]",
        "excludes":[],
        "policyEntry":"Aenean pretium lacus tincidunt porttitor sollicitudin, [organisation-name] Aliquam non ullamcorper nisi, a tincidunt quam [security-contact-name].",
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
      {"meaning":"Sed dignissim porttitor ultricies. Aliquam vulputate mollis lacus, et accumsan mauris venenatis at. Vivamus cursus scelerisque nibh vel hendrerit. Integer gravida lorem quis purus varius, at finibus justo efficitur. Morbi at sem quis ipsum dignissim auctor."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q19",
    "q":"Reprehenderit sit iste libero nulla dolores voluptatum quod?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
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
        "type":"radio",
        "answerText":"No",
        "storeAs":"",
        "excludes":[],
        "policyEntry":".",
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
  },
  {
    "isQuestion": true,
    "id":"q20",
    "q":"Sint maxime id esse aut. Sunt dolorum labore odio facere?",
    "required":false,
    "policyEntry":"[organisation-name] sint maxime id esse aut. Sunt dolorum labore odio facere:",
    "appendixEntry":"Sint maxime id esse aut.",
    "answers":[
      {
        "type":"textarea", // check for this before making an input field
        "answerText":"",
        "placeholder":"e.g",
        "storeAs":"[do-this-if-hacked]",
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
      {"meaning":"Vestibulum vulputate sed odio sit amet suscipit. Nunc molestie sollicitudin dolor, sit amet vehicula nulla consectetur sit amet. Vestibulum tristique malesuada suscipit."},
      {"more": [""]}
    ]
  }
]
