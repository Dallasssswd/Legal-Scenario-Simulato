const scenarios = [
  {
    title: "The Backpack Phone Case",
    text: "Jake secretly takes a classmate's phone out of a backpack in the school locker room and sells it after school.",
    issueOptions: ["Theft", "Robbery", "Trespassing", "No crime"],
    defenseOptions: ["Consent", "Mistake of fact", "No valid defense", "Self-defense"],
    correctIssue: "Theft",
    correctDefense: "No valid defense",
    outcome: "Jake would most likely be found responsible for theft because he intentionally took someone else's property without permission and sold it.",
    explanation: "Theft is the strongest issue because Jake intentionally took property that did not belong to him. Robbery usually involves taking property by force or threat, which did not happen here."
  },
  {
    title: "The School Search Rumor",
    text: "A principal hears a specific report that Mia hid exam answers inside her phone case during a test. The principal takes the phone and checks the case.",
    issueOptions: ["Unreasonable search", "Reasonable school search", "Battery", "No legal issue"],
    defenseOptions: ["Fourth Amendment absolute privacy", "School had reasonable suspicion", "Self-defense", "Entrapment"],
    correctIssue: "Reasonable school search",
    correctDefense: "School had reasonable suspicion",
    outcome: "The search would likely be upheld because schools usually need reasonable suspicion, not a full warrant, for student searches.",
    explanation: "Public schools generally have more flexibility than police in student discipline situations. A specific report about cheating materials in the phone case can support reasonable suspicion."
  },
  {
    title: "The Angry Punch",
    text: "During an argument in a parking lot, Marcus punches Eli in the face first, causing a broken nose.",
    issueOptions: ["Battery", "Theft", "Burglary", "No issue"],
    defenseOptions: ["Self-defense", "Consent", "No valid defense", "Necessity"],
    correctIssue: "Battery",
    correctDefense: "No valid defense",
    outcome: "Marcus would likely face liability or charges for battery because he intentionally caused harmful physical contact.",
    explanation: "Battery usually involves intentional harmful or offensive contact. Since Marcus threw the first punch and there is no sign he was defending himself, self-defense is weak."
  },
  {
    title: "The Fake Brand Startup",
    text: "A student starts selling shirts online using a logo almost identical to a famous sports brand to attract buyers.",
    issueOptions: ["Trademark infringement", "Arson", "Self-defense", "No legal issue"],
    defenseOptions: ["Fair use", "Parody", "No valid defense", "Mistaken identity"],
    correctIssue: "Trademark infringement",
    correctDefense: "No valid defense",
    outcome: "The student could face trademark problems because using a confusingly similar logo in business can mislead customers.",
    explanation: "Trademark law focuses a lot on consumer confusion. If buyers might think the shirts are connected to the real brand, that is a serious problem."
  },
  {
    title: "The Password Guess",
    text: "Nora guesses another student's password and logs into that student's school account to read private messages.",
    issueOptions: ["Unauthorized access", "Self-defense", "Noise violation", "No issue"],
    defenseOptions: ["Consent", "No valid defense", "Necessity", "Duress"],
    correctIssue: "Unauthorized access",
    correctDefense: "No valid defense",
    outcome: "Nora would likely be in trouble for unauthorized access because she intentionally entered an account she had no permission to use.",
    explanation: "Accessing someone else's account without permission is a strong cyber-law issue. Even if nothing was deleted, the unauthorized entry itself can still be the problem."
  }
];
