# Project Design

## 1. Project Vision

This project adapts Microsoft’s Local RAG reference application to a new but technically similar domain.

The objective is to preserve the working Microsoft architecture and document structure while changing only the domain-specific terminology.

---

## 2. Project Goals

- Build a working local and offline RAG application.
- Learn the fundamental architecture of a RAG system.
- Preserve Microsoft Foundry Local integration.
- Preserve the original retrieval, chunking, vector store, and chat engine logic.
- Adapt the existing technical knowledge base to a new engineering domain.
- Produce accurate, concise, and document-grounded answers.

---

## 3. Microsoft Reference Project

This project is based on the Microsoft Local RAG reference application:

https://github.com/leestott/local-rag

The original project provides:

- Foundry Local model integration
- Local document ingestion
- SQLite-based vector storage
- Term-frequency and cosine-similarity retrieval
- Streaming responses
- A structured technical knowledge base
- An offline web interface

---

## 4. Design Principles

- Preserve the original Microsoft source code.
- Preserve the original 20-document knowledge-base structure.
- Preserve the Markdown headings, sections, lists, tables, and document order.
- Change only domain-specific terminology.
- Avoid unnecessary architectural changes.
- Keep the project simple, understandable, and reliable.
- Prefer a working foundation over advanced optimisation.

---

## 5. Golden Rules

1. Do not modify the RAG architecture.
2. Do not modify the retrieval algorithm.
3. Do not modify the chunking logic.
4. Do not modify the vector-store logic.
5. Do not change the number of Markdown documents.
6. Do not change the structural format of the Markdown documents.
7. Only replace domain-specific technical terminology.
8. Test the original working system before and after domain adaptation.

> Microsoft’un mimarisini değiştirme; Microsoft’un domainini değiştir.

---

## 6. Domain Selection Criteria

The selected domain must naturally support:

- Technical inspections
- Fault diagnosis
- Emergency shutdown procedures
- Safety warnings
- PPE requirements
- Pressure and flow systems
- Sensors and calibration
- Valves and regulators
- Equipment maintenance
- Leak detection
- Corrosion inspection
- Installation and commissioning
- Fault codes
- Decision trees
- Repair procedures

The new domain should require minimal terminology changes across the original 20 documents.

---

## 7. Document Mapping Strategy

Before modifying any document:

1. Select the final technical domain.
2. Create a terminology mapping table.
3. Map each original Microsoft document to its new-domain equivalent.
4. Confirm that all 20 documents naturally fit the selected domain.
5. Preserve every document’s original structure.
6. Replace only the required technical terms.

---

## 8. Development Roadmap

### Phase 1 — Restore Microsoft Reference Project

- Restore the original `src` folder.
- Restore the original 20 Markdown documents.
- Run ingestion.
- Confirm that the original Gas Field application works.

### Phase 2 — Select the New Domain

- Identify candidate technical domains.
- Compare them against the 20 Microsoft documents.
- Select the domain requiring the fewest structural changes.

### Phase 3 — Create the Terminology Map

- List all Gas Field terms.
- Determine their new-domain equivalents.
- Check technical consistency.

### Phase 4 — Adapt the Markdown Documents

- Preserve the document structure.
- Replace only domain terminology.
- Keep all headings, lists, tables, and procedures in place.

### Phase 5 — Adapt Visible Project Text

- Update the system prompt terminology.
- Update the interface title and labels.
- Update the project name and README.

### Phase 6 — Test

- Run ingestion.
- Start the application.
- Test representative questions from all document categories.
- Confirm that retrieval and generated answers remain correct.

### Phase 7 — Finalise

- Complete the README.
- Add screenshots.
- Clean the GitHub repository.
- Prepare the project explanation and presentation.