var section0 = [
  {
    "isQuestion": false,
    "id":"q0",
    "title": "",
    "steps":[
      {
        "title":"Plan",
        "text":"The first set of questions is all about understanding your organization's unique context.  The following five sections present common security incidents and then ask questions that explore preventative tactics and inform your policy's content. Each section ends with an opportunity for you to specify any incident response actions you would wish staff to take in the given scenario."
      },
      {
        "title":"Build",
        "text":"Unsure how to answer a question? Click or tap on the question to reveal a panel with implementation tips, definitions, search terms, and other information to improve clarity. If the answers aren't quite right, many questions have an 'other' button you can double-click to edit and add your own answers."
      },
      {
        "title":"Apply",
        "text":"When you've completed the process, you will be presented with your full organizational security policy, including a review checklist, appendix of implementation tips and an \"Everyday Practices\" reminder document. Download options are available so you can share the policy in the best way for your organization."
      }
    ],
  },
  {
    "isQuestion": true,
    "id":"q1",
    "q":"What is the name of your organization?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example Organization",
        "storeAs":"[organisation-name]",
        "excludes":[],
        "policyEntry":"This is the security policy of [organisation-name], which has been created in order to support staff in carrying out our sensitive work securely. It is important to understand and comply with the rules described as they aim to protect everyone involved in our work, including partner organizations and frontline activists.",
        "routineEntry":"This is the short version of [organisation-name] security policy. It is designed to remind you of the everyday practices to include in your routine.",
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
      {"meaning":"Your organization’s name will be used in the policy to make the ownership of it clear. If you would prefer not to give a name, you can instead use an alias name to find and replace later if you wish."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q2",
    "q":"Who will this policy apply to?",
    "required":true,
    "policyEntry":"This policy applies to [who-policy-applies-to].",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"contractors",
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
        "answerText":"full or part-time staff",
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
        "answerText":"volunteers",
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
        "answerText":"another team",
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
      {"meaning":"It should be clear exactly who is responsible for adhering to the policy and liable for violations. Use this moment to decide whether to create a separate policy for staff with different access levels, for instance volunteers or contractors."},
      {"implementation":"No one wants to read a policy that doesn’t apply to them. Presenting staff with only the most relevant of rules for their working environment will help with implementation and buy-in."},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"Do all your staff work in the same physical office?",
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
        "answerText":"Some work remote.",
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
        "answerText":"No - everyone works remote.",
        "storeAs": "",
        "excludes":[36, 38, 39, 40, 44, 45],
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
      {"meaning":"For the majority of their time, remote staff work outside of a traditional office, such as from home or a cafe. The risks in different working environments vary and there are factors to be considered which apply to remote staff but not so much those who work in a regular office – and vice versa."},
      {"implementation":"Your organization is remote if it has any members of staff working from outside [organisation-name]-controlled premises, and taking this remote-first perspective helps with supporting those staff as part of the team."},
      {"more":["managing remote staff"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "q":"Who is responsible for this policy?",
    "required":true,
    "policyEntry":"If you have questions about this policy or its recommendations, please contact: ",
    "appendixEntry":"",
    "routineEntry":"Got questions? Ask [security-contact-name], [security-contact-role]!",
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
            "reviewList":"Is [security-contact-name] still responsible for this policy?",
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
      {"meaning":"In order to ease the implementation process and support future maintenance, one or more members of staff will be needed as a point of contact for queries about the policy. Ideally this role will be taken on by you, as the creator of this policy, or another staff member with sufficient time and security knowledge."},
      {"implementation":"The person named here should ideally be approachable and a familiar face around the organization, with a workload that can support the requirement to answer questions in a timely manner. However, people leave or become unsuitable for the role, and so there should also be a contingency plan in place so that all the security management doesn’t leave with the person."},
      {"more":["security champion role"]},
    ]
  },
  {
    "isQuestion": true,
    "id":"q5",
    "q":"How regularly do you intend to review and update this policy?",
    "required":true,
    "policyEntry":"This policy will be reviewed by [security-contact-name] ([security-contact-role]) on a [how-often-policy-reviewed] basis. Any suggestions or feedback on the policy’s contents should be directed to them.",
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
            "tipList": "Mark your calendar for review dates on [date+12], [date+24], [date+36]",
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
            "tipList": "Mark your calendar for review dates on [date+6], [date+12], [date+18]",
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
            "tipList": "Mark your calendar for review dates on [date+3], [date+6], [date+9]",
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
      {"meaning":"It is recommended to review at least once a year to improve and update to meet new threats. Check your policy’s appendix at the end to find a checklist that will help when it comes time to review the policy."},
      {"implementation":"Create calendar events for the next 2 policy reviews and invite stakeholders involved in reviewing the policy (e.g. management, Human Resources, IT)."},
      {"more":["review security policy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "q":"Which operating systems are used in your organization?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Windows",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy tips for Windows 10: https://spreadprivacy.com/windows-10-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"macOS or OS X",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy tips for macOS and OS X: https://spreadprivacy.com/mac-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Linux (any)",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy tips for Linux: https://spreadprivacy.com/linux-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Chrome OS",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "This article explains privacy settings on Chrome OS: https://www.makeuseof.com/tag/privacy-settings-chrome-os-google-chrome"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Android",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy tips for Android: https://spreadprivacy.com/android-privacy-tips"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"iOS",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy tips for iOS: https://spreadprivacy.com/iphone-privacy-tips"
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
      {"meaning":"Security measures and settings vary in extent and location between operating systems. Specifying those that are relevant and in use at your organization makes it simpler to provide appropriate instructions and questions in the process."},
      {"implementation":""},
      {"more":["comparing security of operating systems", "desktop/mobile os security features", "Mac security", "Linux security", "Windows security", "Chrome os security", "iOS security", "Android security"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "q":"How does your organization manage staff work devices?",
    "required":true,
    "policyEntry":"[organisation-name] manages device security in the following way, depending on the situation:",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"We install work profiles on staff-owned devices (Bring Your Own Device policy)",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- Profiles on your devices: With your consent, we will install a work profile on your personal devices in order for you to use them in the course of your work. This work profile will keep your work and personal use of the device separated.",
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
        "answerText":"We install work and personal profiles on organization-owned devices.",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- Profiles on [organisation-name] devices: [organisation-name] staff are given some freedom to decide their work environment and equipment, and we acknowledge that there may be times when after hours access to work email and data is needed. We will provide you with devices and install both a work and personal profile for you to use.",
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
        "answerText":"We provide work-only devices.",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"- [organisation-name] devices for work-only use: We will provide you with devices, such as a computer, to use solely for work purposes.",
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
        "answerText":"Staff use their own devices without separate profiles",
        "storeAs": "",
        "excludes":[7],
        "policyEntry":"- Your device, your choice: You may use your own devices as work equipment, we do not require the use of a work profile but please strive to maintain a separation between your work and personal data.",
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
      {"meaning":"Providing devices to staff can be expensive but it makes it easier to achieve complete separation of personal and work activities. Work profiles can be installed on most ‘smart’ devices and computers as an alternative that maintains the convenience of remote control for wiping (the profile), installation and updates. Although the personal and work profiles are kept isolated from each other, reducing leakage of sensitive information between the two, it can blur the boundaries between work and personal lives and feel intrusive to staff. BYOD policies allow staff to use their own computers and phones, and paired with work profiles can provide convenience for staff member and organization."},
      {"implementation":"Commonly the choice of work device vs work profile is given to individual staff members to decide the best option for their own situation. For the staff member, convenience and work-life balance are major factors in this decision. For the organization, security and cost are top priority. Be aware though, that not all staff members will be in a position to provide a suitable device for use at work."},
      {"more":["comparing security of operating systems", "desktop/mobile os security features"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "q":"Does your organization provide staff with privacy equipment for their devices?",
    "required":false,
    "policyEntry":"In addition to other device security measures, [organisation-name] will also provide you with [privacy-peripherals-provided] to use on your devices.",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"webcam cover",
        "storeAs": "[privacy-peripherals-provided]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "A quick temporary alternative to webcam covers can be made from a post-it note or sticky-taped paper over the camera.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"privacy screen",
        "storeAs": "[privacy-peripherals-provided]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "In addition to shoulder surfers, privacy screens can also help to protect against dust, scratches and sunlight glare.",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"If a device has been hacked, there is a risk that the hacker can access the camera (and/or microphone) remotely. If a malicious actor has “shoulder surfed” (i.e. viewed your screen over your shoulder or in the reflection of glasses) there is a risk they may have seen sensitive information onscreen."},
      {"meaning":"Webcam covers are easy to buy online and you can sometimes find branded ones being given away free at conferences. They’re a small, simple plastic device with a cover that slides back and forth to expose or hide the camera. When the camera is hidden, any remote camera view will see only darkness. Note that this only mitigates camera access, and not microphone access. Privacy screens are tinted in such a way that someone looking at the screen from the side, rather than directly in front, will see only a black screen."},
      {"implementation":"Covers are easy to stick over the camera and usually stick pretty well. It will take time for staff to keep the cover closed by default and only opening it when needed. Privacy screens are usually stuck over the device screen, however some laptop versions can be slid on/off easily when needed."},
      {"more":["webcam covers", "computer mobile privacy screens"]}
    ]
  }
]
