var section2 = [
  {
    "isQuestion": false,
    "id":"q14",
    "title": "Scenario two",
    "paragraph":["Now consider the situation if the same staff member clicks the link in that suspicious email and the attacker steals their work account login details. We rely on many online services in the course of our work, and as a result the accounts we inhabit get filled with sensitive information that can be accessed, deleted, manipulated and shared by an attacker.", "In this case, red flags of a hacked account can include unrecognised activity, strange login times and being 'locked out' of the account. Once inside, an attacker may steal login details for other accounts, leak sensitive information or impersonate the staff member to damage the organization.", "In most cases, changing passwords and implementing two-factor authentication is enough to stop the attacker. But if the situation escalates, it can take time to persuade the platform to hand you back control of the account so acting quickly to protect accounts is key. Setting rules for where and how to share, store and discuss information can also help to reduce the impact of an intrusion by limiting what each account can provide access to."]
  },
  {
    "isQuestion": true,
    "id":"q15",
    "q":"Should staff use a specific password manager for work accounts?",
    "required":true,
    "policyEntry":"Passwords are hard to remember, so [organisation-name] ask staff to use a password manager.",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"KeePass",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"In particular, we ask you to use KeePass and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use KeePass to generate and store your passwords!",
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
        "answerText":"Bitwarden",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"In particular, we ask you to use Bitwarden and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use Bitwarden to generate and store your passwords!",
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
        "answerText":"PasswordSafe",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"In particular, we ask you to use PasswordSafe and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use PasswordSafe to generate and store your passwords!",
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
        "answerText":"LastPass",
        "storeAs":"",
        "excludes":[16], // no browser storage
        "policyEntry":"In particular, we ask you to use LastPass and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use LastPass to generate and store your passwords!",
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
        "answerText":"1Password",
        "storeAs":"",
        "excludes":[16],
        "policyEntry":"In particular, we ask you to use 1Password and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use 1Password to generate and store your passwords!",
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
        "answerText":"Staff preference",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"As there are several options available, it is up to you to choose which suits your workflow best. If you’re unsure of the best password manager for your situation, please contact [security-contact-name] to discuss.",
        "routineEntry":"Protect your accounts: use a password manager to generate and store your passwords!",
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
        "answerText":"another password manager",
        "storeAs": "[use-this-for-password-storage]",
        "excludes":[],
        "policyEntry":"In particular, we ask you to use [use-this-for-password-storage] and if you require any help with set up or using this tool then you should discuss it with [security-contact-name].",
        "routineEntry":"Protect your accounts: use [use-this-for-password-storage] to generate and store your passwords!",
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
      {"relevance":""},
      {"meaning":"Password managers can help staff to keep track of their passwords, with many providing features such as password generation, 2-factor authentication codes, browser extensions and mobile apps alongside the password storage facility. A risk to consider here is the security of these companies you are trusting with important passwords – what would happen if they were hacked? With services that store your passwords locally this may be less of a concern, however those which provide cross-device access to passwords can be more vulnerable to attack."},
      {"implementation":"Browser extensions and mobile apps being available for many password managers enables staff to always have their passwords to hand, making it easier to integrate with their workflow."},
      {"more": ["password manager comparison", "risks of password managers", "KeePass", "Bitwarden", "PasswordSafe", "LastPass", "1Password"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q16",
    "q":"Can staff store passwords in their browser?",
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
        "policyEntry":"Staff who are aware of the risks may store their passwords in their browser for more convenient access, however they are expected to frequently clear out old logins.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Are staff still allowed to store passwords in their browser?",
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
        "policyEntry":"Staff are advised to refrain from storing passwords in their browser due to the security risks. If you need guidance on choosing an alternative password storage system, [security-contact-name], [security-contact-role], will be able to advise you on this.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "It’s annoying to keep dismissing the “save your password?” prompt but this can be disabled in the browser settings.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "editable":true,
        "answerText":"in specific circumstances",
        "storeAs":"[browser-password-exceptions]",
        "excludes":[],
        "policyEntry":"Ordinarily, we would prefer staff to avoid storing passwords in their browser, however it is permitted under these circumstances: [browser-password-exceptions]",
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
      {"relevance":"Applicable when a password manager isn't a feasible storage option."},
      {"meaning":"Storing long, complex passwords in a convenient place like the browser makes them easier to integrate into a workflow if there’s no password manager in use. However, the lists of password that are stored in the browser are not as well protected as they would be in a password manager. If the device on which that browser is installed gets stolen, confiscated or otherwise accessed without authorisation (physically or remotely), then the browser’s keychain becomes a treasure trove of account logins for anyone in control of that device."},
      {"implementation":"If in-browser password storage is appropriate for your organization’s threat model, consider planning for frequent “clearing out” of old stored passwords in order to lessen the impact of any unauthorised access."},
      {"more": ["storing passwords in browser", "delete stored browser passwords", "browser password risks"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q17",
    "q":"Which multi-factor authentication method should staff use when securing work accounts?",
    "required":true,
    "policyEntry":"Two-factor authentication is a good method of securing our accounts beyond passwords as it requires an additional one-time code to be provided at login, putting an extra barrier between your data and an attacker. Two-factor authentication should be enabled on every account which supports it.",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"None - staff preference",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"The options for getting this code include authentication apps, hardware keys, SMS or automated phone call and [organisation-name] asks staff to use their best judgment when choosing a method for securing each work-related account.",
        "routineEntry":"Choose your authenticator! Authentication apps, security keys or just your phone - any multi-factor authentication is better than passwords alone.",
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
        "answerText":"Two-factor apps or hardware authentication keys",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[organisation-name] requires staff to use two-factor apps or hardware authentication methods. Please do not use SMS or phone call authentication as they are insecure methods that can be intercepted.",
        "routineEntry":"Please use your security key or authentication app to secure access to your accounts - phone/SMS are not good enough.",
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
        "answerText":"SMS or phone call",
        "storeAs":"",
        "excludes":[18],
        "policyEntry":"[organisation-name] requires staff to use SMS or phone call authentication methods. However, be aware of the risks of interception that come with using these methods.",
        "routineEntry":"Add an extra layer of security to your accounts by enabling two-factor authentication that sends your code by phone call or SMS.",
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
      {"relevance":""},
      {"meaning":"Multi-factor authentication adds an extra layer of security to accounts by requiring the account holder to enter an additional one-time code to verify their identity. Receiving this code via SMS or phone call risks interception but this method may be more feasible than the alternative authentication app in cases where staff do not use smartphones. Generating the code through an authentication app (e.g. Authy) or a hardware security key (e.g. Yubikey) has the advantage of not requiring a data or cell service. While authentication apps are free, widely available and well-supported by online platforms, U2F keys require purchasing and are supported on fewer services."},
      {"implementation":"Allowing staff to choose their own authentication method enables them to choose the most convenient option for their workflow, however it is more common to set a baseline level of account security by requiring all staff use authentication apps and hardware security keys where possible."},
      {"more": ["two factor auth list", "sms phone 2 factor authentication", "hardware security keys"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q18",
    "q":"Does your organization prefer staff to use a specific authentication app?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Google Authenticator",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [organisation-name] recommends the Google Authenticator app for two-factor authentication. If this app is not pre-installed then you should install it from your platform’s app store, requesting assistance from [security-contact-name] when needed.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is Google Authenticator well integrated with staff workflows?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Duo Mobile",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [organisation-name] recommends the Duo Mobile app for two-factor authentication. If this app is not pre-installed then you should install it from your platform’s app store, requesting assistance from [security-contact-name] when needed.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is Duo Mobile well integrated with staff workflows?",
            "tipList": "",
            "linksList": "Duo Mobile website: https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Authy",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [organisation-name] recommends the Authy app for two-factor authentication. If this app is not pre-installed then you should install it from your platform’s app store, requesting assistance from [security-contact-name]  when needed.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is Authy well integrated with staff workflows?",
            "tipList": "",
            "linksList": "Authy website: https://authy.com"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"No preference",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"While [organisation-name] requires the use of an authenticator app, we leave it to staff to make their own choice of which one to use. If you are unsure of which is best for your device and workflow, [security-contact-name] is available for advice.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Are staff consistently using an authenticator app?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "editable": true,
        "answerText":"another authentication app",
        "storeAs": "[use-this-for-authentication]",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [organisation-name] uses [use-this-for-authentication] for two-factor authentication where platforms allow it. This app may be installed automatically as part of your mobile work device set up, otherwise you should install it from your platform’s app store, requesting assistance from [security-contact-name] when needed.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [use-this-for-authentication] well integrated with staff workflows?",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Most authentication apps work the same way, but it may be more convenient for troubleshooting if all staff use the same app. Some additional features might be more useful to your organization than others, for example multi-device access."},
      {"implementation":"Using work profiles and similar device management processes can be helpful for installing the same app across the organization. Whichever service is chosen, staff may need assistance with setting up and using the app for the first time."},
      {"more": ["authentication app comparison", "Google Authenticator", "Duo Mobile", "Authy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q19",
    "q":"Does your organization provide hardware security keys to staff?",
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
        "policyEntry":"For hardware authentication, we will provide you with a security key. Should you require any help with using the key, contact [security-contact-name].",
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
        "answerText":"No",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Hardware authentication has a few options for keys and it is up to staff to select and purchase their preferred key if they wish to use one. If you are uncertain of the choices available and their suitability for your work, please contact [security-contact-name] to discuss.",
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
      {"meaning":"Hardware security keys are an alternative to using authentication apps. Rather than generating codes for a user to type in, they are simply plugged into the computer to authenticate with the browser directly. If your organization is enrolled in the Google Protection Program then Google recommends using Titan keys in its set up process."},
      {"implementation":"Providing staff with hardware keys helps to ensure consistency across the organization and makes troubleshooting easier. Alternatively, your organization can empower staff to choose their own key which will help with buy-in. Either way, watch out for staff leaving the key plugged into their devices when not in use as this poses a risk of damage or loss."},
      {"more": ["hardware security key comparison", "Yubikey", "Google Advanced Protection Kit"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q20",
    "q":"What steps should staff take when faced with a possibly hacked account?",
    "required":false,
    "policyEntry":"... you notice suspicious activity in any work-related accounts: This could look like unprompted two-factor code requests, strange login times, or rejection of correct passwords - any unfamiliar actions performed by, or within, the account should be investigated. To do this, you are advised to follow these steps: [do-this-if-hacked]",
    "appendixEntry": "Sometimes data breaches are to blame for a hacked account, and so it can be worth checking if the email associated with the account was recently involved in such an incident by visiting Have I Been Pwned or a similar site.",
    "routineEntry":"",
    "answers":[
      {
        "type":"textarea", // check for this before making an input field
        "answerText":"",
        "placeholder":"Here are a few examples: \n\nIf the account is still accessible: change all passwords and review the recent activity, such as posts and log in times. \n\nIf it’s an email account: review the inbox rules and mail forwarding addresses, removing any that look suspicious. \n\nIf it’s an inaccessible social media account: major social media platforms have dedicated areas in their Help sections which explain how they can help you regain control of a compromised account",
        "storeAs":"[do-this-if-hacked]",
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
      {"meaning":"There are various ways an account can be accessed by unauthorised persons, but secure passwords and two-factor authentication can help mitigate this threat. Of course, once a person is in an account they can “lock” the door behind them, at which point it is usually advisable to appeal to the account provider for help to regain control."},
      {"implementation":""},
      {"more": ["help compromised account", "incident response hacked account"]}
    ]
  }
]
