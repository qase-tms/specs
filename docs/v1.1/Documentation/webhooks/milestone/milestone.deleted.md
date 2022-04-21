---
title: "Milestone webhooks"
excerpt: "Deleted event"
slug: "milestone.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "milestone.deleted",
  "timestamp": 1650533914,
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
  "body": "This event is being sent when a milestone is deleted."
}
[/block]

### Event name

`milestone.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | integer  | Milestone ID |
