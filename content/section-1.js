var section1 = [
  {
    "isQuestion": false,
    "id":"q9",
    "title": "Scenario one",
    "paragraph":["In this first scenario, we'll look at security threats which occur through organizational communications channels. A very common example of this that you've no doubt already experienced, is that of the suspicious email. Staff may already be aware of some 'red flags' from their personal experience of spam emails, but scammers are becoming more sophisticated all the time and attacks can be especially persuasive in instances where they have been directly targeting civil society organizations.", "An example of this is fake Google notifications sent with a request to 'review' some account detail by logging in using the provided link - at which point the login details are stolen by the attackers. Other risks can come from unexpected attachments containing malware or urgent requests for sensitive information from attackers impersonating one of the recipients trusted contacts.","Although we're talking about email here, this section will also look at other methods as really any communications channel can be vulnerable and should be considered when building your security policy."]
  },
  {
    "isQuestion": true,
    "id":"q10",
    "q":"Do all members of staff need a PGP key for their work email?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[organisation-name] requires staff to use PGP to encrypt sensitive emails. If you need help with setting up, please contact [security-contact-name].",
        "routineEntry":"Sending an email containing confidential information? Hide it from prying eyes by encrypting it with your PGP key.",
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
        "answerText":"Some staff need a key",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[organisation-name] prefers some staff to use PGP to encrypt sensitive emails. You will be informed if this applies to you and offered help with setting up, should you require it.",
        "routineEntry":"If you have a PGP key, please use it to encrypt emails containing sensitive information.",
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
        "answerText":"None of our staff use PGP",
        "storeAs":"",
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
      {"relevance":"If you think there’s a chance that your organization’s emails could be intercepted, or someone could impersonate a member of your staff via email."},
      {"meaning":"PGP (Pretty Good Privacy) is a reliable way to encrypt the contents of your emails and verify that it was you who sent them. Putting your public key on the keyserver helps ensure people can contact you securely, or you can include the public key in your email signature."},
      {"implementation":"The process to set up PGP can be intimidating, so it’s best to read up on it before starting. An introduction to it during an all-staff meeting will help with getting buy-in, and additional 1-1 training should be given to staff with little to no experience of encrypting email. Implementation will depend on the email clients your staff use, but Enigmail with Thunderbird is a popular option. Note: PGP uses encryption and therefore may not be suitable for all working contexts."},
      {"more": ["how to set up PGP", "using PGP with Enigmail"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q11",
    "q":"How should staff protect their in-browser interactions?",
    "required":false,
    "policyEntry":"In order to protect your online activities from common tracking and interference, we recommend all staff install the following privacy-enhancing extensions: [use-these-browser-extensions].",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Privacy Badger",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Privacy Badger website: https://www.eff.org/privacybadger"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Privacy Possum",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "GitHub for Privacy Possum: https://github.com/cowlicks/privacypossum"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"uBlock Origin",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "GitHub for uBlock: https://github.com/gorhill/uBlock"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Better",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Better website: https://better.fyi"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"HTTPSEverywhere",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "HTTPSEverywhere website: https://www.eff.org/https-everywhere"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"DuckDuckGo Privacy Essentials",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "DuckDuckGo Privacy Essentials description: https://spreadprivacy.com/privacy-simplified"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Password Alert",
        "storeAs":"[use-these-browser-extensions]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": "Password Alert FAQ: https://support.google.com/a/answer/6197508"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable": true,
        "answerText":"another add-on",
        "storeAs": "[use-these-browser-extensions]",
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
      {"relevance":"If your organization’s staff use internet browsers that are capable of having extensions or plug-ins extend their functionality."},
      {"meaning":"Using an internet browser is such an everyday part of most people’s work that we often forget it is also a prime target for privacy invasions and attacks. Thankfully, browser extensions – add-ons that extend a browser’s features beyond the default – are available for defending against tracking by Google, Facebook and other advertising companies. They can also be used to detect fake Google login pages (used in spear phishing attacks) and encrypt communication with a website."},
      {"implementation":"Many of these extensions do their job silently in the background, only disturbing the user’s workflow on the occasions when doing their job causes disruption to the page’s functionality. Mobile browsing can also be protected through tracker-blocking apps and privacy-conscious browsers, and this can help with building a consistent defence for staff whenever they are using the internet for work purposes."},
      {"more": ["privacy browser extensions", "Privacy Badger Possum", "uBlock Origin", "HTTPSEverywhere", "Better privacy tool", "DuckDuckGo search engine", "Google password alert"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q12",
    "q":"For each of the following communication types, which tools should staff use when discussing sensitive work topics?",
    "required":false,
    "policyEntry":"When communicating sensitive work data, [organisation-name] prefers staff use the following tools.",
    "appendixEntry":"Pay attention to any changes in encryption standards, data breaches or security vulnerabilities that are in the news and relevant to your communication platforms.",
    "routineEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"1-1 messaging",
        "placeholder":"e.g. Signal, WhatsApp, encrypted email",
        "storeAs":"[use-these-for-direct-chat]",
        "excludes":[],
        "policyEntry":"- For 1-1 communications (e.g. direct message to a colleague), please use [use-these-for-direct-chat].",
        "routineEntry":"Use [use-these-for-direct-chat] for direct 1-1 messaging.",
        "appendixEntry":[
          {
            "reviewList":"Is [use-these-for-direct-chat] still the most appropriate method for your direct communications?",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
      {
        "type":"text",
        "answerText":"Team messaging",
        "placeholder":"e.g. Mattermost, Signal, unencrypted email",
        "storeAs":"[use-these-for-group-chat]",
        "excludes":[],
        "policyEntry":"- When communicating with a group (e.g. your project team), please use [use-these-for-group-chat].",
        "routineEntry":"[use-these-for-group-chat] should be used for team messaging.",
        "appendixEntry":[
          {
            "reviewList":"Should you continue recommending [use-these-for-group-chat] for group communications?",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
      {
        "type":"text",
        "answerText":"Internal video/audio calls",
        "placeholder":"e.g. Jitsi, Signal, Google Hangouts",
        "storeAs":"[use-these-for-internal-chat]",
        "excludes":[],
        "policyEntry":"- We use [use-these-for-internal-chat] for internal video or audio calls, e.g. for remote staff meetings.",
        "routineEntry":"Video or audio calls within [organisation-name] should be carried out on [use-these-for-internal-chat].",
        "appendixEntry":[
          {
            "reviewList":"How well has [use-these-for-internal-chat] been working as an internal video calls platform?",
            "tipList": "",
            "linksList": ""
          }
        ],
      },
      {
        "type":"text",
        "answerText":"External video/audio calls",
        "placeholder":"e.g. Jitsi, Signal, Skype",
        "storeAs":"[use-these-for-external-chat]",
        "excludes":[],
        "policyEntry":"- External video and audio calls take place through [use-these-for-external-chat].",
        "routineEntry":"Video or audio calls with those outside of [organisation-name] should be hosted on [use-these-for-external-chat].",
        "appendixEntry":[
          {
            "reviewList":"Is [use-these-for-external-chat] still a good option for external video and audio calls?",
            "tipList": "",
            "linksList": ""
          }
        ],
      }
    ],
    "tips":[
      {"relevance":"If your organization would prefer staff to use particular tools in specific scenarios rather than leaving it to individual choice."},
      {"meaning":"Specifying particular tools for each common use case helps with consistent communications management and security. It can also help staff to spot suspicious communications that aren’t using the approved methods. For instance, a request for sensitive information to be sent via Telegram can be more easily flagged if Telegram is not an approved method for work communications. Each of the tools has its pros and cons, particularly when it comes to privacy and security, and it is up to your organization to decide which is best for your working environments."},
      {"implementation":"Changing tools can be tricky as it’s hard to break a habit, but the previously-selected security champion and management can all set an example to rest of the organization. For instance,they might only accept internal video call invites which use the approved platform and gently redirect staff to update their invite with the new, more appropriate method."},
      {"more": ["secure group chat and conferencing tools", "Slack vs Mattermost vs Matrix", "secure messaging app comparison", "WhatsApp vs Signal vs Telegram", "Hangouts vs Jitsi vs Skype", "cell sms security interception"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q13",
    "q":"What steps should staff take if they are faced with a suspicious email?",
    "required":false,
    "policyEntry":"... you receive a suspicious email: Phishing involves being duped into providing information to parties that you otherwise wouldn’t share, usually through fake account notifications or impersonating a known contact. Unfortunately this kind of attack in common and so it is important to understand the steps we recommend taking to both mitigate and recover from such an attack: [do-this-if-phished]",
    "appendixEntry": "To check whether a link or attachment contains known malware, upload it to VirusTotal; a service owned by Google which reads the file and detects familiar malicious code. It won’t find every attack, only the known ones it’s seen before, but it’s a valuable tool nonetheless.",
    "routineEntry":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here are a few examples: \n\nIf the email gives you a login link: open a new browser window and sign into the site there without using the link. Emailed links can have subtle changes made to them which redirect users to malicious sites for collecting login details. \n\nIf the email isn’t addressed to you, but to multiple people: attackers often send messages to large groups in order to ‘catch out’ as many people as possible \n\nIf the email has an unexpected attachment: don’t open the file unless you have contacted the sender through another channel to verify it. If you clicked on a link or opened an unexpected attachment, even from a trusted contact: disconnect from the internet and cease using the device – use a different device to change any passwords you used on that device.",
        "storeAs":"[do-this-if-phished]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Are all of the incident response plans up-to-date?",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"A common attack used against civil society organizations involves sending fake account (most often Google) notifications that ask the reader to sign in via a provided link in order to take some urgent action, such as “reactivating” the account. This kind of attack is known as phishing, and its aim is to convince the reader to enter their username and password into the sender’s fake login page, thus giving them access to the account. Spear phishing is also a threat in our work as, rather than impersonating big companies, it uses personal information about its target (e.g. the name of a trusted contact) to appear more convincing. Phishing emails of all types can be hard to spot, so it’s best to prepare staff for the main red flags as well as the inevitable day when one slips through the net."},
      {"implementation":"Changing tools can be tricky as it’s hard to break a habit, but the previously-selected security champion and management can all set an example to rest of the organization. For instance,they might only accept internal video call invites which use the approved platform and gently redirect staff to update their invite with the new, more appropriate method."},
      {"more": ["how to avoid a phishing attack", "what is spear phishing", "report google phishing email"]}
    ]
  }
];
