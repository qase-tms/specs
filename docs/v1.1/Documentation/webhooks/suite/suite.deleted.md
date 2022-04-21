---
title: "Test suite webhooks"
excerpt: "Deleted event"
slug: "suite.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "suite.deleted",
  "timestamp": 1650540989,
  "payload": {
    "id": 313
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test suite is deleted."
}
[/block]

### Event name

`suite.deleted`

### Payload fields

| Parameter | Type | Description   |
|-----------|------|---------------|
| id        | integer  | Test suite ID |
