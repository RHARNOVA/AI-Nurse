# **Electronic Liaison for Intelligent Triage Automation (E.L.I.T.A.)**

E.L.I.T.A. is an application designed to automate "telephone triages" using a chatbot, enabling hospitals and clinics to handle preliminary triages for an unlimited number of patients 24/7. By addressing challenges like long waiting periods, overburdened healthcare providers, disorganized scheduling systems, and inaccessible patient records, E.L.I.T.A. aims to make communication between patients and healthcare providers easier, faster, and more transparent.  

Similar to customer service chatbots used in banking and other industries, E.L.I.T.A. leverages AI to streamline and enhance patient care.  

📹 **Check out my video for more details:** [Utilizing AI Solutions to Automate Patient Care](https://youtu.be/KCgf3qEAM14?si=t52Of7wzgISqIDbE)

## **💡 App Features**  
E.L.I.T.A. streamlines communication between patients and healthcare providers using an intelligent chatbot that can:  

- **Analyze Symptoms:** Assess possible causes for patient symptoms using accurate and current medical information.  
- **Provide Medical Advice:** Offer empathetic, reliable guidance or answer general health-related questions.  
- **Handle Scheduling:** Manage appointment bookings, scheduling, and other patient services like prescription tracking.  
- **Access Patient Records:**  
  - Personalize communication based on patient history.  
  - Share updates with healthcare providers, including check-ins, areas of concern, or recovery progress.  

## **🛠️ Technical Overview**

### **Front-End**  
- **React.js:** For a dynamic chatbot interface.  
- **Tailwind CSS:** For streamlined and modern UI/UX design.  

### **Back-End**  
- **Flask (Python):** For API integration and server-side functionality.  

### **APIs**  
- **[OpenAI API](https://platform.openai.com/docs/overview):** Utilizes GPT-4 to power the chatbot. DALL-E to be used for powering image generation.
- **[Redox API](https://redoxengine.com/):** Integrates with scheduling systems and Fast Healthcare Interoperability Resources (FHIR) to manage and access patient information.  

## **🗓️ Development Roadmap**

### **Milestone 1: Chatbot Core Development**  
**Focus:** For the intents of the [URV](#urv-program), primary focus is to develop the core AI chatbot functionality.  
**Goals:**  
- Complete the chatbot's user interface (UI).  
- Integrate OpenAI API into the application.  
- Create an automated triage experience (e.g., Q&A, advice generation).  

**Expected Completion:** January 31, 2025  
**Status:** In Progress  

### **Milestone 2: Patient Record and Scheduling Integration**  
**Focus:** Simulate and integrate patient data management and scheduling APIs.  
**Goals:**  
- Develop a database for storing and modifying patient information.  
- Enable the chatbot to interact with patient records (read/write functionality).  
- Connect the chatbot with scheduling APIs.  

**Expected Completion:** TBD  
**Status:** Planned  

### **Milestone 3: Advanced Triage Features**  
**Focus:** Expand the chatbot’s capabilities with interactive and multimedia features.  
**Goals:**  
- Implement AI-generated graphics to assist with symptom descriptions.  
- Enable voice-based communication between the chatbot and patients.  
- Utilize computer vision for analyzing patient-uploaded images and providing sound medical advice.  

**Expected Completion:** TBD  
**Status:** Planned  

### **Milestone 4: Redox API Integration**  
**Focus:** Fully integrate the Redox API for live hospital data access and interoperability.  
**Goals:**  
- Configure the chatbot to interact with real-world hospital systems via the Redox API.  

**Expected Completion:** TBD  
**Status:** Planned  

### **Future Milestones**  
Additional features and improvements will be incorporated as the project evolves. This roadmap outlines the initial scope, with flexibility for further expansions as new requirements or opportunities arise.

## **Launch**

### **General Instructions**
This is your guide to launching the app on your own device!

It's recommended to use a code editor like VSCode for this application, that way you can easily install everything necessary for this project to work. 

1. Download the repository, and open the .zip file.

2. Make sure you have [Node.js](https://nodejs.org/en/download), [ReactJS](https://react.dev/learn/installation), [Python](https://www.python.org/downloads/), as well as npm on your system.

3. Install Vite onto your system by going into a terminal and running:
 ```npm install -g vite```

4. Go to your file explorer and copy the path of the project folder and type into terminal:
```cd /folder/path/name```

5. To download all the packages needed for node to run the app:

Type into the terminal:
```cd client```

Then type: 
```npm install @chatscope/chat/ui-kit-react```

Finally type:
```npm install axios```

6. There are two apps you need to run: the [client](#client), and the [server](#server). 

### Client

Make sure you've completed step 5 of the general instructions. All that is left is to make sure is that in the terminal:

To access the project file directory: ```cd /path/to/project/folder/```

To access the "client" directory: ```cd client```

To run, type: ```npm run dev``` and then hit "o" and "ENTER" at the same time (to open in your browser)

In all future instances of using the client app, you simply need to make sure you're in the "client" directory, and type ```npm run dev```

### Server

1. You'll need an OpenAI API key, go to the official OpenAI API developer's page to login and create an API key.

2. Create a .env file and type in OPENAI_API_KEY="(insert API Key)"

3. Put the .env file in the "server" folder

4. To run:

Go into the terminal:

To access the project file directory: ```cd /path/to/project/folder/``` 

To access the "server" directory: ```cd server```

Then type: ```source elita/bin/activate``` to run the virtual environment on your device, you will see "elita" at the left most side of the next terminal line

(if you wish to edit any of the server files, make sure your Python interpreter is "('elita': venv)")

To run, type: ```python3 elita.py``` in your virtual environment

Great! Now you can interact with the webpage!

## Troubleshooting

Coming soon!

## **‼️ Additional Project Information**

This project is owned and managed by Rayaan Hussain Abdul Rasheed

Feel free to connect with me if you want to help contribute to this project! 

Connect with me on:
🏢 [LinkedIn](https://www.linkedin.com/in/rhar)
✉️ [Email](rhar526@gmail.com)

### **URV Program**  
This project originated as part of the Undergraduate Research Volunteering API Study program at the University of Massachusetts Amherst. It will be developed as a feasibility study until January 31, 2025, with continued development planned post-program completion.  

