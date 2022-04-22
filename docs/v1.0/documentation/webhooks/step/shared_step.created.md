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
  "timestamp": 1650577292,
  "payload": {
    "hash": "678ec0e6bf8ddeadfc241016f876923542a4761a",
    "title": "fff",
    "steps": [
      {
        "hash": "40bf38b525073257aad38a51c5f5734f8b0f30b8",
        "action": "action",
        "expected_result": "expected",
        "data": "data",
        "attachments": []
      }
    ]
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new shared step is created."
}
[/block]

### Event name

`shared_step.created`

### Payload fields

| Parameter       | Type   | Description                 |
|-----------------|--------|-----------------------------|
| hash            | string | Shared step hash            |
| steps     | array  | An array of steps|
| data            | string | Shared step data            |
