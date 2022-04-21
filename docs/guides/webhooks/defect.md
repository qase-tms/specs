# Defect webhooks

| Navigate |
| - |
| [defect.created](#created) |
| [defect.resolved](#resolved) |
| [case.updated](#updated) |
| [case.deleted](#deleted) |

## Created

Payload example:

```json
{
  "event_name": "defect.created",
  "timestamp": 1650532563,
  "payload": {
    "id": 1,
    "title": "Example defect",
    "severity": "normal",
    "actual_result": "Something",
    "attachments": []
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a new defect is created.

### Event name

`defect.created`

### Payload fields

| Parameter     | Type   | Description                      |
|---------------|--------|----------------------------------|
| id            | int    | Defect ID                        |
| title         | string | Defect title                     |
| case_id       | int    | Test case ID where error occured |
| step          | int    | Step where error occured         |
| actual_result | string | A text description of defect     |
| attachments   | array  | An array of attachments ids.     |

## Resolved

Payload example:

```json
{
  "event_name": "defect.resolved",
  "timestamp": 1650533030,
  "payload": {
    "id": 1
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a defect is resolved.

### Event name

`defect.resolved`

### Payload fields

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Defect ID   |

## Updated

Payload example:

```json
{
  "event_name": "defect.updated",
  "timestamp": 1650532605,
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
