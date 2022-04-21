---
title: "Shared step webhooks"
excerpt: "Created event"
slug: "shared_step.created"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created

Payload example:

```json
{
  "event_name": "shared_step.created",
  "timestamp": 1650540646,
  "payload": {
    "hash": "2563d587b756110934vea4185ce31b2b0dbf457c",
    "title": "test",
    "steps": [
      {
        "hash": "ed285acb6c7e575bce2576810c195ed8335e2812",
        "action": "action",
        "expected_result": "",
        "data": "",
        "attachments": []
      }
    ]
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a new shared step is created.

### Event name

`shared_step.created`

### Payload fields

| Parameter       | Type   | Description                 |
|-----------------|--------|-----------------------------|
| hash            | string | Shared step hash            |
| title           | string | Shared step title           |
| action          | string | Shared step action          |
| expected_result | string | Shared step expected result |
