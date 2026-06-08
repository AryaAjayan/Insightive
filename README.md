# Insightive 🧠

Insightive is an AI-powered academic research platform designed to automate the extraction of structured intelligence from unstructured scientific literature. It aggregates data from over 15 external academic APIs and processes it through a custom Retrieval-Augmented Generation (RAG) backend. By leveraging local LLMs and in-memory vector embeddings, Insightive instantly transforms dense academic PDFs into actionable insights, helping researchers discover methodologies, key findings, and unaddressed research gaps.

## 📸 Screenshots

*(Replace the placeholder URLs below with actual screenshot links)*

> **Dashboard / Search Interface**
> ![Dashboard Placeholder](https://via.placeholder.com/800x400.png?text=Dashboard+Interface)

> **Paper Analysis & Summary**
> ![Analysis Placeholder](https://via.placeholder.com/800x400.png?text=AI+Analysis+and+Summarization)

> **Semantic Search Results**
> ![Search Placeholder](https://via.placeholder.com/800x400.png?text=Semantic+Search+Results)

---

## 🏗️ Architecture

Insightive operates on a hybrid machine learning architecture, separating the client-side aggregation logic from the heavy machine-learning inference pipeline.

1. **Frontend (Next.js/TypeScript):** Acts as the primary orchestrator. It queries multiple academic APIs (Semantic Scholar, IEEE, Springer, etc.) to fetch paper metadata and abstracts.
2. **Backend (Python/FastAPI):** Receives paper texts or PDFs. It uses LangChain and PyMuPDF to extract text, splits it into chunks, and uses HuggingFace models to generate embeddings.
3. **Inference Workflow:** The vector embeddings are stored in an in-memory **FAISS** vector database. When a semantic query is triggered, FAISS retrieves the most relevant chunks, which are then passed to a local LLM (via **Ollama**) to generate structured JSON insights.

---

## 💻 Tech Stack

### Frontend
*   **Framework:** Next.js (App Router), React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS, Radix UI (shadcn/ui)

### Backend & Machine Learning
*   **Server:** Python, FastAPI, Uvicorn
*   **ML Pipeline:** LangChain, PyMuPDF (Document Parsing)
*   **Embeddings:** HuggingFace (`all-MiniLM-L6-v2`)
*   **Vector Database:** FAISS (In-memory similarity search)
*   **LLM Inference:** Ollama (Local execution of models like `gemma3`)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed on your system:
*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [Python](https://www.python.org/) (3.9 or higher)
*   [Ollama](https://ollama.com/) (For running local LLMs)

### 1. Clone the repository

```bash
git clone https://github.com/AryaAjayan/Insightive.git
cd Insightive
```

### 2. Setup the Python Backend

Open a new terminal window and navigate to the backend directory:

```bash
cd python_backend

# Create a virtual environment (optional but recommended)
python -m venv venv
# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Start Ollama and Download the Model

Make sure the Ollama application is running on your machine. You will need to pull the model used by the application (default is `gemma3:1b` or whichever you have configured in `rag_agent.py`):

```bash
ollama pull gemma3:1b
ollama serve
```

### 4. Run the Python Backend

With the virtual environment active, start the FastAPI server:

```bash
uvicorn server:app --reload --port 8000
```
*The backend should now be running on `http://localhost:8000`.*

### 5. Setup the Next.js Frontend

Open a **new** terminal window (keep the backend and Ollama running) and navigate to the project root:

```bash
# Install Node.js dependencies
npm install

# Setup Environment Variables
cp .env.example .env
```

**Environment Variables Configuration:**
Open the `.env` file and add your API keys. Not all keys are required, but configuring them will yield better search results:
*   `SPRINGER_API_KEY`
*   `APIFY_API_TOKEN`
*   *(Add any other keys used in your API modules)*

### 6. Run the Frontend

Start the Next.js development server:

```bash
npm run dev
```

*The frontend should now be running on `http://localhost:9002` (or the port specified in your terminal).*

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
