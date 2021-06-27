# PROJECT: TESTING PRACTICE Using Jest

## 🤔 WIL/Thoughts
1. TDD's main idea is simply start working working on code by writing automated tests **BEFORE** writing the code that is being tested. 
2. There are many test-running systems in Javascript: Jasmine, Jest, Tape, Mocha. They have their special features but the syntax is very similar. 
3. Writing tests is less about the syntax but more on the TDD philosophy, so I tried internalizing the concepts using Jest. Main goal is to know the why and what to test.

📌 Notes from [The Magic of Testing](https://www.youtube.com/watch?v=URSWYvyc42M)
1. Why most devs hate tests? They are slow and fragile and expensive (time).
2. It is perfectly valid to delete some tests.
3. Unit Test Goals: They must be **thorough** (we want them to prove logically and completely that the single object under test is behaving correctly) and **stable** (we dont want to break the test everytime the implementation detail is changed 😟), **fast** and **few** (write tests for the most parsimonious expression [mmmmmm 🤔]).
4. The object under test have three origin of messages : **Incoming** - messages to the object from outside, **Self** - messages sent by the object under test to itself and **Outgoing** - messsages sent by the object to the outside.
5. There are two types of messages : **query** and **command**. Queries return something or changes nothing. Command types return nothing but changes something.
6. Grid of Test Rules

|Message Type|Query|Command|
|:---|:---|:---|
|Incoming|**Assert result**<br>Test incoming query messages by making assertions about what they send back.<br>Test the interface and not the implementation.|**Test incoming command messages by making assertions about direct public side effects.**<br>DRY it out. Receiver of incoming message has sole responsibility for asserting the result of direct public side effects.|
|Sent to Self|Ignore: Do not test private methods.|Ignore: Do not test private methods.|
|Outgoing|Ignore. The receiver of an incoming query is solely responsible for assertions that involve state.<br>If a message has no visible side effects, the sender should not test it|**Expect** to send outgoing command messages using mocks|

7. Do not test private methods. But break this rule if it saves money during development.
8. A mock is a test double, it plays the role of some object in your real app. Ensure test double stays in sync with the API.
9. Trust collaborators that they will do the right thing. Insist on simplicity.
10. Getting better at testing takes time and practice.

