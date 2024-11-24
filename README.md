<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <h3><b>README Template</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 **F1-GPT** <a name="about-project"></a>

**F1-GPT** is a retrieval-augmented chatbot about Formula One Racing Championships. It utilizes OpenAI's GPT-4 model and real-time web scraping to provide up-to-date information using Retrieval Augmented Generation (RAG).

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Describe the tech stack and include only the relevant sections that apply to your project.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://nextjs.org/">Nextjs</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nextjs.org/">Nextjs</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.datastax.com/">DataStax</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Create Embeddings
- Load Embeddings into Vector Database
- Use RAG for Response

### Upcoming Features <a name="upcoming-features"></a>

- **Authentication**: Implement user authentication to allow users to create accounts and save their chat history.
- **User Context**: Enable the chatbot to maintain conversational context for individual users, providing more personalized responses.
- **Dark Mode Theme**: Add a dark mode theme to enhance user experience during low-light conditions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Add a link to your deployed project.

- Coming Soon

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> Describe how a new developer could make use of your project.

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

Example command:

```sh
 sudo apt install node
```

### Setup

Clone this repository to your desired folder:

Example commands:

```sh
  git clone git@github.com:OmarMWarraich/next-rag-chatbot.git
```

-

### Install

Install this project with:

Example command:

```sh
  npm install
```

-

### Usage

To run the project, execute the following command:

Example command:

```sh
  npm run dev
```

### Customization

For customizing the rag chatbot, replace the content of variable `f1Data` alongwith its `name` in `scripts/loadDb.ts`.

### Database Configuration

Sign up on [DataStax](https://www.datastax.com/), and set up a new serverless database. Populate the environment variables following the pattern in .env.example by creating a new .env file.

```sh
  npm run seed
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **OmarMWarraich**

- GitHub: [@OmarMWarraich](https://github.com/OmarMWarraich)
- Twitter: [@omarwarraich1](https://twitter.com/omarwarraich1)
- LinkedIn: [LinkedIn](https://linkedin.com/in/o-va)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank every one whose code was used in this application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **Does this chatbot renders up to date information about a particular subject?**

  - Yes, this chatbot answers up to date information about a particular subject.

- **How does this app deliver up-to-date information about a subject when the LLM model being used has a specific cutoff date?**

  - The app uses Retrieval Augmented Generation (RAG) by creating embeddings of the latest data and storing them in a vector database. When a query is made, it retrieves the most relevant information from the database and provides it to the LLM as context, allowing the model to generate responses with up-to-date information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
