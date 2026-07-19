## 1. Project Goal

The primary goal of the Microsoft Local RAG reference project is to demonstrate how to build a fully offline Retrieval-Augmented Generation (RAG) application using Microsoft Foundry Local.

Rather than focusing on a specific industry, the project teaches the fundamental architecture of a production-style local RAG system. The Gas Field Support Agent serves as an example scenario used to demonstrate the architecture.

The project aims to show how local AI models, document retrieval, and a structured knowledge base can work together to provide reliable, document-grounded answers without requiring cloud services or external APIs.

## 2. What Microsoft Is Actually Teaching

Although the example application is built around a Gas Field Support Agent, the primary purpose of the project is to teach the core concepts behind building a local RAG application.

The project focuses on the following topics:

- Building a fully offline AI application using Microsoft Foundry Local.
- Understanding the Retrieval-Augmented Generation (RAG) workflow.
- Organizing knowledge in structured Markdown documents.
- Indexing documents into a local SQLite-based knowledge store.
- Retrieving relevant document chunks before generating responses.
- Using a local Large Language Model (LLM) to generate document-grounded answers.
- Designing a modular and maintainable application architecture.
- Demonstrating how the same architecture can be adapted to different domains.

## 3. Architecture Principles

The Microsoft Local RAG reference project follows several important architectural principles that make the application modular, maintainable, and easy to adapt.

### 3.1 Separation of Concerns

Each component has a single, well-defined responsibility. Document ingestion, retrieval, prompt generation, model interaction, API services, and the user interface are implemented as separate modules.

### 3.2 Modular Architecture

The project is organized into independent components that can be modified or replaced without affecting the entire system. This modular structure improves maintainability and simplifies future extensions.

### 3.3 Offline-First Design

The application is designed to run entirely on the local machine using Microsoft Foundry Local. Documents, the vector database, and the language model all remain on the user's device, improving privacy and reducing dependence on cloud services.

### 3.4 Retrieval Before Generation

Instead of allowing the language model to answer only from its internal knowledge, the system first retrieves the most relevant document chunks and provides them as context. This helps generate responses that are grounded in the available documentation.

### 3.5 Document-Centered Knowledge Base

Project knowledge is stored in structured Markdown documents rather than hard-coded into the application. Updating the knowledge base requires modifying documents instead of changing application logic.

### 3.6 Domain Independence

The overall architecture is independent of the example domain. Although Microsoft demonstrates the system using a Gas Field Support Agent, the same architecture can be adapted to different technical domains by replacing the knowledge base.

## 4. RAG Pipeline

The Microsoft Local RAG reference project follows a structured Retrieval-Augmented Generation (RAG) pipeline. Each stage has a specific responsibility, making the system modular and easier to understand.

### Pipeline Overview

1. Markdown documents are prepared as the knowledge source.
2. The ingestion process reads the documents.
3. Documents are divided into smaller chunks.
4. The chunks are indexed and stored in a local SQLite knowledge base.
5. When a user submits a question, the system retrieves the most relevant document chunks.
6. The retrieved context is combined with the user's question to build a prompt.
7. The prompt is sent to the local Large Language Model (LLM) running through Microsoft Foundry Local.
8. The LLM generates a response based on the retrieved documentation.
9. The generated answer is returned to the user through the API and user interface.

## 5. Document Design Philosophy

The Microsoft Local RAG reference project uses structured Markdown documents as the primary knowledge source instead of embedding knowledge directly into the application.

Each document is designed to focus on a single topic, making the knowledge base easier to maintain, retrieve, and extend.

The document structure provides several advantages:

- Each document has a clear and specific purpose.
- Information is organized into logical sections.
- Related documents can reference one another.
- New knowledge can be added without changing the application code.
- Existing knowledge can be updated by editing documents instead of modifying the system itself.

This document-centered approach separates domain knowledge from application logic, allowing the same software architecture to be reused across different technical domains.

## 6. Chunking Strategy

The Microsoft Local RAG reference project divides documents into smaller chunks during the ingestion process. This allows the retrieval system to identify and return only the most relevant pieces of information instead of entire documents.

Chunking provides several advantages:

- Improves retrieval accuracy by reducing irrelevant context.
- Enables faster document search.
- Reduces the amount of unnecessary information sent to the language model.
- Makes responses more focused and relevant.

The project demonstrates chunking as an essential step in the RAG pipeline. Although chunk size and chunking strategies may vary depending on the application, the overall concept remains the same: retrieve the smallest useful context needed to answer the user's question.

## 7. Why Gas Field?

The Microsoft Local RAG reference project uses a Gas Field Support Agent as its example application. However, the project's primary objective is not to teach gas engineering.

The gas field scenario was chosen because it naturally demonstrates the characteristics of a technical support system:

- It relies on structured technical documentation.
- It includes maintenance procedures and operational guidelines.
- It contains safety instructions and troubleshooting information.
- It requires accurate, document-grounded answers.
- It represents a realistic industrial environment where local AI and offline access are valuable.

The overall software architecture is not specific to the gas industry. The same RAG pipeline and application design can be adapted to other technical domains by replacing the knowledge base with domain-specific documentation.

## 8. What Can Be Adapted?

The Microsoft Local RAG reference project is designed as a reference implementation that can be adapted to different use cases. According to the project documentation, developers can customize several parts of the application to fit their own domain.

The following elements can be adapted:

- The knowledge base by replacing the example Markdown documents.
- The application domain (e.g., replacing the Gas Field Support Agent with another technical support scenario).
- The language model used through Microsoft Foundry Local.
- Prompt templates and system instructions.
- Retrieval and chunking configuration when required by the application.
- The user interface and overall user experience.
- Additional application features and integrations.

These adaptations allow developers to reuse the same architecture while tailoring the system to their specific requirements.

## 9. What Should Be Preserved?

Based on our analysis of the Microsoft Local RAG reference project, we decided to preserve the following design principles during our adaptation:

### 9.1 Overall Architecture

The layered architecture will remain unchanged. The responsibilities of document ingestion, retrieval, prompt generation, API services, and the user interface will continue to be separated into independent components.

### 9.2 RAG Workflow

The overall Retrieval-Augmented Generation pipeline will be preserved. Documents will be ingested, processed, retrieved, and provided to the language model before response generation.

### 9.3 Document-Centered Knowledge Base

The application will continue to use Markdown documents as its primary knowledge source instead of embedding domain knowledge directly into the application logic.

### 9.4 Modular Design

New features and domain-specific content should be added without introducing unnecessary dependencies between components.

### 9.5 Local-First Philosophy

The system will continue to operate locally using Microsoft Foundry Local, preserving the project's privacy-focused and offline-first approach.

### 9.6 Domain Replacement Instead of Architecture Replacement

The Gas Field Support Agent will be replaced with a new domain while preserving the overall software architecture as much as possible. The goal is to adapt the knowledge base rather than redesign the application.

## 10. Key Design Principles

The following principles summarize the design philosophy of both the Microsoft Local RAG reference project and our adaptation strategy:

- Build a fully offline RAG application using Microsoft Foundry Local.
- Keep the application architecture modular and maintainable.
- Separate application logic from domain knowledge.
- Store knowledge in structured Markdown documents.
- Retrieve relevant information before generating responses.
- Use document-grounded context to improve response reliability.
- Design the knowledge base as an independent component.
- Preserve the overall RAG workflow during adaptation.
- Adapt the application by replacing the domain knowledge rather than redesigning the architecture.
- Keep the system flexible enough to support future extensions and new technical domains.