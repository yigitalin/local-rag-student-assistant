# Domain Selection Criteria

## Purpose

The purpose of this document is to define objective criteria for selecting a new application domain while preserving the design philosophy, document structure, and software architecture of the Microsoft Local RAG reference project.

The primary goal is not to create a completely new application, but to adapt Microsoft's proven reference implementation with the smallest possible architectural changes.

---

## Selection Principles

The selected domain should:

- Preserve the existing RAG workflow.
- Preserve the existing Markdown document structure.
- Require minimal architectural changes.
- Require minimal modifications to the source code.
- Allow terminology replacement instead of structural redesign.
- Produce behavior similar to the original Microsoft reference project.

---

## Evaluation Criteria

The new domain will be evaluated using the following criteria.

| Criterion | Description |
|-----------|-------------|
| Document Structure Compatibility | Can the existing Markdown document structure be preserved with minimal changes? |
| Procedure Compatibility | Can the existing operational procedures be adapted directly? |
| Safety Compatibility | Can safety warnings and precautions remain structurally similar? |
| Troubleshooting Compatibility | Can troubleshooting documents be adapted without redesign? |
| Maintenance Compatibility | Can maintenance procedures be preserved with only terminology changes? |
| Equipment Compatibility | Can the equipment described in the documents be replaced with equivalent equipment? |
| Terminology Replacement | Can most changes be limited to replacing terminology instead of rewriting documents? |
| Source Code Compatibility | Can the existing source code remain unchanged? |
| RAG Behavior Compatibility | Will the retrieval behavior remain similar after adaptation? |

---

## Exclusion Rules

A domain should not be selected if it requires:

- Redesigning the Markdown document structure.
- Changing the Retrieval-Augmented Generation (RAG) workflow.
- Modifying the overall software architecture.
- Introducing completely different document types.
- Replacing most of the existing retrieval logic.
- Making significant changes to the source code.

---

## Final Selection Goal

The selected domain should satisfy the following objective:

> Adapt the Microsoft Local RAG reference project by changing the application domain while preserving the original architecture, document organization, retrieval behavior, and overall system design as much as possible.

The ideal adaptation should require primarily terminology changes rather than structural redesign.

## Evaluation Process

The candidate domains will be evaluated using the defined criteria.

The domain with the highest overall compatibility with the Microsoft Local RAG reference project will be selected for adaptation.

The evaluation focuses on architectural compatibility rather than popularity or business value.