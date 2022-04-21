---
title: "Milestone webhooks"
excerpt: "Updated event"
slug: "milestone.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "milestone.updated",
  "timestamp": 1650533896,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a milestone is updated.

### Event name

`milestone.updated`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Milestone ID |
