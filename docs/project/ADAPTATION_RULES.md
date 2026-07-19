# Adaptation Rules

## Purpose

This document defines the adaptation rules used to transform the original Microsoft Gas Field Support Agent knowledge base into the Oil Refinery Equipment Support Agent domain.

The goal is to ensure consistency across all Markdown documents while preserving the original Microsoft project architecture, document structure, and RAG workflow.

---

# General Principles

- Preserve the original Markdown document structure.
- Preserve the original document hierarchy.
- Preserve the original section order.
- Preserve the original writing style whenever possible.
- Make only the minimum changes required for domain adaptation.
- Do not redesign procedures unless absolutely necessary.
- Keep the same level of technical detail as the Microsoft reference project.

---

# Terminology Mapping

| Microsoft Term | Oil Refinery Term |
|----------------|-------------------|
| Gas Field | Oil Refinery |
| Gas Leak | Hydrocarbon Leak |
| Natural Gas | Hydrocarbon |
| Gas Detector | Hydrocarbon Gas Detector |
| Field Operator | Refinery Operator |
| Field Technician | Refinery Maintenance Technician |
| Field Inspection | Refinery Inspection |
| Field Inspection Log | Refinery Inspection Log |
| Gas Pipeline | Refinery Pipeline |
| Gas Valve | Process Valve |
| Gas Compressor | Process Compressor |
| Gas Pump | Process Pump |
| Control Room | Control Room |
| Emergency Response | Emergency Response Team |
| Isolation Procedure | Isolation Procedure |

---

# Equipment Mapping

Whenever possible, keep equipment names unchanged if they are commonly used in both domains.

Examples:

- Pump
- Compressor
- Valve
- Pipeline
- Pressure Vessel
- Heat Exchanger
- Flow Meter
- Pressure Gauge

Only replace equipment names when required by the refinery context.

---

# Document Adaptation Rules

For every Markdown document:

1. Preserve metadata format.
2. Preserve section hierarchy.
3. Preserve procedural flow.
4. Replace only domain-specific terminology.
5. Keep safety instructions consistent with refinery operations.
6. Maintain Microsoft's writing style.
7. Avoid unnecessary additions.
8. Avoid unnecessary deletions.

---

# Writing Style

- Use concise technical language.
- Use imperative instructions.
- Keep procedure steps clear and sequential.
- Avoid excessive explanations.
- Maintain professional documentation style.

---

# Goal

The final project should be recognized as an adaptation of the Microsoft Local RAG reference implementation rather than a redesigned application.

## File Naming

Markdown filenames should be adapted to reflect the Oil Refinery domain while preserving the original numbering sequence.

Example:

01-gas-leak-detection.md
↓

01-hydrocarbon-leak-detection.md

## Technical Equipment Naming

Do not rename technical equipment unless the equipment is domain-specific.

Generic industrial equipment such as pressure regulators, pumps, valves, filters, compressors, pressure gauges, and heat exchangers should retain their original names if they are commonly used in oil refineries.