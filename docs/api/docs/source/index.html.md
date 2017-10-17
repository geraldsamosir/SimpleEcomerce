---
title: API SmallEcommerce

language_tabs: # must be one of https://git.io/vQNgJ
- json
#  - shell
#  - ruby
#  - python
#  - javascript

toc_footers:
  - Developed by  Gerald Halomoan Samosir

includes:
  - errors

search: true
---

# Introduction

Welcome to Small ecommerce Docs

# Authentication

for get token auth  from api login 


`Send in header {email :"",token:""}`

<aside class="notice">
   For some transaction you must use that header
</aside>

# Products

## Get Products and Filter




```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>


# Category Product



# Orders


#Users

# Orders Item


