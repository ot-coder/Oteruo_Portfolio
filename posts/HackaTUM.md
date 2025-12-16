---
title: "HackaTUM: 48 Hours, New Technologies, and a Voice-Controlled Future?"
date: "2025-12-15"
excerpt: "Experience my first Hackathon."
coverImage: "/hackaheader.jpg?height=500&width=1000"
---


What is a toxic relationship? A great example is being unable to leave the very thing that causes you pain. Like me buying the latest edition of FIFA... sorry, FC, every year, even though I know I am going to hate the game (we all do at this point).

Or, perhaps more accurately, it's me spending hours, even days, staring at lines of code as I mutter "I give up" to myself multiple times, knowing full well I'll be back. Why? Because somewhere in my brain, the joy of solving problems and creating new technologies far outweighs the obstacles overcome to achieve them. Maybe the reward is the obstacles along the way.

Of course, diving into this kind of chaos alone would be a suicide mission. I was lucky enough to tackle this beast alongside an absolute dream team: [Mustafa Azizi](https://www.linkedin.com/in/mustafa-azizi-b0034129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app), [Nazly Asaad](https://www.linkedin.com/in/nazly-asaad1608?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app), and [Mohamed Nabil](https://www.linkedin.com/in/mohamed-nabil-7b5561305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app). Whether it was Mohamed's wizardry with the backend, Mustafa's sharp eye for the logic, or Nazly keeping the morale high when the bugs started piling up at 3 AM, we balanced each other out perfectly. You can't survive 48 hours of high-pressure coding without a solid crew, and these guys were the real MVPs.


The Arena: HackaTUM
I attended HackaTUM, and for a first-time hackathon experience, I didn't exactly start small. This isn't just a university coding club meet-up; it is the official hackathon of the Department of Computer Science at the Technical University of Munich. Since 2016, it has grown into one of the largest events of its kind in the European Union, welcoming over 1,500 students every year from 100+ universities across four continents.

Walking in, the energy was electric. Hundreds of highly motivated participants surrounded me, some of the best up-and-coming programmers in the EU, mixed with seasoned developers. The imposter syndrome kicked in for a split second, but was replaced almost instantly by excitement.

We were surrounded by industry giants offering unique challenges, including:
  1. Huawei wanted innovation for mobile ecosystems and smart wearables.
  2. Optiver threw down the gauntlet for FinTech, challenging teams to build high-frequency trading algorithms.
  3. The City of Munich even asked for tech solutions to municipal problems.

But while the hardware and FinTech challenges were tempting, our team had its eyes on a different beast. We chose the SAP-sponsored track (where we focused on extending the capabilities of SAP Build, specifically challenging ourselves to integrate AI-driven voice commands into their existing multi-target application structure).


The Inspiration: Democratising Development
SAP is the "central nervous system" of the business world, serving as the backbone of well over 400,000 companies worldwide, including major companies like BMW, Apple, IBM, and Microsoft. It's no secret I was very excited to get my hands on the very system powering such massive players (provided we didn't break anything). Our challenge focused on SAP Build, their latest no-code/low-code solution. It is designed to help non-technical users create automated workflows with ease.

However, we noticed an oversight. While "drag-and-drop" is excellent, it still creates a barrier. It assumes a certain level of computer literacy, visual engagement, and fine motor control. In our fast-paced society, flexibility and inclusivity should be standard, not optional.

We asked ourselves: Why should software development be locked behind a keyboard and mouse? Whether you have a motor disability, a visual impairment, or you aren't "technologically inclined," you should be able to build workflows to help your business. We set out to develop an accessibility-focused extension to break down that barrier completely.


What It Does
Our goal was to emulate a seamless conversation with a developer, where the user is the architect and our system is the builder.
The Architect (User): The user speaks a command, such as "Create an approval workflow that emails HR when a new candidate applies."

The Builder (System): Our extension processes this verbal instruction and automatically constructs the complex visual workflow within SAP Build.

The Analyst: Beyond building, the system can provide verbal insights, reading back statistics and details about existing workflows to users who might struggle to read complex dashboards.


How We Built It
We had 48 hours (Friday arrival, Saturday start, Sunday 10 AM presentation) to turn this ambitious idea into reality. Here is the breakdown of our tech stack:

The Interface (JavaScript/TypeScript): We needed a bridge between the human and the machine. We built a custom interface using JavaScript (and TypeScript for type safety) to capture the user's voice commands. This frontend was responsible for capturing audio and acting as the primary interaction point.

<img
    src="/demopage.PNG"
    alt ="Screenshot of the system at work"
    width="1000"
    height="500"
/>

The Brains (Google Gemini): We didn't want a simple "keyword command" system. We needed a proper understanding. We connected our solution to Google Gemini to handle the heavy lifting of Natural Language Processing.
  Input: "Create a workflow for expense approvals."
  Processing: Gemini parses this intent, extracts the necessary logic (Trigger -> Condition -> Action), and converts it into structured JSON data our backend could use.

The Logic (Python & SAP Integration): For backend processing, we used Python. This acted as the glue, taking the structured data from Gemini and attempting to "inject" it into the SAP environment.


Challenges We Ran Into: The MDIR Nightmare
Every hackathon has that "wall" you hit at 3 AM. For us, it was the Multi-Target Applications (MTA) structure.
SAP solutions heavily utilise a specific file architecture. To make our voice generator work, we couldn't just "click" buttons programmatically; we had to generate the actual project files that SAP Build recognises. This meant manipulating exported MDIR files (Metadata Integration Directories). Dealing with SAP's complex MDIR files was a tough challenge that tested our perseverance, making me appreciate the value of resilience when facing technical obstacles.
No doubt, a massive learning curve. We had to:
  1. Reverse Engineer: Deconstruct existing SAP Build projects to understand the proprietary XML/JSON schema inside.
  2. Generate Elements: Write code that could programmatically create new workflow elements (blocks, arrows, triggers) within these files based on the AI's output.
  3. Validation: Ensure that our generated files respected the strict syntax of SAP's ecosystem so they could be successfully imported back into the tool.
It was like trying to score a finesse goal without the finesse and playstyle (can you tell how terrorised I am by FIFA... sorry FC yet?). One wrong tag or misplaced bracket, and the whole project file would be corrupted. We spent hours debugging file structures, muttering "I give up," and then diving right back in when we found a new lead.


The Crunch & The Result
In the end, we successfully demoed the interface's ability to capture voice, process it via Gemini, and generate the correct logic blocks. While we didn't get the full end-to-end integration perfectly polished in time (the curse of the 48-hour limit!), the judges were impressed. We were commended for the quality of our work and specifically for the unique angle of solving a technological oversight—making high-tech tools accessible to non-techies.


<img
    src="/presenting.JPG"
    alt ="Picture of me explaining the demo"
    width="1000"
    height="500"
/>



Final Thoughts
This weekend was a crash course in resilience. We learned that "accessibility" isn't just a feature for a minority of users; it's a philosophy that makes technology better for everyone.
HackaTUM offered an excellent environment for learning, collaboration, and networking with major tech companies. I walked away with a certificate, a network of brilliant peers, and the satisfaction of having built something meaningful under extreme pressure.
So you see, I definitely choose to stick to this "toxic relationship" with coding. I will continue creating, because that's just what I love.

<img
    src="/certificate.png"
    alt ="Official certificate received"
    width="1000"
    height="500"
/>



