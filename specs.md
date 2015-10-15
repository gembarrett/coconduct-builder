# Project specification

## Audience examples
### (general audience is anyone who participates in the tech community)
- event* organisers (*offline*)
- open-source project owners/maintainers (*online*)
- forum admins (*online*)
- open-source contributors (*online*)
- event attendees (*offline*)
- forum users (*online*)

**event == conferences, meetups, basically any offline grouping of people related to tech that any member of the public can attend**

## Community requirements for this tool
- specify what happens to repeat violators (e.g. Thoughtbot CoConduct specifies ban/block before 3rd violation)
- refusal to act on accusations of reverse-isms
- specify examples of unacceptable behaviour
- include process for users to suggest/submit additional resources
- explain why a resource is included in additional reading
- divide by short version and long version for UX readability
- separate document for reporting process - different audience
- translated into other languages
- set up like the Privacy Policy generator (iubenda.com)
- store your policy so can be changed later - log in with Twitter, etc to start building?

## User stories
As a conference organiser who has implemented a Code of Conduct before, I want to learn how to build a more diverse environment at my conference.

As an open-source project owner who also runs events for the same community, I want to create a single Code of Conduct that applies to my commmunity's online and offline spaces.

As an event attendee, I want to easily share a collection of well-considered, community-supported practices with event organisers.

As an open-source contributor, I want to know that the project I'm involved with has considered the processes it needs to put in place to support the Code of Conduct.

As an open-source project owner, I want to build a well-considered Code of Conduct that is customised to my project.

As a forum admin, I want to access a Code of Conduct resource which brings together a lot of the community-supported advice and tips provided in various blog posts.

## Technical requirements
- Upon arrival at the site, user is presented with:
  - basic description of the tool
  - two things required to implement a policy:
    - >1 contact points for reports
    - >1 people who monitor those points and have the power to respond (including excluding violators)
  - links to further reading/information and contact info
  - choice of building a code of conduct for (multiple selection available):
    - an offline community (e.g. event)
    - an online community (e.g. open-source repo)
- having chosen the type of CoConduct, basic details are taken:
  - user's name
  - community name (can separate into offline name and online name)
  - website
  - happy to be added to list of users?
- generate super-short version (e.g. for inclusion in intro speech/project description)
- also generate short and long versions for display

## Common elements of CoConducts
- specify which type of complaints will not be acted on (basic list, e.g. reverse-isms, with ability to add others)
- specific examples of unacceptable behaviour (basic list, e.g. sexual imagery, with ability to add others)
- specify which areas of community it will be applied to:
  - online spaces: wiki, blog, mailing lists, forums, repos, other [specify]
  - offline spaces: meetups, workshops, social events, conference venue, talks, other [specify]
- consequences of CoConduct violations (basic info, e.g. asked to refrain, with ability to add others)
- consequences of repeated violations (basic info, e.g. asked to leave after 2 violations, with ability to add others)
- process for reporting
- process for handling reports
- response team:
  - name of team (e.g. Awesome Conference Event Team)
  - community Twitter account (DMs open?)
  - community email address
  - how to recognise members in offline spaces (e.g. event shirts in specific colour, badges)
  - members:
    - name
    - email
    - Twitter handle
    - phone number