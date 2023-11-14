[![Repo Size](https://img.shields.io/github/repo-size/nicknickolasm4/sig-pagination)](https://github.com/nicknickolasm4/sig-pagination)
[![npm version](https://img.shields.io/npm/v/sig-pagination.svg)](https://npmjs.org/package/sig-pagination)
[![npm license](https://img.shields.io/npm/l/sig-pagination.svg)](https://npmjs.org/package/sig-pagination)
[![npm downloads](https://img.shields.io/npm/dm/sig-pagination)](https://npmjs.org/package/sig-pagination)
[![Coverage Status](https://badgen.net/coveralls/c/github/nicknickolasm4/sig-pagination/master)](https://coveralls.io/github/nicknickolasm4/sig-pagination?branch=master)
[![HitCount](https://hits.dwyl.com/nicknickolasm4/sig-pagination.svg)](https://hits.dwyl.com/nicknickolasm4/sig-pagination)







# what is this?

Pagination for array items and set items in map of javascript
<br/>


# instalation

`npm i sig-pagination --save`


## options
```
items = array
page = int, number page of params example: "page?p=2"
maxperpage = int, max pagination example 5: [1,2,3,4,5,next]
show = int, max items per page.
```
## functions
```pagination return:
0: {i: 0, active: true, page: 4}
1: {i: 5, active: true, page: 5}
2: {i: 6, active: false, page: 6}
3: {i: 7, active: false, page: 7}
4: {i: 8, active: false, page: 8}
5: {i: 9, active: false, page: 9}
6: {i: 10, active: false, page: 10}
7: {i: 999999, active: true, page: 6}

active, is a active page
page, is a page params
i = pages
i = 0 page arrow left
i = 999999 arrow right
```
## examples
```  
import { items, pagination, from, to, total } from "sig-pagination"
```
## for list items
    var products = items({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## list pagination
      const pagination2 = pagination({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## show from number example: 1 to 10 items

      const from2 = from({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## show to number example: 1 to 10 items

      const to2 = to({
        items: productsd,
        show: 5,
        maxperpage: 6,
        page: page
      })
## show total count items example: 1 to 10 items of 10 Total

      const total2 = total({
        maxperpage: 6,
        items: productsd,
        page: page
      })


## EXAMPLE USAGE IN NEXTJS/ REACT

[HERE](example.js)<br>
 
