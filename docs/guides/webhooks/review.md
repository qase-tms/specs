# Test Review webhooks

| Navigate |
| - |
| [review.created](#created) |
| [review.updated](#updated) |
| [review.deleted](#deleted) |
| [review.declined](#declined) |
| [review.approved](#approved) |
| [review.merged](#merged) |
| [review.reopened](#reopened) |
| [review.reviewer_added](#reviewer_added) |
| [review.reviewer_removed](#reviewer_removed) |
| [review.commented](#commented) |



## Created

Payload example:

```json
{
  "event_name": "review.created",
  "timestamp": 1650534458,
  "payload": {
    "id": 1,
    "title": "Check edit function and result of updates",
    "case_id": 25,
    "project": "ID",
    "created_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    },
    "created": "2022-04-21 09:47:38"
  },
  "team_member_id": 40,
  "project_code": "ID"
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





## Updated

Payload example:

```json
{
  "event_name": "review.updated",
  "timestamp": 1650534611,
  "payload": {
    "id": 1,
    "title": "Check edit function and result of updates",
    "case_id": 25,
    "project": "ID",
    "data": {
      "id": 25,
      "title": "Check edit function and result of updates f",
      "status": 0,
      "description": "frfr",
      "suite_id": 12,
      "severity": 0,
      "priority": 0,
      "type": 1,
      "layer": 0,
      "is_flaky": 0,
      "milestone_id": null,
      "behavior": 1,
      "automation": 0,
      "params": [],
      "tags": [
        "jira"
      ],
      "preconditions": null,
      "postconditions": null,
      "steps_type": "classic"
    },
    "approves": [],
    "updated_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    },
    "updated": "2022-04-21 09:47:38"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```

This event is being sent when a test case review is deleted.

### Event name

`review.updated`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | int  | Test case review ID |
| deleted_by | User | User object         |

## Deleted

Payload example:

```json
{
  "event_name": "review.deleted",
  "timestamp": 1650534818,
  "payload": {
    "id": 1,
    "deleted_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
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
  "event_name": "review.declined",
  "timestamp": 1650534857,
  "payload": {
    "id": 2,
    "declined_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
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
  "event_name": "review.approval_status_changed",
  "timestamp": 1650544272,
  "payload": {
    "id": 2,
    "status": "approved",
    "updated_by": {
      "email": "apetrov@qase.io",
      "name": "Alexey Petrov"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
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
  "event_name": "review.merged",
  "timestamp": 1650544276,
  "payload": {
    "id": 2,
    "merged_by": {
      "email": "apetrov@qase.io",
      "name": "Alexey Petrov"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
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
  "event_name": "review.reopened",
  "timestamp": 1650534883,
  "payload": {
    "id": 2,
    "title": "Check edit function and result of updates",
    "case_id": 25,
    "project": "ID",
    "data": {
      "id": "25",
      "title": "Check edit function and result of updates",
      "status": 0,
      "description": "description",
      "suite_id": 12,
      "severity": 0,
      "priority": 0,
      "type": 1,
      "layer": 0,
      "is_flaky": 0,
      "milestone_id": null,
      "behavior": 1,
      "automation": 0,
      "params": [],
      "tags": [],
      "preconditions": null,
      "postconditions": null,
      "custom_field": [],
      "steps_type": "classic",
      "code": "ID",
      "review": true
    },
    "approves": [],
    "updated_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    },
    "updated": "2022-04-21 09:54:09"
  },
  "team_member_id": 40,
  "project_code": "ID"
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
  "event_name": "review.reviewer_added",
  "timestamp": 1650534955,
  "payload": {
    "id": 2,
    "reviewer": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
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
  "event_name": "review.reviewer_removed",
  "timestamp": 1650534974,
  "payload": {
    "id": 2,
    "reviewer": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
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
  "event_name": "review.commented",
  "timestamp": 1650534928,
  "payload": {
    "id": 2,
    "comment": "c",
    "commented_by": {
      "email": "bib@bob.io",
      "name": "Bib Bob"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
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




