---
title: "Test case webhooks"
excerpt: "Deleted event"
slug: "case.deleted"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Deleted

Payload example:

```json
{
  "event_name": "case.deleted",
  "timestamp": 1650530938,
  "payload": {
    "id": 1611
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case is deleted.

### Event name

`case.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Test case ID |
