# Test Case webhooks

| Navigate |
| :-: |
| [case.created](#created) |
| [case.updated](#updated) |
| [case.deleted](#deleted) |
| [case.cloned](#cloned) |

[block:link]
{
  "data": {
    "h-0": "Webhooks",
    "0-0": "case.created",
    "1-0": "case.updated",
    "2-0": "case.deleted",
    "3-0": "case.cloned",
    "0-1": "#created",
    "1-1": "#updated",
    "2-1": "#deleted",
    "3-1": "#cloned"
  },
  "cols": 2,
  "rows": 5
}
[/block]

## Created

Payload example:

```json
{
  "event_name": "case.created",
  "timestamp": 1650530190,
  "payload": {
    "id": 1610,
    "title": "Example test case",
    "description": "Description test case",
    "preconditions": "something",
    "postconditions": "something",
    "priority": {
      "id": 2,
      "title": "Medium",
      "icon": "genderless",
      "color": "medium"
    },
    "severity": {
      "id": 4,
      "title": "Normal",
      "icon": "genderless",
      "color": "normal"
    },
    "behavior": {
      "id": 2,
      "title": "Positive"
    },
    "type": {
      "id": 8,
      "title": "Functional"
    },
    "automation": {
      "id": 1,
      "title": "To be automated"
    },
    "status": {
      "id": 0,
      "title": "Actual"
    },
    "suite_id": 12,
    "milestone_id": null,
    "steps": [
      {
        "position": 1,
        "action": "simple action",
        "expected_result": "expected result",
        "data": "input data",
        "attachments": [],
        "shared": false
      }
    ],
    "attachments": [],
    "custom_fields": [
      {
        "id": 174,
        "title": "Test Number",
        "type": "number",
        "value": "1"
      }
    ]
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a new test case is created.

### Event name

`case.created`

### Payload fields

| Parameter      | Type         | Description                                                                                                       |
|----------------|--------------|-------------------------------------------------------------------------------------------------------------------|
| title          | String       | Test case title                                                                                                   |
| description    | string       | Test case description                                                                                             |
| preconditions  | string       | Test case preconditions                                                                                           |
| postconditions | string       | Test case postconditions                                                                                          |
| severity       | string       | Possible value: `undefined`, `blocked`, `critical`, `major`, `normal`, `minor`, `trivial`                         |
| priority       | string       | Possible value: `undefined`, `high`, `medium`, `low`                                                              |
| type           | string       | Possible value: `other`, `functional` `smoke`, `regression`, `security`, `usability`, `performance`, `acceptance` |
| behavior       | string       | Possible value: `undefined`, `positive` `negative`, `destructive`                                                 |
| suite_id       | int          | Suite ID (nullable)                                                                                               |
| milestone_id   | int          | Milestone_id (nullable)                                                                                           |
| is_automated   | bool         |                                                                                                                   |
| is_deprecated  | bool         |                                                                                                                   |
| revision       | int          | Test case version                                                                                                 |
| steps          | step         | An array of test steps objects.                                                                                   |
| attachments    | array        | An array of attachments ids.                                                                                      |
| custom_fields  | custom_field | An array of custom fields objects.                                                                                |

#### Step object

| Parameter       | Type   | Description                                                         |
|-----------------|--------|---------------------------------------------------------------------|
| position        | int    | Step position                                                       |
| action          | string | Required field (if shared_step_id is not provided). Can't be empty. |
| expected_result | string |                                                                     |
| shared_hash     | id     | A hash of shared step.                                              |
| attachments     | array  | An array of attachments IDs.                                        |

#### Custom field object

| Parameter | Type   | Description                            |
|-----------|--------|----------------------------------------|
| field_id  | string | An ID of custom field. Required field. |
| value     | string | Custom field value. Required field.    |

## Updated

Payload example:

```json
{
  "event_name": "case.updated",
  "timestamp": 1650530630,
  "payload": {
    "id": 1610
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case is updated. It returns only ID of test case and notifies that fields were
updated.

### Event name

`case.updated`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Test case ID |

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

## Cloned

Payload example:

```json
{
  "event_name": "case.cloned",
  "timestamp": 1650530878,
  "payload": {
    "id": 1611,
    "from_id": 1610
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case is cloned.

### Event name

`case.cloned`

### Payload fields

| Parameter | Type | Description             |
|-----------|------|-------------------------|
| id        | int  | Test case ID (clone)    |
| from_id   | int  | Test case ID (original) |
