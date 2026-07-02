---
title: "Specific Modules and How I Used AI for Each"
date: "2026-07-02"
excerpt: "How can you utilise AI for each specific module?"
coverImage: "/CHeader.jpeg?height=500&width=1000"
---


## Each Module Itself: How to Train Your AI Like a Computer Scientist

In my last post I covered the overall structure of my exam season using Claude Premium. This one goes a level deeper, talking about how I set up each individual module, and a few specific prompts I used to take advantage of exactly how LLMs work under the hood. This is where a basic knowledge of computer systems gives you a real edge over other students, and honestly, it's a big part of why I still think a CS degree is worth it.
One thing I didn't mention last time: Claude builds memory within each project. The more you use it and the more context you feed it, the better your results get. Don't turn that feature off.

## The Baseline: Past Questions Plus Context

You can't overstate the value of past papers. Without them you're studying blind. You have no sense of where to focus, what to drop, how to spend your time. That matters even more for dense subjects like the OSI model in Networks, or Data Engineering, where the exam can hit you from a dozen different angles((calculations or theory).

So past questions went straight into the project files for every module. That's where the first anecdote comes from. But before I get into it, a quick detour into how ML and LLMs actually work. Understanding this, gives you an idea of what went into my prompts and how I was able to leverage the technology to my uses.

### How the Tech Actually Thinks


Machine Learning, which underpins Deep Learning, splits into two main types.
Supervised learning gives the model both the features and the expected result. This is called training data. You split it into a training set and a testing set. The model sees features and answers together, the way a kid learns: here's a house's size and location, here's its price. It learns the pattern, then you test it on data it hasn't seen.
The trap here is overfitting. If the model gives you back the exact training results during testing, that's not a good sign.It means it memorized rather than learned. Throw new data at it or drop it into the real world and it falls apart.

Unsupervised learning flips this. You hand the model a pile of data with no answers attached and let it find the patterns on its own. There are several techniques underneath that, but that's the concept in a sentence.

LLMs sit between the two, with some reinforcement learning mixed in. They're trained through self-supervised learning: feed them a huge chunk of the internet, have them learn the probability of what word comes next, and refine that through reinforcement.
Picture a train laying its own tracks as it moves. The model looks at the current context and lays down the word most likely to come next.

LLMs work largely on prediction and that is the power I and all students should be using. PREDICTION.

### Anecdote 1: Weaponizing the Prediction

For one module I loaded past papers set by a specific professor into the project, along with context on their exam style pulled from conversations with older students. Then I let the model do what it's built to do: predict.

It worked well enough that in a couple of modules it generated questions that showed up nearly word-for-word on the final. Was that luck, or is my professor also running exams through AI? No idea. Either way, it left me better prepared, and I think the same approach holds for most people.

It is worth mentioning though, that this runs on prediction and probability, not certainty. Don't expect every generated question to show up on the paper. What it's genuinely good at is catching the blind spots you didn't know you had.

### Anecdote 2: Full Exam Generation for the Hard Modules

Past that, I moved from single questions to full custom papers targeting specific weak spots. Two modules needed this the most: Computer Networks and Secure Cyber Systems.
Networks was one of the heaviest modules I had. The OSI model is basically the entire blueprint for how the internet works, and the scope ran from raw calculation to pure definition to conceptual reasoning. You could set a full two-hour paper on the Transport Layer alone and it wouldn't feel thin.

Same process as before, but deeper: past papers, research on the professor, older assignments of hers (some in her native language), notes on her questioning style, and a transcript from her revision class, all fed into the project alongside my own lecture notes. From that I generated full practice papers built around my actual weak points and her specific focus areas.

What made this module different was how much weight she put on network topologies, breaking them down, answering both calculation and explanation questions on them, then proposing improvements. Haven seen that, the ability for Claude to generate full documents in pdf format came in handy. I spent significant time, requesting and studying different topologies and answering questions related to them. 
That's a hard thing to drill for without tailored material. Context in, magic out. On some of the early papers I had Claude open with a formula sheet before the questions, then attach answers and exam-style variants at the end.

### Anecdote 3: Rebuilding Encryption From Scratch

For Secure Cyber Systems I went with an older trick: teach me like I'm a kid.
I'd noticed all year that "simple" concepts like encryption types weren't actually landing for me. Encryption is just encryption, right? Wrong.

Through trial and error I found a process that worked: have the model state the exact problem being solved, then let me work out the next step myself. That way I was building the concepts up on my own, from the basic One-Time Pad through to block cipher chaining and stream encryption.

### Rounding Out the Toolkit: Claude vs Gemini vs NotebookLM

While these examples lean heavily on Claude thanks to its outstanding organizational capabilities, I also employed the use of other systems. For example, Gemini was fantastic in providing deep research on topics, which I could then feed back into Claude as a file or instruction. NotebookLM, with its video generation, helped animate difficult abstract concepts, and its flashcard tool helped me grasp quick concepts and aided in memorisation. While the mind map was not particularly helpful (I found its content a bit too surface level for university content), it would be a great tool for high school students, or for anyone simply trying to get a visual of how different concepts in a subject relate to each other.

None of this is a way to skip the work. It's a way to make the work count for more. Once you understand how these models predict, you stop treating them like a search bar and start treating them like a tutor built entirely around your weak spots.
Whether you're getting it to mimic a professor's exact testing habits or working backward through an encryption scheme, it comes down to the same thing: context and prompting, done properly. Get that right and most of your academic blind spots are gone before you even sit down for the exam.
