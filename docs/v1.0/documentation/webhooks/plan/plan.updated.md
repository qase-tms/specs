---
title: "Test plan webhooks"
excerpt: "Updated event"
slug: "plan.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "plan.updated",
  "timestamp": 1650534183,
  "payload": {
    "id": 2,
    "cases": {
      "1033": 0
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test plan is updated."
}
[/block]

### Event name

`plan.updated`

### Payload fields

| Parameter | Type  | Description                 |
|-----------|-------|-----------------------------|
| id        | integer   | Test plan ID                |
| cases     | object | An object with test case ids |
