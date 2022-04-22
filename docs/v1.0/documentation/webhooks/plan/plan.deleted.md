---
title: "Test plan webhooks"
excerpt: "Deleted event"
slug: "plan.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "plan.deleted",
  "timestamp": 1650534261,
  "payload": {
    "id": 59884
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test plan is deleted."
}
[/block]

### Event name

`plan.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Test plan ID |
