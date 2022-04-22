---
title: "Test run webhooks"
excerpt: "Deleted event"
slug: "run.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "run.deleted",
  "timestamp": 1650540289,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test run is deleted."
}
[/block]

### Event name

`run.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer  | Test run ID |
