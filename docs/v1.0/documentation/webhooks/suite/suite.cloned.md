---
title: "Test suite webhooks"
excerpt: "Cloned event"
slug: "suite.cloned"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Cloned

Payload example:

```json
{
  "event_name": "suite.cloned",
  "timestamp": 1650541053,
  "payload": {
    "id": 314,
    "from_id": 13
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test suite is cloned."
}
[/block]

### Event name

`suite.cloned`

### Payload fields

| Parameter | Type | Description              |
|-----------|------|--------------------------|
| id        | integer  | Test suite ID (clone)    |
| from_id   | integer  | Test suite ID (original) |
