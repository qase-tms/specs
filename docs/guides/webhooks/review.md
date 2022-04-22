---
title: "Test Review webhooks"
excerpt: "This page contains information about events called in the entity Test Review"
slug: "review"
createdAt: "2022-04-21T21:00:00.000Z"
hidden: false
---

## Created Test Review

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
      "email": "bob@bar.io",
      "name": "Bob Bar"
    },
    "created": "2022-04-21 09:47:38"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a new test case review is created."
}
[/block]

### Event name

`review.created`

### Payload fields

| Parameter  | Type   | Description                                  |
|------------|--------|----------------------------------------------|
| id         | integer    | Test case review ID                          |
| title      | string | Test case title                              |
| case_id    | integer    | Test case ID                                 |
| project    | string | Project code                                 |
| created_by | object   | User object                                  |
| created    | string | Test case review creation timestamp          |

### User object

| Parameter | Type   | Description |
|-----------|--------|-------------|
| email     | string | User email  |
| name      | string | User name   |

## Approval status changed Test Review

Payload example:

```json
{
  "event_name": "review.approval_status_changed",
  "timestamp": 1650544272,
  "payload": {
    "id": 2,
    "status": "approved",
    "updated_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review approval status is changed."
}
[/block]

### Event name

`review.approval_status_changed`

### Payload fields

| Parameter  | Type   | Description                                                 |
|------------|--------|-------------------------------------------------------------|
| id         | integer    | Test case review ID                                         |
| status     | string | Possible value: `unapproved`, `approved`, `request changes` |
| updated_by | object   | User object                                                 |

## Commented Test Review

Payload example:

```json
{
  "event_name": "review.commented",
  "timestamp": 1650534928,
  "payload": {
    "id": 2,
    "comment": "comment",
    "commented_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is commented."
}
[/block]

### Event name

`review.commented`

### Payload fields

| Parameter    | Type    | Description            |
|--------------|---------|------------------------|
| id           | integer     | Test case review ID    |
| comment      | string  | Comment in test review |
| commented_by | object    | User object            |

## Declined Test Review

Payload example:

```json
{
  "event_name": "review.declined",
  "timestamp": 1650534857,
  "payload": {
    "id": 2,
    "declined_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is declined."
}
[/block]

### Event name

`review.declined`

### Payload fields

| Parameter   | Type | Description         |
|-------------|------|---------------------|
| id          | integer  | Test case review ID |
| declined_by | object | User object         |

## Deleted Test Review

Payload example:

```json
{
  "event_name": "review.deleted",
  "timestamp": 1650534818,
  "payload": {
    "id": 1,
    "deleted_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is deleted."
}
[/block]

### Event name

`review.deleted`

### Payload fields

| Parameter  | Type | Description         |
|------------|------|---------------------|
| id         | integer  | Test case review ID |
| deleted_by | object | User object         |

## Merged Test Review

Payload example:

```json
{
  "event_name": "review.merged",
  "timestamp": 1650544276,
  "payload": {
    "id": 2,
    "merged_by": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 48,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is merged."
}
[/block]

### Event name

`review.merged`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| merged_by | object | User object         |

## Reopened Test Review

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
      "email": "bob@bar.io",
      "name": "Bob Bar"
    },
    "updated": "2022-04-21 09:54:09"
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is reopened."
}
[/block]

### Event name

`review.reopened`

### Payload fields

| Parameter  | Type   | Description                         |
|------------|--------|-------------------------------------|
| id         | integer    | Test case review ID                 |
| title      | string | Test case title                     |
| case_id    | integer    | Test case ID                        |
| project    | string | Project code                        |
| data       | object | Test case review object             |
| updated_by | object   | User object                         |
| approves   | array  | Approve objects array               |
| updated    | string | Test case review update timestamp   |

## Reviewer added Test Review

Payload example:

```json
{
  "event_name": "review.reviewer_added",
  "timestamp": 1650534955,
  "payload": {
    "id": 2,
    "reviewer": {
      "email": "bob@bar.io",
      "name": "Bob Bar"
    }
  },
  "team_member_id": 40,
  "project_code": "ID"
}
```
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case reviewer is added."
}
[/block]

### Event name

`review.reviewer_added`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| reviewer  | object | User object         |

## Reviewer removed Test Review

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
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case reviewer is removed."
}
[/block]

### Event name

`review.reviewer_removed`

### Payload fields

| Parameter | Type | Description         |
|-----------|------|---------------------|
| id        | integer  | Test case review ID |
| reviewer  | object | User object         |

## Updated Test Review

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
[block:callout]
{
  "type": "info",
  "body": "This event is being sent when a test case review is deleted."
}
[/block]

### Event name

`review.updated`

### Payload fields

| Parameter  | Type   | Description                         |
|------------|--------|-------------------------------------|
| id         | integer    | Test case review ID                 |
| title      | string | Test case title                     |
| case_id    | integer    | Test case ID                        |
| project    | string | Project code                        |
| data       | objeact | Test case review object             |
| updated_by | object   | User object                         |
| approves   | array  | Approve objects array               |
| updated    | string | Test case review update timestamp   |
