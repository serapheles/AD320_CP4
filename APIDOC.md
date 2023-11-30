# CP4 API Documentation
This api serves no purpose.

## Roll a d20
**Request Format:** /beta

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Returns a number between 1 and 20, inclusively. Conceptually, this is intended to resemble rolling a 20 sided dice, but no guarantees are made regarding the statistical distribution of results.

**Example Request:** /beta

**Example Response:**

```
4
```

**Error Handling:**
N/A

## What does the animal say?
**Request Format:** /alpha

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns a json with an animal and what it says.

**Example Request:** /alpha

**Example Response:**

```json
{
"worm" : "Do you still love me?"
}
```

**Error Handling:**
N/A
