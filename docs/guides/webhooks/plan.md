## Created

Payload example:

```json
{
    "id": 1,
    "title": "Test suite",
    "description": "Authorization",
    "cases": [
        1,
        2,
        3
    ]
}
```

This event is being sent when a new test plan is created.

### Event name

`plan.created`

### Payload fields

| Parameter   | Type   | Description                 |
|-------------|--------|-----------------------------|
| id          | int    | Test plan ID                |
| title       | string | Test plan title             |
| description | string | Test plan description       |
| cases       | array  | An array with test case ids |

## Updated

Payload example:

```json
{
    "id": 5
}
```

This event is being sent when a test plan is updated.

### Event name

`plan.updated`

### Payload fields

| Parameter | Type  | Description                 |
|-----------|-------|-----------------------------|
| id        | int   | Test plan ID                |
| cases     | array | An array with test case ids |

## Deleted

Payload example:

```json
{
    "id": 1,
    "cases": [
        1,
        2,
        3
    ]
}
```

This event is being sent when a test plan is deleted.

### Event name

`plan.deleted`

### Payload fields

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Test plan ID |
