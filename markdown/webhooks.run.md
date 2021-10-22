## Started

> Payload example:

```json
{
     "id": 1,
     "title": "Test run",
     "description": "Regression",
     "plan": 1,
     "cases_count": 100,
     "environment": null
}
```

This event is being sent when a new test run is started.

### Event name

`run.started`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID
title | string | Test run title
description  | string | Test run description
plan_id | int | Test plan ID. Nullable.
cases_count | int | Amount of test cases in run
environment | string | Environment slug. Nullable.

## Updated

> Payload example:

```json
{
     "id": 1,
     "cases_added": 100
}
```

This event is being sent when a test plan is updated and new test cases were added.

### Event name

`run.updated`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID
cases_added | array | Amount of test cases added to the run

## Aborted

> Payload example:

```json
{
     "id": 1,
     "cases": 40,
     "passed": 10,
     "untested": 10,
     "failed": 10,
     "blocked": 10,
     "duration": 600
}
```

This event is being sent when a test run is aborted.

### Event name

`run.aborted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID
cases | int | Amount of test cases in a run
passed | int | Amount of passed cases
failed | int | Amount of failed cases
untested | int | Amount of untested cases
blocked | int | Amount of blocked cases
duration | int | Test run duration in seconds

## Completed

> Payload example:

```json
{
     "id": 1,
     "cases": 40,
     "passed": 10,
     "failed": 10,
     "blocked": 10,
     "duration": 600
}
```

This event is being sent when a test run is successfully completed.

### Event name

`run.completed`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID
cases | int | Amount of test cases in a run
passed | int | Amount of passed cases
failed | int | Amount of failed cases
blocked | int | Amount of blocked cases
duration | int | Test run duration in seconds

## Deleted

> Payload example:

```json
{
     "id": 1
}
```

This event is being sent when a test run is deleted.

### Event name

`run.deleted`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID

## Report visibility changed

> Payload example:

```json
{
     "id": 1,
     "visible": true
}
```

This event is being sent when a public report visibility has been changed.

### Event name

`run.report_changed`

### Payload fields

Parameter | Type | Description
--------- | ----------- | -----------
id | int | Test run ID
visible | boolean | Shows if public report is available or not
