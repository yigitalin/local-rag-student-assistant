---
title: Fault Diagnosis Decision Tree – No Process Flow
category: Fault Diagnosis
id: DOC-FD-003
---

# Fault Diagnosis Decision Tree – No Process Flow

## Purpose

Systematic decision tree for diagnosing process flow interruptions in oil refinery process systems.

---

## Safety Warning

- Before troubleshooting, verify that there is no process fluid leak.
- Do NOT force any valve open.
- If a hydrocarbon leak is detected, stop immediately and follow DOC-IP-001.

---

## Decision Tree

### Step 1: Is the Emergency Shutdown Valve (ESDV) open?

- **No** → Open the ESDV. If process flow resumes, record the event and investigate why it was closed.
- **Yes** → Proceed to Step 2.

---

### Step 2: Is the upstream isolation valve open?

- **No** → Open the isolation valve. If process flow resumes, record and investigate.
- **Yes** → Proceed to Step 3.

---

### Step 3: Is the bypass valve closed?

- Verify the bypass valve position.
- If the bypass is open, close it.
- If the bypass is correctly positioned and there is still no process flow, proceed to Step 4.

---

### Step 4: Check inlet pressure.

- Connect a calibrated pressure gauge to the upstream test point.
- **No pressure** → The problem is upstream. Notify the control room.
- **Pressure available** → Proceed to Step 5.

---

### Step 5: Is the flow meter operating correctly?

- Check the flow meter display and diagnostics.
- **Fault indicated** → Repair or replace the flow meter according to DOC-EM-003.
- **Operating normally** → Proceed to Step 6.

---

### Step 6: Check outlet pressure.

- Connect a calibrated pressure gauge to the downstream test point.
- **No outlet pressure** → Possible equipment blockage. Investigate and repair.
- **Pressure available** → Proceed to Step 7.

---

### Step 7: Check downstream isolation valves.

- Verify that all downstream isolation valves are open.
- **Closed valve found** → Open the valve and confirm process flow.
- **All valves open** → Proceed to Step 8.

---

### Step 8: Check downstream equipment.

- Verify operating pressure and process conditions.
- If abnormal conditions are found, refer to DOC-FD-001.
- If operating conditions are normal, proceed to Step 9.

---

### Step 9: Check downstream process equipment.

- Verify that downstream equipment is available for operation.
- Inspect filters or strainers for blockage.
- If unresolved, escalate to the mechanical maintenance team.

---

## Escalation

If the root cause cannot be determined after completing the decision tree:

1. Record all findings.
2. Notify the maintenance supervisor.
3. Request specialist engineering support.

---

## Reference

Oil Refinery Operations Manual – Process Flow Fault Diagnosis