---
title: "Test case webhooks"
excerpt: "Cloned event"
slug: "case.cloned"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Cloned

Payload example:

```json
{
  "event_name": "case.cloned",
  "timestamp": 1650530878,
  "payload": {
    "id": 1611,
    "from_id": 1610
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case is cloned.

### Event name

`case.cloned`

### Payload fields

| Parameter | Type | Description             |
|-----------|------|-------------------------|
| id        | int  | Test case ID (clone)    |
| from_id   | int  | Test case ID (original) |
