## Created

Payload example:

```json
{
     "id": 5,
     "position": 1,
     "title": "Test case",
     "description": "Description for case",
     "preconditions": "",
     "postconditions": "",
     "severity": "blocker",
     "priority": "high",
     "type": "functional",
     "behavior": "position",
     "is_automated": false,
     "is_deprecated": false,
     "milestone_id": null,
     "suite_id": 1,
     "revision": 1,
     "custom_fields": [],
     "attachments": [],
     "steps": [],
     "created": "2019-07-21T13:24:08.000000Z",
     "updated": "2019-07-21T13:24:08.000000Z"
}
```

This event is being sent when a new test case is created.

### Event name

`case.created`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
title | String | Test case title
description  | string | Test case description
preconditions  | string | Test case preconditions
postconditions  | string | Test case postconditions
severity | string | Possible value: `undefined`, `blocked`, `critical`, `major`, `normal`, `minor`, `trivial`
priority | string | Possible value: `undefined`, `high`, `medium`, `low`
type | string | Possible value: `other`, `functional` `smoke`, `regression`, `security`, `usability`, `performance`, `acceptance`
behavior | string | Possible value: `undefined`, `positive` `negative`, `destructive`
suite_id | int | Suite ID (nullable)
milestone_id | int | Milestone_id (nullable)
is_automated | bool |
is_deprecated | bool |
revision | int | Test case version
steps | step | An array of test steps objects.
attachments | array | An array of attachments ids.
custom_fields | custom_field | An array of custom fields objects.

#### Step object

Parameter| Type | Description
--------- | ----------- | -----------
position | int | Step position
action  | string | Required field (if shared_step_id is not provided). Can't be empty.
expected_result  | string |
shared_hash  | id | A hash of shared step.
attachments | array | An array of attachments IDs.

#### Custom field object

Parameter| Type | Description
--------- | ----------- | -----------
field_id  | string | An ID of custom field. Required field.
value  | string | Custom field value. Required field.

## Updated

Payload example:

```json
{
     "id": 5
}
```

This event is being sent when a test case is updated. It returns only ID of test case and notifies that fields were updated.

### Event name

`case.updated`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test case ID

## Deleted

Payload example:

```json
{
     "id": 5
}
```

This event is being sent when a test case is deleted.

### Event name

`case.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test case ID

## Cloned

Payload example:

```json
{
     "id": 5,
     "from_id": 1
}
```

This event is being sent when a test case is cloned.

### Event name

`case.cloned`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test case ID (clone)
from_id | int | Test case ID (original)
