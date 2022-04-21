---
title: "Shared step webhooks"
excerpt: "Updated event"
slug: "shared_step.updated"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Updated

Payload example:

```json
{
  "event_name": "shared_step.updated",
  "timestamp": 1650540693,
  "payload": {
    "hash": "2563d597b756810934dea4185ce31b2b0dbf377c"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a shared step is updated.

### Event name

`shared_step.updated`

### Payload fields

| Parameter | Type   | Description      |
|-----------|--------|------------------|
| id        | string | Shared step hash |
