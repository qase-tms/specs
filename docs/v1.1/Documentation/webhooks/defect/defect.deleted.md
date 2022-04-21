---
title: "Defect webhooks"
excerpt: "Deleted event"
slug: "defect.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "defect.deleted",
  "timestamp": 1650533058,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a defect is deleted.

### Event name

`defect.deleted`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Defect ID   |
