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
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case is cloned."
}
[/block]


### Event name

`case.cloned`

### Payload fields

| Parameter | Type | Description             |
|-----------|------|-------------------------|
| id        | integer  | Test case ID (clone)    |
| from_id   | integer  | Test case ID (original) |
