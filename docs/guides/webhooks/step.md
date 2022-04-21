# Shared step webhooks

| Navigate |
| - |
| [shared_step.created](#created) |
| [shared_step.updated](#updated) |
| [shared_step.deleted](#deleted) |

## Created

Payload example:

```json
{
  "event_name": "shared_step.created",
  "timestamp": 1650540646,
  "payload": {
    "hash": "2563d587b756110934vea4185ce31b2b0dbf457c",
    "title": "eede",
    "steps": [
      {
        "hash": "ed285acb6c7e575bce2576810c195ed8335e2812",
        "action": "ede",
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

## Deleted

Payload example:

```json
{
  "event_name": "shared_step.deleted",
  "timestamp": 1650540719,
  "payload": {
    "hash": "2563d587b856810934dea4185ce31b9b0dbf352c"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a shared_step is deleted.

### Event name

`shared_step.deleted`

### Payload fields

| Parameter | Type   | Description      |
|-----------|--------|------------------|
| hash      | string | Shared step hash |
