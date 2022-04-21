## Created

Payload example:

```json
{
    "id": 5,
    "title": "Test case revision",
    "case_id": 1,
    "project": "DEMO",
    "type": "create",
    "status": "open",
    "created_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    },
    "created": "2019-07-21T13:24:08.000000Z"
}
```

This event is being sent when a new test case review is created.

### Event name

`review.created`

### Payload fields

| Parameter  | Type   | Description                                  |
|------------|--------|----------------------------------------------|
| id         | int    | Test case review ID                          |
| title      | String | Test case title                              |
| case_id    | int    | Test case ID                                 |
| project    | String | Project code                                 |
| type       | String | Possible value: `create`, `edit`             |
| status     | String | Possible value: `open`, `merged`, `declined` |
| created_by | User   | User object                                  |
| created    | String | Test case review creation timestamp          |

### User object

| Parameter | Type   | Description |
|-----------|--------|-------------|
| email     | String | User email  |
| name      | String | User name   |

## Deleted

Payload example:

```json
{
    "id": 5,
    "deleted_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case review is deleted.

### Event name

`review.deleted`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | int  | Test case review ID |
| deleted_by | User | User object         |

## Declined

Payload example:

```json
{
    "id": 5,
    "declined_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case review is declined.

### Event name

`review.declined`

### Payload fields

| Parameter   | Type | Description         |
|-------------|------|---------------------|
| id          | int  | Test case review ID |
| declined_by | User | User object         |

## Approval status changed

Payload example:

```json
{
    "id": 5,
    "status": "approved",
    "updated_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case review approval status is changed.

### Event name

`review.approval_status_changed`

### Payload fields

| Parameter  | Type   | Description                                                 |
|------------|--------|-------------------------------------------------------------|
| id         | int    | Test case review ID                                         |
| status     | String | Possible value: `unapproved`, `approved`, `request changes` |
| updated_by | User   | User object                                                 |

## Merged

Payload example:

```json
{
    "id": 5,
    "merged_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case review is merged.

### Event name

`review.merged`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | int  | Test case review ID |
| merged_by | User | User object         |

## Reopened

Payload example:

```json
{
    "id": "5",
    "title": "Test case revision",
    "case_id": "1",
    "project": "DEMO",
    "data": {},
    "approves": [],
    "updated_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    },
    "updated": "2019-07-21T13:24:08.000000Z"
}
```

This event is being sent when a test case review is reopened.

### Event name

`review.reopened`

### Payload fields

| Parameter  | Type   | Description                         |
|------------|--------|-------------------------------------|
| id         | int    | Test case review ID                 |
| title      | String | Test case title                     |
| case_id    | int    | Test case ID                        |
| project    | String | Project code                        |
| data       | Object | Test case review object             |
| updated_by | User   | User object                         |
| approves   | Array  | Approve objects array               |
| created    | String | Test case review creation timestamp |

## Reviewer added

Payload example:

```json
{
    "id": 5,
    "reviewer": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case reviewer is added.

### Event name

`review.reviewer_added`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | int  | Test case review ID |
| reviewer  | User | User object         |

## Reviewer removed

Payload example:

```json
{
    "id": 5,
    "reviewer": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case reviewer is removed.

### Event name

`review.reviewer_removed`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | int  | Test case review ID |
| reviewer  | User | User object         |

## Commented

Payload example:

```json
{
    "id": 5,
    "comment": "Test comment",
    "commented_by": {
        "email": "jdoe@qase.io",
        "name": "John Doe"
    }
}
```

This event is being sent when a test case review is commented.

### Event name

`review.commented`

### Payload fields

| Parameter    | Type | Description         |
|--------------|------|---------------------|
| id           | int  | Test case review ID |
| commented_by | User | User object         |
