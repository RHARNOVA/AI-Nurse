# Electronic Liason for Intelligent Triage Automation (E.L.I.T.A.)

An application built to automate "telephone triages" by using a chatbot, allowing hospitals or clinics to handle preliminary triages of any number of patients at any given moment, 24/7. This seeks to address waiting periods for overworked healthcare providers, disorganized forms and application systems for scheduling, or simply checking details from ones' own patient records. Like customer service chatbots for banks, consumer products, and various other applications, this app will use A.I. to make communication easier and more transparent between patients and their healthcare providers.

Check out my video for more details: [Utilizing AI Solutions to Automate Patient Care](https://youtu.be/KCgf3qEAM14?si=t52Of7wzgISqIDbE)

## App Features and Design
### Features

The purpose of this application is to streamline communication between patients and their healthcare providers by using an intelligent chatbot which will:

* Determine possible causes for symptoms in patient based on the most current and accurate medical information on pathology
* Provide empathetic and sound medical advice based on its analysis or answer general questions
* Handle appointment booking, scheduling, and keeping track of patient related services such as prescriptions
* Read and update patient records to:
    * Create a more personalized communication experience for the patient
    * Communicate to healthcare providers on check-ins, areas of concern, updates on recovery, or any other important information

### Design:

This app will be built primarily using [OpenAI's API](https://platform.openai.com/docs/overview), using OpenAI's GPT-4o mini model for the chatbot, as well as using [Redox API](https://redoxengine.com/) to handle scheduling, and Fast Healthcare Interoperability Resources (FHIR) for accessing patient information across various FHIR systems across hospitals.

This will primarily be programmed using ReactJS on the front end and Python's Flask framework on the backend. 

## Project Timeline

**Phase 1**

For the purposes of the [URV API Study program](#urv), this phase will address the core feature of the project: the AI chatbot.

Goals: 
- Completed chatbot UI
- OpenAI API integration into app
- Effective automated triage experience with patient (question/answer, providing advice, etc.)

Expected completion: January 31st, 2025
Completed: TBD

**Phase 2**

Simulating access to patient record databases and scheduling API, as well as data retrieval and modifcation by the AI model

Goals:
- Creating a database for patient information to be stored, read, and modified
- Chatbot will read/write/store patient files
- Chatbot will interact with scheduling API

Expected completion: TBD
Completion: TBD

**Phase 3**

Chatbot will have use advanced triage techniques such as producing graphics for the patient to interact with for improved understanding, analyzing images uploaded by the patient, as well as conversing with the patient audibly.

Goals: 
- Image generation model provides simple image multiple choice questions for patient to better describe symptoms (will require some training, source and method TBD)
- Mobile App
- Chatbot and patient will converse vocally, and clearly
- Using computer vision to look at and possibly determine symptoms/give sound medical advice (will require training, source and method TBD)

Expected completion: TBD
Completion: TBD

**Phase 4**

Redox API integration, and reconfiguring model to access and work with data provided by hospitals via Redox.

Expected completion: TBD
Completion: TBD

**~**

Features, suggestions, and other ideas will be added to existing phases or will make new phases entirely. All is yet to be determined, however these 4 basic phases give an idea of the projected complexity and scale of the project. 

## Additional Project Information

This project is currently owned and managed by me, however feel free to get in touch if you want to help contribute to this project's development. Check out my [LinkedIn](www.linkedin.com/in/rhar)

### URV

This project was in part created for the Undergraduate Research Volunteering API Study program at the Unviersity of Massachusetts Amherst, for the purpose to be used in a feasibility study. However, development will be pursued post-completion of the program. This will be developed for the purposes of the program until January 31, 2025.





